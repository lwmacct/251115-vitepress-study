import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // ===== 基础配置 =====

  // 站点标题
  title: "VitePress 学习文档",

  // 站点描述
  description: "学习如何使用 VitePress 构建文档站点 - 完整的中文教程，包含配置、部署、主题定制等内容",

  // 语言
  lang: 'zh-CN',

  // 基础路径（如果部署到 GitHub Pages 的子路径）
  base: '/251115-vitepress-study/',

  // ===== URL 优化 =====

  // 移除 URL 中的 .html 后缀
  cleanUrls: true,

  // ===== SEO 优化 =====

  // Head 标签配置
  head: [
    // Favicon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/251115-vitepress-study/logo.svg' }],

    // 主题色
    ['meta', { name: 'theme-color', content: '#42b883' }],

    // 移动端优化
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],

    // SEO 关键词
    ['meta', { name: 'keywords', content: 'VitePress, Vue, 文档, 教程, 静态站点生成器, Vite, 中文文档' }],
    ['meta', { name: 'author', content: 'lwmacct' }],

    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'VitePress 学习文档' }],
    ['meta', { property: 'og:title', content: 'VitePress 学习文档 - 完整中文教程' }],
    ['meta', { property: 'og:description', content: '学习如何使用 VitePress 构建文档站点 - 完整的中文教程' }],
    ['meta', { property: 'og:url', content: 'https://lwmacct.github.io/251115-vitepress-study/' }],
    ['meta', { property: 'og:image', content: 'https://lwmacct.github.io/251115-vitepress-study/logo.svg' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'VitePress 学习文档' }],
    ['meta', { name: 'twitter:description', content: '学习如何使用 VitePress 构建文档站点' }],
    ['meta', { name: 'twitter:image', content: 'https://lwmacct.github.io/251115-vitepress-study/logo.svg' }]
  ],

  // 站点地图配置
  sitemap: {
    hostname: 'https://lwmacct.github.io/251115-vitepress-study/',
    transformItems: (items) => {
      return items.map(item => ({
        ...item,
        changefreq: 'weekly',
        priority: item.url === '/' ? 1.0 : 0.8
      }))
    }
  },

  // ===== 性能优化 =====

  // 提取页面元数据到独立文件（实验性功能，提升性能）
  metaChunk: true,

  // ===== 主题配置 =====

  themeConfig: {
    // 网站logo
    logo: '/logo.svg',

    // 站点标题（可选，覆盖 config.title）
    siteTitle: 'VitePress 学习文档',

    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: 'API', link: '/api/introduction' },
      {
        text: '更多',
        items: [
          { text: '关于', link: '/about' },
          { text: '更新日志', link: '/changelog' }
        ]
      }
    ],

    // 侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '配置', link: '/guide/configuration' },
            { text: '部署', link: '/guide/deployment' }
          ]
        },
        {
          text: '进阶',
          collapsed: false,
          items: [
            { text: 'Markdown 扩展', link: '/guide/markdown' },
            { text: '主题定制', link: '/guide/theme-customization' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '介绍', link: '/api/introduction' },
            { text: '配置 API', link: '/api/config' },
            { text: '主题 API', link: '/api/theme' }
          ]
        }
      ]
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lwmacct/251115-vitepress-study' }
    ],

    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025-present lwmacct'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/lwmacct/251115-vitepress-study/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 文档页脚 - 上一页/下一页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 外部链接图标
    externalLinkIcon: true,

    // 返回顶部标签
    returnToTopLabel: '返回顶部',

    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',

    // 深色模式切换标签
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  // ===== Markdown 配置 =====

  markdown: {
    // 显示行号
    lineNumbers: true,

    // 代码块主题
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },

    // 自定义容器标签
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  // ===== 多语言支持 =====

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    }
  },

  // ===== Vite 配置 =====

  vite: {
    // 构建优化
    build: {
      // 块大小警告限制
      chunkSizeWarningLimit: 1000
    },

    // 依赖优化
    optimizeDeps: {
      exclude: []
    },

    // 服务器配置
    server: {
      port: 5173,
      host: true
    }
  }
})
