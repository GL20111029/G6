((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['../g6-extension-react/src/react-node/render18.ts'],
{ "../g6-extension-react/src/react-node/render18.ts": function (module, exports, __mako_require__){
"use strict";
var interop = __mako_require__("@swc/helpers/_/_interop_require_wildcard")._;
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    render: function() {
        return render;
    },
    unmount: function() {
        return unmount;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("../../node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js"));
var _reactdom = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("../../node_modules/.pnpm/react-dom@19.2.0_react@19.2.0/node_modules/react-dom/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const MARK = '__rc_react_root__';
let ReactDOMClientPromise = null;
/**
 * <zh/> 初始化 React 18+ 的 createRoot
 *
 * <en/> Initialize React 18+ createRoot
 * @returns ReactDOMClient
 */ function initReactDOMClient() {
    if (ReactDOMClientPromise === null) ReactDOMClientPromise = Promise.all([
        __mako_require__.ensure("../../node_modules/.pnpm/react-dom@19.2.0_react@19.2.0/node_modules/react-dom/client.js")
    ]).then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "../../node_modules/.pnpm/react-dom@19.2.0_react@19.2.0/node_modules/react-dom/client.js"))).catch(()=>null);
    return ReactDOMClientPromise;
}
/**
 * <zh/> 切换警告
 *
 * <en/> Toggle warning
 * @param skip <zh/> 是否跳过警告 | <en/> Whether to skip the warning
 */ function toggleWarning(skip) {
    try {
        const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = _reactdom;
        if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object') __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
    } catch  {
    // Silent error
    }
}
async function render(node, container) {
    const client = await initReactDOMClient();
    if (!(client === null || client === void 0 ? void 0 : client.createRoot)) throw new Error('React 18+ createRoot not available');
    toggleWarning(true);
    const root = container[MARK] || client.createRoot(container);
    toggleWarning(false);
    root.render(node);
    container[MARK] = root;
}
async function unmount(container) {
    // Delay to unmount to avoid React 18 sync warning
    return Promise.resolve().then(()=>{
        var _container_MARK;
        (_container_MARK = container[MARK]) === null || _container_MARK === void 0 || _container_MARK.unmount();
        delete container[MARK];
    });
}
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
//# sourceMappingURL=pd__g6-extension-react_src_react-node_render18_ts-async.js.map