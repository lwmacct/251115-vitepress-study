# API 参考

本节提供 VitePress 核心 API 的详细参考文档。

## 概述

VitePress 提供了以下几类 API：

- **配置 API** - 站点和主题配置选项
- **主题 API** - 主题定制和扩展接口
- **运行时 API** - 在 Vue 组件中使用的组合式 API
- **Markdown API** - Markdown 扩展和自定义容器

## 快速开始

### 基本使用

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的站点',
  description: '站点描述',
  themeConfig: {
    nav: [...],
    sidebar: {...}
  }
})
```

### TypeScript 支持

VitePress 完全支持 TypeScript：

```typescript
import type { DefaultTheme } from 'vitepress'

export default defineConfig({
  themeConfig: {
    nav: [] as DefaultTheme.NavItem[],
    sidebar: {} as DefaultTheme.Sidebar
  }
})
```

## 核心概念

### 站点配置

站点配置定义了站点的全局设置：

```typescript
interface SiteConfig {
  // 站点元数据
  title?: string
  description?: string
  lang?: string
  base?: string

  // 路由和构建
  srcDir?: string
  outDir?: string
  cleanUrls?: boolean

  // 主题
  themeConfig?: ThemeConfig

  // Markdown
  markdown?: MarkdownOptions

  // Vite
  vite?: ViteConfig
}
```

### 主题配置

主题配置定义了主题相关的设置：

```typescript
interface ThemeConfig {
  // 导航
  nav?: NavItem[]
  sidebar?: Sidebar

  // 外观
  logo?: string
  siteTitle?: string | false

  // 功能
  search?: SearchOptions
  socialLinks?: SocialLink[]
  footer?: Footer
}
```

## 下一步

查看详细的 API 文档：

- [配置 API](/api/config) - 完整的配置选项参考
- [主题 API](/api/theme) - 主题定制接口和运行时 API

::: tip 提示
所有 API 都有完整的 TypeScript 类型定义，使用 IDE 可以获得良好的代码提示。
:::

## 示例

### 基础配置示例

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
```

### 高级配置示例

```typescript
import { defineConfig } from 'vitepress'
import { SearchPlugin } from 'vitepress-plugin-search'

export default defineConfig({
  title: 'Advanced VitePress',

  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(customMarkdownPlugin)
    }
  },

  vite: {
    plugins: [SearchPlugin()],

    server: {
      port: 3000,
      host: true
    },

    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    }
  },

  transformHead({ pageData }) {
    return [
      ['meta', { property: 'og:title', content: pageData.title }],
      ['meta', { property: 'og:description', content: pageData.description }]
    ]
  }
})
```

## 资源

- [VitePress 官方文档](https://vitepress.dev)
- [GitHub 仓库](https://github.com/vuejs/vitepress)
- [示例项目](https://github.com/vuejs/vitepress/tree/main/examples)
