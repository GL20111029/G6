((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/Html.en.md?type=text'],
{ "docs/manual/element/node/Html.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/Html.en.md?watch=parent");
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
        "value": "HTML node is a custom rectangular area used to display HTML content. It allows you to embed arbitrary HTML elements within graph nodes, providing great flexibility for creating complex custom nodes.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Use Cases:",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Used to represent complex custom nodes such as tables, charts, or rich text",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Suitable for representing custom visual elements or interactive components",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Commonly used in custom charts, UI design, dashboards, and other scenarios",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "When you need to embed interactive elements like forms and buttons in nodes",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "💡 Tips",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "React Projects",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": ": Recommended to use ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "React Node",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " for better component-based development experience",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Vue Projects",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": ": Vue Node is not currently supported, community contributions are welcome",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Native HTML",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": ": The HTML node introduced in this document is suitable for native HTML development",
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
        "value": "If the element has specific properties, we will list them below. For all common style properties, see ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "BaseNode",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "dx",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Horizontal offset. HTML container defaults to top-left corner as origin, use dx for horizontal offset",
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
        "value": "Vertical offset. HTML container defaults to top-left corner as origin, use dy for vertical offset",
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
        "value": "HTML content, can be string or ",
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
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'server-1', data: { name: 'Web Server', cpu: 45, memory: 67, status: 'online' } },\n      { id: 'server-2', data: { name: 'Database', cpu: 78, memory: 89, status: 'warning' } },\n      { id: 'server-3', data: { name: 'Cache Server', cpu: 23, memory: 34, status: 'offline' } },\n    ],\n  },\n  node: {\n    type: 'html',\n    style: {\n      size: [280, 210],\n      dx: -140,\n      dy: -105,\n      innerHTML: (d) => {\n        const { data } = d;\n        const statusColors = {\n          online: '#52c41a',\n          warning: '#faad14',\n          offline: '#f5222d',\n        };\n\n        return `\n<div style=\"\n  width: 100%; \n  height: 100%; \n  background: #fff;\n  border: 2px solid ${statusColors[data.status]};\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n\">\n  <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;\">\n    <h3 style=\"margin: 0; font-size: 16px; color: #333;\">${data.name}</h3>\n    <span style=\"\n      background: ${statusColors[data.status]};\n      color: white;\n      padding: 2px 8px;\n      border-radius: 12px;\n      font-size: 12px;\n      font-weight: bold;\n    \">${data.status.toUpperCase()}</span>\n  </div>\n  \n  <div style=\"margin-bottom: 12px;\">\n    <div style=\"display: flex; justify-content: space-between; margin-bottom: 4px;\">\n      <span style=\"font-size: 12px; color: #666;\">CPU</span>\n      <span style=\"font-size: 12px; color: #333;\">${data.cpu}%</span>\n    </div>\n    <div style=\"background: #f0f0f0; height: 6px; border-radius: 3px; overflow: hidden;\">\n      <div style=\"background: ${data.cpu > 70 ? '#f5222d' : '#52c41a'}; height: 100%; width: ${data.cpu}%; transition: width 0.3s;\"></div>\n    </div>\n  </div>\n  \n  <div style=\"margin-bottom: 12px;\">\n    <div style=\"display: flex; justify-content: space-between; margin-bottom: 4px;\">\n      <span style=\"font-size: 12px; color: #666;\">Memory</span>\n      <span style=\"font-size: 12px; color: #333;\">${data.memory}%</span>\n    </div>\n    <div style=\"background: #f0f0f0; height: 6px; border-radius: 3px; overflow: hidden;\">\n      <div style=\"background: ${data.memory > 80 ? '#f5222d' : '#1890ff'}; height: 100%; width: ${data.memory}%; transition: width 0.3s;\"></div>\n    </div>\n  </div>\n  \n  <div style=\"display: flex; gap: 8px;\">\n    <button \n      onclick=\"handleRestart('${d.id}')\"\n      style=\"\n        flex: 1;\n        padding: 6px 12px;\n        background: #1890ff;\n        color: white;\n        border: none;\n        border-radius: 6px;\n        font-size: 12px;\n        cursor: pointer;\n        transition: background 0.2s;\n      \"\n      onmouseover=\"this.style.background='#40a9ff'\"\n      onmouseout=\"this.style.background='#1890ff'\"\n    >Restart</button>\n    <button \n      onclick=\"handleMonitor('${d.id}')\"\n      style=\"\n        flex: 1;\n        padding: 6px 12px;\n        background: #52c41a;\n        color: white;\n        border: none;\n        border-radius: 6px;\n        font-size: 12px;\n        cursor: pointer;\n        transition: background 0.2s;\n      \"\n      onmouseover=\"this.style.background='#73d13d'\"\n      onmouseout=\"this.style.background='#52c41a'\"\n    >Monitor</button>\n  </div>\n</div>`;\n      },\n    },\n  },\n  layout: {\n    type: 'grid',\n    cols: 2,\n  },\n  behaviors: ['drag-element', 'zoom-canvas'],\n});\n\n// Global functions to handle button clicks\nwindow.handleRestart = (nodeId) => {\n  console.log(`Restarting server: ${nodeId}`);\n  alert(`Restarting server ${nodeId}...`);\n};\n\nwindow.handleMonitor = (nodeId) => {\n  console.log(`Opening monitoring panel: ${nodeId}`);\n  alert(`Opening monitoring panel for server ${nodeId}`);\n};\n\ngraph.render();\n",
        "paraId": 12,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'form-1', data: { title: 'User Information', type: 'user-form' } },\n      { id: 'form-2', data: { title: 'Configuration Panel', type: 'config-form' } },\n    ],\n  },\n  node: {\n    type: 'html',\n    style: {\n      size: [300, 400],\n      dx: -150,\n      dy: -200,\n      innerHTML: (d) => {\n        const { data } = d;\n\n        return `\n<div style=\"\n  width: 100%; \n  height: 100%; \n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n\">\n  <h3 style=\"margin: 0 0 16px 0; color: #333; font-size: 16px;\">${data.title}</h3>\n  \n  <div style=\"margin-bottom: 12px;\">\n    <label style=\"display: block; margin-bottom: 4px; font-size: 14px; color: #666;\">Name</label>\n    <input \n      type=\"text\" \n      placeholder=\"Enter name\"\n      style=\"\n        width: 100%;\n        padding: 8px 12px;\n        border: 1px solid #d9d9d9;\n        border-radius: 4px;\n        font-size: 14px;\n        box-sizing: border-box;\n      \"\n    />\n  </div>\n  \n  <div style=\"margin-bottom: 12px;\">\n    <label style=\"display: block; margin-bottom: 4px; font-size: 14px; color: #666;\">Email</label>\n    <input \n      type=\"email\" \n      placeholder=\"Enter email\"\n      style=\"\n        width: 100%;\n        padding: 8px 12px;\n        border: 1px solid #d9d9d9;\n        border-radius: 4px;\n        font-size: 14px;\n        box-sizing: border-box;\n      \"\n    />\n  </div>\n  \n  <div style=\"margin-bottom: 16px;\">\n    <label style=\"display: block; margin-bottom: 4px; font-size: 14px; color: #666;\">Role</label>\n    <select style=\"\n      width: 100%;\n      padding: 8px 12px;\n      border: 1px solid #d9d9d9;\n      border-radius: 4px;\n      font-size: 14px;\n      box-sizing: border-box;\n    \">\n      <option>Administrator</option>\n      <option>User</option>\n      <option>Guest</option>\n    </select>\n  </div>\n  \n  <div style=\"display: flex; gap: 8px;\">\n    <button \n      onclick=\"handleSave('${d.id}')\"\n      style=\"\n        flex: 1;\n        padding: 8px 16px;\n        background: #1890ff;\n        color: white;\n        border: none;\n        border-radius: 4px;\n        font-size: 14px;\n        cursor: pointer;\n      \"\n    >Save</button>\n    <button \n      onclick=\"handleCancel('${d.id}')\"\n      style=\"\n        flex: 1;\n        padding: 8px 16px;\n        background: #f5f5f5;\n        color: #333;\n        border: 1px solid #d9d9d9;\n        border-radius: 4px;\n        font-size: 14px;\n        cursor: pointer;\n      \"\n    >Cancel</button>\n  </div>\n</div>`;\n      },\n    },\n  },\n  layout: {\n    type: 'grid',\n    cols: 2,\n  },\n  behaviors: ['drag-element', 'zoom-canvas'],\n});\n\n// Global functions to handle form operations\nwindow.handleSave = (nodeId) => {\n  console.log(`Saving form: ${nodeId}`);\n  alert(`Form ${nodeId} saved`);\n};\n\nwindow.handleCancel = (nodeId) => {\n  console.log(`Canceling form: ${nodeId}`);\n  alert(`Form ${nodeId} operation canceled`);\n};\n\ngraph.render();\n",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "HTML nodes have higher rendering costs compared to regular graphic nodes, recommend using when node count is small",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "Complex HTML structures will affect performance, recommend keeping structure simple",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "Avoid using too many animation effects in HTML",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "Event handling in HTML nodes needs to be implemented through global functions or event delegation",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": "Recommend mounting event handling functions to the ",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": "window",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": " object to ensure accessibility in HTML strings",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": "Be careful to prevent event bubbling from affecting graph interaction behavior",
        "paraId": 15,
        "tocIndex": 10
    },
    {
        "value": "HTML node styles may be affected by global page styles",
        "paraId": 16,
        "tocIndex": 11
    },
    {
        "value": "Recommend using inline styles or ensuring sufficient style specificity",
        "paraId": 16,
        "tocIndex": 11
    },
    {
        "value": "Consider using CSS-in-JS or style namespaces to avoid style conflicts",
        "paraId": 16,
        "tocIndex": 11
    },
    {
        "value": "HTML node dimensions are fixed and do not automatically adapt to content",
        "paraId": 17,
        "tocIndex": 12
    },
    {
        "value": "Need to dynamically calculate node dimensions based on content or use responsive layouts",
        "paraId": 17,
        "tocIndex": 12
    },
    {
        "value": "Consider display effects at different zoom levels",
        "paraId": 17,
        "tocIndex": 12
    },
    {
        "value": "React Projects",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": ": Recommended to use ",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": "React Node",
        "paraId": 19,
        "tocIndex": 13
    },
    {
        "value": ", which allows direct use of React components as node content",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": "Vue Projects",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": ": Vue Node is not currently supported, community contributions are welcome if needed",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": "Native Projects",
        "paraId": 18,
        "tocIndex": 13
    },
    {
        "value": ": HTML nodes are the best choice, providing maximum flexibility",
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
//# sourceMappingURL=docs_manual_element_node_Html_en_md_q_hK4X-async.js.map