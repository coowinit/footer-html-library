# EVODEK Footer HTML 设计方案库

一套用于展示、比较和维护 **EVODEK 网站底部 Footer** 的静态前端方案库。

项目目前收录 7 套相互独立的响应式 Footer。根目录提供统一预览页面，每套方案均可单独打开、测试和接入网站。全部代码采用原生 HTML、CSS 和 JavaScript 编写，不依赖 WordPress、Bootstrap、jQuery 或第三方 UI 框架。

> 当前重点方案：`footer-04`、`footer-05`、`footer-06` 和 `footer-07`。这些方案都使用一套 HTML 同时适配桌面端和移动端，覆盖多栏目导航、品牌订阅、企业信息和中文社群入口等场景。

## 项目特点

- 7 套独立 Footer 设计，可集中对比预览
- 桌面端、平板端和移动端响应式适配
- 移动端导航支持展开和收起
- 原生 HTML5、CSS3 和 Vanilla JavaScript
- SVG Logo 与社交媒体图标，适配高分辨率屏幕
- 包含 ISO、SGS、CE、FSC 认证背书图片
- 使用语义化标签和基础无障碍属性
- 资源采用相对路径，可直接部署到 GitHub Pages
- 每套方案独立管理，方便长期扩展和版本维护

## 方案概览

| 方案 | 设计定位 | 主要内容 | 移动端行为 | 推荐用途 |
| --- | --- | --- | --- | --- |
| [`footer-01`](footer-01/) | 现代深色导航型 | 品牌简介、4组导航、版权、社媒 | 4组菜单独立折叠 | 现代品牌官网 |
| [`footer-02`](footer-02/) | 经典企业信息型 | 联系方式、企业导航、公司介绍、认证 | 2个主要区块折叠 | 企业官网或原站风格延续 |
| [`footer-03`](footer-03/) | 简洁高端品牌型 | 精简导航、社媒、认证、政策链接 | 同时只展开1组 | 信息量较少的品牌官网 |
| [`footer-04`](footer-04/) | 统一响应式多栏目型 | 品牌信息、9组导航、社媒、认证 | 同时只展开1组 | 多产品、多资源的正式企业官网 |
| [`footer-05`](footer-05/) | 深色品牌订阅型 | 品牌简介、原生订阅、5组导航、社媒 | 同时只展开1组 | 重视订阅转化的品牌官网 |
| [`footer-06`](footer-06/) | 深色卡片企业型 | 品牌简介、快捷链接、联系方式、扩展入口、支付类型 | 同时只展开1组 | 信息清晰的企业官网或服务网站 |
| [`footer-07`](footer-07/) | 浅色中文社群型 | 品牌信息、中性频道入口、二维码占位、3组中文导航、备案栏 | 同时只展开1组 | 中文企业官网或社群型网站 |

## 在线预览

部署到 GitHub Pages 后，访问地址通常为：

```text
https://<GitHub用户名>.github.io/<仓库名>/
```

各方案的独立地址：

```text
https://<GitHub用户名>.github.io/<仓库名>/footer-01/
https://<GitHub用户名>.github.io/<仓库名>/footer-02/
https://<GitHub用户名>.github.io/<仓库名>/footer-03/
https://<GitHub用户名>.github.io/<仓库名>/footer-04/
https://<GitHub用户名>.github.io/<仓库名>/footer-05/
https://<GitHub用户名>.github.io/<仓库名>/footer-06/
https://<GitHub用户名>.github.io/<仓库名>/footer-07/
```

尚未部署时，可以直接打开根目录的 `index.html` 查看总览，或打开任一方案目录中的 `index.html` 查看单独预览。

## 目录结构

