# myPage 技术设计

## 1. 产品与系统边界

myPage 是用于求职和作品展示的静态个人门户。系统负责展示个人简介、技能、项目列表和项目详情，并通过 GitHub Pages 发布。

当前系统不包含账号、后端 API、数据库、CMS、表单存储或服务端状态。站点内容随前端代码一同构建，联系入口使用外部链接和 `mailto:`。

## 2. 源码结构

```text
src/
  app/                 # 应用入口组件、根布局、路由和主题逻辑
  assets/
    source/            # 提交到 Git 的原始图片
    profile/           # 自动生成的个人图片 WebP
    projects/          # 自动生成的项目图片 WebP
  components/
    home/              # 首页专用 section 与打字机组件
    layout/            # 导航、页脚、主题切换和背景动画
    projects/          # 项目卡片、筛选器与返回顶部按钮
    ui/                # 小型通用 UI 组件
  data/                # 站点资料与项目数据
  hooks/               # 动画、Canvas、滚动和视口状态 hooks
  lib/                 # Canvas、项目数据和滚动等共享函数
  pages/               # 路由页面组件
  styles/              # Tailwind 入口和主题 token
  main.jsx             # 浏览器入口
```

页面组件负责组合界面，展示数据集中在 `src/data/`，可复用组件按实际使用场景分类。项目规模不需要额外的 feature 层、全局状态管理层或后端抽象。

## 3. 应用组成

`src/main.jsx` 初始化已保存的主题并渲染 `App`。`App` 提供 React Router，`RootLayout` 提供所有页面共用的导航、内容容器、页脚和固定 Canvas 背景。

背景动画位于根布局，因此路由切换不会重新创建背景组件。页面内容通过 Router `Outlet` 渲染：

- `HomePage` 组合 About、Skills 和 Featured Projects。
- `ProjectsPage` 管理当前筛选标签并展示过滤后的项目。
- `ProjectDetailsPage` 按路由参数读取项目数据。
- `NotFoundPage` 处理未知路径。

站点保持局部 React 状态。主题、移动导航、项目筛选和动画状态不需要跨页面状态库。

## 4. 路由与静态托管

应用使用 React Router 的浏览器路由，`basename` 来自 `import.meta.env.BASE_URL`。组件使用 `/home`、`/projects` 等站内路径，不直接拼接 GitHub Pages 仓库前缀。

| 路径 | 内容 |
| --- | --- |
| `/` | 重定向到 `/home` |
| `/home` | 连续首页 |
| `/home#about` | 首页 About 区域 |
| `/home#skills` | 首页 Skills 区域 |
| `/home#projects` | 首页 Featured Projects 区域 |
| `/projects` | 可筛选的完整项目列表 |
| `/projects/:projectId` | 项目详情页 |
| 其他路径 | Not Found 页面 |

Vite 的 `base` 设置为 `/myPage/`。生产构建结束后，`scripts/copy-spa-fallback.mjs` 将 `dist/index.html` 复制为 `dist/404.html`，让 GitHub Pages 上的直接访问请求可以回到客户端路由。

## 5. 数据与资源

`src/data/site.js` 保存导航、联系方式、首页简介和技能；`src/data/projects.js` 保存项目标题、简介、标签、图片和外部链接。页面和组件只读取这些模块，不在 JSX 中维护另一份相同数据。

原始图片保存在 `src/assets/source/` 并提交到 Git。`scripts/optimize-images.mjs` 使用 Sharp 生成 WebP：

- About 图片和项目截图最大宽度为 960px。
- 头像最大宽度为 512px。
- 输出写入 `src/assets/profile/` 和 `src/assets/projects/`。
- 输出目录被 Git 忽略，并在 `dev`、`test` 和 `build` 前自动生成。

项目卡片图片使用浏览器原生懒加载。当前数据量适合随静态站点构建，不需要数据库或云端媒体服务。

## 6. UI、主题与动画

Tailwind CSS 提供布局和组件样式，`src/styles/index.css` 定义浅色与深色主题的语义 token。组件使用 `page`、`content`、`accent`、`surface`、`control` 等角色，不直接绑定某个主题的具体颜色。

浅色主题以蓝色作为主要强调色，深色主题以绿色作为主要强调色。首次访问跟随系统主题，手动选择保存在 `portfolio-theme`。

`SectionEyebrow` 统一 section 标题与装饰线；项目卡片在鼠标悬停或键盘聚焦时显示详情遮罩。AOS 负责首页进入动画，自有 Canvas 逻辑负责固定星空背景，React 状态负责打字机与主题切换。

## 7. 质量与交付

项目使用 Node.js 24 和 npm 11。应用代码使用 JavaScript/JSX；TypeScript 配置服务于 Vite 配置和构建工具，shadcn 配置当前生成 JSX。

`npm run check` 依次执行 ESLint、Vitest 和生产构建。现有单元测试覆盖：

- 项目标签去重与排序
- 项目筛选
- 标签显示名称转换
- 项目外部链接和基础数据完整性

面向 `main` 的 Pull Request 触发 `.github/workflows/quality.yml`。推送到 `main` 触发 `.github/workflows/deploy-pages.yml`，完成依赖安装、资源生成、质量检查、构建和 GitHub Pages 发布。部署使用 GitHub Pages 的短期身份令牌，不需要在仓库中保存部署密钥。
