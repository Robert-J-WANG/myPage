# myPage

A personal portfolio, job-search site, and learning project built with React.

## Stack

- Node.js 24.21.0
- React 19 and React Router 8
- Vite 8
- Tailwind CSS 4 and DaisyUI 5
- TypeScript in gradual-migration mode
- ESLint and Vitest
- Sharp for local, repeatable image optimization

The application currently keeps its existing JavaScript pages. New or fully rewritten components can use TypeScript, while `allowJs` keeps the current pages working without a disruptive conversion.

## Local development

```bash
nvm use
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run test
npm run build
npm run check
```

`npm run build` type-checks the project, builds the Vite site, and creates `dist/404.html` from `dist/index.html`. This preserves clean client-side URLs such as `/myPage/projects` on GitHub Pages.

## Project structure

```text
src/
  app/                 # Router and shared route layout
  assets/              # profile, project and icon assets
  components/          # Page sections and reusable UI
  data/site.js         # Navigation, profile, skills and timeline content
  data/projects.js     # Project cards and their local screenshot imports
  hooks/               # Small UI hooks
  styles/              # Global Tailwind CSS entry point
  utils/               # Pure, tested data helpers
```

Update personal information, links, skills and timeline content in `src/data/site.js`; update project cards in `src/data/projects.js`. Keep images in the matching `src/assets/` subdirectory. Do not create `copy` files as a backup; Git history preserves earlier versions.

## Adding images

Commit original PNG, JPEG, or WebP files in `src/assets/source/profile/` or `src/assets/source/projects/`. Generated WebP files in `src/assets/profile/` and `src/assets/projects/` are ignored by Git.

```bash
npm run images:optimize
```

The command generates WebP files in `src/assets/profile/` and `src/assets/projects/`. It runs automatically before `dev`, `test`, and `build`, and is also an explicit step in CI and Pages deployment. Project screenshots and the About image are limited to 960px wide; the avatar is limited to 512px. Review the generated image, then update its import in the relevant data file and commit the original plus code changes. Project-card images load lazily in the browser.

## Deployment

GitHub Actions runs `npm run check` on pull requests targeting `master`. Each push to `master` runs the same checks and deploys `dist/` to GitHub Pages.

Before the first deployment, open the repository **Settings → Pages** and select **GitHub Actions** as the publishing source. No deployment token or local deploy command is required.

See [the technical design](docs/technical-design.md) for the migration decisions and project boundaries.
