# EVODEK Footer HTML 设计方案库

一套用于展示、比较和维护 **EVODEK 网站底部 Footer** 的静态前端方案库。

项目目前收录 4 套相互独立的响应式 Footer。根目录提供统一预览页面，每套方案均可单独打开、测试和接入网站。全部代码采用原生 HTML、CSS 和 JavaScript 编写，不依赖 WordPress、Bootstrap、jQuery 或第三方 UI 框架。

> 当前重点方案：`footer-04`。它使用一套 HTML 同时适配桌面端和移动端，避免维护两份重复菜单，适合作为后续 WordPress Footer 模板的结构基础。

## 项目特点

- 4 套独立 Footer 设计，可集中对比预览
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
```

尚未部署时，可以直接打开根目录的 `index.html` 查看总览，或打开任一方案目录中的 `index.html` 查看单独预览。

## 目录结构

```text
footer-html-library/
├── index.html                 # 4套方案的统一预览页面
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
└── footer-04/
    ├── index.html
    ├── README.txt
    ├── css/footer.css
    ├── js/footer.js
    └── images/
        ├── evodek-logo.svg
        ├── icon-cert.png
        ├── icon-facebook.svg
        ├── icon-instagram.svg
        ├── icon-linkedin.svg
        └── icon-youtube.svg
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

## 快速使用

### 方法一：直接查看

打开：

```text
index.html
```

根目录页面会以 `iframe` 形式集中展示4套方案。

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
footer-05/
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