```text
footer-html-library/
├── index.html                 # 7套方案的统一预览页面
├── README.md                  # 项目总说明
│
├── footer-01/
│   ├── index.html
│   ├── README.txt
│   ├── css/footer.css
│   ├── js/footer.js
│   └── images/
│       ├── evodek-logo.svg
│       ├── icon-facebook.svg
│       ├── icon-instagram.svg
│       ├── icon-linkedin.svg
│       └── icon-youtube.svg
│
├── footer-02/
│   ├── index.html
│   ├── README.txt
│   ├── css/footer.css
│   ├── js/footer.js
│   └── images/
│       ├── evodek-logo.svg
│       ├── icon-cert.png
│       ├── icon-email.svg
│       ├── icon-phone.svg
│       └── icon-*.svg
│
├── footer-03/
│   ├── index.html
│   ├── README.txt
│   ├── css/footer.css
│   ├── js/footer.js
│   └── images/
│       ├── evodek-logo.svg
│       ├── icon-cert.png
│       └── icon-*.svg
│
├── footer-04/
│   ├── index.html
│   ├── README.txt
│   ├── css/footer.css
│   ├── js/footer.js
│   └── images/
│       ├── evodek-logo.svg
│       ├── icon-cert.png
│       └── icon-*.svg
│
├── footer-05/
│   ├── index.html
│   ├── README.txt
│   ├── css/footer.css
│   ├── js/footer.js
│   └── images/
│       ├── evodek-logo.svg
│       ├── icon-facebook.svg
│       ├── icon-instagram.svg
│       ├── icon-linkedin.svg
│       └── icon-youtube.svg
│
├── footer-06/
│   ├── index.html
│   ├── README.txt
│   ├── css/footer.css
│   ├── js/footer.js
│   └── images/
│       ├── evodek-logo.svg
│       ├── icon-community.svg
│       ├── icon-video.svg
│       ├── icon-location.svg
│       ├── icon-mail.svg
│       ├── icon-clock.svg
│       └── icon-*.svg
│
└── footer-07/
    ├── index.html
    ├── README.txt
    ├── css/footer.css
    ├── js/footer.js
    └── images/
        ├── beianico.png
        ├── foot-logo.svg
        ├── qr-placeholder.svg
        ├── icon-community.svg
        ├── icon-video.svg
        ├── icon-document.svg
        └── icon-broadcast.svg
```

每套方案的 HTML、CSS、JavaScript 和图片资源均放在自己的目录内，修改一套方案不会影响其他方案。

## Footer 04：推荐架构

`footer-04` 参考大型平台型网站的 Footer 信息架构，并针对 EVODEK 的产品、服务和企业内容进行了重新组织。

### 桌面端

外层采用 12 列 CSS Grid：

- 品牌信息区占 4 列
- 导航区域占 8 列
- 导航内部再划分为 4 个视觉列
- 9组栏目根据内容高度进行人工分组

```text
品牌信息区      第1列          第2列           第3列       第4列
Logo           Products       Applications    Resources   Company
品牌口号        Solutions      Services        Support     Legal
品牌简介                       Partnership
版权信息
社媒与认证
```

### 移动端

屏幕宽度小于 `768px` 时：

- 导航菜单排列在品牌信息上方
- 所有导航组默认收起
- 同一时间仅展开一个导航组
- 点击标题右侧加号展开，再次点击收起
- Logo、品牌简介、社媒和认证信息保持可见

### 单一内容源

桌面端和移动端共用同一套导航 HTML。布局变化由 CSS 完成，折叠状态由 JavaScript 控制，不存在独立的移动端菜单副本。

这种结构可以避免：

- 桌面菜单已更新、移动菜单遗漏更新
- 两套菜单链接不一致
- 重复内容增加维护成本
- 页面中出现不必要的重复导航

## Footer 05：深色品牌订阅架构

`footer-05` 借鉴平台型网站“左侧品牌与订阅、右侧多列导航”的大框架，所有HTML、CSS和JavaScript均针对EVODEK重新设计。

### 桌面端

- 最大内容宽度为 `1728px`
- 左侧为Logo、社媒、品牌简介、原生订阅表单和版权信息
- 右侧最大约占55%，使用3列导航承载5组栏目
- 不依赖Elementor、外部表单iframe或第三方UI框架

