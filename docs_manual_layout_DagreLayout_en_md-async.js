((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/DagreLayout.en.md'],
{ "docs/manual/layout/DagreLayout.en.md": function (module, exports, __mako_require__){
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
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h1", {
                    id: "dagre-layout",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#dagre-layout",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 117
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 60
                        }, this),
                        "Dagre Layout",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Dagre-Layout",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 527
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 396
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 322
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 172
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
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
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1544
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1491
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1946
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1815
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1741
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1595
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1473
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/examples#layout-dagre",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2920
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/blob/master/lib/layout.js",
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3014
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/wiki",
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3137
                        }, this),
                        $$contentTexts[6].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2892
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*2uMmRo5wYPUAAAAAAAAAAABkARQnAQ",
                    width: "350",
                    alt: "Dagre Layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3243
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
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3454
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3396
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3866
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3735
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3661
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3510
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3373
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4812
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
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 4941
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4889
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5341
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5210
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5136
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4991
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4872
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[8].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://github.com/dagrejs/dagre/wiki#configuring-the-layout",
                                children: $$contentTexts[9].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6327
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 6299
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i3/O1CN01OpQHBZ1HcpZuWZLS7_!!6000000000779-0-tps-1274-1234.jpg",
                    width: "400",
                    alt: "Dagre Layout Options Illustration"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6444
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6622
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[11].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6657
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6692
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[13].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6727
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6762
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6618
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6611
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6821
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6856
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 6895
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6891
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6974
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6817
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7053
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[22].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7092
                                                }, this),
                                                $$contentTexts[23].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[24].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7157
                                                }, this),
                                                $$contentTexts[25].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[26].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7222
                                                }, this),
                                                $$contentTexts[27].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[28].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7287
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7088
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[29].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7335
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7331
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7379
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7014
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7468
                                                }, this),
                                                $$contentTexts[33].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7533
                                                }, this),
                                                $$contentTexts[35].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[36].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7598
                                                }, this),
                                                $$contentTexts[37].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[38].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7663
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7464
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[39].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7711
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7707
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7755
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7390
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7770
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[41].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7835
                                                }, this),
                                                $$contentTexts[43].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7900
                                                }, this),
                                                $$contentTexts[45].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7965
                                                }, this),
                                                $$contentTexts[47].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[48].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8030
                                                }, this),
                                                $$contentTexts[49].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7805
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8100
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8135
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8170
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7766
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8185
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[53].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[54].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8250
                                                }, this),
                                                $$contentTexts[55].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[56].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8315
                                                }, this),
                                                $$contentTexts[57].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[58].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8380
                                                }, this),
                                                $$contentTexts[59].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[60].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8445
                                                }, this),
                                                $$contentTexts[61].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8220
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8515
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8550
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8585
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8181
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[66].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8665
                                                }, this),
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8730
                                                }, this),
                                                $$contentTexts[69].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[70].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8795
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8635
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8843
                                                }, this),
                                                $$contentTexts[72].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[73].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8908
                                                }, this),
                                                $$contentTexts[74].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[75].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8973
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8839
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[76].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 9021
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9017
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9065
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8596
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[77].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9080
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9145
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9189
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9230
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9076
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[83].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9315
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9350
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9385
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9241
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6810
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6604
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "rankdir",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#rankdir",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9481
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9429
                        }, this),
                        "rankdir",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "rankdir",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9881
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9750
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9676
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9531
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 9412
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[85].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10842
                            }, this),
                            $$contentTexts[86].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[87].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10907
                            }, this),
                            $$contentTexts[88].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[89].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10972
                            }, this),
                            $$contentTexts[90].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[91].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11037
                            }, this),
                            $$contentTexts[92].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[93].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11102
                            }, this),
                            $$contentTexts[94].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[95].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11171
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 10839
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10827
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[96].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11227
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[97].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11268
                            }, this),
                            $$contentTexts[98].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 11264
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11260
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i3/O1CN01ulI3Se1DeQUfhQ29v_!!6000000000241-0-tps-1092-1218.jpg",
                    width: "170",
                    alt: "Top to Bottom Layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11343
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[99].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11498
                            }, this),
                            $$contentTexts[100].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 11494
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11490
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i1/O1CN01IfytBS1EOE6NXVprx_!!6000000000341-0-tps-1004-1236.jpg",
                    width: "170",
                    alt: "Bottom to Top Layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11574
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[101].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11729
                            }, this),
                            $$contentTexts[102].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 11725
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11721
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i2/O1CN01tpEdMJ1MsTBKpoP6r_!!6000000001490-0-tps-1452-786.jpg",
                    width: "170",
                    alt: "Left to Right Layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11806
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[103].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11960
                            }, this),
                            $$contentTexts[104].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 11956
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11952
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i4/O1CN01Lw8JHC27j71xd0wl9_!!6000000007832-0-tps-1460-848.jpg",
                    width: "170",
                    alt: "Right to Left Layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12037
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "align",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#align",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12248
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12198
                        }, this),
                        "align",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "align",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12644
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12513
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12439
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12296
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12183
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[105].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13605
                            }, this),
                            $$contentTexts[106].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[107].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13672
                            }, this),
                            $$contentTexts[108].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[109].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13739
                            }, this),
                            $$contentTexts[110].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[111].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13806
                            }, this),
                            $$contentTexts[112].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[113].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13873
                            }, this),
                            $$contentTexts[114].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[115].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13944
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 13602
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13590
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[116].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14001
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[117].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14043
                                }, this),
                                $$contentTexts[118].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14039
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[119].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14119
                                }, this),
                                $$contentTexts[120].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14115
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[121].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14195
                                }, this),
                                $$contentTexts[122].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14191
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[123].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14271
                                }, this),
                                $$contentTexts[124].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14267
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14035
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesep",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesep",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14417
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14365
                        }, this),
                        "nodesep",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodesep",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14817
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14686
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14612
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14467
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14348
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[125].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[126].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 15805
                            }, this),
                            $$contentTexts[127].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 15775
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15763
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[128].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[129].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15923
                        }, this),
                        $$contentTexts[130].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[131].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15990
                        }, this),
                        $$contentTexts[132].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[133].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16057
                        }, this),
                        $$contentTexts[134].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[135].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16124
                        }, this),
                        $$contentTexts[136].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15893
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranksep",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranksep",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16264
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16212
                        }, this),
                        "ranksep",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranksep",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16664
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16533
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16459
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16314
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 16195
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[137].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[138].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17652
                            }, this),
                            $$contentTexts[139].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 17622
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17610
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[140].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[141].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17770
                        }, this),
                        $$contentTexts[142].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[143].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17837
                        }, this),
                        $$contentTexts[144].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[145].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17904
                        }, this),
                        $$contentTexts[146].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[147].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17971
                        }, this),
                        $$contentTexts[148].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17740
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranker",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranker",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18058
                        }, this),
                        "ranker",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranker",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18507
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18376
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18302
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 18158
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 18042
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[149].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19468
                            }, this),
                            $$contentTexts[150].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[151].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19535
                            }, this),
                            $$contentTexts[152].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[153].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19602
                            }, this),
                            $$contentTexts[154].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[155].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19669
                            }, this),
                            $$contentTexts[156].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[157].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19740
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 19465
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19453
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[158].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19797
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[159].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19839
                                }, this),
                                $$contentTexts[160].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19835
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[161].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19915
                                }, this),
                                $$contentTexts[162].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[163].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19982
                                }, this),
                                $$contentTexts[164].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19911
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[165].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20058
                                }, this),
                                $$contentTexts[166].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    href: "https://www.graphviz.org/documentation/TSE93.pdf",
                                    children: $$contentTexts[167].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20125
                                }, this),
                                $$contentTexts[168].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20054
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19831
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesize",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesize",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 20323
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20270
                        }, this),
                        "nodeSize",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodeSize",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20725
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20594
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 20520
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 20374
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20252
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[169].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 21683
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21671
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[170].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[171].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21760
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21730
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[172].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21804
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "controlpoints",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#controlpoints",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21947
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21889
                        }, this),
                        "controlPoints",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "controlPoints",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22359
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22228
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 22154
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22003
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21866
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[173].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[174].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 23347
                            }, this),
                            $$contentTexts[175].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 23317
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 23305
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[176].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 23435
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "applicable-scenarios",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#applicable-scenarios",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 23564
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 23499
                        }, this),
                        "Applicable Scenarios",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Applicable-Scenarios",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23990
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23859
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 23785
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 23627
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 23469
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[177].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24944
                                }, this),
                                $$contentTexts[178].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24940
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[179].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25024
                                }, this),
                                $$contentTexts[180].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25020
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[181].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25104
                                }, this),
                                $$contentTexts[182].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24936
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "related-documentation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#related-documentation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 25282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25216
                        }, this),
                        "Related Documentation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Related-Documentation",
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
                                        fileName: "docs/manual/layout/DagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25710
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25579
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 25505
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25346
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 25185
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[183].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/DagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 26668
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 26656
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://mp.weixin.qq.com/s/EdyTfFUH7fyMefNSBXI2nA",
                                children: $$contentTexts[184].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 26723
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26719
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://www.yuque.com/antv/g6-blog/xxp5nl",
                                children: $$contentTexts[185].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 26823
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26819
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 26715
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/DagreLayout.en.md",
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
                fileName: "docs/manual/layout/DagreLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/DagreLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/DagreLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/DagreLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_DagreLayout_en_md-async.js.map