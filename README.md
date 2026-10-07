# myPage

Personal portfolio website for presenting my profile, technical skills, and selected web projects.

[View the live site](https://robert-j-wang.github.io/myPage/)

## Current features

- Responsive homepage with About, Skills, and Featured Projects sections
- Light and dark themes with the visitor's choice stored locally
- Filterable project collection and reusable project detail pages
- Fixed animated background, profile animation, and typewriter introduction
- Automatically optimized WebP images
- Clean client-side routes hosted on GitHub Pages

## Technology

- React 19 and React Router 8
- Vite 8 and Tailwind CSS 4
- Lucide icons and small project-owned UI components
- Vitest and ESLint
- Sharp image processing
- GitHub Actions and GitHub Pages

The application code uses JavaScript and JSX. TypeScript remains only in the Vite configuration and build toolchain.

## Run locally

The project requires Node.js 24 and npm 11. The versions used by the project are recorded in `.nvmrc` and `package.json`.

```bash
nvm use
npm ci
npm run dev
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Optimize images and start the local Vite server |
| `npm run lint` | Run ESLint |
| `npm run test` | Optimize images and run Vitest once |
| `npm run build` | Optimize images and create the production build |
| `npm run check` | Run lint, tests, and production build |
| `npm run images:optimize` | Regenerate optimized WebP assets |
| `npm run preview` | Preview the production build locally |

## Updating portfolio content

- Edit navigation, profile text, skills, contact details, and social links in `src/data/site.js`.
- Edit project titles, descriptions, tags, images, and links in `src/data/projects.js`.
- Add original images to `src/assets/source/profile/` or `src/assets/source/projects/`.
- Run `npm run images:optimize` after adding or replacing an image. The command also runs automatically before development, tests, and production builds.

Generated WebP files are not committed. Commit the original image and the related data or component change instead.

## Deployment

Pull requests targeting `main` run the quality workflow. A successful push to `main` builds and deploys the site to GitHub Pages through GitHub Actions.

See [the technical design](docs/technical-design.md) for the current architecture and delivery design.
