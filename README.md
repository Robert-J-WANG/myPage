# myPage

A personal portfolio, job-search site, and learning project built with React. It is intentionally a static site: personal information and project data live in the repository, and GitHub Pages serves the production build.

## Stack

- Node.js 24.21.0
- React 19 and React Router 8
- Vite 8 and Tailwind CSS 4
- Project-owned UI primitives with `class-variance-authority`, `cn`, and Lucide icons
- ESLint, TypeScript configuration for gradual migration, and Vitest
- Sharp for local, repeatable image optimization

Pages remain JavaScript/JSX. TypeScript is configured with `allowJs` so a future component can be migrated when there is a concrete benefit; no file is converted only for its extension.

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
  app/                 # Router, root layout, and theme selection
  assets/source/       # Committed original profile and project images
  components/          # Pages, sections, navigation, and UI primitives
  data/                # Site content and project-card data
  hooks/               # Small UI hooks
  lib/                 # Shared client-side helpers
  styles/              # Global Tailwind entry point and theme tokens
  utils/               # Pure, tested data helpers
```

Update navigation, profile text, skills, and links in `src/data/site.js`. Update project cards in `src/data/projects.js`. Do not create `copy` files as backups; Git history preserves earlier versions.

## Themes, navigation, and project pages

The first visit follows the operating-system light/dark preference. A manual choice is stored in the browser under `portfolio-theme`. The two themes share the same semantic color roles: light mode uses blue as the primary accent and dark mode uses green.

`/home` is a continuous page with About, Skills, and Featured Projects sections. Navigation uses stable hash links, including repeatable smooth scrolling when a visitor reselects the current section. `/projects` holds the full filtered collection; `/projects/:id` provides the reusable project-detail skeleton. The detail page currently displays only verified title, preview, short overview, technology tags, and Live Demo link. It deliberately does not invent case-study content for early learning demos.

The site intentionally has no résumé download link. Current résumé variants remain in their delivery channels so the website cannot drift out of sync with an application-specific document.

## Adding images

Commit original PNG, JPEG, or WebP files in `src/assets/source/profile/` or `src/assets/source/projects/`. Generated WebP files in `src/assets/profile/` and `src/assets/projects/` are ignored by Git.

```bash
npm run images:optimize
```

The command generates WebP files in the matching output directories. It runs automatically before `dev`, `test`, and `build`, and is also an explicit step in CI and Pages deployment. Project screenshots and the About image are limited to 960px wide; the avatar is limited to 512px. Review the generated image, then update its import in the relevant data file and commit the original plus code changes. Project-card images load lazily in the browser.

## Deployment

GitHub Actions runs `npm run check` on pull requests targeting `main`. Each push to `main` runs the same checks and deploys `dist/` to GitHub Pages.

Before the first deployment, open the repository **Settings → Pages** and select **GitHub Actions** as the publishing source. No deployment token or local deploy command is required.

See [the technical design](docs/technical-design.md) for architecture boundaries and the plan for future case-study data.