### 平板端

- 品牌区排列在上方
- 3列导航排列在下方
- 所有导航链接保持展开

### 移动端

- 品牌介绍和订阅表单优先显示
- 5组导航在品牌区下方转换为Accordion
- 同一时间只展开1组菜单
- 展开内容采用两列链接布局
- CSS Grid `0fr/1fr`负责动画，JavaScript只管理状态和ARIA属性

### 订阅表单

当前为可验证交互的原生演示表单，正式上线前必须连接实际邮件服务或WordPress表单处理接口。演示代码不会提交或保存邮件地址。

## Footer 06：深色卡片企业架构

`footer-06`采用圆角深色卡片，将品牌简介、快捷链接、联系方式和扩展入口组织为四个独立信息区。

### 桌面端

- 主内容使用四列CSS Grid
- Quick Links内部使用两列Grid
- 版权、支付类型和法律链接在底部三段对齐
- 所有栏目保持展开，不依赖JavaScript完成桌面布局

### 平板端

- 四个信息区转换为两列Grid
- 法律链接排列到付款类型下方
- 所有内容仍保持展开

### 手机端

- 品牌Logo、简介和两个中性频道按钮保持可见
- Quick Links、Contacts和Explore More默认收起
- 同一时间只允许展开一个信息组
- CSS Grid `0fr/1fr`完成平滑动画
- JavaScript只切换状态、ARIA属性和`inert`

### 中性图标

Footer 06没有使用第三方平台、社交媒体或支付品牌Logo。所有入口图标和支付符号均为项目内的基础几何SVG，只作为结构演示。正式上线时应根据网站实际功能替换名称、链接和支付类型。

## Footer 07：浅色中文社群架构

`footer-07`采用浅灰色主体和白色备案栏，将品牌说明、频道入口、二维码和中文导航集中在最大1200px内容区内。

### 桌面端

- 最大内容宽度为 `1200px`
- 左侧为品牌文字、品牌说明、4个中性频道入口和二维码
- 右侧为产品相关、服务支持和关于我们3组导航
- 3组导航全部展开，不依赖JavaScript完成桌面布局
- ICP和公安备案信息集中放在独立的白色底栏

### 平板端

- 继续保持左右布局
- 品牌区和导航区使用弹性列宽
- 缩小左右间距和导航组间距

### 手机端

- 品牌文字、说明、频道入口和二维码保持可见
- 3组导航默认收起
- 同一时间只允许展开1组菜单
- 菜单使用真实按钮、ARIA属性、`inert`和CSS Grid动画
- 备案信息转换为纵向居中排列

### 二维码与备案信息

`qr-placeholder.svg`是不可扫码的占位图，正式上线前必须替换为真实二维码。公安备案信息使用 `beianico.png`，ICP备案号和公安备案号均保留“请替换”提示，不包含其他网站的备案内容。

Footer 07使用经过精简的 `foot-logo.svg` 替代原有文字Logo。优化后的文件移除了固定宽高、冗余Mask和展开描边路径，保留 `viewBox` 并使用 `currentColor`，方便在不同尺寸和颜色环境中复用。

## 快速使用

### 方法一：直接查看

打开：

```text
index.html
```

根目录页面会以 `iframe` 形式集中展示7套方案。

### 方法二：单独使用某套方案

以 `footer-04` 为例，需要保留：

```text
footer-04/index.html
footer-04/css/footer.css
footer-04/js/footer.js
footer-04/images/
```

将 `index.html` 中的 `<footer>...</footer>` 复制到目标页面，并根据实际目录调整CSS、JavaScript和图片路径。

### 方法三：本地服务器预览

