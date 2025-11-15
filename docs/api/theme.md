# 主题 API

VitePress 主题 API 参考，用于定制和扩展主题。

## 主题结构

一个 VitePress 主题包含以下部分：

```typescript
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export default {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    // 扩展应用实例
  }
} satisfies Theme
```

## Layout

主布局组件。

### 默认主题

使用并扩展默认主题：

```typescript
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout
}
```

### 自定义布局

```vue
<!-- .vitepress/theme/Layout.vue -->
<script setup>
import { useData } from 'vitepress'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="layout">
    <header>
      <h1>{{ frontmatter.title || page.title }}</h1>
    </header>

    <main>
      <!-- 渲染 Markdown 内容 -->
      <Content />
    </main>

    <footer>
      © 2025 My Site
    </footer>
  </div>
</template>
```

## 布局插槽

默认主题提供的插槽：

```vue
<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- 导航栏插槽 -->
    <template #nav-bar-title-before>Before Title</template>
    <template #nav-bar-title-after>After Title</template>
    <template #nav-bar-content-before>Before Content</template>
    <template #nav-bar-content-after>After Content</template>
    <template #nav-screen-content-before>Screen Before</template>
    <template #nav-screen-content-after>Screen After</template>

    <!-- 侧边栏插槽 -->
    <template #sidebar-nav-before>Sidebar Top</template>
    <template #sidebar-nav-after>Sidebar Bottom</template>

    <!-- 内容插槽 -->
    <template #page-top>Page Top</template>
    <template #page-bottom>Page Bottom</template>

    <template #doc-top>Doc Top</template>
    <template #doc-bottom>Doc Bottom</template>

    <template #doc-before>Before Doc</template>
    <template #doc-after>After Doc</template>

    <template #doc-footer-before>Footer Before</template>

    <!-- 侧边栏大纲插槽 -->
    <template #aside-top>Aside Top</template>
    <template #aside-bottom>Aside Bottom</template>
    <template #aside-outline-before>Outline Before</template>
    <template #aside-outline-after>Outline After</template>
    <template #aside-ads-before>Ads Before</template>
    <template #aside-ads-after>Ads After</template>

    <!-- 首页插槽 -->
    <template #home-hero-before>Hero Before</template>
    <template #home-hero-info-before>Hero Info Before</template>
    <template #home-hero-info>Hero Info</template>
    <template #home-hero-info-after>Hero Info After</template>
    <template #home-hero-actions-after>Hero Actions After</template>
    <template #home-hero-image>Hero Image</template>
    <template #home-hero-after>Hero After</template>

    <template #home-features-before>Features Before</template>
    <template #home-features-after>Features After</template>

    <!-- 404 页面插槽 -->
    <template #not-found>Custom 404</template>

    <!-- 其他插槽 -->
    <template #layout-top>Layout Top</template>
    <template #layout-bottom>Layout Bottom</template>
  </Layout>
</template>
```

## enhanceApp

扩展 Vue 应用实例。

### 注册全局组件

```typescript
import DefaultTheme from 'vitepress/theme'
import MyComponent from './components/MyComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('MyComponent', MyComponent)
  }
}
```

### 注册插件

```typescript
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册 Vue 插件
    app.use(ElementPlus)
  }
}
```

### 添加路由守卫

```typescript
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    router.onBeforeRouteChange = (to) => {
      console.log('Navigating to:', to)
    }

    router.onAfterRouteChanged = (to) => {
      console.log('Navigated to:', to)
    }
  }
}
```

### 访问站点数据

```typescript
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    console.log(siteData.value)

    // 监听站点数据变化
    watch(() => siteData.value, (newData) => {
      console.log('Site data updated:', newData)
    })
  }
}
```

## 运行时 API

### useData

获取页面和站点数据。

