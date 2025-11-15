# 配置 API

完整的 VitePress 配置选项参考。

## 站点配置

### title

- **类型:** `string`
- **默认值:** `'VitePress'`

站点标题，显示在导航栏和浏览器标签页。

```typescript
export default defineConfig({
  title: '我的文档站'
})
```

### description

- **类型:** `string`
- **默认值:** `'A VitePress site'`

站点描述，用于 SEO。

```typescript
export default defineConfig({
  description: '一个使用 VitePress 构建的文档站点'
})
```

### lang

- **类型:** `string`
- **默认值:** `'en-US'`

站点语言，用于生成 `<html lang="...">` 标签。

```typescript
export default defineConfig({
  lang: 'zh-CN'
})
```

### base

- **类型:** `string`
- **默认值:** `'/'`

站点的基础 URL 路径。

```typescript
export default defineConfig({
  base: '/my-docs/'
})
```

### head

- **类型:** `HeadConfig[]`
- **默认值:** `[]`

在 `<head>` 标签中注入的额外标签。

```typescript
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
    ['script', { src: '/analytics.js' }]
  ]
})
```

## 路由配置

### srcDir

- **类型:** `string`
- **默认值:** `'.'`

Markdown 源文件相对于项目根目录的位置。

```typescript
export default defineConfig({
  srcDir: 'src'
})
```

### outDir

- **类型:** `string`
- **默认值:** `'.vitepress/dist'`

构建输出目录。

```typescript
export default defineConfig({
  outDir: '../dist'
})
```

### cacheDir

- **类型:** `string`
- **默认值:** `'.vitepress/cache'`

缓存目录。

```typescript
export default defineConfig({
  cacheDir: '.vitepress/.cache'
})
```

### cleanUrls

- **类型:** `boolean`
- **默认值:** `false`

生成简洁的 URL（移除 `.html` 后缀）。

```typescript
export default defineConfig({
  cleanUrls: true
})
```

### rewrites

- **类型:** `Record<string, string>`

自定义目录到 URL 的映射。

```typescript
export default defineConfig({
  rewrites: {
    'source/:page': 'destination/:page'
  }
})
```

## 主题配置

### themeConfig

主题相关的配置选项。

#### logo

- **类型:** `string | { light: string; dark: string }`

导航栏 logo。

```typescript
export default defineConfig({
  themeConfig: {
    logo: '/logo.svg',
    // 或为不同主题模式设置不同 logo
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    }
  }
})
```

#### siteTitle

- **类型:** `string | false`
- **默认值:** `config.title`

自定义导航栏标题。设置为 `false` 可隐藏。

```typescript
export default defineConfig({
  themeConfig: {
    siteTitle: '自定义标题',
    // 或隐藏标题
    siteTitle: false
  }
})
```

#### nav

- **类型:** `NavItem[]`

导航栏配置。

```typescript
export default defineConfig({
  themeConfig: {
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
        text: '外部链接',
        link: 'https://github.com',
        // 链接激活匹配
        activeMatch: '/external/'
      }
    ]
  }
})
```

**NavItem 类型定义：**

```typescript
interface NavItem {
  text: string
  link?: string
  items?: NavItem[]
  activeMatch?: string
  target?: string
  rel?: string
}
```

#### sidebar

- **类型:** `Sidebar`

侧边栏配置。

```typescript
export default defineConfig({
  themeConfig: {
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          collapsed: false,
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '配置', link: '/api/config' }
          ]
        }
      ]
    }
  }
})
```

**Sidebar 类型定义：**

```typescript
type Sidebar = SidebarItem[] | SidebarMulti

interface SidebarMulti {
  [path: string]: SidebarItem[]
}

interface SidebarItem {
  text?: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}
```

#### socialLinks

- **类型:** `SocialLink[]`

社交链接配置。

```typescript
export default defineConfig({
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
      { icon: 'twitter', link: 'https://twitter.com' },
      { icon: 'discord', link: 'https://discord.com' },
      {
        icon: {
          svg: '<svg>...</svg>'
        },
        link: 'https://example.com',
        ariaLabel: 'cool link'
      }
    ]
  }
})
```

支持的图标：`github`, `twitter`, `discord`, `facebook`, `instagram`, `linkedin`, `slack`, `youtube`

#### footer

- **类型:** `Footer`

页脚配置。

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

#### search

- **类型:** `SearchOptions`

搜索配置。

```typescript
export default defineConfig({
  themeConfig: {
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
                resetButtonTitle: '清除查询条件'
              }
            }
          }
        }
      }
    }
  }
})
```

#### editLink

- **类型:** `EditLink`

编辑链接配置。

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

#### lastUpdated

- **类型:** `LastUpdatedOptions`

最后更新时间配置。

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

#### outline

- **类型:** `Outline | Outline['level'] | false`
- **默认值:** `2`

大纲配置。

```typescript
export default defineConfig({
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    // 或简写
    outline: [2, 3]
  }
})
```

## Markdown 配置

### markdown

Markdown 解析器配置。

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

    // 自定义锚点
    anchor: {
      permalink: true
    },

    // 外部链接图标
    externalLinks: {
      target: '_blank',
      rel: 'noreferrer'
    },

    // markdown-it 配置
    config: (md) => {
      md.use(require('markdown-it-xxx'))
    }
  }
})
```

## 构建配置

### vite

Vite 配置选项。

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  vite: {
    plugins: [],

    server: {
      port: 3000,
      host: true,
      https: false
    },

    build: {
      minify: 'terser',
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
    },

    optimizeDeps: {
      exclude: ['some-package']
    }
  }
})
```

## 高级配置

### transformHead

- **类型:** `(context: TransformContext) => Awaitable<HeadConfig[]>`

转换 head 标签的钩子。

```typescript
export default defineConfig({
  async transformHead({ pageData }) {
    return [
      ['meta', { property: 'og:title', content: pageData.title }],
      ['meta', { property: 'og:description', content: pageData.description }]
    ]
  }
})
```

### transformHtml

- **类型:** `(code: string, id: string, context: TransformContext) => Awaitable<string | void>`

转换 HTML 的钩子。

```typescript
export default defineConfig({
  async transformHtml(code, id, context) {
    // 修改 HTML
    return code.replace(/foo/g, 'bar')
  }
})
```

### transformPageData

- **类型:** `(pageData: PageData) => Awaitable<Partial<PageData> | void>`

转换页面数据的钩子。

```typescript
export default defineConfig({
  async transformPageData(pageData) {
    pageData.customData = 'custom value'
  }
})
```

### buildEnd

- **类型:** `(siteConfig: SiteConfig) => Awaitable<void>`

构建结束时的钩子。

```typescript
export default defineConfig({
  async buildEnd(siteConfig) {
    // 生成其他文件，如 sitemap
    console.log('Build completed!')
  }
})
```

## 国际化配置

### locales

多语言配置。

```typescript
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',

      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/' }
        ],
        sidebar: {
          '/zh/guide/': [...]
        }
      }
    },

    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',

      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' }
        ],
        sidebar: {
          '/en/guide/': [...]
        }
      }
    }
  }
})
```

::: tip 提示
查看 [TypeScript 类型定义](https://github.com/vuejs/vitepress/blob/main/types/config.d.ts) 获取完整的配置选项。
:::
