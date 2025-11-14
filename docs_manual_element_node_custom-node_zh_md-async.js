((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/custom-node.zh.md'],
{ "docs/manual/element/node/custom-node.zh.md": function (module, exports, __mako_require__){
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
                                to: "/manual/element/node/base-node",
                                children: $$contentTexts[1].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 66
                            }, this),
                            $$contentTexts[2].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/circle",
                                children: $$contentTexts[3].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 165
                            }, this),
                            $$contentTexts[4].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/diamond",
                                children: $$contentTexts[5].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 261
                            }, this),
                            $$contentTexts[6].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/donut",
                                children: $$contentTexts[7].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 358
                            }, this),
                            $$contentTexts[8].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/ellipse",
                                children: $$contentTexts[9].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 453
                            }, this),
                            $$contentTexts[10].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/hexagon",
                                children: $$contentTexts[11].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 551
                            }, this),
                            $$contentTexts[12].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/html",
                                children: $$contentTexts[13].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 650
                            }, this),
                            $$contentTexts[14].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/image",
                                children: $$contentTexts[15].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 746
                            }, this),
                            $$contentTexts[16].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/rect",
                                children: $$contentTexts[17].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 843
                            }, this),
                            $$contentTexts[18].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/star",
                                children: $$contentTexts[19].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 939
                            }, this),
                            $$contentTexts[20].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/node/triangle",
                                children: $$contentTexts[21].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 1035
                            }, this),
                            $$contentTexts[22].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[23].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 1139
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "自定义节点的方式",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义节点的方式",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1243
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 1190
                            }, this),
                            "自定义节点的方式 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "warning",
                                children: $$contentTexts[24].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 1295
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义节点的方式--选择合适的方式",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1711
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1580
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1506
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 1351
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 1172
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[25].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 2657
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "1-继承现有节点类型",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#1-继承现有节点类型",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2765
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 2710
                            }, this),
                            "1. 继承现有节点类型 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "success",
                                children: $$contentTexts[26].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 2820
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "1.-继承现有节点类型--推荐",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3234
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3103
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3029
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 2876
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 2690
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[27].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 4180
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/base-node.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4312
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4221
                                    }, this),
                                    $$contentTexts[29].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 4217
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/circle.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4478
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4390
                                    }, this),
                                    $$contentTexts[31].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 4386
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/rect.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4642
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4556
                                    }, this),
                                    $$contentTexts[33].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 4552
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/ellipse.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4809
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4720
                                    }, this),
                                    $$contentTexts[35].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 4716
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/diamond.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4976
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4887
                                    }, this),
                                    $$contentTexts[37].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 4883
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/triangle.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5144
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5054
                                    }, this),
                                    $$contentTexts[39].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 5050
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/star.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5308
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5222
                                    }, this),
                                    $$contentTexts[41].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 5218
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/image.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5473
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5386
                                    }, this),
                                    $$contentTexts[43].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 5382
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/donut.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5638
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5551
                                    }, this),
                                    $$contentTexts[45].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 5547
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/hexagon.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5805
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5716
                                    }, this),
                                    $$contentTexts[47].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 5712
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 4213
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[48].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/custom-node.zh.md",
                            lineNumber: 21,
                            columnNumber: 5887
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 5884
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[49].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[50].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5968
                                    }, this),
                                    $$contentTexts[51].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 5938
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[52].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[53].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6072
                                    }, this),
                                    $$contentTexts[54].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 6042
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[55].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[56].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6176
                                    }, this),
                                    $$contentTexts[57].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 6146
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 5934
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[58].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#%E4%B8%89%E6%AD%A5%E5%88%9B%E5%BB%BA%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8A%82%E7%82%B9",
                                    children: $$contentTexts[59].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6289
                                }, this),
                                $$contentTexts[60].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/custom-node.zh.md",
                            lineNumber: 21,
                            columnNumber: 6260
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 6255
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
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6582
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 6522
                            }, this),
                            "2. 基于 G 图形系统从零开发 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                children: $$contentTexts[61].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 6642
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7048
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6917
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6843
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 6683
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 6497
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[62].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 7994
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[63].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/custom-node.zh.md",
                            lineNumber: 21,
                            columnNumber: 8030
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 8027
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[64].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[65].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8111
                                    }, this),
                                    $$contentTexts[66].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 8081
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[67].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[68].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8215
                                    }, this),
                                    $$contentTexts[69].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 8185
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[70].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[71].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8319
                                    }, this),
                                    $$contentTexts[72].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 8289
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 8077
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/node/custom-node.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意事项",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[73].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/base-node.ts",
                            children: $$contentTexts[74].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/custom-node.zh.md",
                            lineNumber: 21,
                            columnNumber: 8472
                        }, this),
                        $$contentTexts[75].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/custom-node.zh.md",
                    lineNumber: 21,
                    columnNumber: 8443
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/element/node/custom-node.zh.md",
                lineNumber: 21,
                columnNumber: 8404
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "三步创建你的第一个自定义节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#三步创建你的第一个自定义节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8744
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 8685
                            }, this),
                            "三步创建你的第一个自定义节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "三步创建你的第一个自定义节点",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9158
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9027
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8953
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 8801
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 8661
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[76].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[77].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 10133
                            }, this),
                            $$contentTexts[78].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 10104
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin:false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 10236
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[79].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 10291
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 10206
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "第一步编写自定义节点类",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#第一步编写自定义节点类",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10435
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 10379
                            }, this),
                            "第一步：编写自定义节点类",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "第一步：编写自定义节点类",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10845
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10714
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10640
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 10490
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 10358
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[80].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[81].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 11820
                            }, this),
                            $$contentTexts[82].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 11791
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[83].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 11889
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "第二步注册自定义节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#第二步注册自定义节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12025
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 11970
                            }, this),
                            "第二步：注册自定义节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "第二步：注册自定义节点",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12433
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12302
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12228
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 12079
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 11950
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[84].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[85].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 13408
                            }, this),
                            $$contentTexts[86].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 13379
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[87].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 13477
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[88].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 13541
                            }, this),
                            $$contentTexts[89].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 13538
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[90].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[91].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13644
                                    }, this),
                                    $$contentTexts[92].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 13614
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[93].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[94].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13744
                                    }, this),
                                    $$contentTexts[95].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 13714
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[96].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[97].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13844
                                    }, this),
                                    $$contentTexts[98].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 13814
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 13610
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "第三步应用自定义节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#第三步应用自定义节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13994
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 13939
                            }, this),
                            "第三步：应用自定义节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "第三步：应用自定义节点",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14402
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14271
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14197
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 14048
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 13919
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[99].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 15348
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[100].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 15381
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[101].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[102].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 15473
                            }, this),
                            $$contentTexts[103].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: [
                                    $$contentTexts[104].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[105].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15579
                                    }, this),
                                    $$contentTexts[106].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 15544
                            }, this),
                            $$contentTexts[107].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 15443
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "理解数据流如何在自定义节点中获取数据",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#理解数据流如何在自定义节点中获取数据",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15777
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 15714
                            }, this),
                            "理解数据流：如何在自定义节点中获取数据",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "理解数据流：如何在自定义节点中获取数据",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16201
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16070
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15996
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 15839
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 15686
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[108].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 17147
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "方式一通过-attributes-参数推荐",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#方式一通过-attributes-参数推荐",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17278
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 17212
                            }, this),
                            "方式一：通过 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[109].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 17328
                            }, this),
                            " 参数（推荐）",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "方式一：通过---参数（推荐）",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17737
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17606
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17532
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 17379
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 17181
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[110].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 18686
                            }, this),
                            $$contentTexts[111].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[112].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 18753
                            }, this),
                            $$contentTexts[113].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 18683
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[114].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 18824
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "方式二通过-thiscontextgraph-获取原始数据",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#方式二通过-thiscontextgraph-获取原始数据",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18999
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 18925
                            }, this),
                            "方式二：通过 ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[115].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 19049
                            }, this),
                            " 获取原始数据",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "方式二：通过---获取原始数据",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19458
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19327
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19253
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 19100
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 18886
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[116].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 20404
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[117].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 20438
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "数据传递的完整流程",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#数据传递的完整流程",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20573
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 20519
                            }, this),
                            "数据传递的完整流程",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "数据传递的完整流程",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20977
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20846
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20772
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 20625
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 20500
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[118].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 21923
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 21987
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[119].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 22031
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 21957
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22112
                                        }, this),
                                        $$contentTexts[121].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22183
                                        }, this),
                                        $$contentTexts[123].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22108
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22259
                                        }, this),
                                        $$contentTexts[125].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22330
                                        }, this),
                                        $$contentTexts[127].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22255
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22406
                                        }, this),
                                        $$contentTexts[129].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22477
                                        }, this),
                                        $$contentTexts[131].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22544
                                        }, this),
                                        $$contentTexts[133].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22402
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22620
                                        }, this),
                                        $$contentTexts[135].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22616
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/custom-node.zh.md",
                            lineNumber: 21,
                            columnNumber: 22104
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 22099
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "从简单到复杂逐步构建功能丰富的节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#从简单到复杂逐步构建功能丰富的节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22796
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 22734
                            }, this),
                            "从简单到复杂：逐步构建功能丰富的节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "从简单到复杂：逐步构建功能丰富的节点",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23218
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23087
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23013
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 22857
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 22707
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[136].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 24164
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "示例一带图标和徽章的用户卡片节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#示例一带图标和徽章的用户卡片节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24285
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 24224
                            }, this),
                            "示例一：带图标和徽章的用户卡片节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "示例一：带图标和徽章的用户卡片节点",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24705
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24574
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24500
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 24345
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 24198
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[137].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 25651
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 25715
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[138].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 25759
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 25685
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "示例二可点击操作按钮的节点",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#示例二可点击操作按钮的节点",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25908
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 25850
                            }, this),
                            "示例二：可点击操作按钮的节点",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "示例二：可点击操作按钮的节点",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26322
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26191
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26117
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 25965
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 25827
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[139].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 27268
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 27332
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[140].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 27376
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 27302
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "示例三响应状态变化的节点点击变色",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#示例三响应状态变化的节点点击变色",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27531
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 27470
                            }, this),
                            "示例三：响应状态变化的节点（点击变色）",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "示例三：响应状态变化的节点（点击变色）",
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
                                            fileName: "docs/manual/element/node/custom-node.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27955
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27824
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27750
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 27593
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 27444
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[141].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 28901
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[142].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28970
                                    }, this),
                                    $$contentTexts[144].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 28939
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[145].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 29042
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 28935
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[146].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 29083
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[147].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 29121
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[148].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 29157
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[149].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[150].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29224
                                    }, this),
                                    $$contentTexts[151].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 29193
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 29117
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[152].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 29301
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 29365
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[153].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.zh.md",
                                lineNumber: 21,
                                columnNumber: 29409
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.zh.md",
                        lineNumber: 21,
                        columnNumber: 29335
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/node/custom-node.zh.md",
                lineNumber: 21,
                columnNumber: 8635
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
                fileName: "docs/manual/element/node/custom-node.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/node/custom-node.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/node/custom-node.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/node/custom-node.zh.md",
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
//# sourceMappingURL=docs_manual_element_node_custom-node_zh_md-async.js.map