```vue
<script setup>
import { useData } from 'vitepress'

const {
  // 站点级别配置
  site,

  // 主题配置
  theme,

  // 页面数据
  page,

  // frontmatter
  frontmatter,

  // 标题和描述
  title,
  description,

  // 语言
  lang,

  // 是否暗色模式
  isDark,

  // 本地化路径
  localeIndex,

  // 路由路径
  path
} = useData()
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <p>Dark mode: {{ isDark }}</p>
  </div>
</template>
```

### useRoute

获取当前路由。

```vue
<script setup>
import { useRoute } from 'vitepress'

const route = useRoute()

watch(
  () => route.path,
  (newPath) => {
    console.log('Route changed to:', newPath)
  }
)
</script>

<template>
  <div>Current path: {{ route.path }}</div>
</template>
```

### useRouter

获取路由器实例。

```vue
<script setup>
import { useRouter } from 'vitepress'

const router = useRouter()

function navigate(path: string) {
  router.go(path)
}

// 路由钩子
onMounted(() => {
  router.onBeforeRouteChange = (to) => {
    console.log('Before route change:', to)
  }

  router.onAfterRouteChanged = (to) => {
    console.log('After route changed:', to)
  }
})
</script>

<template>
  <button @click="navigate('/guide/')">
    Go to Guide
  </button>
</template>
```

### Content

渲染 Markdown 内容的组件。

```vue
<template>
  <div class="custom-layout">
    <aside>
      <!-- 侧边栏 -->
    </aside>
    <main>
      <!-- 渲染 Markdown 内容 -->
      <Content />
    </main>
  </div>
</template>
```

### withBase

为 URL 添加 base 路径。

```vue
<script setup>
import { withBase } from 'vitepress'

const logoUrl = withBase('/logo.svg')
</script>

<template>
  <img :src="logoUrl" alt="Logo">
</template>
```

## 类型定义

### Theme

```typescript
interface Theme {
  Layout?: Component
  NotFound?: Component
  enhanceApp?: (ctx: EnhanceAppContext) => Awaitable<void>
  extends?: Theme
}

interface EnhanceAppContext {
  app: App
  router: Router
  siteData: Ref<SiteData>
}
```

### PageData

```typescript
interface PageData {
  title: string
  description: string
  frontmatter: Record<string, any>
  headers: Header[]
  relativePath: string
  filePath: string
  lastUpdated?: number
}

interface Header {
  level: number
  title: string
  slug: string
  children?: Header[]
}
```

### SiteData

```typescript
interface SiteData<ThemeConfig = any> {
  lang: string
  dir: string
  title: string
  description: string
  base: string
  head: HeadConfig[]
  themeConfig: ThemeConfig
  locales: Record<string, LocaleConfig>
  scrollOffset: number | string
}
```

## 自定义 NotFound 页面

```vue
<!-- .vitepress/theme/NotFound.vue -->
<script setup>
import { useRouter } from 'vitepress'

const router = useRouter()

function goHome() {
  router.go('/')
}
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>页面未找到</p>
    <button @click="goHome">返回首页</button>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

h1 {
  font-size: 4rem;
  margin: 0;
}

button {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
```

## 自定义容器

注册自定义 Markdown 容器：

```typescript
// .vitepress/config.ts
import container from 'markdown-it-container'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(container, 'custom', {
        render(tokens, idx) {
          const token = tokens[idx]
          const info = token.info.trim().slice('custom'.length).trim()

          if (token.nesting === 1) {
            return `<div class="custom-block custom">\n<p class="custom-block-title">${info}</p>\n`
          } else {
            return '</div>\n'
          }
        }
      })
    }
  }
})
```

使用：

```markdown
::: custom 自定义标题
这是自定义容器的内容
:::
```

## 主题继承

创建基于默认主题的自定义主题：

```typescript
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    // 自定义逻辑
  }
}
```

::: tip 提示
更多主题 API 详情请参考 [VitePress 类型定义](https://github.com/vuejs/vitepress/blob/main/types/index.d.ts)。
:::

::: warning 注意
在使用运行时 API 时，确保组件在客户端渲染，因为这些 API 只在浏览器环境中可用。
:::
