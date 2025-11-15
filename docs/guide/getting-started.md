# 快速开始

本指南将帮助你快速上手 VitePress，创建你的第一个文档站点。

## 前置要求

- [Node.js](https://nodejs.org/) 18 或更高版本
- 终端工具（用于运行命令）
- 文本编辑器（推荐 VS Code）

## 安装

### 步骤 1: 创建项目目录

```bash
mkdir my-vitepress-site
cd my-vitepress-site
```

### 步骤 2: 初始化项目

```bash
npm init -y
```

### 步骤 3: 安装 VitePress

```bash
npm install -D vitepress vue
```

## 项目结构

创建以下目录结构：

```
.
├── docs
│   ├── .vitepress
│   │   └── config.ts      # 配置文件
│   ├── guide
│   │   └── index.md       # 指南页面
│   └── index.md           # 首页
└── package.json
```

## 配置脚本

在 `package.json` 中添加以下脚本：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## 启动开发服务器

```bash
npm run docs:dev
```

VitePress 将在 `http://localhost:5173` 启动一个热更新的开发服务器。

## 基本配置

在 `docs/.vitepress/config.ts` 中配置你的站点：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的文档站',
  description: '使用 VitePress 构建的文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/' }
        ]
      }
    ]
  }
})
```

## 创建第一个页面

在 `docs/index.md` 中创建首页：

```markdown
---
layout: home

hero:
  name: 我的文档站
  text: 快速构建文档
  tagline: 简单、强大、高性能
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/

features:
  - title: 功能 1
    details: 这是功能 1 的描述
  - title: 功能 2
    details: 这是功能 2 的描述
---
```

## 下一步

- 了解更多[配置选项](/guide/configuration)
- 探索 [Markdown 扩展](/guide/markdown)
- 学习[主题定制](/guide/theme-customization)

::: tip 提示
保存文件后，开发服务器会自动重新加载，你可以立即看到更改。
:::
