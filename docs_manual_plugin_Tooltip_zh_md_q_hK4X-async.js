((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Tooltip.zh.md?type=text'],
{ "docs/manual/plugin/Tooltip.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Tooltip.zh.md?watch=parent");
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
        "value": "Tooltip 插件用于在用户将鼠标悬停或点击图中的元素时，显示额外的信息。它可以帮助用户更好地理解图中的数据，提高交互体验。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "详细信息展示",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "：当用户需要了解元素的详细信息时，使用 Tooltip 提示框来展示这些信息",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "数据可视化辅助",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "：在数据可视化中，Tooltip 可以显示图表中数据点的详细信息，帮助用户更好地理解数据",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "交互反馈",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "：为用户的鼠标操作提供即时的视觉反馈",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "最简单的 Tooltip 插件配置：",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  plugins: [\n    {\n      type: 'tooltip',\n    },\n  ],\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "插件类型",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "tooltip",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "标识符",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "position",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "气泡框位置",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "top",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "bottom",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "left",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "right",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "top-left",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "top-right",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "bottom-left",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "bottom-right",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "top-right",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "enable",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "插件是否启用",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean | ((event: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "IElementEvent",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": ", items: NodeData | EdgeData | ComboData[]) => boolean)",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getContent",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "自定义内容",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(event: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "IElementEvent",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": ", items: NodeData | EdgeData | ComboData[]) => Promise<HTMLElement | string>",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "onOpenChange",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "显示隐藏的回调",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(open: boolean) => void",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "trigger",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "触发行为",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "hover",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "click",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "hover",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "container",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "tooltip自定义渲染的容器",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string | HTMLElement",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "offset",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "偏移距离",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "[number,number]",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "[10,10]",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "enterable",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "指针是否可以进入",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "title",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "标题",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "style",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "样式对象",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Record<string,any>",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "{'.tooltip': { visibility: 'hidden'}}",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "控制插件是否启用，支持传入函数动态调整启用逻辑。",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "示例：只对节点启用 Tooltip",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { name: '服务器节点' } },\n    { id: 'node2', style: { x: 200, y: 100 }, data: { name: '数据库节点' } },\n  ],\n  edges: [{ source: 'node1', target: 'node2', data: { type: '连接线' } }],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data,\n  plugins: [\n    {\n      type: 'tooltip',\n      // 只对节点启用，边不显示tooltip\n      enable: (e) => e.targetType === 'node',\n      getContent: (e, items) => {\n        return `<div>节点: ${items[0].data.name}</div>`;\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "自定义渲染 Tooltip 内容，支持返回 HTMLElement 或 string。",
        "paraId": 10,
        "tocIndex": 6
    },
    {
        "value": "示例：动态渲染自定义 HTML 内容",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    {\n      id: 'node1',\n      style: { x: 100, y: 100 },\n      data: { name: '服务器A', type: '应用服务器', status: '运行中', cpu: '45%', memory: '2.1GB' },\n    },\n    {\n      id: 'node2',\n      style: { x: 250, y: 100 },\n      data: { name: '数据库B', type: 'MySQL数据库', status: '正常', connections: 23, size: '500MB' },\n    },\n  ],\n  edges: [{ source: 'node1', target: 'node2', data: { bandwidth: '1Gbps', latency: '5ms' } }],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data,\n  plugins: [\n    {\n      type: 'tooltip',\n      getContent: (e, items) => {\n        const item = items[0];\n\n        if (e.targetType === 'node') {\n          return `\n            <div>\n              <h4 style=\"margin: 0 0 8px 0; color: #333; border-bottom: 1px solid #eee; padding-bottom: 4px;\">\n                ${item.data.name}\n              </h4>\n              <div style=\"margin: 4px 0; color: #666;\">\n                <strong>类型:</strong> ${item.data.type}\n              </div>\n              <div style=\"margin: 4px 0; color: #666;\">\n                <strong>状态:</strong>\n                <span style=\"color: ${item.data.status === '运行中' || item.data.status === '正常' ? '#52c41a' : '#ff4d4f'}\">\n                  ${item.data.status}\n                </span>\n              </div>\n              ${item.data.cpu ? `<div style=\"margin: 4px 0; color: #666;\"><strong>CPU:</strong> ${item.data.cpu}</div>` : ''}\n              ${item.data.memory ? `<div style=\"margin: 4px 0; color: #666;\"><strong>内存:</strong> ${item.data.memory}</div>` : ''}\n              ${item.data.connections ? `<div style=\"margin: 4px 0; color: #666;\"><strong>连接数:</strong> ${item.data.connections}</div>` : ''}\n              ${item.data.size ? `<div style=\"margin: 4px 0; color: #666;\"><strong>大小:</strong> ${item.data.size}</div>` : ''}\n            </div>\n          `;\n        } else if (e.targetType === 'edge') {\n          return `\n            <div>\n              <h4 style=\"margin: 0 0 8px 0; color: #333;\">连接信息</h4>\n              <div style=\"margin: 4px 0; color: #666;\"><strong>带宽:</strong> ${item.data.bandwidth}</div>\n              <div style=\"margin: 4px 0; color: #666;\"><strong>延迟:</strong> ${item.data.latency}</div>\n            </div>\n          `;\n        }\n\n        return '暂无信息';\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 12,
        "tocIndex": 6
    },
    {
        "value": "控制 Tooltip 的触发行为。",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "可选值：",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "hover",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "：鼠标移入元素时触发（默认）",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "click",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "：鼠标点击元素时触发",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "示例：点击触发 Tooltip",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { name: '点击我' } },\n    { id: 'node2', style: { x: 200, y: 100 }, data: { name: '也点击我' } },\n  ],\n  edges: [{ source: 'node1', target: 'node2' }],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 350,\n  height: 200,\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.data.name,\n    },\n  },\n  plugins: [\n    {\n      type: 'tooltip',\n      trigger: 'click',\n      getContent: (e, items) => {\n        return `\n          <div>\n            <div style=\"color: #0369a1; font-weight: bold; margin-bottom: 4px;\">\n              点击触发 🖱️\n            </div>\n            <div style=\"color: #0c4a6e;\">\n              元素ID: ${items[0].id}<br/>\n              名称: ${items[0].data?.name || '未命名'}\n            </div>\n          </div>\n        `;\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "控制 Tooltip 相对于鼠标位置的显示位置。",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "可选值：",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "top",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": 顶部",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "bottom",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": 底部",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "left",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": 左侧",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "right",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": 右侧",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "top-left",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": 顶部靠左",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "top-right",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": 顶部靠右（默认）",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "bottom-left",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": 底部靠左",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "bottom-right",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": 底部靠右",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "示例：不同位置的 Tooltip",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { label: 'TOP' } },\n    { id: 'node2', style: { x: 250, y: 100 }, data: { label: 'BOTTOM' } },\n    { id: 'node3', style: { x: 100, y: 250 }, data: { label: 'LEFT' } },\n    { id: 'node4', style: { x: 250, y: 250 }, data: { label: 'RIGHT' } },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 400,\n  data,\n  node: { style: { labelText: (d) => d.data.label } },\n  plugins: [\n    {\n      key: 'tooltip-top',\n      type: 'tooltip',\n      position: 'top',\n      enable: (e, items) => items[0].id === 'node1',\n      getContent: () => `顶部显示 ⬆️`,\n      style: {\n        '.tooltip': {\n          background: ' #fff2e8',\n          border: '1px solid #ffa940',\n          borderRadius: 4,\n        },\n      },\n    },\n    {\n      key: 'tooltip-bottom',\n      type: 'tooltip',\n      position: 'bottom',\n      enable: (e, items) => items[0].id === 'node2',\n      getContent: () => `底部显示 ⬇️`,\n      style: {\n        '.tooltip': {\n          background: '#f6ffed',\n          border: '1px solid #73d13d',\n          borderRadius: 4,\n        },\n      },\n    },\n    {\n      key: 'tooltip-left',\n      type: 'tooltip',\n      position: 'left',\n      enable: (e, items) => items[0].id === 'node3',\n      getContent: () => `左侧显示 ⬅️`,\n      style: {\n        '.tooltip': {\n          background: '#fff1f0',\n          border: '1px solid #ff7875',\n          borderRadius: 4,\n        },\n      },\n    },\n    {\n      key: 'tooltip-right',\n      type: 'tooltip',\n      position: 'right',\n      enable: (e, items) => items[0].id === 'node4',\n      getContent: () => `右侧显示 ➡️`,\n      style: {\n        '.tooltip': {\n          background: '#f0f5ff',\n          border: '1px solid #597ef7',\n          borderRadius: 4,\n        },\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "设置 Tooltip 显示位置的偏移量，以鼠标位置为基点。",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { label: '默认偏移' } },\n    { id: 'node2', style: { x: 250, y: 100 }, data: { label: '自定义偏移' } },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 200,\n  data,\n  plugins: [\n    {\n      key: 'tooltip-default',\n      type: 'tooltip',\n      enable: (e, items) => items[0].id === 'node1',\n      getContent: () => `默认偏移 [10,10]`,\n    },\n    {\n      key: 'tooltip-custom',\n      type: 'tooltip',\n      offset: [30, -10], // 向右偏移30px，向上偏移10px\n      enable: (e, items) => items[0].id === 'node2',\n      getContent: () => `自定义偏移 [30,-10]`,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "控制鼠标指针是否可以进入气泡框，常用于需要在 Tooltip 内进行交互的场景。",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { name: '用户A', email: 'usera@example.com' } },\n    { id: 'node2', style: { x: 250, y: 100 }, data: { name: '用户B', email: 'userb@example.com' } },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data,\n  plugins: [\n    {\n      type: 'tooltip',\n      enterable: true,\n      position: 'right',\n      getContent: (e, items) => {\n        const item = items[0];\n        return `\n          <div>\n            <h4 style=\"margin: 0 0 12px 0; color: #333;\">用户操作</h4>\n            <div style=\"margin-bottom: 8px; color: #666;\">\n              <strong>姓名:</strong> ${item.data.name}\n            </div>\n            <div style=\"margin-bottom: 12px; color: #666;\">\n              <strong>邮箱:</strong> ${item.data.email}\n            </div>\n            <div style=\"display: flex; gap: 8px;\">\n              <button onclick=\"alert('发送消息给 ${item.data.name}')\"\n                      style=\"padding: 4px 12px; background: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;\">\n                发消息\n              </button>\n              <button onclick=\"alert('查看 ${item.data.name} 的详情')\"\n                      style=\"padding: 4px 12px; background: #52c41a; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;\">\n                详情\n              </button>\n            </div>\n          </div>\n        `;\n      },\n      style: {\n        '.tooltip': {\n          background: '#fff',\n          borderRadius: '8px',\n          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',\n          minWidth: '200px',\n        },\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "自定义 Tooltip 的样式。",
        "paraId": 27,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { theme: 'dark', name: '深色主题' } },\n    { id: 'node2', style: { x: 250, y: 100 }, data: { theme: 'light', name: '浅色主题' } },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data,\n  plugins: [\n    {\n      key: 'tooltip-dark',\n      type: 'tooltip',\n      enable: (e, items) => items[0].data.theme === 'dark',\n      style: {\n        '.tooltip': {\n          background: '#1f1f1f',\n          color: '#fff',\n          border: '1px solid #333',\n          borderRadius: '8px',\n          fontSize: '14px',\n          fontFamily: 'Arial, sans-serif',\n          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',\n        },\n      },\n      getContent: (e, items) => {\n        return `<div>🌙 ${items[0].data.name}</div>`;\n      },\n    },\n    {\n      key: 'tooltip-light',\n      type: 'tooltip',\n      enable: (e, items) => items[0].data.theme === 'light',\n      style: {\n        '.tooltip': {\n          background: '#ffffff',\n          color: '#333',\n          border: '1px solid #d9d9d9',\n          borderRadius: '8px',\n          fontSize: '14px',\n          fontFamily: 'Arial, sans-serif',\n          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',\n        },\n      },\n      getContent: (e, items) => {\n        return `<div>☀️ ${items[0].data.name}</div>`;\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "基础提示框",
        "paraId": 29,
        "tocIndex": 12
    },
    {
        "value": "点击触发 Tooltip",
        "paraId": 30,
        "tocIndex": 12
    },
    {
        "value": "鼠标移入和点击同一元素时显示不同的提示框",
        "paraId": 31,
        "tocIndex": 12
    },
    {
        "value": "自定义样式的 Tooltip",
        "paraId": 32,
        "tocIndex": 12
    },
    {
        "value": "异步加载内容的 Tooltip",
        "paraId": 33,
        "tocIndex": 12
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
//# sourceMappingURL=docs_manual_plugin_Tooltip_zh_md_q_hK4X-async.js.map