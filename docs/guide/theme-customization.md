# 主题定制

VitePress 提供了强大的主题定制能力，你可以轻松地定制外观和功能。

## 使用 CSS 变量

VitePress 使用 CSS 变量来定义颜色、字体等样式，你可以通过覆盖这些变量来定制主题。

### 创建自定义样式文件

在 `docs/.vitepress/theme/` 目录下创建 `custom.css`：

```css
/* docs/.vitepress/theme/custom.css */

/**
 * 自定义颜色
 * -------------------------------------------------------------------------- */

:root {
  /* 品牌色 */
  --vp-c-brand-1: #646cff;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #535bf2;

  /* 背景色 */
  --vp-c-bg: #ffffff;
  --vp-c-bg-alt: #f6f6f7;
  --vp-c-bg-elv: #ffffff;

  /* 文字色 */
  --vp-c-text-1: #213547;
  --vp-c-text-2: #476582;
  --vp-c-text-3: #7f8c8d;
}

.dark {
  /* 暗色模式下的品牌色 */
  --vp-c-brand-1: #747bff;
  --vp-c-brand-2: #535bf2;

  /* 暗色模式背景 */
  --vp-c-bg: #1a1a1a;
  --vp-c-bg-alt: #242424;
  --vp-c-bg-elv: #242424;

  /* 暗色模式文字 */
  --vp-c-text-1: rgba(255, 255, 245, 0.86);
  --vp-c-text-2: rgba(235, 235, 245, 0.6);
}

/**
 * 组件样式
 * -------------------------------------------------------------------------- */

/* 自定义首页 hero 样式 */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );

  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #bd34fe 50%,
    #47caff 50%
  );
  --vp-home-hero-image-filter: blur(44px);
}

/* 导航栏样式 */
.VPNav {
  backdrop-filter: blur(10px);
}

/* 侧边栏样式 */
.VPSidebar {
  padding-top: 1rem;
}

/* 代码块样式 */
.vp-code-group {
  margin: 1rem 0;
}

/* 自定义容器样式 */
.custom-block.tip {
  border-left: 4px solid var(--vp-c-brand-1);
}

/**
 * 字体
 * -------------------------------------------------------------------------- */

:root {
  --vp-font-family-base: 'Inter var experimental', 'Inter var',
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  --vp-font-family-mono: 'JetBrains Mono', Menlo, Monaco, Consolas,
    'Courier New', monospace;
}

/**
 * 布局
 * -------------------------------------------------------------------------- */

:root {
  /* 内容宽度 */
  --vp-layout-max-width: 1440px;
}

/**
 * 自定义样式
 * -------------------------------------------------------------------------- */

/* 圆角按钮 */
.VPButton {
  border-radius: 20px;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 代码块圆角 */
div[class*='language-'] {
  border-radius: 8px;
}
```

### 引入自定义样式

创建 `docs/.vitepress/theme/index.ts`：

```typescript
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

## 布局插槽

VitePress 提供了多个布局插槽，允许你在不同位置插入自定义内容。

### 可用插槽

```typescript
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout
}
```

```vue
<!-- docs/.vitepress/theme/MyLayout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- 导航栏之前 -->
    <template #nav-bar-title-before>
      自定义导航栏前内容
    </template>

    <!-- 导航栏之后 -->
    <template #nav-bar-title-after>
      自定义导航栏后内容
    </template>

    <!-- 导航栏右侧 -->
    <template #nav-bar-content-before>
      自定义内容
    </template>

    <!-- 侧边栏之前 -->
    <template #sidebar-nav-before>
      侧边栏顶部
    </template>

    <!-- 侧边栏之后 -->
    <template #sidebar-nav-after>
      侧边栏底部
    </template>

    <!-- 页面顶部 -->
    <template #page-top>
      <div class="custom-page-top">
        页面顶部内容
      </div>
    </template>

    <!-- 页面底部 -->
    <template #page-bottom>
      <div class="custom-page-bottom">
        页面底部内容
      </div>
    </template>

    <!-- 文档内容之前 -->
    <template #doc-before>
      <div class="custom-doc-before">
        文档开始前的内容
      </div>
    </template>

    <!-- 文档内容之后 -->
    <template #doc-after>
      <div class="custom-doc-after">
        文档结束后的内容
      </div>
    </template>

    <!-- 文档页脚之前 -->
    <template #doc-footer-before>
      <div class="custom-footer">
        自定义页脚
      </div>
    </template>

    <!-- 大纲之前 -->
    <template #aside-outline-before>
      大纲顶部
    </template>

    <!-- 大纲之后 -->
    <template #aside-outline-after>
      大纲底部
    </template>
  </Layout>
