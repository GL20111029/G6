((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/MindmapLayout.en.md'],
{ "docs/manual/layout/MindmapLayout.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/examples#layout-mindmap",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1552
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/hierarchy/blob/master/src/mindmap.js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1648
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*J1l5RofvbP0AAAAAAAAAAABkARQnAQ",
                    width: "350",
                    alt: "img"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1779
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1981
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1923
                        }, this),
                        "Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Configuration",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2393
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2262
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2188
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2037
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1900
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3339
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3468
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3416
                        }, this),
                        "Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Options",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3868
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3737
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3663
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3518
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3399
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i4/O1CN014J5e691gxm5GSrwD2_!!6000000004209-0-tps-1163-832.jpg",
                    width: "400",
                    alt: "Mindmap tree options diagram"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4814
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4986
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[9].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5020
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5054
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5089
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5124
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 4982
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4975
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5183
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5218
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[15].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5257
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5253
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5301
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5336
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5179
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5380
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[19].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[20].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5445
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5415
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5509
                                                }, this),
                                                $$contentTexts[22].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5574
                                                }, this),
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5639
                                                }, this),
                                                $$contentTexts[26].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[27].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5704
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5769
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[30].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5817
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5861
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5376
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5911
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5946
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5981
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5987
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5872
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6031
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6066
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6101
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6136
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6142
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6027
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6186
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6221
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6256
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6297
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6182
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6312
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6347
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6382
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6417
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6423
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6308
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6438
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6503
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6568
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6473
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6612
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6653
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6434
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5172
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4968
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "direction",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#direction",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6753
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6699
                        }, this),
                        "direction",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "direction",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7157
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7026
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6952
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6805
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6680
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[51].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8118
                            }, this),
                            $$contentTexts[52].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[53].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8183
                            }, this),
                            $$contentTexts[54].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[55].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8248
                            }, this),
                            $$contentTexts[56].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[57].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8313
                            }, this),
                            $$contentTexts[58].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[59].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8378
                            }, this),
                            $$contentTexts[60].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[61].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8443
                            }, this),
                            $$contentTexts[62].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[63].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8512
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 8115
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8103
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[64].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8568
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[65].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8609
                            }, this),
                            $$contentTexts[66].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[67].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8674
                            }, this),
                            $$contentTexts[68].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 8605
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8601
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*J1l5RofvbP0AAAAAAAAAAABkARQnAQ",
                    width: "170",
                    alt: "Horizontal layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8749
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[69].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8892
                            }, this),
                            $$contentTexts[70].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 8888
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8884
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i2/O1CN01SWsfai28ZmZu2ehyh_!!6000000007947-0-tps-1390-1254.jpg",
                    width: "150",
                    alt: "Vertical layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8967
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[71].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9117
                            }, this),
                            $$contentTexts[72].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 9113
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9109
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i1/O1CN01DFh7iu26fcORrjGfT_!!6000000007689-0-tps-1396-1254.jpg",
                    width: "150",
                    alt: "Vertical layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9192
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[73].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9342
                            }, this),
                            $$contentTexts[74].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 9338
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9334
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i2/O1CN01zppRLx1Igmbtv4EyJ_!!6000000000923-0-tps-1388-1282.jpg",
                    width: "150",
                    alt: "Vertical layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9417
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getwidth",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getwidth",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9630
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9577
                        }, this),
                        "getWidth",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getWidth",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10032
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9901
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9827
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9681
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9559
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[75].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10993
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 10990
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10978
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[76].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11045
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[77].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11078
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[78].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11111
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getheight",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getheight",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11253
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11199
                        }, this),
                        "getHeight",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getHeight",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11657
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11526
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11452
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11305
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11180
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[79].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12618
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 12615
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12603
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[80].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12670
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12703
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12736
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "gethgap",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#gethgap",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12874
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12822
                        }, this),
                        "getHGap",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getHGap",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13274
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13143
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13069
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12924
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12805
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[83].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14235
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 14232
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14220
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[85].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14320
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14353
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getvgap",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getvgap",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14491
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14439
                        }, this),
                        "getVGap",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getVGap",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14891
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14760
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14686
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14541
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14422
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[87].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15852
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 15849
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15837
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15904
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[89].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15937
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[90].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15970
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getside",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getside",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16108
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16056
                        }, this),
                        "getSide",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getSide",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16508
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16377
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16303
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16158
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 16039
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[91].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17469
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 17466
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17454
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[92].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[93].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17550
                        }, this),
                        $$contentTexts[94].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[95].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17615
                        }, this),
                        $$contentTexts[96].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/hierarchy/blob/d786901874f59d96c47e2a5dfe17b373eefd72e3/src/layout/separate-root.js#L11",
                            children: $$contentTexts[97].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17680
                        }, this),
                        $$contentTexts[98].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17521
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[99].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17864
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[100].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17897
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "suitable-scenarios",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#suitable-scenarios",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18058
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17995
                        }, this),
                        "Suitable Scenarios",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Suitable-Scenarios",
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
                                        fileName: "docs/manual/layout/MindmapLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18480
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18349
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/MindmapLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18275
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18119
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17967
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[101].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[102].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19461
                                }, this),
                                $$contentTexts[103].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19430
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[104].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/MindmapLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19533
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/MindmapLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19426
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/MindmapLayout.en.md",
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
                fileName: "docs/manual/layout/MindmapLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/MindmapLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/MindmapLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/MindmapLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_MindmapLayout_en_md-async.js.map