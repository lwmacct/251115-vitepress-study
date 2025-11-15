# 部署

将你的 VitePress 站点部署到各种平台。

## 构建站点

在部署之前，需要先构建站点：

```bash
npm run docs:build
```

这将在 `docs/.vitepress/dist` 目录生成静态文件。

## 预览构建

在本地预览构建结果：

```bash
npm run docs:preview
```

## GitHub Pages

### 使用 GitHub Actions

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: npm ci

      - name: Build with VitePress
        run: npm run docs:build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 配置 base

如果部署到 `https://<username>.github.io/<repo>/`，需要设置 `base`：

```typescript
// docs/.vitepress/config.ts
export default defineConfig({
  base: '/your-repo-name/'
})
```

### 启用 GitHub Pages

1. 进入仓库设置
2. 找到 "Pages" 部分
3. Source 选择 "GitHub Actions"
4. 推送代码到 main 分支触发部署

## Netlify

### 方法 1: Git 集成

1. 登录 [Netlify](https://netlify.com)
2. 点击 "New site from Git"
3. 选择你的仓库
4. 配置构建设置：
   - Build command: `npm run docs:build`
   - Publish directory: `docs/.vitepress/dist`

### 方法 2: netlify.toml

在项目根目录创建 `netlify.toml`：

```toml
[build]
  command = "npm run docs:build"
  publish = "docs/.vitepress/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Vercel

### 部署步骤

1. 登录 [Vercel](https://vercel.com)
2. 导入 Git 仓库
3. Vercel 会自动检测 VitePress 项目
4. 配置设置：
   - Build Command: `npm run docs:build`
   - Output Directory: `docs/.vitepress/dist`
5. 点击 "Deploy"

### vercel.json

创建 `vercel.json`（可选）：

```json
{
  "buildCommand": "npm run docs:build",
  "outputDirectory": "docs/.vitepress/dist",
  "cleanUrls": true
}
```

## Cloudflare Pages

1. 登录 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 创建新项目并连接 Git 仓库
3. 配置构建设置：
   - Build command: `npm run docs:build`
   - Build output directory: `docs/.vitepress/dist`
4. 点击 "Save and Deploy"

## 阿里云 OSS

### 构建并上传

```bash
# 构建
npm run docs:build

# 使用 ossutil 上传
ossutil cp -r docs/.vitepress/dist oss://your-bucket/ -u
```

### 配置 CDN

1. 在阿里云 OSS 控制台启用静态网站托管
2. 设置索引文档为 `index.html`
3. 设置错误文档为 `404.html`
4. 配置 CDN 加速（可选）

## 腾讯云 COS

### 使用 COSCMD

```bash
# 安装 COSCMD
pip install coscmd

# 配置
coscmd config -a <SecretId> -s <SecretKey> -b <Bucket> -r <Region>

# 上传
npm run docs:build
coscmd upload -r docs/.vitepress/dist/ / --delete
```

## Docker 部署

### Dockerfile

创建 `Dockerfile`：

```dockerfile
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run docs:build

FROM nginx:alpine

COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        # 启用 gzip 压缩
        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    }
}
```

### 构建和运行

```bash
# 构建镜像
docker build -t my-vitepress-site .

# 运行容器
docker run -p 8080:80 my-vitepress-site
```

## 服务器部署

### 使用 PM2

```bash
# 全局安装 serve
npm install -g serve pm2

# 构建站点
npm run docs:build

# 使用 PM2 启动
pm2 serve docs/.vitepress/dist 3000 --spa --name vitepress-site

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
```

### 使用 Nginx

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/vitepress/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 启用 gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_comp_level 6;
    gzip_min_length 1000;
}
```

## 性能优化

### 启用压缩

在构建配置中启用 gzip：

```typescript
// docs/.vitepress/config.ts
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    }
  }
})
```

### 图片优化

```typescript
export default defineConfig({
  vite: {
    plugins: [
      // 使用图片优化插件
    ]
  }
})
```

### CDN 加速

将静态资源部署到 CDN：

```typescript
export default defineConfig({
  vite: {
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    }
  }
})
```

## 持续部署检查清单

- [ ] 设置正确的 `base` 路径
- [ ] 配置构建命令和输出目录
- [ ] 启用 HTTPS
- [ ] 配置自定义域名（如需要）
- [ ] 设置环境变量（如需要）
- [ ] 启用 gzip 压缩
- [ ] 配置缓存策略
- [ ] 设置 404 页面
- [ ] 测试所有链接
- [ ] 配置分析工具（可选）

::: tip 提示
选择最适合你的部署方式。对于开源项目，GitHub Pages 是一个很好的免费选择。
:::

::: warning 注意
部署前请确保测试构建输出，验证所有链接和资源都能正确加载。
:::
