EVODEK Footer 05

定位：深色品牌订阅型 Footer。

设计参考：
- 借鉴平台型网站“左侧品牌与订阅、右侧多列导航”的大框架
- 代码为EVODEK重新设计和编写，不复制Elementor生成的DOM或样式依赖

特点：
- 桌面端：品牌订阅区 + 3列导航
- 平板端：品牌区在上，3列导航在下
- 手机端：品牌区在上，5组单开折叠菜单在下
- 桌面端和移动端共用同一套HTML内容
- 手机链接展开后采用两列布局
- 使用真实button、ARIA属性和inert控制焦点
- CSS Grid 0fr/1fr实现平滑展开，不使用display覆盖动画
- 原生订阅表单，不依赖外部iframe
- JavaScript失效时仍显示完整导航
- 原生HTML / CSS / JavaScript，无第三方依赖

正式接入前：
1. 替换页面链接和社交媒体URL。
2. 将演示订阅表单连接到实际邮件服务。
3. 更新品牌简介、版权年份和法律链接。
4. 删除index.html中的.demo-space演示区域。
