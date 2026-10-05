# myPage

A personal portfolio, job-search site, and learning project built with React.

## Stack

- Node.js 24.21.0
- React 19 and React Router 8
- Vite 8
- Tailwind CSS 4 and DaisyUI 5
- TypeScript in gradual-migration mode
- ESLint and Vitest

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
  assets/              # Portfolio images
  components/          # Page sections and reusable UI
  data/portfolio.js    # The single source of portfolio content
  hooks/               # Small UI hooks
  styles/              # Global Tailwind CSS entry point
  utils/               # Pure, tested data helpers
```

Update personal information, links, skills, education, and project cards in `src/data/portfolio.js`. Do not create duplicate data files or keep `copy` components as a backup; Git history preserves earlier versions.

## Deployment

GitHub Actions runs `npm run check` on pull requests targeting `master`. Each push to `master` runs the same checks and deploys `dist/` to GitHub Pages.

Before the first deployment, open the repository **Settings → Pages** and select **GitHub Actions** as the publishing source. No deployment token or local deploy command is required.

See [the technical design](docs/technical-design.md) for the migration decisions and project boundaries.
