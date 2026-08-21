# EVODEK Footer HTML 预览项目

这是一个用于展示和管理 **EVODEK 网站底部 Footer 方案** 的静态 HTML 项目。

项目目前包含两套独立 Footer：

- `footer-01`：现代深色风格 Footer
- `footer-02`：经典 EVODEK 风格 Footer
- `footer-03`：简洁高端品牌型 Footer

根目录提供统一的 `index.html` 预览页面，可同时查看两套 Footer，并可单独进入每个目录进行完整预览。

本项目不依赖 WordPress、PHP、Bootstrap、jQuery 或其他前端框架，全部采用原生 **HTML + CSS + JavaScript** 编写，适合直接部署到 **GitHub Pages**。

---

## 在线预览结构

部署到 GitHub Pages 后：

- 根目录：Footer 总览页面
- `/footer-01/`：第一套 Footer
- `/footer-02/`：第二套 Footer
- `/footer-03/`：第三套 Footer

例如：

```text
https://yourname.github.io/your-repository/
https://yourname.github.io/your-repository/footer-01/
https://yourname.github.io/your-repository/footer-02/
https://yourname.github.io/your-repository/footer-03/
```

---

## 项目目录

```text
/
├── index.html
├── README.md
├── .nojekyll
│
├── footer-01/
│   ├── index.html
│   ├── README.txt
│   │
│   ├── css/
│   │   └── footer.css
│   │
│   ├── js/
│   │   └── footer.js
│   │
│   └── images/
│       ├── evodek-logo.svg
│       ├── icon-facebook.svg
│       ├── icon-instagram.svg
│       ├── icon-linkedin.svg
│       └── icon-youtube.svg
│
└── footer-02/
    ├── index.html
    ├── README.txt
    │
    ├── css/
    │   └── footer.css
    │
    ├── js/
    │   └── footer.js
    │
    └── images/
        ├── evodek-logo.svg
        ├── icon-facebook.svg
        ├── icon-instagram.svg
        ├── icon-linkedin.svg
        ├── icon-youtube.svg
        ├── icon-phone.svg
        ├── icon-email.svg
        └── icon-cert.png
```

---

# Footer 01

## 设计特点

`footer-01` 为更加现代、简洁的深色 Footer 风格。

主要结构：

- EVODEK Logo
- 品牌口号
- 品牌简介
- 品牌入口链接
- Products
- Resources
- Support
- Company
- 底部版权信息
- 社交媒体图标

桌面端采用多列布局，使品牌区和导航区域保持较好的视觉平衡。

## 手机端

当屏幕宽度小于或等于 `720px` 时：

- 品牌信息保持显示
- Products 默认折叠
- Resources 默认折叠
- Support 默认折叠
- Company 默认折叠
- 点击 `+` 展开
- 点击 `−` 收起

这种方式可以明显减少手机端 Footer 的纵向长度。

---

# Footer 02

## 设计特点

`footer-02` 基于 EVODEK 原网站 Footer 风格重新制作。

主要结构：

### 左侧

- EVODEK Logo
- 电话
- 邮箱
- Facebook
- LinkedIn
- YouTube
- Instagram

### 中间

`WHO WE ARE`

包含两列网站导航链接。

### 右侧

`WHAT WE DO`

用于展示 EVODEK 品牌和产品介绍。

### 底部

左侧：

- Copyright
- EVODEK 品牌版权信息

右侧：

- ISO
- SGS
- CE
- FSC

认证标识使用透明背景 PNG 图片：

```text
images/icon-cert.png
```

## 手机端

当屏幕宽度小于或等于 `720px` 时：

- Logo、电话、邮箱和社媒保持显示
- `WHO WE ARE` 默认折叠
- `WHAT WE DO` 默认折叠
- 点击标题右侧 `+` 展开
- 点击 `−` 收起

---

# Footer 03

## 设计定位

`footer-03` 定位为 **简洁高端品牌型 Footer**。

与前两套相比，这一版进一步减少信息量和视觉占用，不再设置大型 CTA 区块，重点保留品牌、核心导航、社交媒体和认证背书。

主要结构：

- EVODEK Logo
- 简短品牌介绍
- Products / Resources / Company / Contact 四组精简导航
- Facebook / LinkedIn / YouTube / Instagram
- ISO / SGS / CE / FSC 认证背书
- Privacy Policy / Terms / Cookie Policy

视觉上采用两层深色结构：

- 主体导航区：深灰
- 版权与信任区：更深黑色

整体高度更紧凑，更适合作为常规企业官网的底部区域。

## 手机端

当屏幕宽度小于或等于 `720px` 时：

- EVODEK 品牌信息保持显示
- 4 组导航默认折叠
- 同一时间仅展开一组导航
- 社媒与认证信息保持可见
- 版权与政策链接保持显示

这种方式在保留完整信息的同时，可以尽量减少手机端 Footer 的纵向长度。

---

# 图片资源

## EVODEK Logo

两套 Footer 均使用：

```text
images/evodek-logo.svg
```

Logo 使用 SVG 格式，适合 Retina、高分辨率屏幕以及响应式网站。

---

## 社交媒体图标

当前包含：

```text
icon-facebook.svg
icon-instagram.svg
icon-linkedin.svg
icon-youtube.svg
```

Footer 中通过 CSS 控制图标颜色、尺寸和 Hover 状态。

这样做的优点：

- SVG 文件独立缓存
- HTML 结构更加简洁
- 图标颜色可以统一通过 CSS 控制
- 后续更换图标更加方便

