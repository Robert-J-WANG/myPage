# myPage 技术设计

**状态：** 2026-10-07 基础工程与 UI 重构已完成，项目案例内容待成熟项目确定后补充。

## 1. 产品边界

myPage 是用于求职、作品展示和学习成果归档的静态个人门户。它需要清楚展示内容、在 GitHub Pages 稳定发布，并让维护者能简单更新资料、图片和项目列表。

不建设账号、后端接口、数据库、CMS、留言存储、分析平台或复杂状态管理。联系入口保持 `mailto:`、LinkedIn 和 GitHub 链接即可。

## 2. 当前架构

```text
src/
  app/                 # Router、根布局、主题选择
  Layout/               # 页面公共外壳
  components/
    pages/              # Home、Projects、ProjectDetails、NotFound
    projects/           # 卡片、精选区、筛选器、返回顶部
    navBar/             # 桌面与移动导航
    ui/                 # 项目自有 Button primitive
    widgets/            # SectionEyebrow、固定背景动画
  data/                 # site.js 与 projects.js
  assets/source/        # 版本控制中的原始图片
  hooks/                # 小型 UI hook
  lib/                  # 通用浏览器辅助函数
  styles/index.css      # Tailwind 入口与语义主题 token
  utils/                # 可测试的纯数据函数
```

这是个人站点所需的最小结构：页面组件不直接保存个人资料或项目链接，展示数据集中在 `src/data/`；不增加 feature 层、状态管理层或后端抽象。

## 3. 路由与部署

- 使用 React Router 8 的浏览器路由；`basename` 来自 `import.meta.env.BASE_URL`，组件只写站内路径，不拼接 `/myPage`。
- `/home` 是连续首页，锚点为 `#about`、`#skills`、`#projects`。同一个锚点被再次点击时，也会重新执行平滑定位。
- `/projects` 展示可筛选的完整作品列表；`/projects/:id` 展示项目详情骨架；未知路径进入 Not Found 页面。
- Vite 的 `base` 为 GitHub Pages 子路径。构建脚本把 `dist/index.html` 复制为 `dist/404.html`，因此直接打开 `/myPage/projects` 也能由客户端路由正确呈现。
- GitHub Actions 在面向 `main` 的 PR 执行 `npm run check`；推送到 `main` 后检查、构建并发布 `dist/` 到 GitHub Pages。

## 4. UI 与主题

- 首页采用连续的 About、Skills、Featured Projects 三个 section；完整项目集合独立放在 `/projects`，避免首页过长且保持作品浏览入口清楚。
- 设计使用语义颜色 token。浅色主题以蓝色为主强调色、绿色为辅助；深色主题以绿色为主强调色、蓝色为辅助。组件只使用 `page`、`content`、`accent`、`surface` 等语义 token，不在组件中硬编码主题颜色。
- 字体层级保持为正文、辅助/控件、页面标题、详情子标题四类。`SectionEyebrow` 统一处理 section 标识和装饰分割线。
- 星空 Canvas 固定在视口背景，只在根布局创建一次；头像环、打字机和 AOS 进入动画保留为已确认的个人风格。
- 项目卡片为固定比例、响应式的两列/单列布局，图片懒加载；鼠标或键盘聚焦时显示从左到右的详情遮罩。
- 详情页仅展示已经存在于项目数据中的标题、预览图、简介、技术与 Live Demo。它不为早期 Demo 编造贡献、截图、仓库链接或挑战总结。

## 5. 数据与图片

- 站点资料放在 `src/data/site.js`，项目卡片放在 `src/data/projects.js`。
- 不使用数据库、CMS 或云存储。当前规模下，随静态站点构建的数据更容易维护且无需凭据。
- 原始 PNG/JPEG/WebP 放在 `src/assets/source/profile/` 或 `src/assets/source/projects/` 并提交到 Git；生成的 WebP 位于正式资源目录但被 Git 忽略。
- `npm run images:optimize` 会把项目截图和 About 图片限制到 960px 宽、头像限制到 512px。它在 `dev`、`test`、`build` 及 CI 中自动运行；卡片图片仍使用浏览器原生懒加载。

### 未来案例数据

目前列表包含若干学习期 Demo，其中部分只使用 mock 数据或完成度有限。等 UU Cars 和 RoostMap 完成并可验证后，再为成熟项目补充真实的长简介、个人贡献、截图、仓库地址和 Live Demo 信息。详情页应按“字段存在才渲染”的方式渐进扩展，不为当前数据加入空白占位区。

## 6. 依赖与质量门槛

- 运行时：React 19、React DOM、React Router 8、Lucide、AOS、`class-variance-authority` 和 `cn`。
- 构建与质量：Node 24、Vite 8、Tailwind CSS 4、TypeScript 6（`allowJs`）、ESLint 10、Vitest 5、Sharp。
- DaisyUI 与 Sass 已移除：当前页面没有 DaisyUI class 或 Sass 文件，继续保留只会增加安装与构建依赖。
- AOS 仍驱动首页两处已确认的进入动画；不在没有等价、已确认替代效果时移除。
- 测试只覆盖高价值纯逻辑：标签派生、按标签筛选、外部链接完整性。不引入端到端或视觉回归服务。

每个大步骤结束前运行 Node 24 下的 `npm run check`。项目不提交密钥，不引入没有当前需求的后端、数据库、认证、状态管理或复杂 TypeScript 类型。

## 7. Git 工作流

- `main` 是唯一默认分支、PR 基准分支和 GitHub Pages 发布分支。
- 功能分支从 `main` 创建，使用 `feat/`、`fix/`、`chore/`、`docs/`、`refactor/`、`test/`、`ci/` 或 `perf/` 前缀和简短小写 kebab-case 描述，例如 `feat/site-metadata`。不使用工具、代理或个人环境名称作为前缀。
- 每个功能分支完成后运行 `npm run check`，推送到远程并创建 PR；合并后在本地切换 `main`、执行 `git pull --ff-only`，再删除已合并的本地和远程功能分支。
