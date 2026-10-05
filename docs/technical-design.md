# myPage 技术设计与升级路线

**状态：** 2026-10-05 已确认的现代化改造方案

## 1. 产品边界

myPage 是静态个人门户，用于求职、作品展示和学习成果归档。它只需要稳定展示内容、快速打开、能从 GitHub Pages 部署，并让维护者能轻松更新资料和项目列表。

不建设账号、后端接口、留言存储、分析平台、CMS 或复杂状态管理。联系入口保持 `mailto:`、LinkedIn 和 GitHub 链接即可。

## 2. 当前基线与主要问题

| 范畴 | 现状 | 影响 |
| --- | --- | --- |
| 源码 | `src/` 内仍有 `copy` 组件、重复图片、未使用 Hook 和测试演示文件 | 维护者难以判断真实入口 |
| 数据 | 个人资料和项目资料位于 `src/server/data.js` | 名称误导，内容更新容易与 UI 改动混在一起 |
| 路由 | 部署路径被硬编码到路由和链接；缺少未匹配页面处理 | 本地与 GitHub Pages 的路径耦合，简历链接已失效 |
| UI | About 页采用固定大内边距与多层边框；移动导航和作品卡片交互不一致 | 小屏布局和信息层级不够清楚 |
| 性能 | 项目图和个人图片体积偏大，项目卡片不延迟加载 | 作品页首次加载偏重 |
| 工具链 | 依赖版本跨度大，审计发现直接依赖链漏洞；无测试与 CI | 更新与发布缺少可重复验证 |
| 部署 | 本地 `gh-pages`/`ncp` 脚本承担发布 | 发布依赖本机，流程不可见 |
| 文档 | README 仍是脚手架安装笔记 | 新维护者无法快速运行、修改或发布 |

## 3. 目标架构

保持 React 单页站点，不增加后端。目录按“页面、可复用组件、内容数据、静态资源”组织：

```text
src/
  app/                 # App、路由与站点级配置
  components/          # Header、SectionHeading、ProjectCard 等通用 UI
  pages/               # Home、About、Projects
  data/site.js         # 导航、个人资料、技能、教育等站点内容
  data/projects.js     # 项目卡片数据及其本地截图导入
  assets/              # profile、projects、icons 等正式引用资源
  styles/              # 全局样式与少量组件补充样式
  utils/               # 纯函数，例如项目筛选
```

这是目标结构而非一次性迁移要求。小组件可以留在 `components/`，不为每个页面建立额外的 feature 层。

### 路由与部署路径

- 使用 React Router 8 的浏览器路由模式；这是三页个人站点足够简单的路由方案。
- 路由只写 `home`、`about`、`projects` 等站内路径；统一使用 `Link` / `NavLink`，不在组件或数据中拼接 `/myPage`。
- Router 的 `basename` 使用 `import.meta.env.BASE_URL`，Vite 的 `base` 只负责 GitHub Pages 子路径下的静态资源地址。
- 构建后用项目内的 Node 脚本将 `dist/index.html` 复制为 `dist/404.html`。这让 GitHub Pages 在直接打开 `/myPage/projects` 时加载应用并由 Router 呈现正确页面，且不再依赖 `ncp`。

### 数据与内容

- 不使用数据库、CMS 或云存储。所有展示数据和图片随静态站点构建，适合当前个人主页的规模。
- 站点资料放在 `src/data/site.js`，项目卡片放在 `src/data/projects.js`；组件不保存个人信息、项目链接或展示列表。
- 个人图片、项目截图和站点图标分别放在 `src/assets/profile/`、`src/assets/projects/` 与 `src/assets/icons/`。当前图片采用 WebP：项目截图最长边 960px，头像最长边 512px，About 图片最长边 960px；这满足现有显示尺寸并显著减少首次下载量。
- 原始 PNG/JPEG/WebP 放在 `src/assets/source/profile/` 或 `src/assets/source/projects/` 并提交到 Git；生成的 WebP 位于正式资源目录但被 Git 忽略。`predev`、`pretest`、`prebuild` 以及 CI workflow 都会运行 `npm run images:optimize`，因此本地和部署环境都从原图自动生成相同的 WebP。图片生成会修改本地忽略的生成目录，但不修改版本控制中的内容。
- 项目筛选抽为一个纯函数，标签从项目数据派生，避免 `reactHooks` / `react-hooks` 这类双写不一致。
- 当前没有 `public/resume.pdf`，因此不渲染下载入口；补充实际 PDF 后再恢复对应链接。

## 4. UI 设计原则

