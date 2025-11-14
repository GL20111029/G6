((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/Html.zh.md?type=text'],
{ "docs/manual/element/node/Html.zh.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("../../node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js"));
__mako_require__("docs/manual/element/node/Html.zh.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "HTML 节点是一个自定义的矩形区域，用于显示 HTML 内容。它允许您在图形节点中嵌入任意的 HTML 元素，提供了极大的灵活性来创建复杂的自定义节点。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "适用场景：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "用于表示复杂的自定义节点，如表格、图表或富文本",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "适合表示自定义的可视化元素或交互组件",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "常用于自定义图表、UI 设计、仪表板等场景",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "需要在节点中嵌入表单、按钮等交互元素时",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "💡 提示",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "React 项目",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "：推荐使用 ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "React Node",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 来实现更好的组件化开发体验",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Vue 项目",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "：目前暂不支持 Vue Node，欢迎社区共建贡献",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "原生 HTML",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "：本文档介绍的 HTML 节点适用于原生 HTML 开发",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        {\n          id: 'node1',\n          style: {\n            x: 300,\n            y: 110,\n            size: [120, 40],\n            innerHTML: `\n<div style=\"width: 100%; height: 100%; background: #7e3feb; display: flex; justify-content: center; align-items: center;\">\n  <span style=\"color: #fff; font-size: 12px;\">\n    HTML Node\n  </span>\n</div>`,\n          },\n        },\n      ],\n    },\n    node: { type: 'html' },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'html' }, 'type').disable();\n\n    const options = {\n      size: 50,\n      innerHTML: `\n<div style=\"width: 100%; height: 100%; background: #7863FF; display: flex; justify-content: center; align-items: center;\">\n  <span style=\"color: #fff; font-size: 20px;\">\n    'HTML Node'\n  </span>\n</div>`,\n    };\n    const optionFolder = gui.addFolder('html.style');\n    optionFolder.add(options, 'size', 0, 100, 1);\n    optionFolder.add(options, 'innerHTML');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateNodeData([{ id: 'node1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "设置 ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "node.type",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": " 为 ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "html",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": " 以使用 HTML 节点。",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "如果元素有其特定的属性，我们将在下面列出。对于所有的通用样式属性，见 ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "BaseNode",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "dx",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "横行偏移量。HTML 容器默认以左上角为原点，通过 dx 来进行横向偏移",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "0",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "dy",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "纵向偏移量。HTML 容器默认以左上角为原点，通过 dy 来进行纵向偏移",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "0",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "innerHTML",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "HTML 内容，可以为字符串或者 ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "HTMLElement",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "string | ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "HTMLElement",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'node-1', data: { location: 'East', status: 'error', ip: '192.168.1.2' } },\n      { id: 'node-2', data: { location: 'West', status: 'overload', ip: '192.168.1.3' } },\n      { id: 'node-3', data: { location: 'South', status: 'running', ip: '192.168.1.4' } },\n    ],\n  },\n  node: {\n    type: 'html',\n    style: {\n      size: [240, 80],\n      dx: -120,\n      dy: -40,\n      innerHTML: (d) => {\n        const ICON_MAP = {\n          error: '&#10060;',\n          overload: '&#9889;',\n          running: '&#9989;',\n        };\n\n        const COLOR_MAP = {\n          error: '#f5222d',\n          overload: '#faad14',\n          running: '#52c41a',\n        };\n\n        const {\n          data: { location, status, ip },\n        } = d;\n        const color = COLOR_MAP[status];\n\n        return `\n<div \n  style=\"\n    width:100%; \n    height: 100%; \n    background: ${color}bb; \n    border: 1px solid ${color};\n    color: #fff;\n    user-select: none;\n    display: flex; \n    padding: 10px;\n    border-radius: 8px;\n    \"\n>\n  <div style=\"display: flex;flex-direction: column;flex: 1;\">\n    <div style=\"font-weight: bold; font-size: 14px;\">\n      ${location} Node\n    </div>\n    <div style=\"font-size: 12px; margin-top: 4px;\">\n      status: ${status} ${ICON_MAP[status]}\n    </div>\n  </div>\n  <div>\n    <span style=\"border: 1px solid white; padding: 2px 6px; border-radius: 4px; font-size: 12px;\">\n      ${ip}\n    </span>\n  </div>\n</div>`;\n      },\n    },\n  },\n  layout: {\n    type: 'grid',\n  },\n  behaviors: ['drag-element', 'zoom-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'server-1', data: { name: 'Web Server', cpu: 45, memory: 67, status: 'online' } },\n      { id: 'server-2', data: { name: 'Database', cpu: 78, memory: 89, status: 'warning' } },\n      { id: 'server-3', data: { name: 'Cache Server', cpu: 23, memory: 34, status: 'offline' } },\n    ],\n  },\n  node: {\n    type: 'html',\n    style: {\n      size: [280, 210],\n      dx: -140,\n      dy: -105,\n      innerHTML: (d) => {\n        const { data } = d;\n        const statusColors = {\n          online: '#52c41a',\n          warning: '#faad14',\n          offline: '#f5222d',\n        };\n\n        return `\n<div style=\"\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  border: 2px solid ${statusColors[data.status]};\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n\">\n  <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;\">\n    <h3 style=\"margin: 0; font-size: 16px; color: #333;\">${data.name}</h3>\n    <span style=\"\n      background: ${statusColors[data.status]};\n      color: white;\n      padding: 2px 8px;\n      border-radius: 12px;\n      font-size: 12px;\n      font-weight: bold;\n    \">${data.status.toUpperCase()}</span>\n  </div>\n\n  <div style=\"margin-bottom: 12px;\">\n    <div style=\"display: flex; justify-content: space-between; margin-bottom: 4px;\">\n      <span style=\"font-size: 12px; color: #666;\">CPU</span>\n      <span style=\"font-size: 12px; color: #333;\">${data.cpu}%</span>\n    </div>\n    <div style=\"background: #f0f0f0; height: 6px; border-radius: 3px; overflow: hidden;\">\n      <div style=\"background: ${data.cpu > 70 ? '#f5222d' : '#52c41a'}; height: 100%; width: ${data.cpu}%; transition: width 0.3s;\"></div>\n    </div>\n  </div>\n\n  <div style=\"margin-bottom: 12px;\">\n    <div style=\"display: flex; justify-content: space-between; margin-bottom: 4px;\">\n      <span style=\"font-size: 12px; color: #666;\">Memory</span>\n      <span style=\"font-size: 12px; color: #333;\">${data.memory}%</span>\n    </div>\n    <div style=\"background: #f0f0f0; height: 6px; border-radius: 3px; overflow: hidden;\">\n      <div style=\"background: ${data.memory > 80 ? '#f5222d' : '#1890ff'}; height: 100%; width: ${data.memory}%; transition: width 0.3s;\"></div>\n    </div>\n  </div>\n\n  <div style=\"display: flex; gap: 8px;\">\n    <button\n      onclick=\"handleRestart('${d.id}')\"\n      style=\"\n        flex: 1;\n        padding: 6px 12px;\n        background: #1890ff;\n        color: white;\n        border: none;\n        border-radius: 6px;\n        font-size: 12px;\n        cursor: pointer;\n        transition: background 0.2s;\n      \"\n      onmouseover=\"this.style.background='#40a9ff'\"\n      onmouseout=\"this.style.background='#1890ff'\"\n    >重启</button>\n    <button\n      onclick=\"handleMonitor('${d.id}')\"\n      style=\"\n        flex: 1;\n        padding: 6px 12px;\n        background: #52c41a;\n        color: white;\n        border: none;\n        border-radius: 6px;\n        font-size: 12px;\n        cursor: pointer;\n        transition: background 0.2s;\n      \"\n      onmouseover=\"this.style.background='#73d13d'\"\n      onmouseout=\"this.style.background='#52c41a'\"\n    >监控</button>\n  </div>\n</div>`;\n      },\n    },\n  },\n  layout: {\n    type: 'grid',\n    cols: 2,\n  },\n  behaviors: ['drag-element', 'zoom-canvas'],\n});\n\n// 全局函数处理按钮点击\nwindow.handleRestart = (nodeId) => {\n  console.log(`重启服务器: ${nodeId}`);\n  alert(`正在重启服务器 ${nodeId}...`);\n};\n\nwindow.handleMonitor = (nodeId) => {\n  console.log(`打开监控面板: ${nodeId}`);\n  alert(`打开服务器 ${nodeId} 的监控面板`);\n};\n\ngraph.render();\n",
        "paraId": 12,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'form-1', data: { title: '用户信息', type: 'user-form' } },\n      { id: 'form-2', data: { title: '配置面板', type: 'config-form' } },\n    ],\n  },\n  node: {\n    type: 'html',\n    style: {\n      size: [300, 400],\n      dx: -150,\n      dy: -200,\n      innerHTML: (d) => {\n        const { data } = d;\n\n        return `\n<div style=\"\n  width: 100%; \n  height: 100%; \n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n\">\n  <h3 style=\"margin: 0 0 16px 0; color: #333; font-size: 16px;\">${data.title}</h3>\n  \n  <div style=\"margin-bottom: 12px;\">\n    <label style=\"display: block; margin-bottom: 4px; font-size: 14px; color: #666;\">姓名</label>\n    <input \n      type=\"text\" \n      placeholder=\"请输入姓名\"\n      style=\"\n        width: 100%;\n        padding: 8px 12px;\n        border: 1px solid #d9d9d9;\n        border-radius: 4px;\n        font-size: 14px;\n        box-sizing: border-box;\n      \"\n    />\n  </div>\n  \n  <div style=\"margin-bottom: 12px;\">\n    <label style=\"display: block; margin-bottom: 4px; font-size: 14px; color: #666;\">邮箱</label>\n    <input \n      type=\"email\" \n      placeholder=\"请输入邮箱\"\n      style=\"\n        width: 100%;\n        padding: 8px 12px;\n        border: 1px solid #d9d9d9;\n        border-radius: 4px;\n        font-size: 14px;\n        box-sizing: border-box;\n      \"\n    />\n  </div>\n  \n  <div style=\"margin-bottom: 16px;\">\n    <label style=\"display: block; margin-bottom: 4px; font-size: 14px; color: #666;\">角色</label>\n    <select style=\"\n      width: 100%;\n      padding: 8px 12px;\n      border: 1px solid #d9d9d9;\n      border-radius: 4px;\n      font-size: 14px;\n      box-sizing: border-box;\n    \">\n      <option>管理员</option>\n      <option>用户</option>\n      <option>访客</option>\n    </select>\n  </div>\n  \n  <div style=\"display: flex; gap: 8px;\">\n    <button \n      onclick=\"handleSave('${d.id}')\"\n      style=\"\n        flex: 1;\n        padding: 8px 16px;\n        background: #1890ff;\n        color: white;\n        border: none;\n        border-radius: 4px;\n        font-size: 14px;\n        cursor: pointer;\n      \"\n    >保存</button>\n    <button \n      onclick=\"handleCancel('${d.id}')\"\n      style=\"\n        flex: 1;\n        padding: 8px 16px;\n        background: #f5f5f5;\n        color: #333;\n        border: 1px solid #d9d9d9;\n        border-radius: 4px;\n        font-size: 14px;\n        cursor: pointer;\n      \"\n    >取消</button>\n  </div>\n</div>`;\n      },\n    },\n  },\n  layout: {\n    type: 'grid',\n    cols: 2,\n  },\n  behaviors: ['drag-element', 'zoom-canvas'],\n});\n\n// 全局函数处理表单操作\nwindow.handleSave = (nodeId) => {\n  console.log(`保存表单: ${nodeId}`);\n  alert(`表单 ${nodeId} 已保存`);\n};\n\nwindow.handleCancel = (nodeId) => {\n  console.log(`取消表单: ${nodeId}`);\n  alert(`取消表单 ${nodeId} 操作`);\n};\n\ngraph.render();\n",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "HTML 节点相比普通图形节点有更高的渲染成本，建议在节点数量较少时使用",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "复杂的 HTML 结构会影响性能，建议保持结构简洁",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "避免在 HTML 中使用过多的动画效果",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "HTML 节点中的事件处理需要通过全局函数或事件委托来实现",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": "建议将事件处理函数挂载到 ",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": "window",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": " 对象上，确保在 HTML 字符串中可以访问",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": "注意防止事件冒泡影响图的交互行为",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": "HTML 节点的样式可能会受到页面全局样式的影响",
        "paraId": 16,
        "tocIndex": 11
    },
    {
        "value": "建议使用内联样式或确保样式的特异性足够高",
        "paraId": 16,
        "tocIndex": 11
    },
    {
        "value": "考虑使用 CSS-in-JS 或样式命名空间来避免样式冲突",
        "paraId": 16,
        "tocIndex": 11
    },
    {
        "value": "HTML 节点的尺寸是固定的，不会自动适应内容",
        "paraId": 17,
        "tocIndex": 12
    },
    {
        "value": "需要根据内容动态计算节点尺寸，或使用响应式布局",
        "paraId": 17,
        "tocIndex": 12
    },
    {
        "value": "考虑在不同缩放级别下的显示效果",
        "paraId": 17,
        "tocIndex": 12
    },
    {
        "value": "React 项目",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": "：推荐使用 ",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": "React Node",
        "paraId": 19,
        "tocIndex": 13
    },
    {
        "value": "，可以直接使用 React 组件作为节点内容",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": "Vue 项目",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": "：目前暂不支持 Vue Node，如有需求欢迎社区贡献",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": "原生项目",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": "：HTML 节点是最佳选择，提供了最大的灵活性",
        "paraId": 18,
        "tocIndex": 13
    }
];
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
//# sourceMappingURL=docs_manual_element_node_Html_zh_md_q_hK4X-async.js.map