</template>

<style>
.custom-page-top,
.custom-page-bottom,
.custom-doc-before,
.custom-doc-after {
  padding: 1rem;
  text-align: center;
}
</style>
```

## 自定义组件

### 全局组件注册

```typescript
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import MyComponent from './components/MyComponent.vue'
import MyGlobalComponent from './components/MyGlobalComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('MyComponent', MyComponent)
    app.component('MyGlobal', MyGlobalComponent)
  }
}
```

### 创建自定义组件

```vue
<!-- docs/.vitepress/theme/components/MyComponent.vue -->
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="my-component">
    <h3>自定义组件</h3>
    <p>计数器: {{ count }}</p>
    <button @click="count++">点击增加</button>
  </div>
</template>

<style scoped>
.my-component {
  padding: 1.5rem;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 8px;
  margin: 1rem 0;
}

button {
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: var(--vp-c-brand-2);
}
</style>
```

在 Markdown 中使用：

```markdown
# 我的页面

<MyComponent />
```

## 扩展默认主题

### 添加自定义页面

```typescript
// docs/.vitepress/config.ts
export default defineConfig({
  themeConfig: {
    nav: [
      { text: '团队', link: '/team' },
      { text: '关于', link: '/about' }
    ]
  }
})
```

```vue
<!-- docs/team.md -->
---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>优秀的团队成员</template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
```

## 自定义主题

如果需要完全自定义主题，可以创建全新的主题：

```typescript
// docs/.vitepress/theme/index.ts
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export default {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    // 应用级别的配置
  }
}
```

```vue
<!-- docs/.vitepress/theme/Layout.vue -->
<script setup>
import { useData, useRoute } from 'vitepress'

const { page, frontmatter } = useData()
const route = useRoute()
</script>

<template>
  <div class="custom-layout">
    <header>
      <h1>{{ frontmatter.title || page.title }}</h1>
    </header>
    <main>
      <Content />
    </main>
    <footer>
      © 2025 我的文档站
    </footer>
  </div>
</template>

<style>
.custom-layout {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

footer {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  margin-top: 2rem;
  text-align: center;
}
</style>
```

## 使用组合式 API

VitePress 提供了多个组合式 API：

```vue
<script setup>
import { useData, useRoute, useRouter } from 'vitepress'

// 获取页面数据
const {
  site,       // 站点级别的数据
  page,       // 当前页面的数据
  frontmatter,// 当前页面的 frontmatter
  lang,       // 当前语言
  title,      // 页面标题
  description,// 页面描述
  isDark      // 是否暗色模式
} = useData()

// 获取路由信息
const route = useRoute()
console.log(route.path)

// 获取路由器
const router = useRouter()

// 导航到其他页面
function navigateToGuide() {
  router.go('/guide/')
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>当前路径: {{ route.path }}</p>
    <p>暗色模式: {{ isDark ? '是' : '否' }}</p>
    <button @click="navigateToGuide">前往指南</button>
  </div>
</template>
```

## 添加第三方库

### 安装依赖

```bash
npm install element-plus
```

### 注册插件

```typescript
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  }
}
```

::: tip 提示
主题定制的可能性是无限的！你可以根据自己的需求自由发挥创意。
:::

::: warning 注意
在进行深度定制时，请注意保持与 VitePress 版本的兼容性。
:::
