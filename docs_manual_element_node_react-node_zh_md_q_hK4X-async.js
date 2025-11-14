((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/react-node.zh.md?type=text'],
{ "docs/manual/element/node/react-node.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/react-node.zh.md?watch=parent");
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
        "value": "在 G6 中，自定义节点通常需要操作 DOM 或 Canvas 元素，但借助 ",
        "paraId": 0
    },
    {
        "value": "@antv/g6-extension-react",
        "paraId": 0
    },
    {
        "value": " 一方生态库，可以直接使用 React 组件作为节点内容，提升开发效率与可维护性。",
        "paraId": 0
    },
    {
        "value": "✅ ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "推荐场景：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "节点只是简单的几何图形",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "需要高效渲染超过 2,000 个节点的场景",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "需要直接操作图形实例进行精细控制",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "有关如何使用 Canvas 图形自定义节点的详细信息，请参阅 ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "自定义节点",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " 文档",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "✅ ",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "推荐场景：",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "需要集成 Ant Design 等 UI 库的业务系统",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "节点包含表单输入、状态切换等交互逻辑",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "已有 React 设计系统需要复用的场景",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "在开始之前，请确保您已经：",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "安装 React 项目",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：确保已安装并创建 React 项目。",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "React 版本要求",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：确保使用的 React 版本 >=16.8.0。",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "要使用 ",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "@antv/g6-extension-react",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "，请运行以下命令：",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "npm install @antv/g6-extension-react\n",
        "paraId": 10
    },
    {
        "value": "yarn add @antv/g6-extension-react\n",
        "paraId": 11
    },
    {
        "value": "pnpm add @antv/g6-extension-react\n",
        "paraId": 12
    },
    {
        "value": "通过扩展机制注册 React 节点类型：",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "import { ExtensionCategory, register } from '@antv/g6';\nimport { ReactNode } from '@antv/g6-extension-react';\n\nregister(ExtensionCategory.NODE, 'react-node', ReactNode);\n",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "register",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": " 方法需要三个参数：",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "扩展类别：",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "ExtensionCategory.NODE",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": " 表示这是一个节点类型",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "类型名称：",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "react-node",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": " 是我们给这个自定义节点起的名字，后续会在配置中使用",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "类定义：ReactNode 是 ",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "@antv/g6-extension-react",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": " 导出的实现类",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "定义一个简单的 React 组件作为节点的内容：",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "const MyReactNode = () => {\n  return <div>node</div>;\n};\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "在图配置中使用自定义的 React 节点。通过在图配置中指定节点类型和样式，来使用自定义的 React 组件。",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "type",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "：指定节点类型为 ",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "react-node",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": " (使用与注册时起的名字)",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "style.component",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "：定义节点的 React 组件内容",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    type: 'react-node',\n    style: {\n      component: () => <MyReactNode />,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "在复杂图可视化场景中，节点需要动态响应交互状态。我们提供两种互补的状态管理方案：",
        "paraId": 22,
        "tocIndex": 11
    },
    {
        "value": "G6 提供内置的交互状态管理状态，如 ",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": "hover-activate",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": " 和 ",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": "click-select",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": "。可以通过节点数据中的 ",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": "data.states",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": " 字段获取当前节点状态，并根据状态调整节点样式。",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": "示例",
        "paraId": 24,
        "tocIndex": 12
    },
    {
        "value": "：在节点被 hover 时改变背景颜色。",
        "paraId": 24,
        "tocIndex": 12
    },
    {
        "value": "import { ExtensionCategory, register, Graph } from '@antv/g6';\nimport { ReactNode } from '@antv/g6-extension-react';\n\nregister(ExtensionCategory.NODE, 'react-node', ReactNode);\n\nconst StatefulNode = ({ data }) => {\n  const isActive = data.states?.includes('active');\n\n  return (\n    <div\n      style={{\n        width: 100,\n        padding: 5,\n        border: '1px solid #eee',\n        boxShadow: isActive ? '0 0 8px rgba(24,144,255,0.8)' : 'none',\n        transform: `scale(${isActive ? 1.05 : 1})`,\n      }}\n    >\n      {data.data.label}\n    </div>\n  );\n};\n\nconst graph = new Graph({\n  data: {\n    nodes: [\n      { id: 'node1', style: { x: 100, y: 200 }, data: { label: 'node1' } },\n      { id: 'node2', style: { x: 300, y: 200 }, data: { label: 'node2' } },\n    ],\n  },\n  node: {\n    type: 'react-node',\n    style: {\n      component: (data) => <StatefulNode data={data} />,\n    },\n  },\n  behaviors: ['hover-activate'],\n});\n\ngraph.render();\n",
        "paraId": 25,
        "tocIndex": 12
    },
    {
        "value": "当需要管理业务相关状态（如审批状态、风险等级）时，可通过扩展节点数据实现：",
        "paraId": 26,
        "tocIndex": 13
    },
    {
        "value": "示例",
        "paraId": 27,
        "tocIndex": 13
    },
    {
        "value": "：通过 data 添加 ",
        "paraId": 27,
        "tocIndex": 13
    },
    {
        "value": "selected",
        "paraId": 27,
        "tocIndex": 13
    },
    {
        "value": " 变量，实现节点选中和取消选中的样式变化。",
        "paraId": 27,
        "tocIndex": 13
    },
    {
        "value": "import { ExtensionCategory, register, Graph } from '@antv/g6';\nimport { ReactNode } from '@antv/g6-extension-react';\n\nregister(ExtensionCategory.NODE, 'react-node', ReactNode);\n\nconst MyReactNode = ({ data, graph }) => {\n  const handleClick = () => {\n    graph.updateNodeData([{ id: data.id, data: { selected: !data.data.selected } }]);\n    graph.draw();\n  };\n\n  return (\n    <div\n      style={{\n        width: 200,\n        padding: 10,\n        border: '1px solid red',\n        borderColor: data.data.selected ? 'orange' : '#ddd', // 根据选中状态设置边框颜色\n        cursor: 'pointer', // 添加鼠标指针样式\n      }}\n      onClick={handleClick}\n    >\n      Node\n    </div>\n  );\n};\n\nconst graph = new Graph({\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        style: { x: 100, y: 100 },\n        data: { selected: true },\n      },\n    ],\n  },\n  node: {\n    type: 'react-node',\n    style: {\n      component: (data) => <MyReactNode data={data} graph={graph} />,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 28,
        "tocIndex": 13
    },
    {
        "value": "实现节点与图实例的双向通信，使节点和图实例可以相互更新。",
        "paraId": 29,
        "tocIndex": 14
    },
    {
        "value": "示例",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "：通过自定义节点操作图数据，并重新渲染图形。",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "const IDCardNode = ({ id, selected, graph }) => {\n  const handleSelect = () => {\n    graph.updateNodeData([{ id, data: { selected: true } }]);\n    graph.draw();\n  };\n\n  return <Select onChange={handleSelect} style={{ background: selected ? 'orange' : '#eee' }} />;\n};\n\nconst graph = new Graph({\n  node: {\n    type: 'react-node',\n    style: {\n      component: ({ id, data }) => <IDCardNode id={id} selected={data.selected} graph={graph} />,\n    },\n  },\n});\n",
        "paraId": 31,
        "tocIndex": 14
    },
    {
        "value": "import { DatabaseFilled } from '@ant-design/icons';\nimport { ExtensionCategory, Graph, register } from '@antv/g6';\nimport { ReactNode } from '@antv/g6-extension-react';\nimport { Badge, Flex, Input, Tag, Typography } from 'antd';\nimport { useEffect, useRef } from 'react';\nimport { createRoot } from 'react-dom/client';\n\nconst { Text } = Typography;\n\nregister(ExtensionCategory.NODE, 'react', ReactNode);\n\nconst Node = ({ data, onChange }) => {\n  const { status, type } = data.data;\n\n  return (\n    <Flex\n      style={{\n        width: '100%',\n        height: '100%',\n        background: '#fff',\n        padding: 10,\n        borderRadius: 5,\n        border: '1px solid gray',\n      }}\n      vertical\n    >\n      <Flex align=\"center\" justify=\"space-between\">\n        <Text>\n          <DatabaseFilled />\n          Server\n          <Tag>{type}</Tag>\n        </Text>\n        <Badge status={status} />\n      </Flex>\n      <Text type=\"secondary\">{data.id}</Text>\n      <Flex align=\"center\">\n        <Text style={{ flexShrink: 0 }}>\n          <Text type=\"danger\">*</Text>URL:\n        </Text>\n        <Input\n          style={{ borderRadius: 0, borderBottom: '1px solid #d9d9d9' }}\n          variant=\"borderless\"\n          value={data.data?.url}\n          onChange={(event) => {\n            const url = event.target.value;\n            onChange?.(url);\n          }}\n        />\n      </Flex>\n    </Flex>\n  );\n};\n\nexport const ReactNodeDemo = () => {\n  const containerRef = useRef();\n\n  useEffect(() => {\n    const graph = new Graph({\n      container: containerRef.current,\n      data: {\n        nodes: [\n          {\n            id: 'local-server-1',\n            data: { status: 'success', type: 'local', url: 'http://localhost:3000' },\n            style: { x: 50, y: 50 },\n          },\n          {\n            id: 'remote-server-1',\n            data: { status: 'warning', type: 'remote' },\n            style: { x: 350, y: 50 },\n          },\n        ],\n        edges: [{ source: 'local-server-1', target: 'remote-server-1' }],\n      },\n      node: {\n        type: 'react',\n        style: {\n          size: [240, 100],\n          component: (data) => <Node data={data} />,\n        },\n      },\n      behaviors: ['drag-element', 'zoom-canvas', 'drag-canvas'],\n    });\n\n    graph.render();\n  }, []);\n\n  return <div style={{ width: '100%', height: '100%' }} ref={containerRef}></div>;\n};\n\nconst root = createRoot(document.getElementById('container'));\nroot.render(<ReactNodeDemo />);\n",
        "paraId": 32,
        "tocIndex": 15
    },
    {
        "value": "import { UserOutlined } from '@ant-design/icons';\nimport { ExtensionCategory, Graph, register } from '@antv/g6';\nimport { ReactNode } from '@antv/g6-extension-react';\nimport { Avatar, Button, Card, Descriptions, Select, Space, Typography } from 'antd';\nimport React, { useEffect, useRef } from 'react';\nimport { createRoot } from 'react-dom/client';\n\nconst { Title, Text } = Typography;\nconst { Option } = Select;\n\nregister(ExtensionCategory.NODE, 'react-node', ReactNode);\n\nconst IDCardNode = ({ id, data }) => {\n  const { name, idNumber, address, expanded, selected, graph } = data;\n\n  const toggleExpand = (e) => {\n    e.stopPropagation();\n    graph.updateNodeData([\n      {\n        id,\n        data: { expanded: !expanded },\n      },\n    ]);\n    graph.render();\n  };\n\n  const handleSelect = (value) => {\n    graph.updateNodeData([\n      {\n        id,\n        data: { selected: value !== 0 },\n      },\n    ]);\n    if (value === 2) {\n      // 获取与当前节点相连的所有节点\n      const connectedNodes = graph.getNeighborNodesData(id);\n\n      connectedNodes.forEach((node) => {\n        graph.updateNodeData([\n          {\n            id: node.id,\n            data: { selected: true },\n          },\n        ]);\n      });\n    }\n    graph.render();\n  };\n\n  const CardTitle = (\n    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>\n      <Space>\n        <Avatar shape=\"square\" size=\"small\" icon={<UserOutlined />} />\n        <Title level={5} style={{ margin: 0 }}>\n          {name}\n        </Title>\n\n        <Select\n          value={selected ? data.selectedOption || 1 : 0}\n          style={{ width: 150, marginRight: 8 }}\n          onChange={handleSelect}\n        >\n          <Option value={0}>None</Option>\n          <Option value={1}>Node</Option>\n          <Option value={2}>Connected</Option>\n        </Select>\n      </Space>\n      <Button type=\"link\" onClick={toggleExpand} style={{ padding: 0 }}>\n        {expanded ? 'fold' : 'expand'}\n      </Button>\n    </div>\n  );\n\n  return (\n    <Card\n      size=\"small\"\n      title={CardTitle}\n      style={{\n        width: 340,\n        padding: 10,\n        borderRadius: 8,\n        borderWidth: 2,\n        borderColor: selected ? 'orange' : '#eee', // 根据选中状态设置边框颜色\n        cursor: 'pointer',\n      }}\n    >\n      {expanded ? (\n        <Descriptions bordered column={1} style={{ width: '100%', textAlign: 'center' }}>\n          <Descriptions.Item label=\"ID Number\">{idNumber}</Descriptions.Item>\n          <Descriptions.Item label=\"Address\">{address}</Descriptions.Item>\n        </Descriptions>\n      ) : (\n        <Text style={{ textAlign: 'center' }}>IDCard Information</Text>\n      )}\n    </Card>\n  );\n};\n\n// 定义 Graph 数据\nconst data = {\n  nodes: [\n    {\n      id: 'node1',\n      data: {\n        name: 'Alice',\n        idNumber: 'IDUSAASD2131734',\n        address: '1234 Broadway, Apt 5B, New York, NY 10001',\n        expanded: false, // 初始状态为收缩\n        selected: false, // 初始状态为未选中\n        selectedOption: 1, // 初始选择本节点\n      },\n      style: { x: 50, y: 50 },\n    },\n    {\n      id: 'node2',\n      data: {\n        name: 'Bob',\n        idNumber: 'IDUSAASD1431920',\n        address: '3030 Chestnut St, Philadelphia, PA 19104',\n        expanded: false, // 初始状态为收缩\n        selected: false, // 初始状态为未选中\n        selectedOption: 0, // 初始不选择\n      },\n      style: { x: 700, y: 100 },\n    },\n    {\n      id: 'node3',\n      data: {\n        name: 'Charlie',\n        idNumber: 'IDUSAASD1431921',\n        address: '4040 Elm St, Chicago, IL 60611',\n        expanded: false,\n        selected: true,\n        selectedOption: 0,\n      },\n    },\n    {\n      id: 'node4',\n      data: {\n        name: 'David',\n        idNumber: 'IDUSAASD1431922',\n        address: '5050 Oak St, Houston, TX 77002',\n        expanded: false,\n        selected: false,\n        selectedOption: 0,\n      },\n    },\n    {\n      id: 'node5',\n      data: {\n        name: 'Eve',\n        idNumber: 'IDUSAASD1431923',\n        address: '6060 Pine St, Phoenix, AZ 85001',\n        expanded: false,\n        selected: false,\n        selectedOption: 0,\n      },\n    },\n  ],\n  edges: [\n    { source: 'node1', target: 'node2' },\n    { source: 'node2', target: 'node3' },\n    { source: 'node3', target: 'node4' },\n    { source: 'node4', target: 'node5' },\n  ],\n};\n\nexport const ReactNodeDemo = () => {\n  const containerRef = useRef();\n  const graphRef = useRef(null);\n\n  useEffect(() => {\n    // 创建 Graph 实例\n    const graph = new Graph({\n      autoFit: 'view',\n      container: containerRef.current,\n      data,\n      node: {\n        type: 'react-node',\n        style: {\n          size: (datum) => (datum.data.expanded ? [340, 236] : [340, 105]), // 调整大小以适应内容\n          component: (data) => <IDCardNode id={data.id} data={{ ...data.data, graph: graph }} />,\n        },\n      },\n      behaviors: ['drag-element', 'zoom-canvas', 'drag-canvas'],\n      layout: {\n        type: 'snake',\n        cols: 2,\n        rowGap: 100,\n        colGap: 220,\n      },\n    });\n\n    // 渲染 Graph\n    graph.render();\n\n    // 保存 graph 实例\n    graphRef.current = graph;\n\n    return () => {\n      graph.destroy();\n    };\n  }, []);\n\n  return <div style={{ width: '100%', height: '100%' }} ref={containerRef}></div>;\n};\n\n// 渲染 React 组件到 DOM\nconst root = createRoot(document.getElementById('container'));\nroot.render(<ReactNodeDemo />);\n",
        "paraId": 33,
        "tocIndex": 15
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
//# sourceMappingURL=docs_manual_element_node_react-node_zh_md_q_hK4X-async.js.map