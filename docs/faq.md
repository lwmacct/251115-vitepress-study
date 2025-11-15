---
title: 常见问题
description: VitePress 学习文档常见问题解答
head:
  - - meta
    - name: keywords
      content: VitePress FAQ, 常见问题, 问题解答, 疑难解答
---

# 常见问题（FAQ）

这里汇总了使用 VitePress 时最常遇到的问题和解决方案。

## 🚀 入门问题

### VitePress 和 VuePress 有什么区别？

VitePress 是 VuePress 的精神继承者，主要区别包括：

- **构建工具**：VitePress 使用 Vite，VuePress 使用 Webpack
- **启动速度**：VitePress 启动速度快 10-100 倍
- **热更新**：VitePress 的 HMR 几乎是即时的
- **包大小**：VitePress 生成的包更小
- **API**：VitePress 采用更简洁的 API 设计

::: tip 建议
如果你正在开始新项目，推荐使用 VitePress。
:::

### VitePress 适合做什么？

VitePress 特别适合：

- ✅ 技术文档
- ✅ 产品文档
- ✅ API 参考
- ✅ 知识库
- ✅ 个人博客
- ✅ 项目文档

### 学习 VitePress 需要什么基础？

基础要求：

- **必须**：HTML、CSS、Markdown
- **推荐**：JavaScript 基础
- **可选**：Vue.js 基础（用于高级定制）

## ⚙️ 配置问题

### 如何设置基础路径（base）？

如果你的站点部署在子路径（如 GitHub Pages），需要设置 `base`：

```typescript
// docs/.vitepress/config.ts
export default defineConfig({
  base: '/your-repo-name/'
})
```

::: warning 注意
base 必须以 `/` 开头和结尾！
:::

### 如何配置多语言？

```typescript
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        // 中文配置
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        // 英文配置
      }
    }
  }
})
```

### 如何自定义 logo？

1. 将 logo 文件放在 `docs/public/` 目录
2. 在配置中引用：

```typescript
export default defineConfig({
  themeConfig: {
    logo: '/logo.svg'
  }
})
```

### 如何修改主题颜色？

创建自定义样式文件：

```css
/* docs/.vitepress/theme/style.css */
:root {
  --vp-c-brand-1: #your-color;
  --vp-c-brand-2: #your-color;
  --vp-c-brand-3: #your-color;
}
```

然后在主题入口引入：

```typescript
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default DefaultTheme
```

## 📝 Markdown 问题

### 如何在 Markdown 中使用 Vue 组件？

1. 创建组件文件
2. 在 Markdown 中导入并使用：

```markdown
<script setup>
import MyComponent from './components/MyComponent.vue'
</script>

# 我的页面

<MyComponent />
```

### 如何添加代码高亮？

VitePress 自动支持代码高亮，只需指定语言：

````markdown
```typescript
const hello = 'world'
```
````

