# Markdown 扩展

VitePress 扩展了标准 Markdown 语法，提供了更丰富的功能来增强你的文档。

## 标题锚点

所有标题会自动应用锚点链接，你可以直接链接到任何标题：

```markdown
[链接到这个标题](#标题锚点)
```

### 自定义锚点

你可以使用自定义锚点：

```markdown
### 我的标题 {#custom-id}
```

## 链接

### 内部链接

内部链接会自动转换为路由链接：

```markdown
[链接到首页](/)
[链接到指南](/guide/getting-started)
[链接到其他页面](./configuration.md)
```

### 外部链接

外部链接会自动添加 `target="_blank"` 和 `rel="noreferrer"`:

```markdown
[VitePress 官网](https://vitepress.dev)
```

## Frontmatter

在 Markdown 文件开头使用 YAML 格式定义页面元数据：

```yaml
---
title: 页面标题
description: 页面描述
layout: doc
---
```

### 常用 Frontmatter 选项

```yaml
---
# 页面标题（覆盖一级标题）
title: 自定义标题

# 页面描述（用于 SEO）
description: 页面描述文本

# 布局类型
layout: doc | home | page

# 导航栏
navbar: true | false

# 侧边栏
sidebar: true | false

# 编辑链接
editLink: true | false

# 最后更新时间
lastUpdated: true | false

# 页面 class
pageClass: custom-page-class

# 大纲级别
outline: [2, 3]

# 自定义元数据
head:
  - - meta
    - name: keywords
      content: vue, vitepress
---
```

## 表格

支持 GitHub 风格的表格：

| 左对齐 | 居中对齐 | 右对齐 |
| :--- | :---: | ---: |
| 内容 1 | 内容 2 | 内容 3 |
| 内容 4 | 内容 5 | 内容 6 |

```markdown
| 左对齐 | 居中对齐 | 右对齐 |
| :--- | :---: | ---: |
| 内容 1 | 内容 2 | 内容 3 |
```

## Emoji

支持 Emoji 表情 :tada: :rocket: :100:

```markdown
:tada: :rocket: :100:
```

[查看完整 Emoji 列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## 目录

使用 `[[toc]]` 生成目录：

```markdown
[[toc]]
```

## 自定义容器

### 提示容器

::: info 信息
这是一个信息框。
:::

::: tip 提示
这是一个提示框。
:::

::: warning 警告
这是一个警告框。
:::

::: danger 危险
这是一个危险提示框。
:::

::: details 详情（可折叠）
这是一个详情块，默认折叠。
:::

```markdown
::: info
这是一个信息框。
:::

::: tip 自定义标题
这是一个带自定义标题的提示框。
:::

::: details 点击查看代码
\`\`\`js
console.log('Hello, VitePress!')
\`\`\`
:::
```

### 自定义容器样式

你可以自定义容器的标题：

::: danger 停止！
这里有危险操作。
:::

::: details 查看源代码
```js
function hello() {
  console.log('Hello, World!')
}
```
:::

## 代码块

### 语法高亮

支持超过 100 种语言的语法高亮：

```js
export default {
  name: 'MyComponent',
  props: {
    msg: String
  }
}
```

```python
def hello(name):
    print(f"Hello, {name}!")

hello("VitePress")
```

```bash
npm install vitepress
npm run docs:dev
```

### 行高亮

在代码块中高亮特定行：

```js{4}
export default {
  data() {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```

```markdown
\`\`\`js{4}
// 第 4 行会被高亮
\`\`\`

\`\`\`js{1,4-6}
// 第 1 行和 4-6 行会被高亮
\`\`\`
```

### 行号

在配置文件中启用行号：

```typescript
export default defineConfig({
  markdown: {
    lineNumbers: true
  }
})
```

或在单个代码块中控制：

````markdown
```ts:line-numbers
// 显示行号
```

```ts:no-line-numbers
// 不显示行号
```
````

### 代码组

使用代码组显示多个代码块：

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

````markdown
::: code-group

```js [config.js]
// JavaScript 配置
```

```ts [config.ts]
// TypeScript 配置
```

:::
````

### 导入代码片段

```markdown
<<< @/snippets/example.js

<<< @/snippets/example.js{2}

<<< @/snippets/example.js{highlightLines}

<<< @/snippets/example.js#region

<<< @/snippets/example.js#region{1}
```

## 在 Markdown 中使用 Vue

### 模板语法

你可以在 Markdown 中使用 Vue 模板语法：

示例：使用双花括号插值语法可以显示动态内容，例如当前时间或计算结果。

```markdown
<!-- 在实际使用时，下面的代码会被 Vue 解析 -->
<!-- 双花括号 + 表达式 -->
当前时间：双花括号 new Date().toLocaleString() 双花括号
1 + 1 = 双花括号 1 + 1 双花括号

<!-- 注意：请将"双花括号"替换为实际的 {{ }} 符号 -->
```

### 使用组件

你可以直接在 Markdown 中使用 Vue 组件：

```markdown
<script setup>
import CustomComponent from './components/CustomComponent.vue'
</script>

# 我的页面

<CustomComponent />
```

### 转义

如果需要显示双花括号语法而不被 Vue 解析，可以使用 v-pre 指令或行内代码：

```markdown
::: v-pre
这里的双花括号不会被解析
:::
```

或使用行内代码：

```markdown
使用反引号包裹：`{{  }}`
```

## 数学公式

如果启用了数学公式支持，可以使用 LaTeX 语法：

行内公式：$E = mc^2$

块级公式：

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

```markdown
行内公式：$E = mc^2$

块级公式：
$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$
```

## 任务列表

- [x] 已完成的任务
- [ ] 未完成的任务
- [ ] 另一个任务

```markdown
- [x] 已完成的任务
- [ ] 未完成的任务
```

## 图片

### 基本用法

```markdown
![图片描述](/path/to/image.png)
![带链接的图片](https://example.com/image.png)
```

### 懒加载

VitePress 会自动为所有图片添加懒加载。

### 图片尺寸

```markdown
![图片](/image.png =200x100)
```

## 徽章

VitePress 提供了内置的徽章组件：

<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />

```markdown
<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
```

## 团队页面

VitePress 提供了专门的团队成员展示组件：

```vue
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members="members" />
```

::: tip 提示
VitePress 的 Markdown 功能非常强大，这里只是介绍了常用的功能。更多高级用法请参考 [官方文档](https://vitepress.dev/guide/markdown)。
:::