---

## 认证图标

Footer 02 使用：

```text
images/icon-cert.png
```

图片包含：

- ISO
- SGS
- CE
- FSC

图片为透明背景 PNG，可直接用于深色 Footer。

---

# CSS 文件

每套 Footer 使用独立 CSS：

```text
footer-01/css/footer.css
footer-02/css/footer.css
```

两套方案之间互不影响。

这样设计的好处是后续即使分别修改 Footer，也不会互相产生样式冲突。

---

# JavaScript 文件

每套 Footer 使用独立 JavaScript：

```text
footer-01/js/footer.js
footer-02/js/footer.js
```

JavaScript 目前主要负责手机端折叠菜单。

项目未使用：

- jQuery
- Bootstrap JS
- 第三方 UI 框架

因此代码较轻量，后期维护也更简单。

---

# GitHub Pages 部署方法

## 第一步：创建 GitHub 仓库

在 GitHub 创建一个新的 Repository。

例如：

```text
evodek-footer
```

---

## 第二步：上传文件

将本项目中的所有文件上传到仓库根目录。

注意：

不要只上传 `footer-01` 和 `footer-02`。

根目录的：

```text
index.html
README.md
.nojekyll
```

也需要一起上传。

---

## 第三步：开启 GitHub Pages

进入：

```text
Repository
→ Settings
→ Pages
```

在：

```text
Build and deployment
```

中选择：

```text
Source:
Deploy from a branch
```

Branch 选择：

```text
main
```

目录选择：

```text
/(root)
```

然后点击：

```text
Save
```

---

## 第四步：等待发布

GitHub 通常会在几分钟内完成部署。

部署完成后会得到类似：

```text
https://yourname.github.io/evodek-footer/
```

的地址。

---

# 为什么可以部署在 GitHub Pages 子目录

项目中的 CSS、JS 和图片全部使用相对路径。

例如：

```html
<link rel="stylesheet" href="css/footer.css">
```

```html
<script src="js/footer.js" defer></script>
```

```html
<img src="images/evodek-logo.svg" alt="EVODEK">
```

因此即使项目最终部署在：

```text
https://username.github.io/repository-name/
```

这样的子目录中，也可以正常加载资源。

---

# 修改网站链接

目前项目中的部分链接仍然属于演示地址。

例如：

```html
<a href="/about/">About EVODEK</a>
```

正式接入网站时，需要根据实际网站 URL 修改。

如果部署在 GitHub Pages 仅用于界面预览，则可以暂时保留。

---

# 修改社交媒体链接

目前部分社媒链接使用：

```html
href="#"
```

作为占位符。

正式使用时应修改为 EVODEK 官方账号。

例如：

```html
<a href="https://www.facebook.com/xxxxx">
```

建议同时保留：

```html
aria-label="Facebook"
```

方便无障碍访问。

---

# 修改电话和邮箱

Footer 02 中电话采用：

```html
<a href="tel:+61283111111">
```

邮箱采用：

```html
<a href="mailto:info@evodekco.com">
```

正式上线前请根据实际联系方式确认。

---

# 响应式断点

当前主要移动端断点为：

```css
@media (max-width: 720px)
```

小于或等于 `720px` 时启用手机端折叠结构。

如网站整体 CSS 已有统一断点，也可以调整为：

```text
768px
```

或网站现有的移动端标准。

---

# 新增 Footer 方案

项目采用独立目录结构，因此以后增加新的 Footer 非常简单。

例如：

```text
footer-03/
footer-04/
footer-05/
```

每个目录建议继续保持：

```text
footer-03/
├── index.html
├── css/
├── js/
└── images/
```

然后在根目录：

```text
index.html
```

中增加新的预览卡片即可。

这样可以长期将本仓库作为：

> EVODEK Footer HTML 设计方案库

使用。

---

# 维护建议

建议长期保持以下原则：

1. 每套 Footer 独立目录管理。
2. CSS、JavaScript、图片资源不要全部混在根目录。
3. 图片优先使用 SVG。
4. 照片或复杂认证图可以使用 WebP / PNG。
5. 不要为了简单交互引入大型 JavaScript 框架。
6. 手机端 Footer 导航建议默认折叠。
7. 每增加一套方案，都在根目录预览页增加入口。
8. 正式上线前检查所有链接、电话、邮箱和社媒地址。
9. Logo、图标等公共资源修改时注意不同 Footer 之间的版本关系。
10. 保持 HTML 语义化和基本无障碍属性。

---

# 浏览器兼容

建议浏览器：

- Google Chrome
- Microsoft Edge
- Safari
- Firefox

支持现代桌面浏览器和主流移动浏览器。

---

# 技术栈

```text
HTML5
CSS3
Vanilla JavaScript
SVG
PNG
GitHub Pages
```

没有额外依赖。

---

# 项目用途

本仓库主要用于：

- EVODEK Footer UI 方案预览
- 网站 Footer 设计存档
- 不同 Footer 方案对比
- GitHub Pages 在线演示
- 后续网站开发参考
- 前端代码复用

---

## 当前方案

| 目录 | 风格 | 手机端折叠 |
| --- | --- | --- |
| `footer-01` | 现代深色多列 Footer | 是 |
| `footer-02` | 经典 EVODEK Footer | 是 |
| `footer-03` | 简洁高端品牌型 Footer | 是 |

后续可以继续增加更多设计方案。