支持的语言列表请查看 [Shiki 文档](https://shiki.matsu.io/languages)。

### 如何高亮特定行？

````markdown
```ts{2,4-6}
const line1 = 'not highlighted'
const line2 = 'highlighted'
const line3 = 'not highlighted'
const line4 = 'highlighted'
const line5 = 'highlighted'
const line6 = 'highlighted'
```
````

### 如何导入代码片段？

```markdown
<<< @/snippets/example.ts

<<< @/snippets/example.ts{2}

<<< @/snippets/example.ts#region
```

## 🎨 主题定制问题

### 如何自定义布局？

创建自定义布局组件：

```vue
<!-- docs/.vitepress/theme/Layout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #page-top>
      自定义内容
    </template>
  </Layout>
</template>
```

注册自定义布局：

```typescript
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout
}
```

### 如何添加全局组件？

```typescript
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import MyComponent from './components/MyComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyComponent', MyComponent)
  }
}
```

### 如何使用布局插槽？

VitePress 提供了多个插槽位置：

- `page-top` - 页面顶部
- `page-bottom` - 页面底部
- `doc-before` - 文档内容之前
- `doc-after` - 文档内容之后
- `sidebar-nav-before` - 侧边栏顶部
- `sidebar-nav-after` - 侧边栏底部

## 🚀 部署问题

### GitHub Pages 部署后 404？

检查以下几点：

1. **base 配置**是否正确：

```typescript
base: '/your-repo-name/' // 必须匹配仓库名
```

2. **GitHub Pages 设置**：
   - Source 选择 "GitHub Actions"
   - 确保工作流文件正确

3. **构建输出**：
   - 确保 `docs/.vitepress/dist` 正确生成

### 如何部署到自定义域名？

1. 在 `docs/public/` 创建 `CNAME` 文件：

```
your-domain.com
```

2. 在域名提供商配置 DNS：

```
A    185.199.108.153
A    185.199.109.153
A    185.199.110.153
A    185.199.111.153
```

或使用 CNAME 记录：

```
CNAME    your-username.github.io
```

3. 在 GitHub 仓库设置中配置自定义域名

### 部署后样式丢失？

检查：

1. `base` 配置是否正确
2. 资源路径是否使用了 `withBase()` 函数
3. 是否有 `.nojekyll` 文件（GitHub Actions 会自动添加）

### 如何部署到 Vercel？

1. 导入 GitHub 仓库到 Vercel
2. 配置构建设置：
   - Build Command: `npm run docs:build`
   - Output Directory: `docs/.vitepress/dist`
3. 部署

::: tip 提示
Vercel 会自动检测 VitePress 项目。
:::

## 🔧 开发问题

### 开发服务器启动很慢？

可能的原因和解决方案：

1. **浏览器扩展干扰**
   - 使用无痕模式
   - 或创建专用的开发环境

2. **缓存问题**
   - 清除 `.vitepress/cache` 目录
   - 重新安装依赖

3. **依赖优化**

```typescript
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['some-slow-package']
    }
  }
})
```

### 热更新不工作？

尝试：

1. 重启开发服务器
2. 清除浏览器缓存
3. 检查文件路径是否正确
4. 确保文件保存成功

### 如何调试构建错误？

1. **查看详细日志**：

```bash
npm run docs:build -- --debug
```

2. **常见错误**：
   - 死链接：检查所有链接是否有效
   - Markdown 语法错误：检查特殊字符
   - Vue 模板语法：使用 `v-pre` 转义

### package.json 中 type 应该设置什么？

VitePress 要求使用 ES 模块：

```json
{
  "type": "module"
}
```

::: danger 重要
不设置 `"type": "module"` 会导致 VitePress 无法启动。
:::

## 📦 依赖问题

### 如何更新 VitePress？

```bash
npm install -D vitepress@latest
```

### VitePress 需要什么 Node.js 版本？

- **最低要求**：Node.js 18
- **推荐**：Node.js 20 或更高

检查版本：

```bash
node --version
```

### 可以和其他 Vue 插件一起使用吗？

可以！在主题配置中注册：

```typescript
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  }
}
```

## 🔍 搜索问题

### 如何启用本地搜索？

```typescript
export default defineConfig({
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
```

### 如何使用 Algolia 搜索？

```typescript
export default defineConfig({
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'YOUR_INDEX_NAME'
      }
    }
  }
})
```

### 搜索不到某些页面？

检查：

1. 页面是否在侧边栏或导航中链接
2. 页面文件名是否正确
3. 是否有 frontmatter 排除搜索

## 🌐 SEO 问题

### 如何优化 SEO？

参考我们的配置示例：

1. **设置 meta 标签**（已在本项目配置）
2. **配置 sitemap**（已自动生成）
3. **添加 robots.txt**（已创建）
4. **使用语义化的标题结构**
5. **优化页面描述**

### 如何添加 Google Analytics？

```typescript
export default defineConfig({
  head: [
    ['script', {
      async: '',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
    }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `]
  ]
})
```

## 💡 性能问题

### 如何提升构建速度？

1. **启用 metaChunk**（已配置）
2. **减少依赖**
3. **使用较新的 Node.js 版本**
4. **优化图片资源**

### 如何减小包大小？

1. **代码分割**（自动）
2. **图片优化**（使用 WebP）
3. **懒加载组件**
4. **移除未使用的依赖**

## 🆘 获取帮助

### 在哪里可以获得更多帮助？

- 📖 [官方文档](https://vitepress.dev)
- 💬 [GitHub Discussions](https://github.com/vuejs/vitepress/discussions)
- 🐛 [GitHub Issues](https://github.com/vuejs/vitepress/issues)
- 💡 [Stack Overflow](https://stackoverflow.com/questions/tagged/vitepress)

### 如何报告 Bug？

1. 访问 [GitHub Issues](https://github.com/vuejs/vitepress/issues)
2. 搜索是否已有相同问题
3. 创建新 Issue 并提供：
   - VitePress 版本
   - Node.js 版本
   - 最小复现示例
   - 错误信息和截图

---

::: tip 提示
没有找到你的问题？欢迎[提出新问题](https://github.com/lwmacct/251115-vitepress-study/issues)！
:::