部分浏览器对直接打开本地文件存在限制。推荐在项目根目录启动简单的本地服务器：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080/
```

## GitHub Pages 部署

1. 在 GitHub 创建新仓库。
2. 将项目文件上传到仓库根目录。
3. 进入 `Settings → Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/(root)`。
6. 保存并等待 GitHub 完成部署。

CSS、JavaScript和图片均使用相对路径，因此项目部署在 GitHub Pages 子目录时也可以正常加载。

如果不希望 GitHub Pages 使用 Jekyll 处理静态文件，可以在仓库根目录增加空文件：

```text
.nojekyll
```

## 正式上线前需要修改

### 页面链接

当前页面链接主要用于结构演示，例如：

```html
<a href="/about/">About EVODEK</a>
```

正式接入网站前，应根据网站实际页面结构统一核对和替换。

### 社交媒体地址

部分社媒链接暂时使用：

```html
href="#"
```

请替换为 EVODEK 官方 Facebook、Instagram、LinkedIn 和 YouTube 地址，同时保留相应的 `aria-label`。

### 电话与邮箱

`footer-02` 包含示例电话和邮箱：

```html
<a href="tel:+61283111111">...</a>
<a href="mailto:info@evodekco.com">...</a>
```

上线前需要确认号码、邮箱、显示文本及国际区号是否正确。

### 品牌文案

建议统一核对：

- 品牌口号
- 公司简介
- 产品和服务栏目名称
- 版权主体与年份
- EVODEK® 商标写法
- 认证名称和替代文本

### 演示内容

各方案的 `index.html` 可能包含仅用于展示 Footer 位置的 `.demo-space`。接入正式网站时应删除演示区域，只保留 Footer 本身。

## 图片与图标

### Logo

各方案使用：

```text
images/evodek-logo.svg
```

SVG具有清晰、体积小、适配Retina屏幕等优点。建议继续使用 `<img>` 引用，以获得浏览器缓存、替代文本和固有尺寸支持。

### 社交媒体图标

项目包含：

```text
icon-facebook.svg
icon-instagram.svg
icon-linkedin.svg
icon-youtube.svg
```

部分方案通过 CSS Mask 加载SVG，使多个图标可以统一继承颜色，并由CSS控制 Hover 和 Focus 状态。

### 认证图片

`icon-cert.png` 用于展示 ISO、SGS、CE 和 FSC 认证标识。图片为透明背景PNG，适合在深色或浅色Footer中使用。

正式上线前应确认：

- 当前认证仍然有效
- 网站具有展示相应认证标识的授权
- 图片中的证书名称与实际证书一致
- 替代文本不会夸大认证范围

## 响应式断点

| 方案 | 移动端断点 |
| --- | --- |
| Footer 01 | `max-width: 720px` |
| Footer 02 | `max-width: 720px` |
| Footer 03 | `max-width: 720px` |
| Footer 04 | `max-width: 767px` |
| Footer 05 | `max-width: 767px` |
| Footer 06 | `max-width: 767px` |
| Footer 07 | `max-width: 767px` |

将方案接入正式网站时，可以根据网站现有断点统一调整，但HTML、CSS和JavaScript中的断点应保持一致。

## 无障碍设计

项目已经加入基础无障碍处理：

- Footer导航使用语义化的 `<nav>`、`<section>`、标题和列表
- 移动端折叠标题使用真实 `<button>`
- `aria-expanded` 表示当前展开状态
- `aria-controls` 关联按钮与内容区域
- 社媒链接提供 `aria-label`
- 装饰图标使用 `aria-hidden="true"`
- Logo和认证图片包含替代文本
- 键盘用户可以操作折叠菜单和链接
- Focus状态具有可见轮廓
- `prefers-reduced-motion` 用户可减少动画

`footer-04` 还采用渐进增强策略：JavaScript加载失败时，完整导航仍然保持可见。

## WordPress 接入建议

长期使用时，不建议把所有链接永久硬编码在 `footer.php` 中。推荐拆分为以下数据来源：

| 内容 | 推荐来源 |
| --- | --- |
| Logo | WordPress 自定义 Logo 或主题设置 |
| 品牌简介 | 主题设置或 ACF Options Page |
| Footer导航 | WordPress 菜单或统一配置数组 |
| 社媒地址 | 主题设置或 ACF Options Page |
| 联系方式 | 主题设置或 ACF Options Page |
| 版权年份 | PHP自动生成 |
| 认证图片 | 媒体库或主题资源目录 |

版权年份示例：

```php
&copy; <?php echo esc_html( wp_date( 'Y' ) ); ?> EVODEK&reg;.
```

导航链接输出时应使用WordPress转义函数，例如：

```php
<a href="<?php echo esc_url( $url ); ?>">
    <?php echo esc_html( $label ); ?>
