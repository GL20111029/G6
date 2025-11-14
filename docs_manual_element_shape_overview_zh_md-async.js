((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/shape/overview.zh.md'],
{ "docs/manual/element/shape/overview.zh.md": function (module, exports, __mako_require__){
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
                    id: "图形-shape",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#图形-shape",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 56
                        }, this),
                        "图形 Shape",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "图形-Shape",
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
                                        fileName: "docs/manual/element/shape/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/state",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 1559
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "#keyshape",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 1649
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 1531
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                            src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*OcaaTIIu_4cAAAAAAAAAAABkARQnAQ",
                            width: "50",
                            alt: "img"
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 1734
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                            src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*r5M0Sowd1R8AAAAAAAAAAABkARQnAQ",
                            width: "50",
                            alt: "img"
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 1854
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                            src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*pHoETad75CIAAAAAAAAAAABkARQnAQ",
                            width: "50",
                            alt: "img"
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 1974
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 1731
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[7].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/shape/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 2110
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 2098
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[8].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/node/base-node",
                            children: $$contentTexts[9].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 2183
                        }, this),
                        $$contentTexts[10].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/edge/base-edge",
                            children: $$contentTexts[11].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 2283
                        }, this),
                        $$contentTexts[12].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/combo/base-combo",
                            children: $$contentTexts[13].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 2384
                        }, this),
                        $$contentTexts[14].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 2155
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[15].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/node/custom-node",
                            children: $$contentTexts[16].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 2520
                        }, this),
                        $$contentTexts[17].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/edge/custom-edge",
                            children: $$contentTexts[18].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 2623
                        }, this),
                        $$contentTexts[19].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/element/combo/custom-combo",
                            children: $$contentTexts[20].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 2726
                        }, this),
                        $$contentTexts[21].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 2491
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "keyshape",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#keyshape",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 2906
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 2853
                        }, this),
                        "KeyShape",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "KeyShape",
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
                                        fileName: "docs/manual/element/shape/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3308
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3177
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3103
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 2957
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 2835
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[22].value
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 4254
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "300",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*TZt2S7Z0d-8AAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 4287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[23].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/shape/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 4419
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 4407
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "包围盒确定",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#包围盒确定",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4530
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 4480
                        }, this),
                        "包围盒确定",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "包围盒确定",
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
                                        fileName: "docs/manual/element/shape/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4926
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4795
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 4721
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 4578
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 4465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[24].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 5875
                        }, this),
                        $$contentTexts[25].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 5872
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "示例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#示例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 6007
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 5960
                        }, this),
                        "示例  ",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "示例- ",
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
                                        fileName: "docs/manual/element/shape/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6401
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6270
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 6196
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 6054
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 5948
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[26].value
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 7347
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[27].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/shape/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 7384
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 7380
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*CY7cSaMs4U0AAAAAAAAAAABkARQnAQ",
                    width: "220",
                    alt: "img"
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 7424
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[28].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/shape/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 7549
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 7545
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*upWTQLTvxGEAAAAAAAAAAABkARQnAQ",
                    width: "250",
                    alt: "img"
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 7589
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "shape-的生命周期",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#shape-的生命周期",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7787
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 7731
                        }, this),
                        "Shape 的生命周期",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Shape-的生命周期",
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
                                        fileName: "docs/manual/element/shape/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8195
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8064
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7990
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 7841
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 7710
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[29].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/custom-node",
                                children: $$contentTexts[30].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 9182
                            }, this),
                            $$contentTexts[31].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/custom-edge",
                                children: $$contentTexts[32].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 9285
                            }, this),
                            $$contentTexts[33].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/combo/custom-combo",
                                children: $$contentTexts[34].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 9388
                            }, this),
                            $$contentTexts[35].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/shape/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 9153
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 9141
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[36].value
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 9510
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[37].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9551
                                }, this),
                                $$contentTexts[38].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 9547
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[39].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9629
                                }, this),
                                $$contentTexts[40].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 9625
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[41].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9707
                                }, this),
                                $$contentTexts[42].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 9703
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[43].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9785
                                }, this),
                                $$contentTexts[44].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 9781
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 9543
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[45].value
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 9864
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "upsert-的原理与优势",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#upsert-的原理与优势",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 9978
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 9920
                        }, this),
                        "upsert 的原理与优势",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "upsert-的原理与优势",
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
                                        fileName: "docs/manual/element/shape/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10390
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10259
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/shape/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10185
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 10034
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 9897
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[46].value
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 11336
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[47].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11377
                                }, this),
                                $$contentTexts[48].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[49].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11446
                                }, this),
                                $$contentTexts[50].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 11373
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[51].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11520
                                }, this),
                                $$contentTexts[52].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 11516
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[53].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/shape/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11598
                                }, this),
                                $$contentTexts[54].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/shape/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 11594
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 11369
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[55].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/shape/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11680
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 11677
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[56].value
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 11727
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[57].value
                }, void 0, false, {
                    fileName: "docs/manual/element/shape/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 11788
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/element/shape/overview.zh.md",
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
                fileName: "docs/manual/element/shape/overview.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/shape/overview.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/shape/overview.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/shape/overview.zh.md",
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
//# sourceMappingURL=docs_manual_element_shape_overview_zh_md-async.js.map