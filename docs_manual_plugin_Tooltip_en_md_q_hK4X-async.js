((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Tooltip.en.md?type=text'],
{ "docs/manual/plugin/Tooltip.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Tooltip.en.md?watch=parent");
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
        "value": "The Tooltip plugin is used to display additional information when users hover over or click on elements in the graph. It helps users better understand the data in the graph and improves the interactive experience.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Detailed Information Display",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": ": When users need to understand detailed information about elements, use Tooltip to display this information",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Data Visualization Assistance",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": ": In data visualization, Tooltip can display detailed information about data points in charts, helping users better understand the data",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Interactive Feedback",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": ": Provide immediate visual feedback for user mouse operations",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "The simplest Tooltip plugin configuration:",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  plugins: [\n    {\n      type: 'tooltip',\n    },\n  ],\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Default Value",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Plugin type",
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
        "value": "Identifier",
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
        "value": "Tooltip position",
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
        "value": "Whether plugin is enabled",
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
        "value": "Custom content",
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
        "value": "Show/hide callback",
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
        "value": "Trigger behavior",
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
        "value": "Custom render container",
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
        "value": "Offset distance",
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
        "value": "Whether pointer can enter",
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
        "value": "Title",
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
        "value": "Style object",
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
        "value": "Controls whether the plugin is enabled, supports passing functions to dynamically adjust enable logic.",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "Example: Enable Tooltip only for nodes",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { name: 'Server Node' } },\n    { id: 'node2', style: { x: 200, y: 100 }, data: { name: 'Database Node' } },\n  ],\n  edges: [{ source: 'node1', target: 'node2', data: { type: 'Connection' } }],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data,\n  plugins: [\n    {\n      type: 'tooltip',\n      // Enable only for nodes, not for edges\n      enable: (e) => e.targetType === 'node',\n      getContent: (e, items) => {\n        return `<div>Node: ${items[0].data.name}</div>`;\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "Customize Tooltip content rendering, supports returning HTMLElement or string.",
        "paraId": 10,
        "tocIndex": 6
    },
    {
        "value": "Example: Dynamically render custom HTML content",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    {\n      id: 'node1',\n      style: { x: 100, y: 100 },\n      data: { name: 'Server A', type: 'Application Server', status: 'Running', cpu: '45%', memory: '2.1GB' },\n    },\n    {\n      id: 'node2',\n      style: { x: 250, y: 100 },\n      data: { name: 'Database B', type: 'MySQL Database', status: 'Normal', connections: 23, size: '500MB' },\n    },\n  ],\n  edges: [{ source: 'node1', target: 'node2', data: { bandwidth: '1Gbps', latency: '5ms' } }],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data,\n  plugins: [\n    {\n      type: 'tooltip',\n      getContent: (e, items) => {\n        const item = items[0];\n\n        if (e.targetType === 'node') {\n          return `\n            <div>\n              <h4 style=\"margin: 0 0 8px 0; color: #333; border-bottom: 1px solid #eee; padding-bottom: 4px;\">\n                ${item.data.name}\n              </h4>\n              <div style=\"margin: 4px 0; color: #666;\">\n                <strong>Type:</strong> ${item.data.type}\n              </div>\n              <div style=\"margin: 4px 0; color: #666;\">\n                <strong>Status:</strong>\n                <span style=\"color: ${item.data.status === 'Running' || item.data.status === 'Normal' ? '#52c41a' : '#ff4d4f'}\">\n                  ${item.data.status}\n                </span>\n              </div>\n              ${item.data.cpu ? `<div style=\"margin: 4px 0; color: #666;\"><strong>CPU:</strong> ${item.data.cpu}</div>` : ''}\n              ${item.data.memory ? `<div style=\"margin: 4px 0; color: #666;\"><strong>Memory:</strong> ${item.data.memory}</div>` : ''}\n              ${item.data.connections ? `<div style=\"margin: 4px 0; color: #666;\"><strong>Connections:</strong> ${item.data.connections}</div>` : ''}\n              ${item.data.size ? `<div style=\"margin: 4px 0; color: #666;\"><strong>Size:</strong> ${item.data.size}</div>` : ''}\n            </div>\n          `;\n        } else if (e.targetType === 'edge') {\n          return `\n            <div>\n              <h4 style=\"margin: 0 0 8px 0; color: #333;\">Connection Info</h4>\n              <div style=\"margin: 4px 0; color: #666;\"><strong>Bandwidth:</strong> ${item.data.bandwidth}</div>\n              <div style=\"margin: 4px 0; color: #666;\"><strong>Latency:</strong> ${item.data.latency}</div>\n            </div>\n          `;\n        }\n\n        return 'No information available';\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 12,
        "tocIndex": 6
    },
    {
        "value": "Controls the trigger behavior of Tooltip.",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "Available values:",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "hover",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": ": Trigger when mouse enters element (default)",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "click",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": ": Trigger when mouse clicks element",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Example: Click-triggered Tooltip",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { name: 'Click me' } },\n    { id: 'node2', style: { x: 200, y: 100 }, data: { name: 'Click me too' } },\n  ],\n  edges: [{ source: 'node1', target: 'node2' }],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 350,\n  height: 200,\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.data.name,\n    },\n  },\n  plugins: [\n    {\n      type: 'tooltip',\n      trigger: 'click',\n      getContent: (e, items) => {\n        return `\n          <div>\n            <div style=\"color: #0369a1; font-weight: bold; margin-bottom: 4px;\">\n              Click Triggered 🖱️\n            </div>\n            <div style=\"color: #0c4a6e;\">\n              Element ID: ${items[0].id}<br/>\n              Name: ${items[0].data?.name || 'Unnamed'}\n            </div>\n          </div>\n        `;\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "Controls the display position of Tooltip relative to mouse position.",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "Available values:",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "top",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Top",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "bottom",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Bottom",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "left",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Left",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "right",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Right",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "top-left",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Top left",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "top-right",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Top right (default)",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "bottom-left",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Bottom left",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "bottom-right",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Bottom right",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "Example: Tooltips at different positions",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { label: 'TOP' } },\n    { id: 'node2', style: { x: 250, y: 100 }, data: { label: 'BOTTOM' } },\n    { id: 'node3', style: { x: 100, y: 250 }, data: { label: 'LEFT' } },\n    { id: 'node4', style: { x: 250, y: 250 }, data: { label: 'RIGHT' } },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 400,\n  data,\n  node: { style: { labelText: (d) => d.data.label } },\n  plugins: [\n    {\n      key: 'tooltip-top',\n      type: 'tooltip',\n      position: 'top',\n      enable: (e, items) => items[0].id === 'node1',\n      getContent: () => `Display at top ⬆️`,\n      style: {\n        '.tooltip': {\n          background: ' #fff2e8',\n          border: '1px solid #ffa940',\n          borderRadius: 4,\n        },\n      },\n    },\n    {\n      key: 'tooltip-bottom',\n      type: 'tooltip',\n      position: 'bottom',\n      enable: (e, items) => items[0].id === 'node2',\n      getContent: () => `Display at bottom ⬇️`,\n      style: {\n        '.tooltip': {\n          background: '#f6ffed',\n          border: '1px solid #73d13d',\n          borderRadius: 4,\n        },\n      },\n    },\n    {\n      key: 'tooltip-left',\n      type: 'tooltip',\n      position: 'left',\n      enable: (e, items) => items[0].id === 'node3',\n      getContent: () => `Display at left ⬅️`,\n      style: {\n        '.tooltip': {\n          background: '#fff1f0',\n          border: '1px solid #ff7875',\n          borderRadius: 4,\n        },\n      },\n    },\n    {\n      key: 'tooltip-right',\n      type: 'tooltip',\n      position: 'right',\n      enable: (e, items) => items[0].id === 'node4',\n      getContent: () => `Display at right ➡️`,\n      style: {\n        '.tooltip': {\n          background: '#f0f5ff',\n          border: '1px solid #597ef7',\n          borderRadius: 4,\n        },\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "Set the offset for Tooltip display position, with mouse position as the base point.",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { label: 'Default offset' } },\n    { id: 'node2', style: { x: 250, y: 100 }, data: { label: 'Custom offset' } },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 200,\n  data,\n  plugins: [\n    {\n      key: 'tooltip-default',\n      type: 'tooltip',\n      enable: (e, items) => items[0].id === 'node1',\n      getContent: () => `Default offset [10,10]`,\n    },\n    {\n      key: 'tooltip-custom',\n      type: 'tooltip',\n      offset: [30, -10], // Offset 30px to the right, 10px up\n      enable: (e, items) => items[0].id === 'node2',\n      getContent: () => `Custom offset [30,-10]`,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "Controls whether the mouse pointer can enter the tooltip box, commonly used for scenarios requiring interaction within the Tooltip.",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { name: 'User A', email: 'usera@example.com' } },\n    { id: 'node2', style: { x: 250, y: 100 }, data: { name: 'User B', email: 'userb@example.com' } },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data,\n  plugins: [\n    {\n      type: 'tooltip',\n      enterable: true,\n      position: 'right',\n      getContent: (e, items) => {\n        const item = items[0];\n        return `\n          <div>\n            <h4 style=\"margin: 0 0 12px 0; color: #333;\">User Actions</h4>\n            <div style=\"margin-bottom: 8px; color: #666;\">\n              <strong>Name:</strong> ${item.data.name}\n            </div>\n            <div style=\"margin-bottom: 12px; color: #666;\">\n              <strong>Email:</strong> ${item.data.email}\n            </div>\n            <div style=\"display: flex; gap: 8px;\">\n              <button onclick=\"alert('Send message to ${item.data.name}')\"\n                      style=\"padding: 4px 12px; background: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;\">\n                Message\n              </button>\n              <button onclick=\"alert('View ${item.data.name} details')\"\n                      style=\"padding: 4px 12px; background: #52c41a; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;\">\n                Details\n              </button>\n            </div>\n          </div>\n        `;\n      },\n      style: {\n        '.tooltip': {\n          background: '#fff',\n          borderRadius: '8px',\n          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',\n          minWidth: '200px',\n        },\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "Customize Tooltip styles.",
        "paraId": 27,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 }, data: { theme: 'dark', name: 'Dark Theme' } },\n    { id: 'node2', style: { x: 250, y: 100 }, data: { theme: 'light', name: 'Light Theme' } },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data,\n  plugins: [\n    {\n      key: 'tooltip-dark',\n      type: 'tooltip',\n      enable: (e, items) => items[0].data.theme === 'dark',\n      style: {\n        '.tooltip': {\n          background: '#1f1f1f',\n          color: '#fff',\n          border: '1px solid #333',\n          borderRadius: '8px',\n          fontSize: '14px',\n          fontFamily: 'Arial, sans-serif',\n          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',\n        },\n      },\n      getContent: (e, items) => {\n        return `<div>🌙 ${items[0].data.name}</div>`;\n      },\n    },\n    {\n      key: 'tooltip-light',\n      type: 'tooltip',\n      enable: (e, items) => items[0].data.theme === 'light',\n      style: {\n        '.tooltip': {\n          background: '#ffffff',\n          color: '#333',\n          border: '1px solid #d9d9d9',\n          borderRadius: '8px',\n          fontSize: '14px',\n          fontFamily: 'Arial, sans-serif',\n          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',\n        },\n      },\n      getContent: (e, items) => {\n        return `<div>☀️ ${items[0].data.name}</div>`;\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "Basic Tooltip",
        "paraId": 29,
        "tocIndex": 12
    },
    {
        "value": "Click-triggered Tooltip",
        "paraId": 30,
        "tocIndex": 12
    },
    {
        "value": "Different tooltips for hover and click on the same element",
        "paraId": 31,
        "tocIndex": 12
    },
    {
        "value": "Custom styled Tooltip",
        "paraId": 32,
        "tocIndex": 12
    },
    {
        "value": "Asynchronous content loading Tooltip",
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
//# sourceMappingURL=docs_manual_plugin_Tooltip_en_md_q_hK4X-async.js.map