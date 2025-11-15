# VitePress 学习文档

这是一个使用 VitePress 构建的学习文档项目，帮助你快速掌握 VitePress 的使用方法。

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

开发服务器将在 `http://localhost:5173` 启动。

### 构建生产版本

```bash
npm run docs:build
```

构建输出将生成在 `docs/.vitepress/dist` 目录。

### 预览构建结果

```bash
npm run docs:preview
```

## 项目结构

```
.
├── docs/                  # 文档目录
│   ├── .vitepress/       # VitePress 配置
│   │   └── config.ts     # 站点配置文件
│   ├── guide/            # 指南文档
│   │   ├── getting-started.md
│   │   ├── configuration.md
│   │   ├── deployment.md
│   │   ├── markdown.md
│   │   └── theme-customization.md
│   ├── api/              # API 文档
│   │   ├── introduction.md
│   │   ├── config.md
│   │   └── theme.md
│   ├── public/           # 静态资源
│   │   └── logo.svg
│   ├── index.md          # 首页
│   ├── about.md          # 关于页面
│   └── changelog.md      # 更新日志
├── package.json          # 项目配置
└── README.md             # 本文件
```

## 文档内容

### 指南

- **快速开始** - 了解 VitePress 基础知识和快速上手
- **配置** - 学习如何配置站点和主题
- **部署** - 将文档部署到各种平台
- **Markdown 扩展** - 探索 VitePress 的 Markdown 增强功能
- **主题定制** - 定制属于你的主题样式

### API 参考

- **配置 API** - 完整的配置选项参考
- **主题 API** - 主题定制和扩展接口

## 功能特性

- ✅ 完整的中文文档
- ✅ 响应式导航和侧边栏
- ✅ 本地搜索功能
- ✅ 深色模式支持
- ✅ 代码高亮和行号
- ✅ 最后更新时间
- ✅ 编辑链接
- ✅ 详细的示例代码

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

## 开发环境

- Use [Taskfile](https://taskfile.dev) to manage the project's CLI
- Use [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers) to create a development environment

```shell
task -a
```

## 学习资源

- [VitePress 官方文档](https://vitepress.dev)
- [VitePress 中文文档](https://vitepress.dev/zh/guide/getting-started)
- [Vue 3 文档](https://vuejs.org)
- [Markdown 指南](https://www.markdownguide.org/)

## 相关链接

- https://github.com/lwmacct
- https://yuque.com/lwmacct
- https://github.com/vuejs/vitepress

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！
