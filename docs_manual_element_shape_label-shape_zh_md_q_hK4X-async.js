((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/shape/label-shape.zh.md?type=text'],
{ "docs/manual/element/shape/label-shape.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/shape/label-shape.zh.md?watch=parent");
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
        "value": "G6 提供了灵活的 Shape 机制，支持开发者自定义各种图形，并在节点、边、Combo 等元素中高效复用。本文将以 Label（标签）为例，讲解如何自定义 Shape、如何在元素中应用。",
        "paraId": 0
    },
    {
        "value": "所有 Shape 都继承自 ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "BaseShape",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "，它统一管理了 Shape 的生命周期（创建、更新、销毁）、属性解析、动画、事件绑定等。你只需关注如何实现 ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "render",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " 方法即可。",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "核心抽象：",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "import { CustomElement } from '@antv/g';\n\nabstract class BaseShape extends CustomElement {\n  // 生命周期管理、属性解析、动画等...\n  public abstract render(attributes, container): void;\n}\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "一个节点通常包含多个子 Shape，例如：",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "节点（Node）\n├── keyShape（主图形）\n├── label（标签，辅助信息）\n│   ├── text（文本）\n│   └── rect（背景）\n├── icon（图标）\n│   ├── text（文本）\n│   └── image（图片）\n├── badge（徽标）\n│   ├── text（文本）\n│   └── rect（背景）\n└── port（锚点）\n│   ├── circle（圆形）\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Label 是一个典型的复合 Shape，由文本（Text）和可选的背景（Rect）组成。其实现思路如下：",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "属性分离",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "：Label 的样式属性分为文本样式和背景样式，分别传递给 Text 和 Rect。",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "智能布局",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "：背景自动根据文本内容、内边距、圆角等动态调整尺寸和位置。",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "复用 upsert",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "：通过 ",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "upsert",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " 方法自动管理子 Shape 的创建、更新、销毁。",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Label 主要代码片段：",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "import { Text, Rect } from '@antv/g'; // 引入原子图形\n\nexport class Label extends BaseShape {\n  public render(attributes = this.parsedAttributes, container= this): void {\n    this.upsert('text', Text, this.getTextStyle(attributes), container);\n    this.upsert('background', Rect, this.getBackgroundStyle(attributes), container);\n  }\n  // ... 省略样式提取方法\n}\n",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "getTextStyle",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "、",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "getBackgroundStyle",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " 分别提取文本和背景的样式属性，避免相互干扰。",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "upsert",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " 方法保证了 Shape 的自动增删改查，极大提升了复用性和健壮性。",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "下面以自定义一个带特殊装饰的标签为例，演示 Shape 的完整定义、注册与使用：",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "import { BaseShape, ExtensionCategory, Circle } from 'g6';\nimport { Text, Rect, Circle } from '@antv/g';\n\nclass FancyLabel extends BaseShape {\n  render(attributes = this.parsedAttributes, container = this) {\n    // 主文本\n    this.upsert('text', Text, this.getTextStyle(attributes), container);\n    // 背景\n    this.upsert('background', Rect, this.getBackgroundStyle(attributes), container);\n    // 额外装饰：左侧小圆点\n    this.upsert('dot', Circle, {\n      x: -8, y: 0, r: 3, fill: '#faad14',\n    }, container);\n  }\n  // ...实现 getTextStyle/getBackgroundStyle\n}\n\n// 注册自定义 Shape\nregister(ExtensionCategory.SHAPE, 'fancy-label-shape', FancyLabel);\n\n// 定义自定义节点\nclass CustomCircle extends Circle {\n  public drawFancyLabelShape(attributes, container) {\n    this.upsert('fancy-label', 'fancy-label-shape', this.getFancyLabelStyle(attributes), container);\n  }\n\n  render(attributes = this.parsedAttributes, container) {\n    super.render(attributes, container);\n\n    this.drawFancyLabelShape(attributes, container);\n  }\n}\n\n// 注册自定义节点\nregister(ExtensionCategory.Node, 'fancy-label-node', CustomCircle);\n",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "G6 中节点、边、Combo 等元素往往包含多个子 Shape（如主图形、标签、徽标、锚点等）。为了让每个子 Shape 的样式互不干扰，G6 采用了",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "样式属性前缀分离",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "的设计。",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "解耦",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "：每个子 Shape 只关心属于自己的样式属性，避免样式污染。",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "易扩展",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "：新增子 Shape 只需定义新的前缀，无需修改原有逻辑。",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "配置直观",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "：用户在配置节点/边/Combo 时，可以一目了然地设置各部分样式。",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "以 Label 为例：",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "import { RectStyleProps, TextStyleProps } from '@antv/g';\n\ntype PrefixKey<P extends string = string, K extends string = string> = `${P}${Capitalize<K>}`;\n\ntype Prefix<P extends string, T extends object> = {\n  [K in keyof T as K extends string ? PrefixKey<P, K> : never]?: T[K];\n};\n\ninterface LabelStyleProps extends TextStyleProps, Prefix<'background', RectStyleProps> {\n  background?: boolean;\n}\n",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Prefix<'background', RectStyleProps>",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": " 表示所有以 ",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "background",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": " 开头的属性都属于标签背景样式。",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "在实际渲染时，通过 ",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "subStyleProps",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "、",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "subObject",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": " 等工具函数，自动提取带前缀的样式，传递给对应的 Shape。",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "Label 背景样式提取示例",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "protected getBackgroundStyle(attributes: Required<LabelStyleProps>) {\n  if (attributes.background === false) return false;\n  const style = this.getGraphicStyle(attributes);\n  const backgroundStyle = subStyleProps<RectStyleProps>(style, 'background');\n// ...省略布局计算\n  return backgroundStyle;\n}\n",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "样式配置示例",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "{\n  \"text\": \"label\",\n  \"fontSize\": 12,\n  \"fontFamily\": \"system-ui, sans-serif\",\n  \"wordWrap\": true,\n  \"maxLines\": 1,\n  \"wordWrapWidth\": 128,\n  \"textOverflow\": \"...\",\n  \"textBaseline\": \"middle\",\n  \"background\": true,\n  \"backgroundOpacity\": 0.75,\n  \"backgroundZIndex\": -1,\n  \"backgroundLineWidth\": 0\n}\n",
        "paraId": 21,
        "tocIndex": 7
    },
    {
        "value": "keyShape",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": " 是节点/边/Combo 的主图形，决定交互拾取、包围盒、主样式等。",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "Label",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "、icon、badge、port 等通常作为辅助 Shape 存在，不会作为 keyShape。",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "你可以在自定义节点时通过 ",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "drawKeyShape",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": " 或类似方法指定 keyShape，Label 只负责展示文本信息，不影响节点的交互主控。",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "以节点为例，节点基类 ",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "BaseNode",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": " 已经内置了对多种子 Shape 的支持（keyShape、label、icon、badge、port、halo 等）。你只需专注于 keyShape 的绘制，其他子 Shape 可以通过配置和样式前缀自动管理。",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "protected drawLabelShape(attributes: Required<S>, container: Group): void {\n  const style = this.getLabelStyle(attributes);\n  this.upsert('label', Label, style, container);\n}\n\npublic render(attributes = this.parsedAttributes, container: Group = this) {\n  // 1. 绘制 keyShape（主图形）\n  this._drawKeyShape(attributes, container);\n  if (!this.getShape('key')) return;\n\n  // 2. 绘制 halo\n  this.drawHaloShape(attributes, container);\n\n  // 3. 绘制 icon\n  this.drawIconShape(attributes, container);\n\n  // 4. 绘制 badges\n  this.drawBadgeShapes(attributes, container);\n\n  // 5. 绘制 label\n  this.drawLabelShape(attributes, container);\n\n  // 6. 绘制 ports\n  this.drawPortShapes(attributes, container);\n}\n",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "每个子 Shape 的样式都通过前缀分离自动提取，传递给对应的 Shape 实例。",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "你可以通过配置项灵活控制每个子 Shape 的显示与样式。",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "假设你要为节点添加带背景的标签，只需在节点数据中配置 label 相关属性：",
        "paraId": 26,
        "tocIndex": 11
    },
    {
        "value": "{\n  label: true,\n  labelText: '我是标签',\n  labelFill: '#333',\n  labelFontSize: 14,\n  labelBackground: true,\n  labelBackgroundFill: '#fffbe6',\n  labelBackgroundRadius: 6,\n  labelPadding: [4, 8],\n}\n",
        "paraId": 27,
        "tocIndex": 11
    },
    {
        "value": "labelText",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "labelFill",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "labelFontSize",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": " 等会被自动提取并传递给 Label 的文本部分。",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "labelBackground",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "labelBackgroundFill",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "labelBackgroundRadius",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "labelPadding",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": " 等会被自动提取并传递给 Label 的背景部分。",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "你无需手动管理 Label 的创建、更新、销毁，G6 会自动完成。",
        "paraId": 29,
        "tocIndex": 11
    },
    {
        "value": "检查样式属性前缀是否正确（如 ",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "labelFill",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "、",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "labelBackgroundFill",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "）。",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "确认节点/边/Combo 的 ",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "label",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": " 配置为 ",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "true",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "，且 ",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "labelText",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": " 已设置。",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "检查是否被其他样式覆盖。",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "使用浏览器控制台查看 ",
        "paraId": 31,
        "tocIndex": 14
    },
    {
        "value": "shapeMap",
        "paraId": 31,
        "tocIndex": 14
    },
    {
        "value": "，确认各子 Shape 是否被正确创建。",
        "paraId": 31,
        "tocIndex": 14
    },
    {
        "value": "直接在图配置中设置节点状态样式（推荐）",
        "paraId": 32,
        "tocIndex": 15
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    style: {\n      label: false,\n    },\n    state: {\n      hover: {\n        label: true,\n        labelText: 'show when hovered',\n      },\n    },\n  },\n});\n",
        "paraId": 33,
        "tocIndex": 15
    },
    {
        "value": "或者在 Label 的实现中监听状态变化，动态调整样式。可以通过 data 获取到当前的状态值",
        "paraId": 34,
        "tocIndex": 15
    },
    {
        "value": "如需更深入了解，建议阅读源码 ",
        "paraId": 35,
        "tocIndex": 15
    },
    {
        "value": "base-shape.ts",
        "paraId": 35,
        "tocIndex": 15
    },
    {
        "value": "、",
        "paraId": 35,
        "tocIndex": 15
    },
    {
        "value": "base-node.ts",
        "paraId": 35,
        "tocIndex": 15
    },
    {
        "value": "。",
        "paraId": 35,
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
//# sourceMappingURL=docs_manual_element_shape_label-shape_zh_md_q_hK4X-async.js.map