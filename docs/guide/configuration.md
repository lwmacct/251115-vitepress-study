# 配置

VitePress 提供了丰富的配置选项，让你可以自定义站点的各个方面。

## 配置文件

配置文件位于 `docs/.vitepress/config.ts`（或 `.js`、`.mjs`）。

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点级别选项
  title: '站点标题',
  description: '站点描述',

  // 主题配置
  themeConfig: {
    // 主题级别选项
  }
})
```

## 站点配置

### 基本信息

```typescript
export default defineConfig({
  // 站点标题
  title: 'VitePress',

  // 站点描述（用于 SEO）
  description: '一个基于 Vite 的静态站点生成器',

  // 站点语言
  lang: 'zh-CN',

  // 基础路径（如果部署在子路径）
  base: '/my-site/',

  // 头部标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ]
})
```

### 路由配置

```typescript
export default defineConfig({
  // 清理 URL（移除 .html 后缀）
  cleanUrls: true,

  // 生成站点地图
  sitemap: {
    hostname: 'https://example.com'
  },

  // 忽略死链接
  ignoreDeadLinks: true
})
```

## 主题配置

### 导航栏

```typescript
export default defineConfig({
  themeConfig: {
    // Logo
    logo: '/logo.svg',

    // 站点标题（默认使用 config.title）
    siteTitle: '我的文档',

    // 导航菜单
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '下拉菜单',
        items: [
          { text: '选项 A', link: '/item-a' },
          { text: '选项 B', link: '/item-b' }
        ]
      },
      {
        text: '版本',
        items: [
          {
            text: 'v2.x',
            items: [
              { text: 'v2.0', link: '/v2.0/' },
              { text: 'v2.1', link: '/v2.1/' }
            ]
          }
        ]
      }
    ]
  }
})
```

### 侧边栏

```typescript
export default defineConfig({
  themeConfig: {
    sidebar: {
      // 为 /guide/ 路径配置侧边栏
      '/guide/': [
        {
          text: '基础',
          collapsed: false, // 默认展开
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '配置', link: '/guide/configuration' }
          ]
        },
        {
          text: '进阶',
          collapsed: true, // 默认折叠
          items: [
            { text: 'Markdown', link: '/guide/markdown' },
            { text: '主题', link: '/guide/theme' }
          ]
        }
      ],

      // 为 /api/ 路径配置不同的侧边栏
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '介绍', link: '/api/introduction' }
          ]
        }
      ]
    }
  }
})
```

### 社交链接

```typescript
export default defineConfig({
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/vue' },
      {
        icon: {
          svg: '<svg>...</svg>' // 自定义 SVG 图标
        },
        link: 'https://example.com'
      }
    ]
  }
})
```

### 页脚

```typescript
export default defineConfig({
  themeConfig: {
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025-present Evan You'
    }
  }
})
```

### 搜索

```typescript
export default defineConfig({
  themeConfig: {
    // 本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    // 或使用 Algolia
    search: {
      provider: 'algolia',
      options: {
        appId: '...',
        apiKey: '...',
        indexName: '...'
      }
    }
  }
})
```

### 编辑链接

```typescript
export default defineConfig({
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    }
  }
})
```

### 最后更新时间

```typescript
export default defineConfig({
  lastUpdated: true,

  themeConfig: {
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
```

## Markdown 配置

```typescript
export default defineConfig({
  markdown: {
    // 显示行号
    lineNumbers: true,

    // 代码块主题
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },

    // 配置 markdown-it
    config: (md) => {
      // 使用更多的 markdown-it 插件
      md.use(require('markdown-it-xxx'))
    }
  }
})
```

## 国际化

```typescript
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' }
        ]
      }
    }
  }
})
```

## 构建配置

```typescript
export default defineConfig({
  // 输出目录
  outDir: '../dist',

  // 缓存目录
  cacheDir: './.vitepress/cache',

  // Vite 配置
  vite: {
    // Vite 插件
    plugins: [],

    // 服务器配置
    server: {
      port: 3000,
      host: true
    },

    // 构建配置
    build: {
      chunkSizeWarningLimit: 1000
    }
  }
})
```

::: tip 提示
更多配置选项请参考 [VitePress 官方文档](https://vitepress.dev/reference/site-config)。
:::
