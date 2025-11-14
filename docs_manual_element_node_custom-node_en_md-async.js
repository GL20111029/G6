((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/custom-node.en.md'],
{ "docs/manual/element/node/custom-node.en.md": function (module, exports, __mako_require__){
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
                                to: "/en/manual/element/node/base-node",
                                children: $$contentTexts[1].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 66
                            }, this),
                            $$contentTexts[2].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/circle",
                                children: $$contentTexts[3].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 168
                            }, this),
                            $$contentTexts[4].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/diamond",
                                children: $$contentTexts[5].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 267
                            }, this),
                            $$contentTexts[6].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/donut",
                                children: $$contentTexts[7].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 367
                            }, this),
                            $$contentTexts[8].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/ellipse",
                                children: $$contentTexts[9].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 465
                            }, this),
                            $$contentTexts[10].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/hexagon",
                                children: $$contentTexts[11].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 566
                            }, this),
                            $$contentTexts[12].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/html",
                                children: $$contentTexts[13].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 668
                            }, this),
                            $$contentTexts[14].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/image",
                                children: $$contentTexts[15].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 767
                            }, this),
                            $$contentTexts[16].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/rect",
                                children: $$contentTexts[17].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 867
                            }, this),
                            $$contentTexts[18].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/star",
                                children: $$contentTexts[19].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 966
                            }, this),
                            $$contentTexts[20].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/node/triangle",
                                children: $$contentTexts[21].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 1065
                            }, this),
                            $$contentTexts[22].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[23].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 1172
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "ways-to-create-custom-nodes",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#ways-to-create-custom-nodes",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1314
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 1242
                            }, this),
                            "Ways to Create Custom Nodes ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "warning",
                                children: $$contentTexts[24].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 1385
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Ways-to-Create-Custom-Nodes--Choose-the-Right-Approach",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1838
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1707
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1633
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 1441
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 1205
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[25].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 2784
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "1-inherit-from-existing-node-types",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#1-inherit-from-existing-node-types",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2940
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 2861
                            }, this),
                            "1. Inherit from Existing Node Types ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                type: "success",
                                children: $$contentTexts[26].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 3019
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "1.-Inherit-from-Existing-Node-Types--Recommended",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 3466
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3335
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3261
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 3075
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 2817
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[27].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 4412
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4544
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4453
                                    }, this),
                                    $$contentTexts[29].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 4449
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/circle.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4710
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4622
                                    }, this),
                                    $$contentTexts[31].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 4618
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/rect.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4874
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4788
                                    }, this),
                                    $$contentTexts[33].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 4784
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/ellipse.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5041
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4952
                                    }, this),
                                    $$contentTexts[35].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 4948
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/diamond.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5208
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5119
                                    }, this),
                                    $$contentTexts[37].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 5115
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/triangle.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5376
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5286
                                    }, this),
                                    $$contentTexts[39].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 5282
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/star.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5540
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5454
                                    }, this),
                                    $$contentTexts[41].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 5450
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/image.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5705
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5618
                                    }, this),
                                    $$contentTexts[43].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 5614
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/donut.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5870
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5783
                                    }, this),
                                    $$contentTexts[45].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 5779
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/hexagon.ts",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6037
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5948
                                    }, this),
                                    $$contentTexts[47].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 5944
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 4445
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[48].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/custom-node.en.md",
                            lineNumber: 21,
                            columnNumber: 6119
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 6116
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[49].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[50].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6200
                                    }, this),
                                    $$contentTexts[51].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 6170
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[52].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[53].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6304
                                    }, this),
                                    $$contentTexts[54].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 6274
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[55].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[56].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6408
                                    }, this),
                                    $$contentTexts[57].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 6378
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 6166
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[58].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#create-your-first-custom-node-in-three-steps",
                                    children: $$contentTexts[59].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6521
                                }, this),
                                $$contentTexts[60].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/custom-node.en.md",
                            lineNumber: 21,
                            columnNumber: 6492
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 6487
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "2-build-from-scratch-based-on-g-graphics-system",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#2-build-from-scratch-based-on-g-graphics-system",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6796
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 6704
                            }, this),
                            "2. Build from Scratch Based on G Graphics System ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index1.default, {
                                children: $$contentTexts[61].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 6888
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "2.-Build-from-Scratch-Based-on-G-Graphics-System--Advanced-Usage",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7336
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7205
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7131
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 6929
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 6647
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[62].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 8282
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[63].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/custom-node.en.md",
                            lineNumber: 21,
                            columnNumber: 8318
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 8315
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[64].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[65].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8399
                                    }, this),
                                    $$contentTexts[66].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 8369
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[67].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[68].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8503
                                    }, this),
                                    $$contentTexts[69].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 8473
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[70].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[71].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8607
                                    }, this),
                                    $$contentTexts[72].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 8577
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 8365
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/node/custom-node.en.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "Important",
                notes: "",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[73].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/elements/nodes/base-node.ts",
                            children: $$contentTexts[74].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/custom-node.en.md",
                            lineNumber: 21,
                            columnNumber: 8774
                        }, this),
                        $$contentTexts[75].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/custom-node.en.md",
                    lineNumber: 21,
                    columnNumber: 8745
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/element/node/custom-node.en.md",
                lineNumber: 21,
                columnNumber: 8692
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "create-your-first-custom-node-in-three-steps",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#create-your-first-custom-node-in-three-steps",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9106
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 9017
                            }, this),
                            "Create Your First Custom Node in Three Steps",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Create-Your-First-Custom-Node-in-Three-Steps",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9580
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9449
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9375
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 9193
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 8963
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[76].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[77].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 10555
                            }, this),
                            $$contentTexts[78].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 10526
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin:false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 10658
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[79].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 10713
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 10628
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "step-1-write-custom-node-class",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#step-1-write-custom-node-class",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10895
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 10820
                            }, this),
                            "Step 1: Write Custom Node Class",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Step-1:-Write-Custom-Node-Class",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11343
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11212
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11138
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 10969
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 10780
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[80].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[81].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 12318
                            }, this),
                            $$contentTexts[82].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 12289
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[83].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 12387
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "step-2-register-custom-node",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#step-2-register-custom-node",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12557
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 12485
                            }, this),
                            "Step 2: Register Custom Node",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Step-2:-Register-Custom-Node",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12999
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12868
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12794
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 12628
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 12448
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[84].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[85].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 13974
                            }, this),
                            $$contentTexts[86].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 13945
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[87].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 14043
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[88].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[89].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 14133
                            }, this),
                            $$contentTexts[90].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 14104
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[91].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[92].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14236
                                    }, this),
                                    $$contentTexts[93].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 14206
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[94].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[95].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14336
                                    }, this),
                                    $$contentTexts[96].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 14306
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[97].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[98].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14436
                                    }, this),
                                    $$contentTexts[99].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 14406
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 14202
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "step-3-apply-custom-node",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#step-3-apply-custom-node",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14614
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 14545
                            }, this),
                            "Step 3: Apply Custom Node",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Step-3:-Apply-Custom-Node",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15050
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14919
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14845
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 14682
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 14511
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[100].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 15996
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[101].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 16030
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[102].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[103].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 16122
                            }, this),
                            $$contentTexts[104].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: [
                                    $$contentTexts[105].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[106].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16228
                                    }, this),
                                    $$contentTexts[107].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 16193
                            }, this),
                            $$contentTexts[108].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 16092
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "understanding-data-flow-how-to-access-data-in-custom-nodes",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#understanding-data-flow-how-to-access-data-in-custom-nodes",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16506
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 16403
                            }, this),
                            "Understanding Data Flow: How to Access Data in Custom Nodes",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Understanding-Data-Flow:-How-to-Access-Data-in-Custom-Nodes",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17010
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16879
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16805
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 16608
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 16335
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[109].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 17956
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "method-1-through-attributes-parameter-recommended",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#method-1-through-attributes-parameter-recommended",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18143
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 18049
                            }, this),
                            "Method 1: Through ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[110].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 18204
                            }, this),
                            " Parameter (Recommended)",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Method-1:-Through---Parameter-(Recommended)",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18658
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18527
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18453
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 18272
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 17990
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[111].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[112].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 19634
                            }, this),
                            $$contentTexts[113].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[114].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 19701
                            }, this),
                            $$contentTexts[115].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 19604
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[116].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 19772
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "method-2-through-thiscontextgraph-to-access-raw-data",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#method-2-through-thiscontextgraph-to-access-raw-data",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19993
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 19896
                            }, this),
                            "Method 2: Through ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[117].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 20054
                            }, this),
                            " to Access Raw Data",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Method-2:-Through---to-Access-Raw-Data",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20498
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20367
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20293
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 20117
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 19834
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[118].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 21444
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "js",
                        children: $$contentTexts[119].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 21478
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "complete-data-flow-process",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#complete-data-flow-process",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21647
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 21576
                            }, this),
                            "Complete Data Flow Process",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Complete-Data-Flow-Process",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22085
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21954
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21880
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 21716
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 21540
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[120].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 23031
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 23095
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[121].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 23139
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 23065
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23220
                                        }, this),
                                        $$contentTexts[123].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23291
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23216
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23340
                                        }, this),
                                        $$contentTexts[126].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23411
                                        }, this),
                                        $$contentTexts[128].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23336
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23487
                                        }, this),
                                        $$contentTexts[130].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23558
                                        }, this),
                                        $$contentTexts[132].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23625
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23483
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 23674
                                        }, this),
                                        $$contentTexts[135].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23670
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/custom-node.en.md",
                            lineNumber: 21,
                            columnNumber: 23212
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 23207
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "from-simple-to-complex-gradually-building-feature-rich-nodes",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#from-simple-to-complex-gradually-building-feature-rich-nodes",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23936
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 23831
                            }, this),
                            "From Simple to Complex: Gradually Building Feature-Rich Nodes",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "From-Simple-to-Complex:-Gradually-Building-Feature-Rich-Nodes",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 24444
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24313
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24239
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 24040
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 23761
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[136].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 25390
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "example-1-user-card-node-with-icon-and-badge",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#example-1-user-card-node-with-icon-and-badge",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25567
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 25478
                            }, this),
                            "Example 1: User Card Node with Icon and Badge",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Example-1:-User-Card-Node-with-Icon-and-Badge",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26043
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25912
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25838
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 25655
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 25424
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[137].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 26989
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 27053
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[138].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 27097
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 27023
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "example-2-node-with-clickable-action-button",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#example-2-node-with-clickable-action-button",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27306
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 27218
                            }, this),
                            "Example 2: Node with Clickable Action Button",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Example-2:-Node-with-Clickable-Action-Button",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27780
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27649
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27575
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 27393
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 27165
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[139].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 28726
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 28790
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[140].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 28834
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 28760
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "example-3-node-responding-to-state-changes-click-to-change-color",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#example-3-node-responding-to-state-changes-click-to-change-color",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29085
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 28976
                            }, this),
                            "Example 3: Node Responding to State Changes (Click to Change Color)",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Example-3:-Node-Responding-to-State-Changes-(Click-to-Change-Color)",
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
                                            fileName: "docs/manual/element/node/custom-node.en.md",
                                            lineNumber: 21,
                                            columnNumber: 29605
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29474
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/custom-node.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29400
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 29195
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 28902
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[141].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 30551
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[142].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30620
                                    }, this),
                                    $$contentTexts[144].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 30589
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[145].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 30692
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 30585
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[146].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 30733
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[147].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 30771
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[148].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 30807
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[149].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[150].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/custom-node.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30874
                                    }, this),
                                    $$contentTexts[151].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 30843
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 30767
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[152].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 30951
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 31015
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[153].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/custom-node.en.md",
                                lineNumber: 21,
                                columnNumber: 31059
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/custom-node.en.md",
                        lineNumber: 21,
                        columnNumber: 30985
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/element/node/custom-node.en.md",
                lineNumber: 21,
                columnNumber: 8937
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
                fileName: "docs/manual/element/node/custom-node.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/node/custom-node.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/node/custom-node.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/node/custom-node.en.md",
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
//# sourceMappingURL=docs_manual_element_node_custom-node_en_md-async.js.map