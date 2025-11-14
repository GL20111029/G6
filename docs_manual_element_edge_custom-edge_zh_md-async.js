((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/custom-edge.zh.md'],
{ "docs/manual/element/edge/custom-edge.zh.md": function (module, exports, __mako_require__){
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
                                to: "/manual/element/edge/base-edge",
                                children: $$contentTexts[1].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 66
                            }, this),
                            $$contentTexts[2].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/line",
                                children: $$contentTexts[3].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 165
                            }, this),
                            $$contentTexts[4].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/polyline",
                                children: $$contentTexts[5].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 259
                            }, this),
                            $$contentTexts[6].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/quadratic",
                                children: $$contentTexts[7].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 357
                            }, this),
                            $$contentTexts[8].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/cubic",
                                children: $$contentTexts[9].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 456
                            }, this),
                            $$contentTexts[10].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/cubic-horizontal",
                                children: $$contentTexts[11].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 552
                            }, this),
                            $$contentTexts[12].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/edge/cubic-vertical",
                                children: $$contentTexts[13].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 660
                            }, this),
                            $$contentTexts[14].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[15].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 770
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "开始之前了解边的基本构成",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#开始之前了解边的基本构成",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 882
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 825
                            }, this),
                            "开始之前：了解边的基本构成",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "开始之前：了解边的基本构成",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1294
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1163
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1089
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 938
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 803
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[16].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 2240
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        width: "300",
                        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*YKN7TasqOh4AAAAAAAAAAAAADmJ7AQ/original"
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 2273
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[17].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2401
                                    }, this),
                                    $$contentTexts[18].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 2397
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[19].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2475
                                    }, this),
                                    $$contentTexts[20].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 2471
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2549
                                    }, this),
                                    $$contentTexts[22].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 2545
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2623
                                    }, this),
                                    $$contentTexts[24].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 2619
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 2393
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "自定义边的方式",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义边的方式",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2767
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 2715
                            }, this),
                            "自定义边的方式 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "warning",
                                children: $$contentTexts[25].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 2818
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义边的方式--选择合适的方式",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3233
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3102
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3028
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 2874
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 2698
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[26].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 4179
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "1-继承现有边类型",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#1-继承现有边类型",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4285
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 4231
                            }, this),
                            "1. 继承现有边类型 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "success",
                                children: $$contentTexts[27].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 4339
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "1.-继承现有边类型--推荐",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4752
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4621
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4547
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 4395
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 4212
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[28].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 5698
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/edges/base-edge.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5830
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5739
                                    }, this),
                                    $$contentTexts[30].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 5735
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/edges/line.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5994
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5908
                                    }, this),
                                    $$contentTexts[32].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 5904
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/edges/polyline.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6162
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6072
                                    }, this),
                                    $$contentTexts[34].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 6068
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/edges/quadratic.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6331
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6240
                                    }, this),
                                    $$contentTexts[36].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 6236
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/edges/cubic.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6496
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6409
                                    }, this),
                                    $$contentTexts[38].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 6405
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/edges/cubic-vertical.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6670
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6574
                                    }, this),
                                    $$contentTexts[40].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 6570
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/edges/cubic-horizontal.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6846
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6748
                                    }, this),
                                    $$contentTexts[42].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 6744
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 5731
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[43].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 6928
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 6925
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[44].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7009
                                    }, this),
                                    $$contentTexts[46].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 6979
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[47].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7113
                                    }, this),
                                    $$contentTexts[49].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 7083
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[50].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[51].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7217
                                    }, this),
                                    $$contentTexts[52].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 7187
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 6975
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[53].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#%E4%B8%89%E6%AD%A5%E5%88%9B%E5%BB%BA%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BE%B9",
                                    children: $$contentTexts[54].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7330
                                }, this),
                                $$contentTexts[55].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7301
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 7296
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7614
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 7554
                            }, this),
                            "2. 基于 G 图形系统从零开发 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                children: $$contentTexts[56].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 7674
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8080
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7949
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7875
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 7715
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 7529
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[57].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 9026
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[58].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 9062
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 9059
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[59].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[60].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9143
                                    }, this),
                                    $$contentTexts[61].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 9113
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[62].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[63].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9247
                                    }, this),
                                    $$contentTexts[64].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 9217
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[65].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[66].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9351
                                    }, this),
                                    $$contentTexts[67].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 9321
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 9109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意事项",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[68].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/edges/base-edge.ts",
                            children: $$contentTexts[69].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 9504
                        }, this),
                        $$contentTexts[70].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                    lineNumber: 21,
                    columnNumber: 9475
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                lineNumber: 21,
                columnNumber: 9436
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "三步创建你的第一个自定义边",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#三步创建你的第一个自定义边",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9774
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 9716
                            }, this),
                            "三步创建你的第一个自定义边",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "三步创建你的第一个自定义边",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10186
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10055
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9981
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 9830
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 9693
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[71].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[72].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 11161
                            }, this),
                            $$contentTexts[73].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 11132
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin:false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 11260
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[74].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 11315
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 11230
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "第一步编写自定义边类",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#第一步编写自定义边类",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11457
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 11402
                            }, this),
                            "第一步：编写自定义边类",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "第一步：编写自定义边类",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11865
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11734
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11660
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 11511
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 11382
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[75].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 12811
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                lineNumber: 21,
                columnNumber: 9667
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "success",
                title: "关键方法解析",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[76].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12935
                                }, this),
                                $$contentTexts[77].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 12931
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[78].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13009
                                }, this),
                                $$contentTexts[79].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[80].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13074
                                }, this),
                                $$contentTexts[81].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[82].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13139
                                }, this),
                                $$contentTexts[83].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 13005
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                    lineNumber: 21,
                    columnNumber: 12927
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                lineNumber: 21,
                columnNumber: 12886
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "第二步注册自定义边",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#第二步注册自定义边",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13329
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 13275
                            }, this),
                            "第二步：注册自定义边",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "第二步：注册自定义边",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13735
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13604
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13530
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 13382
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 13256
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[84].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[85].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 14710
                            }, this),
                            $$contentTexts[86].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 14681
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[87].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 14779
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[88].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 14843
                            }, this),
                            $$contentTexts[89].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 14840
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[90].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[91].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14946
                                    }, this),
                                    $$contentTexts[92].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 14916
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[93].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[94].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15046
                                    }, this),
                                    $$contentTexts[95].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 15016
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[96].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[97].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15146
                                    }, this),
                                    $$contentTexts[98].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 15116
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 14912
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "第三步应用自定义边",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#第三步应用自定义边",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15294
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 15240
                            }, this),
                            "第三步：应用自定义边",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "第三步：应用自定义边",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15700
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15569
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15495
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 15347
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 15221
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[99].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[100].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 16675
                            }, this),
                            $$contentTexts[101].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 16646
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[102].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 16746
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[103].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 16808
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "更进一步理解边绘制的原理",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#更进一步理解边绘制的原理",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16921
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 16864
                            }, this),
                            "更进一步：理解边绘制的原理",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "更进一步：理解边绘制的原理",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17333
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17202
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17128
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 16977
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 16842
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18342
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 18293
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18736
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18605
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18531
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 18389
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 18279
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[104].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://g.antv.antgroup.com/",
                                children: $$contentTexts[105].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 19712
                            }, this),
                            $$contentTexts[106].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 19682
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19831
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19903
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19827
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 19820
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[110].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 19963
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[111].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 20003
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 19999
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[112].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/SVG/Reference/Element/circle",
                                                        children: $$contentTexts[113].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 20079
                                                    }, this),
                                                    $$contentTexts[114].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20048
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19959
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[115].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20235
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[116].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 20275
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20271
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[117].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/SVG/Reference/Element/ellipse",
                                                        children: $$contentTexts[118].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 20351
                                                    }, this),
                                                    $$contentTexts[119].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20320
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20231
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[120].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20508
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[121].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 20548
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20544
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[122].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/image",
                                                        children: $$contentTexts[123].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 20624
                                                    }, this),
                                                    $$contentTexts[124].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20593
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20504
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[125].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20769
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[126].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 20809
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20805
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[127].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/line",
                                                        children: $$contentTexts[128].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 20885
                                                    }, this),
                                                    $$contentTexts[129].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 20854
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20765
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[130].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21029
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[131].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21069
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21065
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[132].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths",
                                                        children: $$contentTexts[133].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 21145
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21114
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21025
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[134].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21264
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[135].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21304
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21300
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[136].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/polygon",
                                                        children: $$contentTexts[137].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 21380
                                                    }, this),
                                                    $$contentTexts[138].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21349
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21260
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[139].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21527
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[140].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21567
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21563
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[141].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/polyline",
                                                        children: $$contentTexts[142].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 21643
                                                    }, this),
                                                    $$contentTexts[143].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21612
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21523
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[144].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21791
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[145].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21831
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21827
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[146].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                        href: "https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/rect",
                                                        children: $$contentTexts[147].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 21907
                                                    }, this),
                                                    $$contentTexts[148].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 21876
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21787
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[149].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 22051
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[150].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22091
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 22087
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[151].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 22136
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22047
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 19952
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 19813
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[152].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/shape/overview",
                                    children: $$contentTexts[153].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22235
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 22205
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 22193
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[154].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[155].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 22358
                            }, this),
                            $$contentTexts[156].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 22328
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22492
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 22443
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22886
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22755
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22681
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 22539
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 22429
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[157].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 23832
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23925
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 23878
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24315
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24184
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24110
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 23970
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 23866
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25279
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25315
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25351
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25275
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 25268
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[161].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 25411
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[162].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 25447
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[163].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 25483
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25407
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[164].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 25528
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[165].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 25564
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[166].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 25600
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25524
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 25400
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 25261
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25716
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 25669
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26106
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25975
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25901
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 25761
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 25657
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27195
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 27106
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[167].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 27234
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27639
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27508
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27434
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 27287
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 27052
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[168].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[169].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 28615
                            }, this),
                            $$contentTexts[170].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 28585
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[171].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 28686
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28774
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28810
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28846
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28770
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 28763
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[175].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28906
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[176].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28942
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[177].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[178].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29009
                                                    }, this),
                                                    $$contentTexts[179].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[180].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29076
                                                    }, this),
                                                    $$contentTexts[181].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[182].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29143
                                                    }, this),
                                                    $$contentTexts[183].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[184].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29210
                                                    }, this),
                                                    $$contentTexts[185].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[186].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29277
                                                    }, this),
                                                    $$contentTexts[187].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[188].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29344
                                                    }, this),
                                                    $$contentTexts[189].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[190].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29411
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29451
                                                    }, this),
                                                    $$contentTexts[191].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[192].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29484
                                                    }, this),
                                                    $$contentTexts[193].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[194].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29551
                                                    }, this),
                                                    $$contentTexts[195].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "#%E5%85%83%E7%B4%A0%E7%BA%A6%E5%AE%9A",
                                                        children: $$contentTexts[196].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 29618
                                                    }, this),
                                                    $$contentTexts[197].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 28978
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28902
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[198].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29742
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[199].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29778
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[200].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29814
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29738
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[201].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29859
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[202].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29895
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[203].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29931
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29855
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[204].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 29976
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[205].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 30012
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[206].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 30048
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29972
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 28895
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 28756
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[207].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 30105
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[208].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 30139
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[209].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[210].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 30231
                            }, this),
                            $$contentTexts[211].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[212].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 30298
                            }, this),
                            $$contentTexts[213].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 30201
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[214].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30377
                                    }, this),
                                    $$contentTexts[215].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 30373
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[216].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30457
                                    }, this),
                                    $$contentTexts[217].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 30453
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[218].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30537
                                    }, this),
                                    $$contentTexts[219].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[220].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30608
                                    }, this),
                                    $$contentTexts[221].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[222].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30675
                                    }, this),
                                    $$contentTexts[223].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[224].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30742
                                    }, this),
                                    $$contentTexts[225].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 30533
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 30369
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                        id: "renderattributes-container-渲染边的主入口",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#renderattributes-container-渲染边的主入口",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30942
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 30863
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[226].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 30981
                            }, this),
                            ": 渲染边的主入口",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": ":-渲染边的主入口",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31386
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31255
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31181
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 31034
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 30819
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[227].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[228].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 32362
                            }, this),
                            $$contentTexts[229].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 32332
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[230].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 32433
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[231].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 32521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[232].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 32557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[233].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 32593
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 32517
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 32510
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[234].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 32653
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[235].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 32689
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[236].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 32725
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32649
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[237].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 32770
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[238].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 32806
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[239].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 32842
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32766
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 32642
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 32503
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 32996
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 32930
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[240].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 33035
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 33442
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 33311
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33237
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 33089
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 32899
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[241].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[242].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 34418
                            }, this),
                            $$contentTexts[243].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[244].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 34485
                            }, this),
                            $$contentTexts[245].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 34388
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[246].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 34559
                            }, this),
                            $$contentTexts[247].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 34556
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 34697
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 34648
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35091
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34960
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 34886
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 34744
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 34634
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[248].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 36045
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 36041
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 36037
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[249].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 36099
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[250].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[251].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36171
                                        }, this),
                                        $$contentTexts[252].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36141
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 36137
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[253].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[254].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36281
                                        }, this),
                                        $$contentTexts[255].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36251
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 36247
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[256].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[257].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36391
                                        }, this),
                                        $$contentTexts[258].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36361
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 36357
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: [
                                            $$contentTexts[259].value,
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[260].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 36509
                                            }, this),
                                            $$contentTexts[261].value,
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[262].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 36576
                                            }, this),
                                            $$contentTexts[263].value
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36474
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36471
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 36467
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 36133
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[264].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 36669
                            }, this),
                            $$contentTexts[265].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[266].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 36736
                            }, this),
                            $$contentTexts[267].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 36666
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[268].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[269].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36849
                                }, this),
                                $$contentTexts[270].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#%E6%96%B9%E6%B3%95",
                                    children: $$contentTexts[271].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36916
                                }, this),
                                $$contentTexts[272].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 36819
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 36807
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: [
                                    $$contentTexts[273].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[274].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37068
                                    }, this),
                                    $$contentTexts[275].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 37033
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                            lineNumber: 21,
                            columnNumber: 37029
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 37025
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37221
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 37170
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37619
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37488
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37414
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 37270
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 37154
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[276].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 38565
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[277].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38617
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[278].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38653
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[279].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38689
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38613
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 38606
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[280].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38753
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38749
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[281].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38798
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[282].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38834
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38745
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[283].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38883
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38879
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[284].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38928
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[285].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38964
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38875
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[286].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39013
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 39009
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[287].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 39058
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[288].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 39094
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39005
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 38738
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 38599
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
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39214
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 39165
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39608
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39477
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39403
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 39261
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 39151
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[289].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[290].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 40584
                            }, this),
                            $$contentTexts[291].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[292].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 40655
                            }, this),
                            $$contentTexts[293].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 40554
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[294].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 40730
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[295].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 40764
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[296].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 40826
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[297].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 40860
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[298].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[299].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 40952
                            }, this),
                            $$contentTexts[300].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[301].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 41019
                            }, this),
                            $$contentTexts[302].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 40922
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[303].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 41090
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[304].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 41124
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "从简单到复杂",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#从简单到复杂",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41261
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 41210
                            }, this),
                            "从简单到复杂",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "从简单到复杂",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41659
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41528
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41454
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 41310
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 41194
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "自定义路径的折线边",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义路径的折线边",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42678
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 42624
                            }, this),
                            "自定义路径的折线边",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义路径的折线边",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43082
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42951
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42877
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 42730
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 42605
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 44058
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[305].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 44102
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 44028
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "额外标签",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#额外标签",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44233
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 44184
                            }, this),
                            "额外标签",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "额外标签",
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
                                            fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44627
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44496
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44422
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 44280
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 44170
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 45603
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[306].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                                lineNumber: 21,
                                columnNumber: 45647
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/custom-edge.zh.md",
                        lineNumber: 21,
                        columnNumber: 45573
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                lineNumber: 21,
                columnNumber: 13230
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
                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/edge/custom-edge.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/edge/custom-edge.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/edge/custom-edge.zh.md",
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
//# sourceMappingURL=docs_manual_element_edge_custom-edge_zh_md-async.js.map