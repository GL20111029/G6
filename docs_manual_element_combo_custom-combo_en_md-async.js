((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/combo/custom-combo.en.md'],
{ "docs/manual/element/combo/custom-combo.en.md": function (module, exports, __mako_require__){
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
                                to: "/en/manual/element/combo/base-combo",
                                children: $$contentTexts[1].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 66
                            }, this),
                            $$contentTexts[2].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "before-you-start-understanding-the-basic-composition-of-combos",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#before-you-start-understanding-the-basic-composition-of-combos",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 353
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 246
                            }, this),
                            "Before You Start: Understanding the Basic Composition of Combos",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Before-You-Start:-Understanding-the-Basic-Composition-of-Combos",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 865
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 734
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 660
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 459
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 174
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[3].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 1811
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        width: "200",
                        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*z-OxR4MAdUwAAAAAAAAAAAAADmJ7AQ/original"
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 1843
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1971
                                    }, this),
                                    $$contentTexts[5].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 1967
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2043
                                    }, this),
                                    $$contentTexts[7].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 2039
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2115
                                    }, this),
                                    $$contentTexts[9].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 2111
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 1963
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "special-characteristics-of-combos",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#special-characteristics-of-combos",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2309
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 2231
                            }, this),
                            "Special Characteristics of Combos",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Special-Characteristics-of-Combos",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2761
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2630
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2556
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 2385
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 2188
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[10].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 3707
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3748
                                    }, this),
                                    $$contentTexts[12].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 3744
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3826
                                    }, this),
                                    $$contentTexts[14].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 3822
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[15].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3904
                                    }, this),
                                    $$contentTexts[16].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 3900
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3982
                                    }, this),
                                    $$contentTexts[18].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 3978
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 3740
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "ways-to-customize-combos",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#ways-to-customize-combos",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4164
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 4095
                            }, this),
                            "Ways to Customize Combos ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "warning",
                                children: $$contentTexts[19].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 4232
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Ways-to-Customize-Combos--Choose-the-Right-Way",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4677
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4546
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4472
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 4288
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 4061
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[20].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 5623
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "1-inherit-existing-combo-types",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#1-inherit-existing-combo-types",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5771
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 5696
                            }, this),
                            "1. Inherit Existing Combo Types ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "success",
                                children: $$contentTexts[21].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 5846
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "1.-Inherit-Existing-Combo-Types--Recommended",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6289
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6158
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6084
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 5902
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 5656
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[22].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 7235
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7369
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7276
                                    }, this),
                                    $$contentTexts[24].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 7272
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/combos/circle.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7536
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7447
                                    }, this),
                                    $$contentTexts[26].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 7443
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/combos/rect.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7701
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7614
                                    }, this),
                                    $$contentTexts[28].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 7610
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 7268
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[29].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                            lineNumber: 21,
                            columnNumber: 7783
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 7780
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[30].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[31].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7864
                                    }, this),
                                    $$contentTexts[32].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 7834
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[33].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[34].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7968
                                    }, this),
                                    $$contentTexts[35].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 7938
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[36].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[37].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8072
                                    }, this),
                                    $$contentTexts[38].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 8042
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 7830
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[39].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#create-your-first-custom-combo-in-three-steps",
                                    children: $$contentTexts[40].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8185
                                }, this),
                                $$contentTexts[41].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                            lineNumber: 21,
                            columnNumber: 8156
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 8151
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "2-develop-from-scratch-based-on-the-g-graphics-system",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#2-develop-from-scratch-based-on-the-g-graphics-system",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8473
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 8375
                            }, this),
                            "2. Develop from Scratch Based on the G Graphics System ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                children: $$contentTexts[42].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 8571
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "2.-Develop-from-Scratch-Based-on-the-G-Graphics-System--Advanced-Usage",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9025
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8894
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8820
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 8612
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 8312
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[43].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 9971
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[44].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                            lineNumber: 21,
                            columnNumber: 10007
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 10004
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[45].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10088
                                    }, this),
                                    $$contentTexts[47].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 10058
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[48].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[49].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10192
                                    }, this),
                                    $$contentTexts[50].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 10162
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[51].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[52].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10296
                                    }, this),
                                    $$contentTexts[53].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 10266
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 10054
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/combo/custom-combo.en.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "Note",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[54].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/combos/base-combo.ts",
                            children: $$contentTexts[55].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                            lineNumber: 21,
                            columnNumber: 10449
                        }, this),
                        $$contentTexts[56].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                    lineNumber: 21,
                    columnNumber: 10420
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/element/combo/custom-combo.en.md",
                lineNumber: 21,
                columnNumber: 10381
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "create-your-first-custom-combo-in-three-steps",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#create-your-first-custom-combo-in-three-steps",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10785
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 10695
                            }, this),
                            "Create Your First Custom Combo in Three Steps",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Create-Your-First-Custom-Combo-in-Three-Steps",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11261
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11130
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11056
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 10873
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 10640
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[57].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[58].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 12236
                            }, this),
                            $$contentTexts[59].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 12207
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin:false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 12335
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[60].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 12390
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 12305
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "step-1-write-the-custom-combo-class",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#step-1-write-the-custom-combo-class",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12582
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 12502
                            }, this),
                            "Step 1: Write the Custom Combo Class",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Step-1:-Write-the-Custom-Combo-Class",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 13040
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12909
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12835
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 12661
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 12457
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[61].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 13986
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "step-2-register-the-custom-combo",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#step-2-register-the-custom-combo",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14174
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 14097
                            }, this),
                            "Step 2: Register the Custom Combo",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Step-2:-Register-the-Custom-Combo",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14626
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14495
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14421
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 14250
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 14055
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[62].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 15572
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "step-3-apply-the-custom-combo",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#step-3-apply-the-custom-combo",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15746
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 15672
                            }, this),
                            "Step 3: Apply the Custom Combo",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Step-3:-Apply-the-Custom-Combo",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16192
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16061
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15987
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 15819
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 15633
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[63].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 17138
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[64].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 17199
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "going-further-understanding-the-principles-of-combo-drawing",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#going-further-understanding-the-principles-of-combo-drawing",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17405
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 17301
                            }, this),
                            "Going Further: Understanding the Principles of Combo Drawing",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Going-Further:-Understanding-the-Principles-of-Combo-Drawing",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17911
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17780
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17706
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 17508
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 17232
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "differences-between-combos-and-nodes",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#differences-between-combos-and-nodes",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18984
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 18903
                            }, this),
                            "Differences Between Combos and Nodes",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Differences-Between-Combos-and-Nodes",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19442
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19311
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19237
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 19063
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 18857
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[65].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[66].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 20417
                            }, this),
                            $$contentTexts[67].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 20388
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[68].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20494
                                    }, this),
                                    $$contentTexts[69].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 20490
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[70].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20572
                                    }, this),
                                    $$contentTexts[71].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 20568
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[72].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20650
                                    }, this),
                                    $$contentTexts[73].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 20646
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[74].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20728
                                    }, this),
                                    $$contentTexts[75].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 20724
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 20486
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "atomic-graphics",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#atomic-graphics",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20892
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 20832
                            }, this),
                            "Atomic Graphics",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Atomic-Graphics",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21308
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21177
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21103
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 20950
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 20807
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[76].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://g.antv.antgroup.com/",
                                children: $$contentTexts[77].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 22283
                            }, this),
                            $$contentTexts[78].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/shape/overview",
                                children: $$contentTexts[79].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 22378
                            }, this),
                            $$contentTexts[80].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 22254
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[81].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[82].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 22515
                            }, this),
                            $$contentTexts[83].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 22486
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "element-base-class",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#element-base-class",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22675
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 22612
                            }, this),
                            "Element Base Class",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Element-Base-Class",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23097
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22966
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22892
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 22736
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 22584
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[84].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 24043
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "properties",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#properties",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24151
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 24096
                            }, this),
                            "Properties",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Properties",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24557
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24426
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24352
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 24204
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 24076
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25556
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25591
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25517
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 25510
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[88].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 25650
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[89].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 25685
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[90].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 25720
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25646
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[91].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 25764
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[92].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 25799
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[93].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 25834
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25760
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 25639
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 25503
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "methods",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#methods",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25959
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 25907
                            }, this),
                            "Methods",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Methods",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26359
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26228
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26154
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 26009
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 25890
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "upsertname-ctor-style-container-hooks-graphic-creationupdate",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#upsertname-ctor-style-container-hooks-graphic-creationupdate",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27480
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 27375
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[94].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 27519
                            }, this),
                            ": Graphic Creation/Update",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": ":-Graphic-Creation/Update",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27955
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27824
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27750
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 27587
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 27305
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[95].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[96].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 28930
                            }, this),
                            $$contentTexts[97].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 28901
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[98].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 28999
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 29086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 29121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 29157
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29082
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 29075
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[102].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 29217
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[103].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 29253
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[104].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[105].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29320
                                                    }, this),
                                                    $$contentTexts[106].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[107].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29387
                                                    }, this),
                                                    $$contentTexts[108].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[109].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29454
                                                    }, this),
                                                    $$contentTexts[110].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[111].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29521
                                                    }, this),
                                                    $$contentTexts[112].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[113].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29588
                                                    }, this),
                                                    $$contentTexts[114].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[115].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29655
                                                    }, this),
                                                    $$contentTexts[116].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[117].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29722
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29762
                                                    }, this),
                                                    $$contentTexts[118].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[119].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29795
                                                    }, this),
                                                    $$contentTexts[120].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[121].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29862
                                                    }, this),
                                                    $$contentTexts[122].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "#element-conventions",
                                                        children: $$contentTexts[123].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29929
                                                    }, this),
                                                    $$contentTexts[124].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 29289
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29213
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[125].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 30036
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[126].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 30072
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[127].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 30108
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30032
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[128].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 30153
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[129].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 30189
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[130].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 30225
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30149
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[131].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 30270
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[132].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 30306
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[133].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 30342
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30266
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 29206
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 29068
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[134].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 30399
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[135].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 30433
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[136].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[137].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 30525
                            }, this),
                            $$contentTexts[138].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[139].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 30592
                            }, this),
                            $$contentTexts[140].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 30495
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[141].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30671
                                    }, this),
                                    $$contentTexts[142].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 30667
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30751
                                    }, this),
                                    $$contentTexts[144].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 30747
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[145].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30831
                                    }, this),
                                    $$contentTexts[146].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[147].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30902
                                    }, this),
                                    $$contentTexts[148].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[149].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30969
                                    }, this),
                                    $$contentTexts[150].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[151].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 31036
                                    }, this),
                                    $$contentTexts[152].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 30827
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 30663
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "renderattributes-container-main-entry-for-rendering-combos",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#renderattributes-container-main-entry-for-rendering-combos",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31284
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 31181
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[153].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 31323
                            }, this),
                            ": Main Entry for Rendering Combos",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": ":-Main-Entry-for-Rendering-Combos",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 31776
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 31645
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31571
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 31400
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 31113
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[154].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[155].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 32752
                            }, this),
                            $$contentTexts[156].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 32722
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[157].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 32823
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32911
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32947
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 32983
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 32907
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 32900
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[161].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 33043
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[162].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 33079
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[163].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 33115
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33039
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[164].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 33160
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[165].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 33196
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[166].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 33232
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33156
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 33032
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 32893
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "getshapename-get-created-graphics",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#getshapename-get-created-graphics",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 33410
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 33332
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[167].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 33449
                            }, this),
                            ": Get Created Graphics",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": ":-Get-Created-Graphics",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 33880
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33749
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 33675
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 33515
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 33289
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[168].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[169].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 34856
                            }, this),
                            $$contentTexts[170].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[171].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 34923
                            }, this),
                            $$contentTexts[172].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 34826
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[173].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 34997
                            }, this),
                            $$contentTexts[174].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 34994
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "element-conventions",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#element-conventions",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 35165
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 35101
                            }, this),
                            "Element Conventions",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Element-Conventions",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35589
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35458
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 35384
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 35227
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 35072
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[175].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 36543
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                            lineNumber: 21,
                            columnNumber: 36539
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 36535
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[176].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 36597
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36669
                                        }, this),
                                        $$contentTexts[179].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36639
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 36635
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[180].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36779
                                        }, this),
                                        $$contentTexts[182].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36749
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 36745
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[183].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36889
                                        }, this),
                                        $$contentTexts[185].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36859
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 36855
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: [
                                            $$contentTexts[186].value,
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[187].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 37007
                                            }, this),
                                            $$contentTexts[188].value,
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[189].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 37074
                                            }, this),
                                            $$contentTexts[190].value
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36972
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36969
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 36965
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 36631
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[191].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 37167
                            }, this),
                            $$contentTexts[192].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[193].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 37234
                            }, this),
                            $$contentTexts[194].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 37164
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[195].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37320
                                }, this),
                                $$contentTexts[196].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#methods",
                                    children: $$contentTexts[197].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37387
                                }, this),
                                $$contentTexts[198].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                            lineNumber: 21,
                            columnNumber: 37317
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 37305
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: [
                                    $$contentTexts[199].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[200].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 37528
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 37493
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                            lineNumber: 21,
                            columnNumber: 37489
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 37485
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "lifecycle-hooks",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#lifecycle-hooks",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37672
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 37612
                            }, this),
                            "Lifecycle Hooks",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Lifecycle-Hooks",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38088
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 37957
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37883
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 37730
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 37587
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[201].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 39034
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39158
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39082
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 39075
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[205].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39222
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39218
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[206].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39267
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[207].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39303
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 39214
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[208].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39352
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39348
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[209].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39397
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[210].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39433
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 39344
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[211].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39482
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39478
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[212].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39527
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[213].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39563
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 39474
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 39207
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 39068
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "state-response",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#state-response",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39703
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 39644
                            }, this),
                            "State Response",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "State-Response",
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
                                            fileName: "docs/manual/element/combo/custom-combo.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40117
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                                        lineNumber: 21,
                                        columnNumber: 39986
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/combo/custom-combo.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39912
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 39760
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 39620
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[214].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[215].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 41093
                            }, this),
                            $$contentTexts[216].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[217].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 41164
                            }, this),
                            $$contentTexts[218].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 41063
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[219].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 41239
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[220].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 41273
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[221].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 41335
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[222].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 41369
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[223].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[224].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 41461
                            }, this),
                            $$contentTexts[225].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[226].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/combo/custom-combo.en.md",
                                lineNumber: 21,
                                columnNumber: 41528
                            }, this),
                            $$contentTexts[227].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 41431
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[228].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 41599
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[229].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/combo/custom-combo.en.md",
                        lineNumber: 21,
                        columnNumber: 41633
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/combo/custom-combo.en.md",
                lineNumber: 21,
                columnNumber: 10614
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
                fileName: "docs/manual/element/combo/custom-combo.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/combo/custom-combo.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/combo/custom-combo.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/combo/custom-combo.en.md",
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
//# sourceMappingURL=docs_manual_element_combo_custom-combo_en_md-async.js.map