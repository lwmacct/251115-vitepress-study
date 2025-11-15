import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点标题
  title: "VitePress 学习文档",

  // 站点描述
  description: "学习如何使用 VitePress 构建文档站点",

  // 基础路径（如果部署到 GitHub Pages 的子路径）
  base: '/251115-vitepress-study/',

  // 主题配置
  themeConfig: {
    // 网站logo
    logo: '/logo.svg',

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
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '配置', link: '/guide/configuration' },
            { text: '部署', link: '/guide/deployment' }
          ]
        },
        {
          text: '进阶',
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

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lwmacct/251115-vitepress-study' }
    ],

    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025-present'
    },

    // 搜索
    search: {
      provider: 'local'
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
    }
  },

  // Markdown 配置
  markdown: {
    // 行号
    lineNumbers: true,

    // 代码块主题
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // 多语言支持示例（可选）
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    }
  }
})
