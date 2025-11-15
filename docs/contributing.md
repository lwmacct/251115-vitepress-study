---
title: 贡献指南
description: 如何为 VitePress 学习文档项目做出贡献
head:
  - - meta
    - name: keywords
      content: 贡献指南, Contributing, 开源贡献, GitHub, Pull Request
---

# 贡献指南

感谢你考虑为 **VitePress 学习文档** 项目做出贡献！:heart:

本指南将帮助你了解如何参与到项目中来。

## 🎯 贡献方式

你可以通过以下方式为项目做出贡献：

### 📝 文档改进

- 修正拼写或语法错误
- 改进文档的清晰度和可读性
- 添加缺失的内容
- 更新过时的信息
- 添加新的教程或示例

### 🐛 报告问题

- 报告文档中的错误
- 指出不清楚或令人困惑的内容
- 建议新的功能或改进

### 💡 功能建议

- 提出新的文档主题
- 建议新的示例代码
- 提议改进项目结构

### 🌐 翻译

- 帮助翻译文档到其他语言
- 改进现有翻译的质量

## 🚀 快速开始

### 准备工作

在开始之前，请确保你已经：

1. **安装 Git**

```bash
git --version
```

2. **安装 Node.js 18+**

```bash
node --version
```

3. **拥有 GitHub 账号**

### Fork 和 Clone

1. **Fork 本仓库**

