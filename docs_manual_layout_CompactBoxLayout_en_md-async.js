((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/CompactBoxLayout.en.md'],
{ "docs/manual/layout/CompactBoxLayout.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "http://emr.cs.iit.edu/~reingold/tidier-drawings.pdf",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/examples#layout-compact-box",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1601
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/hierarchy/blob/master/src/compact-box.js",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1701
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*z-ESRoHTpvIAAAAAAAAAAABkARQnAQ",
                    width: "650",
                    alt: "CompactBox Tidy Tree Layout Example"
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1836
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "usage-scenarios",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#usage-scenarios",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2074
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2014
                        }, this),
                        "Usage Scenarios",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Usage-Scenarios",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2490
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2359
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2285
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2132
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1989
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[7].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3440
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[8].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3474
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3436
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
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3594
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3536
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4006
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3875
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3801
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3650
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3513
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[9].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4952
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
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5081
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5029
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5481
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5350
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5276
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5131
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5012
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6445
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6480
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6515
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6550
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6585
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6441
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6434
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6644
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6679
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 6718
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6714
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6762
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6797
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6640
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[21].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[22].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6906
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6970
                                                }, this),
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7035
                                                }, this),
                                                $$contentTexts[26].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[27].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7100
                                                }, this),
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7165
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7230
                                                }, this),
                                                $$contentTexts[32].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7295
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6966
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[34].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7343
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7339
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7387
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6837
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7402
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[36].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[37].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7467
                                                }, this),
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#getside",
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7532
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7437
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[40].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[41].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7620
                                                }, this),
                                                $$contentTexts[42].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7590
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7756
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7762
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7398
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7777
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7812
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7877
                                                }, this),
                                                $$contentTexts[47].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7847
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8019
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7773
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8034
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8069
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8134
                                                }, this),
                                                $$contentTexts[52].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8104
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8270
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8276
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8030
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8326
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[55].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[56].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8391
                                                }, this),
                                                $$contentTexts[57].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8361
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8527
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8533
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8287
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8548
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8583
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[60].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[61].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8648
                                                }, this),
                                                $$contentTexts[62].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8618
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8784
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8790
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8544
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8805
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                                    children: $$contentTexts[66].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8905
                                                }, this),
                                                $$contentTexts[67].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8875
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9041
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9047
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8801
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9062
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[69].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#radial",
                                                    children: $$contentTexts[70].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9127
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9097
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9219
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9254
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9058
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6633
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6427
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
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9354
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9300
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9758
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9627
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9553
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9406
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9281
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[73].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10719
                            }, this),
                            $$contentTexts[74].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[75].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10784
                            }, this),
                            $$contentTexts[76].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[77].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10849
                            }, this),
                            $$contentTexts[78].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[79].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10914
                            }, this),
                            $$contentTexts[80].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[81].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10979
                            }, this),
                            $$contentTexts[82].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[83].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11044
                            }, this),
                            $$contentTexts[84].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[85].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11109
                            }, this),
                            $$contentTexts[86].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[87].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11178
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 10716
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10704
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11234
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[89].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11275
                                }, this),
                                $$contentTexts[90].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11271
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[91].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11349
                                }, this),
                                $$contentTexts[92].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11345
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[93].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11423
                                }, this),
                                $$contentTexts[94].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11419
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[95].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11497
                                }, this),
                                $$contentTexts[96].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11493
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[97].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11571
                                }, this),
                                $$contentTexts[98].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[99].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11636
                                }, this),
                                $$contentTexts[100].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11567
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[101].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11711
                                }, this),
                                $$contentTexts[102].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11707
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11267
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
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11857
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11805
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12257
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12126
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12052
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 11907
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11788
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[103].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[104].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13249
                                }, this),
                                $$contentTexts[105].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13218
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 13215
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13203
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[106].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[107].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13434
                        }, this),
                        $$contentTexts[108].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/antvis/hierarchy/blob/d786901874f59d96c47e2a5dfe17b373eefd72e3/src/layout/separate-root.js#L11",
                            children: $$contentTexts[109].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13501
                        }, this),
                        $$contentTexts[110].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13404
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[111].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13687
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[112].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13721
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "getid",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#getid",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13856
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13806
                        }, this),
                        "getId",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "getId",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14252
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14121
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14047
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 13904
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13791
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[113].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[114].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15244
                                }, this),
                                $$contentTexts[115].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15213
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 15210
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15198
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[116].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15399
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[117].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[118].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15467
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
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 15608
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15555
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16010
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15879
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 15805
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15659
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15537
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[119].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[120].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17002
                                }, this),
                                $$contentTexts[121].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16971
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 16968
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 16956
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[122].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17157
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[123].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17191
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[124].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17225
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
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17368
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17314
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17772
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17641
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17567
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17420
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17295
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[125].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[126].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18764
                                }, this),
                                $$contentTexts[127].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18733
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 18730
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 18718
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[128].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 18919
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[129].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 18953
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[130].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 18987
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
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19126
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19074
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19526
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19395
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19321
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19176
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19057
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[131].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[132].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20518
                                }, this),
                                $$contentTexts[133].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20487
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 20484
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20472
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[134].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20673
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[135].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20707
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[136].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20741
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
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 20880
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20828
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21280
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21149
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21075
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20930
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20811
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                $$contentTexts[137].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/data#%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AEnodedata",
                                    children: $$contentTexts[138].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22272
                                }, this),
                                $$contentTexts[139].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22241
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 22238
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22226
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[140].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22427
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[141].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22461
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[142].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22495
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "radial",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#radial",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 22632
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22581
                        }, this),
                        "radial",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "radial",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23030
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22899
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 22825
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22681
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22565
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[143].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 23991
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 23988
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 23976
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[144].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[145].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24074
                        }, this),
                        $$contentTexts[146].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[147].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24141
                        }, this),
                        $$contentTexts[148].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[149].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24208
                        }, this),
                        $$contentTexts[150].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[151].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24275
                        }, this),
                        $$contentTexts[152].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[153].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24342
                        }, this),
                        $$contentTexts[154].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24044
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*E0c8TIYRPYoAAAAAAAAAAABkARQnAQ",
                    width: "200",
                    alt: "img"
                }, void 0, false, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24413
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "example-code",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example-code",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 24613
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24556
                        }, this),
                        "Example Code",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example-Code",
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
                                        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25023
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24892
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 24818
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24668
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24534
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25999
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[155].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26043
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 25969
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
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
                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/CompactBoxLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/CompactBoxLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/CompactBoxLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_CompactBoxLayout_en_md-async.js.map