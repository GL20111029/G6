((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/overview.zh.md'],
{ "docs/manual/plugin/overview.zh.md": function (module, exports, __mako_require__){
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
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "什么是插件",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#什么是插件",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 103
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 53
                            }, this),
                            "什么是插件",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "什么是插件",
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
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 499
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 368
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 294
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 151
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        width: "200px",
                        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*sa3jRqp83K4AAAAAAAAAAAAADmJ7AQ/original"
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1445
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[0].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1567
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[1].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/plugin/tooltip",
                                children: $$contentTexts[2].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1627
                            }, this),
                            $$contentTexts[3].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/plugin/grid-line",
                                children: $$contentTexts[4].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1718
                            }, this),
                            $$contentTexts[5].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/plugin/history",
                                children: $$contentTexts[6].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1811
                            }, this),
                            $$contentTexts[7].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1599
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "内置插件",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#内置插件",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1969
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 1920
                            }, this),
                            "内置插件",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "内置插件",
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
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2363
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2232
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2158
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 2016
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 1906
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 3309
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[9].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3359
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3428
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3463
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3355
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3348
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[13].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 3526
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3522
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3574
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3580
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3586
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3518
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3601
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/grid-line",
                                                    children: $$contentTexts[14].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 3611
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3607
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[15].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 3689
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3685
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[16].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3733
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3597
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3777
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/background",
                                                    children: $$contentTexts[17].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 3787
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3783
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[18].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 3866
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3862
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[19].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3910
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3773
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3954
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/watermark",
                                                    children: $$contentTexts[20].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 3964
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 3960
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4042
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4038
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[22].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4086
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3950
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4130
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/hull",
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4140
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4136
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[24].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4213
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4209
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4257
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4126
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4301
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/bubble-sets",
                                                    children: $$contentTexts[26].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4311
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4307
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[27].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4391
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4387
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[28].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4435
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4297
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4479
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/snapline",
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4489
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4485
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[30].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4566
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4562
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[31].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4610
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4475
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[32].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4658
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4654
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4706
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4712
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4718
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4650
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4733
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/minimap",
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4743
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4739
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4819
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4815
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[35].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4863
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4729
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4907
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/fullscreen",
                                                    children: $$contentTexts[36].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4917
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4913
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[37].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 4996
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 4992
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[38].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5040
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4903
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5084
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/timebar",
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5094
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5090
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[40].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5170
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5166
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[41].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5214
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5080
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[42].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5262
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5258
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5310
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5316
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5322
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5254
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5337
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/toolbar",
                                                    children: $$contentTexts[43].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5347
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5343
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[44].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5423
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5419
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[45].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5467
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5333
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5511
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/contextmenu",
                                                    children: $$contentTexts[46].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5521
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5517
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5601
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5597
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[48].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5645
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5507
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5689
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/tooltip",
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5699
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5695
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[50].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5775
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5771
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[51].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5819
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5685
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5863
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/legend",
                                                    children: $$contentTexts[52].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5873
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5869
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5948
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5944
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[54].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 5992
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5859
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6040
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6036
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6088
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6094
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6100
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6032
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6115
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/fisheye",
                                                    children: $$contentTexts[56].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6125
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6121
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6201
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6197
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[58].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6245
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6111
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6289
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/edge-filter-lens",
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6299
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6295
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[60].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6384
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6380
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[61].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6428
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6285
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6472
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/edge-bundling",
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6482
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6478
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[63].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6564
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6560
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[64].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6608
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6468
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6656
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6652
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6704
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6710
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6716
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6648
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6731
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "/manual/plugin/history",
                                                    children: $$contentTexts[66].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6741
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6737
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6817
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6813
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[68].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6861
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6727
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6905
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/plugins/camera-setting.ts",
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6915
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6911
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[70].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/plugin/overview.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7043
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7039
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[71].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/plugin/overview.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7087
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6901
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 3511
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 3341
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[72].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/plugin/grid-line",
                                children: $$contentTexts[73].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7172
                            }, this),
                            $$contentTexts[74].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 7143
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "配置方式",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置方式",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7334
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7285
                            }, this),
                            "配置方式",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置方式",
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
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 7728
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7597
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7523
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 7381
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 7271
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "基本配置",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#基本配置",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8737
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8688
                            }, this),
                            "基本配置",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "基本配置",
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
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9131
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9000
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8926
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 8784
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 8674
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[75].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[76].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10106
                            }, this),
                            $$contentTexts[77].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 10077
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[78].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 10175
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "配置插件参数",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#配置插件参数",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10311
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10260
                            }, this),
                            "配置插件参数",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "配置插件参数",
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
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10709
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10578
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10504
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 10360
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 10244
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[79].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[80].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11684
                            }, this),
                            $$contentTexts[81].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11655
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        highlightLines: [
                            5,
                            6,
                            7,
                            8,
                            9
                        ],
                        children: $$contentTexts[82].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11753
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "动态更新插件",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#动态更新插件",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11922
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11871
                            }, this),
                            "动态更新插件",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "动态更新插件",
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
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12320
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12189
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12115
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 11971
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 11855
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[83].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13266
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[84].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/plugin#graphgetplugins",
                                children: $$contentTexts[85].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13328
                            }, this),
                            $$contentTexts[86].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13299
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[87].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13430
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[88].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/plugin#graphsetpluginsplugins",
                                children: $$contentTexts[89].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13528
                            }, this),
                            $$contentTexts[90].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13499
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[91].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13637
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[92].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/plugin#graphupdatepluginplugin",
                                children: $$contentTexts[93].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 13735
                            }, this),
                            $$contentTexts[94].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13706
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        highlightLines: [
                            6,
                            14
                        ],
                        children: $$contentTexts[95].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 13845
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/plugin/overview.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[96].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[97].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 14011
                        }, this),
                        $$contentTexts[98].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[99].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 14076
                        }, this),
                        $$contentTexts[100].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 13982
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/plugin/overview.zh.md",
                lineNumber: 21,
                columnNumber: 13945
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "卸载插件",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#卸载插件",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14247
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14198
                            }, this),
                            "卸载插件",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "卸载插件",
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
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14641
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14510
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14436
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 14294
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 14184
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[101].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/plugin#graphsetpluginsplugins",
                                children: $$contentTexts[102].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 15617
                            }, this),
                            $$contentTexts[103].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 15587
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[104].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 15728
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "调用插件方法",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#调用插件方法",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15865
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 15814
                            }, this),
                            "调用插件方法",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "调用插件方法",
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
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16263
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16132
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16058
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 15914
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 15798
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[105].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[106].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17239
                            }, this),
                            $$contentTexts[107].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[108].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17306
                            }, this),
                            $$contentTexts[109].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[110].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17373
                            }, this),
                            $$contentTexts[111].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17209
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[112].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/plugin#graphgetplugininstancekey",
                                children: $$contentTexts[113].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17474
                            }, this),
                            $$contentTexts[114].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17444
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[115].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17588
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/plugin/overview.zh.md",
                lineNumber: 21,
                columnNumber: 14158
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[116].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 17704
                        }, this),
                        $$contentTexts[117].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[118].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 17771
                        }, this),
                        $$contentTexts[119].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[120].value
                        }, void 0, false, {
                            fileName: "docs/manual/plugin/overview.zh.md",
                            lineNumber: 21,
                            columnNumber: 17838
                        }, this),
                        $$contentTexts[121].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/plugin/overview.zh.md",
                    lineNumber: 21,
                    columnNumber: 17701
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/plugin/overview.zh.md",
                lineNumber: 21,
                columnNumber: 17664
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[122].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/plugin",
                                children: $$contentTexts[123].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 17977
                            }, this),
                            $$contentTexts[124].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 17947
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "自定义插件",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义插件",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18130
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 18080
                            }, this),
                            "自定义插件",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义插件",
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
                                            fileName: "docs/manual/plugin/overview.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18526
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/plugin/overview.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18395
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/plugin/overview.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18321
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 18178
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 18065
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[125].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19472
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[126].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 19510
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[127].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 19546
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19506
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[128].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/plugin/custom-plugin",
                                children: $$contentTexts[129].value
                            }, void 0, false, {
                                fileName: "docs/manual/plugin/overview.zh.md",
                                lineNumber: 21,
                                columnNumber: 19617
                            }, this),
                            $$contentTexts[130].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19587
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[131].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19722
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[132].value
                    }, void 0, false, {
                        fileName: "docs/manual/plugin/overview.zh.md",
                        lineNumber: 21,
                        columnNumber: 19792
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/plugin/overview.zh.md",
                lineNumber: 21,
                columnNumber: 17921
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
                fileName: "docs/manual/plugin/overview.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/plugin/overview.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/plugin/overview.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/plugin/overview.zh.md",
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
//# sourceMappingURL=docs_manual_plugin_overview_zh_md-async.js.map