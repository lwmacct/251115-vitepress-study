---
title: 示例展示
description: VitePress 功能示例和代码演示
head:
  - - meta
    - name: keywords
      content: VitePress 示例, 代码演示, Markdown 示例, Vue 组件示例
---

# 示例展示

本页面展示 VitePress 的各种功能和特性，你可以直接查看效果并参考代码实现。

## 📝 Markdown 扩展示例

### 自定义容器

::: info 信息提示
这是一个信息提示框，用于展示一般性信息。
:::

::: tip 小贴士
这是一个提示框，用于提供有用的建议。
:::

::: warning 警告
这是一个警告框，提醒用户注意潜在问题。
:::

::: danger 危险
这是一个危险提示框，警告用户严重问题。
:::

::: details 点击查看详情
这是一个可折叠的详情块，默认是折叠状态。

可以包含任何内容，包括代码块：

```javascript
console.log('Hello, VitePress!')
```
:::

**代码示例：**

````markdown
::: tip 自定义标题
这是一个带自定义标题的提示框
:::
````

### 代码块功能

#### 语法高亮

```typescript
interface User {
  id: number
  name: string
  email: string
}

function greetUser(user: User): string {
  return `Hello, ${user.name}!`
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
}

console.log(greetUser(user))
```

#### 行高亮

```js{2,4-6}
const line1 = '普通行'
const line2 = '高亮行'
const line3 = '普通行'
const line4 = '高亮行'
const line5 = '高亮行'
const line6 = '高亮行'
```

#### 代码组

::: code-group

```js [JavaScript]
export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
```

```ts [TypeScript]
interface ComponentData {
  message: string
}

export default {
  name: 'MyComponent',
  data(): ComponentData {
    return {
      message: 'Hello Vue!'
    }
  }
}
```

```vue [Single File Component]
<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
</script>

<template>
  <div>{{ message }}</div>
</template>
```

:::

### 表格示例

| 功能 | 支持情况 | 说明 |
| :--- | :---: | --- |
| Markdown | ✅ | 标准 Markdown 语法 |
| Vue 组件 | ✅ | 支持在 MD 中使用 |
| 代码高亮 | ✅ | 超过 100 种语言 |
| 自定义容器 | ✅ | 多种预设样式 |
| 数学公式 | ⚠️ | 需要插件支持 |

### 任务列表

- [x] 创建项目结构
- [x] 编写配置文件
- [x] 添加文档内容
- [ ] 部署到生产环境
- [ ] 优化 SEO
- [ ] 添加评论功能

### Emoji 表情

支持 GitHub 风格的 Emoji：

:tada: :rocket: :100: :fire: :heart: :star: :sparkles: :zap:

常用 Emoji 速查：

| Emoji | 代码 | 用途 |
| :---: | --- | --- |
| :bulb: | `:bulb:` | 提示 |
| :warning: | `:warning:` | 警告 |
| :x: | `:x:` | 错误 |
| :white_check_mark: | `:white_check_mark:` | 成功 |
| :link: | `:link:` | 链接 |
| :memo: | `:memo:` | 笔记 |

## 🎨 徽章示例

使用内置的 Badge 组件：

<Badge type="info" text="默认" />
<Badge type="tip" text="提示" />
<Badge type="warning" text="警告" />
<Badge type="danger" text="危险" />

**代码示例：**

```markdown
<Badge type="tip" text="v2.0" />
<Badge type="info" text="测试版" />
```

## 📊 布局示例

### 两栏布局

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
  <div style="padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <h4>左栏内容</h4>
    <p>这里是左侧栏的内容。可以放置任何元素。</p>
  </div>
  <div style="padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <h4>右栏内容</h4>
    <p>这里是右侧栏的内容。支持响应式布局。</p>
  </div>
</div>

### 卡片布局

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
  <div style="padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; border: 1px solid var(--vp-c-divider);">
    <h4 style="margin-top: 0;">🚀 快速</h4>
    <p style="margin-bottom: 0;">基于 Vite 构建，启动速度极快</p>
  </div>
  <div style="padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; border: 1px solid var(--vp-c-divider);">
    <h4 style="margin-top: 0;">📝 简单</h4>
    <p style="margin-bottom: 0;">使用 Markdown 编写内容</p>
  </div>
  <div style="padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; border: 1px solid var(--vp-c-divider);">
    <h4 style="margin-top: 0;">🎨 美观</h4>
    <p style="margin-bottom: 0;">精美的默认主题</p>
  </div>
