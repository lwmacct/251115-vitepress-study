---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VitePress 学习文档"
  text: "快速构建现代化文档站点"
  tagline: 简单、强大、高性能的静态站点生成器
  image:
    src: /logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/lwmacct/251115-vitepress-study

features:
  - icon: 🚀
    title: 极速启动
    details: 基于 Vite 构建，开发服务器启动速度极快，热更新即时响应
  - icon: 📝
    title: Markdown 增强
    details: 支持 GitHub 风格的 Markdown，并提供了强大的扩展功能
  - icon: 🎨
    title: 主题定制
    details: 提供默认主题，同时支持深度定制，满足各种需求
  - icon: 🔍
    title: 内置搜索
    details: 开箱即用的全文搜索功能，无需额外配置
  - icon: 📦
    title: 组件化
    details: 在 Markdown 中使用 Vue 组件，创建交互式文档
  - icon: 🌐
    title: 国际化
    details: 完善的多语言支持，轻松构建国际化文档站点
---

## 快速上手

### 安装

```bash
# 使用 npm
npm install -D vitepress

# 使用 yarn
yarn add -D vitepress

# 使用 pnpm
pnpm add -D vitepress
```

### 启动开发服务器

```bash
npm run docs:dev
```

### 构建生产版本

```bash
npm run docs:build
```

## 为什么选择 VitePress？

VitePress 是 VuePress 的继任者，由 Vue.js 团队开发维护。它继承了 VuePress 的优点，同时利用 Vite 的强大功能，提供了更快的开发体验和更好的性能。

::: tip 提示
VitePress 特别适合用于创建技术文档、产品文档、博客等静态内容网站。
:::

::: warning 注意
VitePress 目前仍在积极开发中，API 可能会有变化。
:::

## 开始学习

跟随我们的指南，快速掌握 VitePress 的使用：

- [快速开始](/guide/getting-started) - 了解基本概念和使用方法
- [配置](/guide/configuration) - 学习如何配置你的站点
- [Markdown 扩展](/guide/markdown) - 探索 VitePress 的 Markdown 增强功能
- [主题定制](/guide/theme-customization) - 定制属于你的主题