访问 [GitHub 仓库](https://github.com/lwmacct/251115-vitepress-study)，点击右上角的 "Fork" 按钮。

2. **克隆你的 Fork**

```bash
git clone https://github.com/YOUR_USERNAME/251115-vitepress-study.git
cd 251115-vitepress-study
```

3. **添加上游仓库**

```bash
git remote add upstream https://github.com/lwmacct/251115-vitepress-study.git
```

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 `http://localhost:5173/251115-vitepress-study/` 查看效果。

## 📋 贡献流程

### 1. 创建新分支

为你的更改创建一个新分支：

```bash
git checkout -b feature/your-feature-name
```

或者修复 bug：

```bash
git checkout -b fix/bug-description
```

**分支命名规范：**

- `feature/xxx` - 新功能
- `fix/xxx` - Bug 修复
- `docs/xxx` - 文档更新
- `style/xxx` - 样式调整
- `refactor/xxx` - 代码重构

### 2. 进行更改

编辑文件并保存。开发服务器会自动热更新。

**文档位置：**

```
docs/
├── guide/          # 指南文档
├── api/            # API 参考
├── index.md        # 首页
├── about.md        # 关于页面
└── ...
```

### 3. 测试更改

在提交前，请确保：

- [x] 文档内容准确无误
- [x] Markdown 语法正确
- [x] 所有链接有效
- [x] 构建成功

```bash
npm run docs:build
```

### 4. 提交更改

**编写清晰的提交信息：**

```bash
git add .
git commit -m "docs: 添加 XXX 功能的文档说明"
```

**提交信息规范：**

- `docs:` - 文档更新
- `feat:` - 新功能
- `fix:` - Bug 修复
- `style:` - 格式调整
- `refactor:` - 代码重构
- `test:` - 测试相关
- `chore:` - 构建/工具相关

**示例：**

```bash
git commit -m "docs: 更新快速开始指南"
git commit -m "fix: 修复配置示例中的错误"
git commit -m "feat: 添加部署到 Vercel 的说明"
```

### 5. 推送到 GitHub

```bash
git push origin your-branch-name
```

### 6. 创建 Pull Request

1. 访问你 Fork 的仓库页面
2. 点击 "Pull Request" 按钮
3. 点击 "New Pull Request"
4. 选择你的分支
5. 填写 PR 标题和描述
6. 点击 "Create Pull Request"

**PR 标题格式：**

```
类型: 简短描述

示例：
docs: 添加 VitePress 配置最佳实践
fix: 修正部署文档中的错误链接
feat: 添加 FAQ 页面
```

**PR 描述模板：**

```markdown
## 变更类型
- [ ] 文档更新
- [ ] Bug 修复
- [ ] 新功能
- [ ] 其他

## 变更描述
简要描述你的更改...

## 测试清单
- [ ] 本地测试通过
- [ ] 构建成功
- [ ] 链接检查通过
```

## ✅ 代码规范

### Markdown 规范

1. **使用中文标点符号**

```markdown
✅ 这是正确的，使用中文逗号。
❌ 这是错误的,使用英文逗号.
```

2. **标题层级**

```markdown
# 一级标题（每个文件只有一个）
## 二级标题
### 三级标题
```

3. **代码块**

使用三个反引号并指定语言：

````markdown
```typescript
const hello = 'world'
```
````

4. **链接**

内部链接使用相对路径：

```markdown
[配置指南](/guide/configuration)
```

外部链接使用完整 URL：

```markdown
[VitePress 官网](https://vitepress.dev)
```

5. **图片**

放在 `docs/public/images/` 目录：

```markdown
![描述](/images/example.png)
```

### 文件命名规范

- 使用小写字母和连字符
- 避免使用空格或特殊字符

```
✅ getting-started.md
✅ api-reference.md
❌ Getting Started.md
❌ api_reference.md
```

## 🔍 审查流程

提交 PR 后：

1. **自动检查**
   - GitHub Actions 会运行自动化测试
   - 检查构建是否成功

2. **人工审查**
   - 维护者会审查你的更改
   - 可能会提出修改建议

3. **修改和讨论**
   - 根据反馈进行修改
   - 参与讨论交流

4. **合并**
   - 审查通过后，PR 会被合并
   - 你的贡献将出现在项目中！

## 💬 交流讨论

### GitHub Issues

- 报告 Bug
- 提出功能建议
- 询问问题

访问：https://github.com/lwmacct/251115-vitepress-study/issues

### GitHub Discussions

- 一般性讨论
- 分享想法
- 寻求帮助

访问：https://github.com/lwmacct/251115-vitepress-study/discussions

## 📜 行为准则

### 我们的承诺

为了营造一个开放和友好的环境，我们作为贡献者和维护者承诺：

- 尊重所有贡献者
- 欢迎不同的观点和经验
- 接受建设性的批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

### 我们的标准

**正面行为示例：**

- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

**不可接受的行为示例：**

- 使用性暗示的语言或图像
- 侮辱性/贬损性评论和人身攻击
- 公开或私下骚扰
- 未经许可发布他人的私人信息
- 其他在专业环境中可能被认为不适当的行为

## 🎁 贡献者权益

作为贡献者，你将：

- 在贡献者列表中被列出
- 获得社区的认可和感谢
- 提升开源贡献经验
- 帮助他人学习 VitePress

## 📚 参考资源

- [VitePress 官方文档](https://vitepress.dev)
- [Markdown 指南](https://www.markdownguide.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [如何编写 Git 提交信息](https://chris.beams.io/posts/git-commit/)

## ❓ 常见问题

### 我是新手，可以贡献吗？

当然可以！我们欢迎所有人的贡献。你可以从以下简单任务开始：

- 修正拼写错误
- 改进文档措辞
- 添加示例说明
- 更新链接

### 我不会编程，可以贡献文档吗？

完全可以！文档贡献同样重要。你可以：

- 改进文字表达
- 添加使用案例
- 翻译内容
- 报告问题

### 我的 PR 多久会被审查？

我们会尽快审查 PR，通常在 1-3 天内。如果超过一周没有回应，可以在 PR 中留言提醒。

### 我的 PR 被拒绝了怎么办？

不要灰心！被拒绝的原因会在评论中说明。你可以：

- 了解拒绝的原因
- 进行必要的修改
- 重新提交 PR

## 🙏 致谢

感谢所有为本项目做出贡献的人！

你的每一个贡献，无论大小，都让这个项目变得更好。

---

::: tip 开始贡献
准备好开始了吗？[创建你的第一个 Issue](https://github.com/lwmacct/251115-vitepress-study/issues/new) 或者直接提交 Pull Request！
:::
