((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/event.en.md'],
{ "docs/api/event.en.md": function (module, exports, __mako_require__){
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
                    id: "overview-of-the-event-system",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview-of-the-event-system",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 149
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 76
                        }, this),
                        "Overview of the Event System",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Overview-of-the-Event-System",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 591
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 460
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 386
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 220
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 1537
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "event-categories",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#event-categories",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 1656
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 1595
                        }, this),
                        "Event Categories",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Event-Categories",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2074
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1943
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 1869
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 1715
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 1569
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 3020
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[2].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3060
                                }, this),
                                $$contentTexts[3].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[4].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3127
                                }, this),
                                $$contentTexts[5].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3190
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 3056
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3237
                                }, this),
                                $$contentTexts[8].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3304
                                }, this),
                                $$contentTexts[10].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3368
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 3233
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[12].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3416
                                }, this),
                                $$contentTexts[13].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[14].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3485
                                }, this),
                                $$contentTexts[15].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[16].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3550
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 3412
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 3052
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "event-naming-convention",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#event-naming-convention",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 3700
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 3632
                        }, this),
                        "Event Naming Convention",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Event-Naming-Convention",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4132
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4001
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 3927
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 3766
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 3599
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[17].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[18].value
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 5107
                        }, this),
                        $$contentTexts[19].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 5078
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[20].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5184
                                }, this),
                                $$contentTexts[21].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 5180
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[22].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5258
                                }, this),
                                $$contentTexts[23].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 5254
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[24].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5332
                                }, this),
                                $$contentTexts[25].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 5328
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 5176
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "best-practice-using-constant-enums",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#best-practice-using-constant-enums",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 5530
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 5451
                        }, this),
                        "Best Practice: Using Constant Enums",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Best-Practice:-Using-Constant-Enums",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5986
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5855
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 5781
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 5608
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 5407
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[26].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[27].value
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 6961
                        }, this),
                        $$contentTexts[28].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 6932
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[29].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 7034
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[30].value
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 7106
                        }, this),
                        $$contentTexts[31].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 7103
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[32].value
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 7183
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[33].value
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 7218
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 7179
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "api-reference",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#api-reference",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 7339
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 7281
                        }, this),
                        "API Reference",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "API-Reference",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7751
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7620
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 7546
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 7395
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 7258
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphoneventname-callback-once",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphoneventname-callback-once",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 8812
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 8737
                        }, this),
                        "Graph.on(eventName, callback, once)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.on(eventName,-callback,-once)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9268
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9137
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 9063
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 8890
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 8697
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[34].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 10214
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[35].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 10247
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "parameters",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#parameters",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 10391
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 10336
                        }, this),
                        "Parameters",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Parameters",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10797
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10666
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 10592
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 10444
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 10316
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[36].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11761
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[37].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11796
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[38].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11831
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[39].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11866
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[40].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11901
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 11757
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 11750
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11960
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 11995
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12065
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12100
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11956
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[46].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12144
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[48].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12214
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12249
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12284
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12140
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12328
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12363
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12398
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12433
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 12468
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12324
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 11949
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 11743
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "return-value",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#return-value",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 12574
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 12517
                        }, this),
                        "Return Value",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Return-Value",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12984
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12853
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 12779
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 12629
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 12495
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[55].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13938
                                }, this),
                                $$contentTexts[56].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 13934
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[57].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14016
                                }, this),
                                $$contentTexts[58].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 14012
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 13930
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "example",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 14164
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 14112
                        }, this),
                        "Example",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14564
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14433
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 14359
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 14214
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 14095
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[59].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 15510
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphonceeventname-callback",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphonceeventname-callback",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 15688
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 15616
                        }, this),
                        "Graph.once(eventName, callback)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.once(eventName,-callback)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16136
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16005
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 15931
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 15762
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 15579
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[60].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 17082
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[61].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 17115
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "parameters-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#parameters-1",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 17263
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 17206
                        }, this),
                        "Parameters",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Parameters",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 17669
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17538
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 17464
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 17316
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 17184
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[62].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18633
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[63].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18668
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[64].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18703
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[65].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18738
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[66].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18773
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 18629
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 18622
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18832
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18972
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18828
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19016
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19051
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[75].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[76].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19156
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19012
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 18821
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 18615
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "return-value-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#return-value-1",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 19295
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 19236
                        }, this),
                        "Return Value",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Return-Value",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19705
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19574
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 19500
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 19350
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 19212
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[77].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20659
                                }, this),
                                $$contentTexts[78].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 20655
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[79].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20737
                                }, this),
                                $$contentTexts[80].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 20733
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 20651
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "example-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example-1",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 20889
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 20835
                        }, this),
                        "Example",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21289
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21158
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 21084
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 20939
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 20816
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 22235
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphoff",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphoff",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 22375
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 22322
                        }, this),
                        "Graph.off()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.off()",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22783
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22652
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 22578
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 22429
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 22304
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 23729
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[83].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 23762
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "return-value-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#return-value-2",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 23914
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 23855
                        }, this),
                        "Return Value",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Return-Value",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24324
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24193
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 24119
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 23969
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 23831
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[84].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25278
                                }, this),
                                $$contentTexts[85].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 25274
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[86].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25356
                                }, this),
                                $$contentTexts[87].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 25352
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 25270
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "example-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example-2",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 25508
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 25454
                        }, this),
                        "Example",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25908
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25777
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 25703
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 25558
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 25435
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 26854
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphoffeventname",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphoffeventname",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 27012
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 26950
                        }, this),
                        "Graph.off(eventName)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.off(eventName)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27438
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27307
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 27233
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 27075
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 26923
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[89].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 28384
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[90].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 28417
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "parameters-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#parameters-2",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 28565
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 28508
                        }, this),
                        "Parameters",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Parameters",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 28971
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28840
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 28766
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 28618
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 28486
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[91].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29935
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[92].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29970
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[93].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30005
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[94].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30040
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[95].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30075
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 29931
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 29924
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[96].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30134
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[97].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30169
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[98].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30204
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[99].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30239
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[100].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30274
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 30130
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 30123
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 29917
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "return-value-3",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#return-value-3",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 30414
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 30355
                        }, this),
                        "Return Value",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Return-Value",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30824
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 30693
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 30619
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 30469
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 30331
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[101].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31778
                                }, this),
                                $$contentTexts[102].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 31774
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[103].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31858
                                }, this),
                                $$contentTexts[104].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 31854
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 31770
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "example-3",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example-3",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 32012
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 31958
                        }, this),
                        "Example",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 32412
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 32281
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 32207
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 32062
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 31939
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[105].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 33358
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphoffeventname-callback",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphoffeventname-callback",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 33535
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 33464
                        }, this),
                        "Graph.off(eventName, callback)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.off(eventName,-callback)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33981
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 33850
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 33776
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 33608
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 33428
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[106].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 34927
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[107].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 34961
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "parameters-3",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#parameters-3",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 35110
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 35053
                        }, this),
                        "Parameters",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Parameters",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35516
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 35385
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 35311
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 35163
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 35031
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[108].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36480
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[109].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36516
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[110].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36552
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[111].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36588
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[112].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36624
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 36476
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 36469
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36684
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36720
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36756
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36792
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36828
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36680
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36873
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36909
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36945
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36981
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37017
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36869
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 36673
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 36462
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "return-value-4",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#return-value-4",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 37157
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 37098
                        }, this),
                        "Return Value",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Return-Value",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 37567
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37436
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 37362
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 37212
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 37074
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[123].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38521
                                }, this),
                                $$contentTexts[124].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 38517
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[125].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38601
                                }, this),
                                $$contentTexts[126].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 38597
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 38513
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "example-4",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#example-4",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 38755
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 38701
                        }, this),
                        "Example",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Example",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 39155
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39024
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 38950
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 38805
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 38682
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[127].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 40101
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "event-constant-enums",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#event-constant-enums",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 40266
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 40201
                        }, this),
                        "Event Constant Enums",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Event-Constant-Enums",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 40692
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40561
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 40487
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 40329
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 40171
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[128].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 41638
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "node-events-nodeevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#node-events-nodeevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 41769
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 41703
                        }, this),
                        "Node Events (NodeEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Node-Events-(NodeEvent)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 42201
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42070
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 41996
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 41835
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 41672
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[129].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 43165
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[130].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 43201
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[131].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 43237
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 43161
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 43154
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43297
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[133].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 43337
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43382
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43293
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[136].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 43467
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43463
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43512
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43423
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[139].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 43597
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43593
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43642
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43553
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43687
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[142].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 43727
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43723
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43772
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43683
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[145].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 43857
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43853
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43902
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43813
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43947
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[148].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 43987
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43983
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44032
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43943
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44077
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[151].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 44117
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44113
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44162
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44073
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44207
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[154].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 44247
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44243
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44292
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44203
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44337
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[157].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 44377
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44373
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44422
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44333
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44467
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[160].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 44507
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44552
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44463
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[163].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 44637
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44633
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44682
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44593
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[166].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 44767
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44812
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44723
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44857
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[169].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 44897
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44893
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44942
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44853
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44987
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[172].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 45027
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45072
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44983
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45117
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[175].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 45157
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45153
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45202
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45113
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45247
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[178].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 45287
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45332
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45243
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45377
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[181].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 45417
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45413
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 45462
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45373
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 43286
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 43147
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "edge-events-edgeevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edge-events-edgeevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 45616
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 45550
                        }, this),
                        "Edge Events (EdgeEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Edge-Events-(EdgeEvent)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 46048
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45917
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 45843
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 45682
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 45519
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[183].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47012
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[184].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47048
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[185].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47084
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 47008
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 47001
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47144
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[187].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 47184
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47180
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[188].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47229
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47140
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[190].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 47314
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47310
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47359
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47270
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47404
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[193].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 47444
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47440
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[194].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47489
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47400
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[196].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 47574
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47570
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47619
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47530
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[199].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 47704
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47749
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47660
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47794
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[202].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 47834
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47830
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47879
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47790
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[205].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 47964
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47960
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48009
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47920
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[207].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[208].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 48094
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48090
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[209].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48139
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48050
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[210].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[211].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 48224
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48220
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[212].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48269
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48180
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48314
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[214].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 48354
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48350
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[215].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48399
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48310
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[216].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48444
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[217].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 48484
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48480
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[218].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48529
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48440
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[219].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48574
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[220].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 48614
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48659
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48570
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[222].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48704
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[223].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 48744
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48740
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[224].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48789
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48700
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[225].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48834
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[226].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 48874
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48870
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[227].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48919
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48830
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 47133
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 46994
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "combo-events-comboevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#combo-events-comboevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 49077
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 49009
                        }, this),
                        "Combo Events (ComboEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Combo-Events-(ComboEvent)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 49513
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49382
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 49308
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 49145
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 48976
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[228].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50477
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[229].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50513
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[230].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50549
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 50473
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 50466
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[231].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50609
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[232].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 50649
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[233].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50694
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 50605
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[234].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[235].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 50779
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50775
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[236].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50824
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 50735
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[237].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[238].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 50909
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50905
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[239].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50954
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 50865
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[240].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[241].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 51039
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51035
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[242].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51084
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 50995
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[243].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51129
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[244].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 51169
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51165
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[245].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51214
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51125
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[246].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51259
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[247].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 51299
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51295
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[248].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51344
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51255
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[249].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51389
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[250].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 51429
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[251].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51474
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51385
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[252].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51519
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[253].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 51559
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51555
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[254].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51604
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51515
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[255].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51649
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[256].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 51689
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51685
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[257].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51734
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51645
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[258].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51779
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[259].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 51819
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51815
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[260].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51864
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51775
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[261].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51909
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[262].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 51949
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51945
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[263].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51994
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51905
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[264].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52039
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[265].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 52079
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[266].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52124
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52035
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[267].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[268].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 52209
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52205
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[269].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52254
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52165
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[270].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52299
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[271].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 52339
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52335
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[272].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52384
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52295
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[273].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[274].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 52469
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52465
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[275].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52514
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52425
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[276].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52559
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[277].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 52599
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52595
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[278].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52644
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52555
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[279].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52689
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[280].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 52729
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52725
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[281].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52774
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52685
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 50598
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 50459
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "canvas-events-canvasevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#canvas-events-canvasevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 52936
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 52866
                        }, this),
                        "Canvas Events (CanvasEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Canvas-Events-(CanvasEvent)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53376
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53245
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 53171
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 53006
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 52831
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[282].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 54340
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[283].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 54376
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[284].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 54412
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 54336
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 54329
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[285].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54472
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[286].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 54512
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[287].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54557
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54468
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[288].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54602
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[289].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 54642
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54638
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[290].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54687
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54598
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[291].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54732
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[292].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 54772
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54768
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[293].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54817
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54728
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[294].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54862
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[295].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 54902
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54898
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[296].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54947
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54858
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[297].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[298].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 55032
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55028
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[299].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55077
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54988
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[300].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[301].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 55162
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55158
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[302].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55207
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55118
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[303].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55252
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[304].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 55292
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55288
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[305].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55337
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55248
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[306].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55382
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[307].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 55422
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55418
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[308].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55467
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55378
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[309].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55512
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[310].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 55552
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55548
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[311].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55597
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55508
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[312].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55642
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[313].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 55682
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55678
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[314].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55727
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55638
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[315].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55772
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[316].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 55812
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55808
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[317].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55857
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55768
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[318].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[319].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 55942
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[320].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55987
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55898
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[321].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56032
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[322].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 56072
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56068
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[323].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56117
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56028
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[324].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56162
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[325].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 56202
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56198
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[326].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56247
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56158
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[327].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[328].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 56332
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56328
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[329].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56377
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56288
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[330].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[331].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 56462
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56458
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[332].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56507
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56418
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[333].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56552
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[334].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 56592
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[335].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56637
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56548
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[336].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[337].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 56722
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56718
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[338].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56767
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56678
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 54461
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 54322
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graph-lifecycle-events-graphevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graph-lifecycle-events-graphevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 56945
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 56867
                        }, this),
                        "Graph Lifecycle Events (GraphEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph-Lifecycle-Events-(GraphEvent)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 57401
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57270
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 57196
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 57023
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 56824
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[339].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 58365
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[340].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 58401
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[341].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 58437
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 58361
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 58354
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[342].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58497
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[343].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58537
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58533
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[344].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58582
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58493
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[345].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58627
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[346].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58667
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58663
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[347].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58712
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58623
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[348].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58757
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[349].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58797
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58793
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[350].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58842
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58753
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[351].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[352].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58927
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[353].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58972
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58883
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[354].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59017
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[355].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 59057
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59053
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[356].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59102
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59013
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[357].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59147
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[358].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 59187
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59183
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[359].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59232
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59143
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[360].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59277
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[361].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 59317
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[362].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59362
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59273
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[363].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59407
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[364].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 59447
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[365].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59492
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59403
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[366].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59537
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[367].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 59577
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[368].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59622
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59533
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[369].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[370].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 59707
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[371].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59752
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59663
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[372].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59797
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[373].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 59837
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59833
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[374].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59882
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59793
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[375].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59927
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[376].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 59967
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 59963
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[377].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60012
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59923
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[378].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60057
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[379].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 60097
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60093
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[380].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60142
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60053
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[381].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[382].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 60227
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60223
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[383].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60272
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60183
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[384].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60317
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[385].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 60357
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60353
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[386].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60402
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60313
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[387].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[388].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 60487
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60483
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[389].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60532
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60443
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[390].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60577
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[391].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 60617
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60613
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[392].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60662
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60573
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[393].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60707
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[394].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 60747
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[395].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60792
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60703
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[396].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[397].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 60877
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60873
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[398].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60922
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60833
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[399].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 60967
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[400].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 61007
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[401].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61052
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60963
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[402].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61097
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[403].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 61137
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61133
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[404].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61182
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 61093
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[405].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[406].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 61267
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[407].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61312
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 61223
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[408].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[409].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 61397
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[410].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61442
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 61353
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[411].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[412].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 61527
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61523
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[413].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61572
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 61483
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[414].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61617
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[415].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 61657
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61653
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[416].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61702
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 61613
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[417].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61747
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[418].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 61787
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61783
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[419].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61832
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 61743
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[420].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[421].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 61917
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61913
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[422].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 61962
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 61873
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[423].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62007
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[424].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 62047
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62043
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[425].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62092
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 62003
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[426].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62137
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[427].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 62177
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[428].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62222
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 62133
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[429].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62267
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[430].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 62307
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62303
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[431].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 62352
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 62263
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 58486
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 58347
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "container-events-containerevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#container-events-containerevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 62526
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 62450
                        }, this),
                        "Container Events (ContainerEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Container-Events-(ContainerEvent)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 62978
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 62847
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 62773
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 62602
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 62409
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[432].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 63942
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[433].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 63978
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[434].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 64014
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 63938
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 63931
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[435].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[436].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 64114
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[437].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64159
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64070
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[438].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64204
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[439].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 64244
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64240
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[440].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64289
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64200
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 64063
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 63924
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "common-events-commonevent",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#common-events-commonevent",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 64451
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 64381
                        }, this),
                        "Common Events (CommonEvent)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Common-Events-(CommonEvent)",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 64891
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64760
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 64686
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 64521
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 64346
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[441].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 65837
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[442].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65889
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[443].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65925
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[444].value
                                    }, void 0, false, {
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65961
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 65885
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 65878
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[445].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66021
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[446].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66061
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66057
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[447].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66106
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66017
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[448].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66151
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[449].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66191
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[450].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66236
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66147
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[451].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66281
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[452].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66321
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66317
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[453].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66366
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66277
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[454].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[455].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66451
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[456].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66496
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66407
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[457].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66541
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[458].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66581
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66577
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[459].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66626
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66537
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[460].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[461].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66711
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66707
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[462].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66756
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66667
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[463].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66801
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[464].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66841
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[465].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66886
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66797
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[466].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66931
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[467].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66971
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66967
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[468].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67016
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66927
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[469].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67061
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[470].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 67101
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67097
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[471].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67146
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67057
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[472].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67191
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[473].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 67231
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[474].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67276
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67187
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[475].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67321
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[476].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 67361
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[477].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67406
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67317
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[478].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67451
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[479].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 67491
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[480].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67536
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67447
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[481].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67581
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[482].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 67621
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67617
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[483].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67666
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67577
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[484].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67711
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[485].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 67751
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67747
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[486].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67796
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67707
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[487].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[488].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 67881
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[489].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67926
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67837
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[490].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67971
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[491].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 68011
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68007
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[492].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68056
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67967
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[493].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68101
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[494].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 68141
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68137
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[495].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68186
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68097
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[496].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68231
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[497].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 68271
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68267
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[498].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68316
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68227
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[499].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68361
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[500].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 68401
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68397
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[501].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68446
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68357
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[502].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68491
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[503].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 68531
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68527
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[504].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68576
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68487
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[505].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[506].value
                                            }, void 0, false, {
                                                fileName: "docs/api/event.en.md",
                                                lineNumber: 21,
                                                columnNumber: 68661
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68657
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[507].value
                                        }, void 0, false, {
                                            fileName: "docs/api/event.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68706
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68617
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 66010
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 65871
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "tips-for-use",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#tips-for-use",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 68842
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 68785
                        }, this),
                        "Tips for Use",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Tips-for-Use",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 69252
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 69121
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 69047
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 68897
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 68763
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "chain-calls",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#chain-calls",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 70275
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 70219
                        }, this),
                        "Chain Calls",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Chain-Calls",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 70683
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 70552
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 70478
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 70329
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 70198
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[508].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 71629
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[509].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 71663
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "event-delegation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#event-delegation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 71820
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 71759
                        }, this),
                        "Event Delegation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Event-Delegation",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 72238
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 72107
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 72033
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 71879
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 71733
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[510].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 73184
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[511].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 73218
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "event-object-properties",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#event-object-properties",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 73389
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 73321
                        }, this),
                        "Event Object Properties",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Event-Object-Properties",
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
                                        fileName: "docs/api/event.en.md",
                                        lineNumber: 21,
                                        columnNumber: 73821
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 73690
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/event.en.md",
                                lineNumber: 21,
                                columnNumber: 73616
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 73455
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 73288
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[512].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 74767
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[513].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74809
                                }, this),
                                $$contentTexts[514].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 74805
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[515].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74885
                                }, this),
                                $$contentTexts[516].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 74881
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[517].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74961
                                }, this),
                                $$contentTexts[518].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 74957
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[519].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 75037
                                }, this),
                                $$contentTexts[520].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 75033
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[521].value
                                }, void 0, false, {
                                    fileName: "docs/api/event.en.md",
                                    lineNumber: 21,
                                    columnNumber: 75113
                                }, this),
                                $$contentTexts[522].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/event.en.md",
                            lineNumber: 21,
                            columnNumber: 75109
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 74801
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[523].value
                }, void 0, false, {
                    fileName: "docs/api/event.en.md",
                    lineNumber: 21,
                    columnNumber: 75190
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/event.en.md",
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
                fileName: "docs/api/event.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/event.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/event.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/event.en.md",
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
//# sourceMappingURL=docs_api_event_en_md-async.js.map