</div>

## 🔗 链接示例

### 内部链接

- [首页](/)
- [快速开始](/guide/getting-started)
- [配置指南](/guide/configuration)
- [API 参考](/api/introduction)

### 外部链接

- [VitePress 官网](https://vitepress.dev)
- [Vue.js 文档](https://vuejs.org)
- [GitHub 仓库](https://github.com/vuejs/vitepress)

## 💡 提示框组合示例

::: info 版本说明
当前使用的是 **VitePress 2.0** alpha 版本。
:::

::: tip 推荐做法
建议在生产环境使用稳定版本。
:::

::: warning 兼容性提醒
某些功能可能在旧版本浏览器中不支持。
:::

::: danger 破坏性变更
从 1.x 升级到 2.x 可能需要修改配置文件。
:::

::: details 查看完整变更日志
点击查看 [更新日志](/changelog)
:::

## 📋 列表示例

### 有序列表

1. 第一步：安装 Node.js
2. 第二步：安装 VitePress
   1. 使用 npm：`npm install -D vitepress`
   2. 使用 yarn：`yarn add -D vitepress`
   3. 使用 pnpm：`pnpm add -D vitepress`
3. 第三步：创建第一个文档
4. 第四步：启动开发服务器

### 无序列表

- VitePress 功能
  - Markdown 扩展
  - Vue 组件支持
  - 主题定制
  - 插件系统
- 部署选项
  - GitHub Pages
  - Netlify
  - Vercel
  - 自托管服务器

### 定义列表

VitePress
: 基于 Vite 的静态站点生成器

Vite
: 下一代前端构建工具

Vue.js
: 渐进式 JavaScript 框架

## 🖼️ 图片示例

### 基本图片

![VitePress Logo](/logo.svg)

### 带链接的图片

[![VitePress](https://vitepress.dev/vitepress-logo-large.webp)](https://vitepress.dev)

## 📐 对齐示例

### 居中对齐

<div style="text-align: center;">
  <p style="font-size: 1.5rem; font-weight: 600;">这是居中的标题</p>
  <p>这是居中的段落文本</p>
</div>

### 右对齐

<div style="text-align: right;">
  <p>这段文本靠右对齐</p>
</div>

## 🎯 实用示例

### 快捷命令面板

<div style="background: var(--vp-c-bg-soft); padding: 1.5rem; border-radius: 8px; margin: 1rem 0; font-family: var(--vp-font-family-mono); font-size: 0.9rem;">
  <div style="margin-bottom: 0.5rem;"><span style="color: var(--vp-c-brand-1);">$</span> npm install -D vitepress</div>
  <div style="margin-bottom: 0.5rem;"><span style="color: var(--vp-c-brand-1);">$</span> npm run docs:dev</div>
  <div><span style="color: var(--vp-c-brand-1);">$</span> npm run docs:build</div>
</div>

### 快捷键说明

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1rem 0;">
  <kbd style="padding: 0.25rem 0.5rem; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 4px; font-size: 0.9rem;">Ctrl</kbd>
  <span>+</span>
  <kbd style="padding: 0.25rem 0.5rem; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 4px; font-size: 0.9rem;">K</kbd>
  <span>打开搜索</span>
</div>

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1rem 0;">
  <kbd style="padding: 0.25rem 0.5rem; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 4px; font-size: 0.9rem;">/</kbd>
  <span>聚焦搜索框</span>
</div>

## 📦 更多示例

想要查看更多高级示例？

- 查看 [VitePress 官方示例](https://github.com/vuejs/vitepress/tree/main/examples)
- 访问 [VitePress 展示页面](https://vitepress.dev/guide/what-is-vitepress)
- 阅读 [Markdown 扩展文档](/guide/markdown)

---

::: tip 提示
以上所有示例都可以在你的 VitePress 站点中直接使用！
:::