- 保留深色、青绿色、轻微动效的个人风格，但信息优先于特效。
- 首页：一句职业定位、简短简介、两个明确动作（查看作品、联系/下载简历）。
- About：使用连续信息区块而非三层大边框；在宽屏双栏、窄屏单栏，避免固定 `px-20` 等造成拥挤的尺寸。
- Projects：标签为按钮；卡片统一 16:9 图片比例、标题、简介与“查看项目”链接，图片使用 `loading="lazy"`。
- 导航：桌面显示完整导航；移动端只在真正折叠时显示菜单按钮。移除只负责把可见菜单移出屏幕的旧行为。
- Canvas 背景、AOS 和打字机效果是否替换，留待已确认的 UI/动画阶段决定；在此之前不得单独删除或改变其体验。

## 5. 依赖与构建决策

### 当前工程底座

- 运行时基础为 `react`、`react-dom` 和 `react-router`。
- 工具链为 Vite 8、Tailwind CSS 4、DaisyUI 5、ESLint 10、TypeScript 6 和 Vitest 5；`sharp` 仅作为开发依赖执行本地、可重复的图片转码，不参与浏览器运行时或 CI 构建。
- 使用 Node.js 24（最低 `24.21.0`）；`.nvmrc` 和 `package.json` 的 `engines` 固定本地与未来 CI 的运行时。
- TypeScript 配置已启用 `allowJs` 且关闭 `checkJs`：旧 `.js/.jsx` 页面继续运行，新写或完整重做的组件才迁至 `.ts/.tsx`。不为旧文件做只改后缀的迁移。
- `components.json` 已准备好 shadcn/ui 的 Vite、Tailwind 4 与 TypeScript 配置。只有在 UI 步骤确实使用组件时，才添加对应 shadcn/ui 源码和依赖。

### 删除与替换策略

- 已删除无运行入口的 MUI、Emotion、旧 Router DOM、PostCSS、Autoprefixer、`ncp`、旧 Tailwind/ESLint 配置、旧分页/主题组件和 `yarn.lock`。
- Tailwind 4 已采用官方 Vite 插件；自定义旧色彩和动画 token 已迁入 CSS 入口。
- `gh-pages` 和相关本地发布脚本已删除；下一步只建立 GitHub Actions 的 Pages 发布方式。
- AOS、打字机、DaisyUI、Sass 都仍参与当前页面渲染。它们会在 UI/动画步骤中连同等价实现或确认的新设计一起删除，不能提前造成页面退化。
- 不引入组件库、状态管理、CSS-in-JS、TypeScript、后端或复杂测试框架。

## 6. 测试、CI 与部署

### 测试

使用 Vitest，覆盖少量高价值纯逻辑：

1. 项目标签由项目数据生成且不重复；
2. 按标签筛选项目返回正确集合；
3. 外部项目链接和简历链接由数据生成，不出现空 URL。

不引入端到端测试或视觉回归服务；页面是静态作品集，`lint + test + build` 已足够覆盖主要回归风险。

### CI

`.github/workflows/quality.yml` 在目标为 `master` 的 Pull Request 执行 `npm ci` 与 `npm run check`。构建失败不会部署。

### GitHub Pages

`.github/workflows/deploy-pages.yml` 在推送 `master` 或手动触发时执行 `npm ci`、`npm run check`，再使用官方 Pages Actions 上传和部署 `dist/`。发布前需要在 GitHub 仓库 Settings → Pages 选择 **GitHub Actions** 作为 Source。这个流程不使用 Azure 资源、第三方部署 token、`gh-pages` 分支或本机发布命令。

## 7. 分阶段执行与验收

| 阶段 | 内容 | 验收 |
| --- | --- | --- |
| 0 | 清除 `copy` 文件、重复资源和失效引用；修复标签与简历链接决策 | 只有正式源码；`lint`、`build` 通过 |
| 1 | 现代工程底座：Node 24、渐进 TypeScript、React 19、Router 8、Vite 8、Tailwind 4、ESLint 10、Vitest；清除真正无用代码和依赖 | 本地可运行；`lint`、`test`、`build` 通过 |
| 2 | GitHub Actions CI 与 Pages 部署；替换旧发布脚本 | push 自动验证；部署不依赖本机命令 |
| 3 | 内容与资源：数据资料、失效链接、站点图标、图片盘点 | 所有展示数据准确；资源目录清楚；不在本阶段改变图片视觉质量 |
| 3.1 | 图片交付：WebP 编码、尺寸限制与原生懒加载 | 原图不进入 Git；部署图片体积合理；新增图片可用同一命令处理 |
| 4 | 在确认设计后重做响应式 UI、布局与动画；采用 shadcn/ui，替换 AOS/DaisyUI/Sass 与旧页面动效 | 375px 与桌面宽度可读；当前或确认的新动效完整；项目图片延迟加载 |

每个阶段独立提交和验证，不在同一个提交中混合无关格式化、依赖升级和 UI 改动。