</a>
```

WordPress接入后仍应保持“一个菜单数据源”的原则，避免分别维护桌面版和移动版菜单。

## 开发与维护规范

新增方案时建议遵循统一结构：

```text
footer-07/
├── index.html
├── README.txt
├── css/footer.css
├── js/footer.js
└── images/
```

同时完成以下操作：

1. 在根目录 `index.html` 增加预览卡片。
2. 在本 README 的方案表中增加记录。
3. 使用唯一的HTML ID，避免多个折叠组件冲突。
4. 确保所有 `aria-controls` 都能找到对应内容。
5. 保持图片、CSS和JavaScript使用相对路径。
6. 不为了简单交互引入大型前端框架。
7. 尽量复用经过标准化的SVG资源。
8. 在桌面端和移动端分别测试布局与交互。

## 上线检查清单

- [ ] 所有页面链接均已替换并测试
- [ ] 社交媒体链接已替换为官方地址
- [ ] 电话、邮箱和国际区号正确
- [ ] Logo、口号、简介和版权主体正确
- [ ] 认证图标与当前有效证书一致
- [ ] 桌面端导航列没有明显高度失衡
- [ ] 手机端菜单能够展开、收起和切换
- [ ] 键盘可以访问所有按钮和链接
- [ ] 页面中不存在重复ID
- [ ] 所有图片、CSS和JavaScript均可正常加载
- [ ] 已删除 `.demo-space` 等演示内容
- [ ] 已在Chrome、Edge、Safari和Firefox中测试
- [ ] 已在真实手机或浏览器设备模式中测试

## 浏览器支持

面向当前主流现代浏览器：

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Apple Safari
- iOS Safari
- Android Chrome

项目使用CSS Grid、Flexbox、CSS Mask、`matchMedia`和现代无障碍属性。若需要兼容非常旧的浏览器，应另行制定降级策略。

## 技术栈

```text
HTML5
CSS3 Grid / Flexbox
Vanilla JavaScript
SVG / PNG
GitHub Pages
```

## 项目用途

- EVODEK Footer UI方案预览
- 不同Footer结构的内部评审与对比
- 网站Footer设计归档
- GitHub Pages在线展示
- WordPress主题开发参考
- 多网站项目的前端代码复用

## 版本记录

### v1.4.1 — 2026-08-24

- 优化用户提供的 `foot-logo.svg` 矢量Logo
- 移除SVG固定宽高，使Logo通过CSS响应式缩放
- 将固定黑色填充改为 `currentColor`
- 移除冗余Mask和展开描边路径，使用简洁描边箭头保持原有视觉
- SVG由16个Path和1个Mask精简为14个Path，无Mask依赖
- 文件体积由约15KB降低至约12KB
- 使用优化后的SVG替换 Footer 07左侧文字Logo
- 增加桌面端、手机端和小屏手机Logo尺寸规则
- 更新 Footer 07说明文档、项目目录结构和版本记录

### v1.4.0 — 2026-08-24

- 新增 `footer-07` 浅色中文社群导航型方案
- 桌面端采用最大1200px的品牌区与3列导航布局
- 平板端保留左右结构并使用弹性列宽和紧凑间距
- 手机端将3组导航转换为默认收起的单开式折叠菜单
- 使用真实按钮、ARIA属性、`inert`和CSS Grid完成无障碍折叠交互
- 新增不可扫码的 `qr-placeholder.svg` 二维码占位图
- 使用用户提供的 `beianico.png` 作为公安备案图标
- ICP和公安备案号码使用明确的“请替换”占位内容
- 使用4个中性几何SVG替代第三方社交和内容平台图标
- 更新根目录总览页、方案对比、目录结构和响应式说明

### v1.3.0 — 2026-08-24

- 新增 `footer-06` 深色圆角卡片式企业Footer
- 桌面端采用品牌、快捷链接、联系方式和扩展入口四列布局
- 平板端转换为两列布局，手机端转换为单开式折叠菜单
- 增加版权、通用支付类型和法律链接三段式底栏
- 使用真实按钮、ARIA属性、`inert`和CSS Grid折叠动画
- 所有第三方平台、社交和支付品牌元素均替换为中性名称与原创几何SVG
- 新增社区、视频、入口、联系方式和通用支付类型图标
- 更新根目录总览页、方案对比、目录结构和响应式说明

### v1.2.2 — 2026-08-24

- 修复根目录总览页Footer预览底部残留白色空白
- iframe高度改为直接读取 `.site-footer` 的真实底部位置
- 移除 `documentElement.offsetHeight` 对原始固定高度的干扰
- 删除预览框高度过渡，加载后立即贴合Footer实际高度
- 保持5套Footer预览的自动高度和无内部滚动条效果

### v1.2.1 — 2026-08-24

- 精修 Footer 05 手机端导航菜单
- 为折叠内容增加独立动画内层，确保收起高度完全归零
- 统一菜单标题高度、分隔线密度和展开内容上下留白
- 优化展开后双列链接的行距、列间距和可读性
- 使用单一CSS边框箭头替代双线段图标
- 修正箭头在关闭、展开和键盘聚焦状态下的视觉对齐

### v1.2.0 — 2026-08-24

- 新增 `footer-05` 深色品牌订阅型方案
- 采用品牌订阅区与3列导航的桌面布局
- 增加平板端上下结构和手机端5组单开折叠菜单
- 使用一套HTML同时适配桌面、平板和手机
- 使用真实按钮、ARIA属性及 `inert` 管理折叠状态和焦点
- 使用CSS Grid `0fr/1fr`完成平滑展开动画
- 新增原生邮件订阅演示表单，移除外部iframe依赖
- 复用现有Logo和社交媒体SVG资源
- 更新根目录总览页、方案对比、目录结构和使用说明

### v1.1.2 — 2026-08-24

- 优化根目录总览页的 Footer 预览框
- 根据各 Footer 的实际内容自动调整 `iframe` 高度
- 移除 Footer 03 和 Footer 04 预览区域的上下滚动条
- 移动端折叠菜单展开或收起后自动重新计算高度
- 总览页预览时隐藏独立页面中的 `.demo-space` 占位区域
- 独立打开各 Footer 时仍保留原有完整展示效果

### v1.1.1 — 2026-08-24

- 全面重构项目README
- 补全4套Footer方案对比
- 明确Footer 04统一响应式架构
- 增加快速使用和GitHub Pages部署说明
- 增加资源替换、无障碍和WordPress接入建议
- 增加维护规范及上线检查清单

### v1.1.0 — 2026-08-24

- 新增 `footer-04`
- 使用单一HTML内容源适配桌面端和移动端
- 新增12列桌面布局和移动端单开折叠菜单
- 更新根目录统一预览页面

### v1.0.0 — 2026-08-21

- 建立Footer HTML设计方案库
- 收录 `footer-01`、`footer-02` 和 `footer-03`
- 提供根目录统一预览页面

## 使用说明

本项目当前作为 EVODEK 网站内部设计与开发参考资料使用。如需公开分发、商业授权或第三方复用，建议在仓库中补充明确的 `LICENSE` 文件，并确认Logo、商标、认证图标和品牌内容的使用权限。
