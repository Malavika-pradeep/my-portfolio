
# My Portfolio — Malavika Pradeep

A personal portfolio website built with React, Vite and Tailwind CSS to showcase projects, skills, education, and contact information. It includes a responsive design, light/dark theme toggle, Lottie animations, and small UI helpers such as toast notifications.

## Key features

- Clean, responsive single-page layout with distinct sections: Hero, About, Skills, Projects, Education & Experience, Contact, and Footer.
- Theme toggle (light / dark) with persistent preference.
- Animated loader and background using Lottie/JSON assets.
- Toast notifications and small UI components for polished UX.
- Built with Vite for fast development and optimized production builds.

## Tech stack

- React (JSX)
- Vite (dev server & build)
- Tailwind CSS (utility-first styling)
- Lottie (animated JSON assets)
- PostCSS

## Project structure (important files)

- `index.html` — HTML entry
- `src/main.jsx` — app entry, router/mounting
- `src/App.jsx` — top-level app component
- `src/index.css` — global styles / Tailwind imports
- `src/components/` — UI and section components (HeroSection, Navbar, ProjectsSection, SkillsSection, etc.)
- `src/pages/` — route pages (Home, NotFound)
- `src/lib/utils.js` — small utilities
- `src/hooks/use-toast.js` — custom toast hook
- `public/` — static assets
- `tailwind.config.cjs`, `postcss.config.cjs` — Tailwind/PostCSS config
- `vite.config.js` — Vite config

Feel free to explore the `src/components` directory to customize sections and content.

## Prerequisites

- Node.js (recommended LTS) and npm installed. You can check versions with:

```powershell
node -v
npm -v
```

## Local development

Use PowerShell (pwsh) or your preferred shell. From the project root:

```powershell
# install dependencies

npm install

# start dev server (Vite)
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

## Build & preview production bundle

```powershell
# build for production
npm run build

# preview the production build locally
npm run preview
```

## Deployment

This site can be deployed to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

- Vercel: connect the Git repository in the Vercel dashboard and set the build command to `npm run build` and the output directory to `dist`.
- Netlify: drag & drop the `dist` folder or connect the repo and use `npm run build`.
- GitHub Pages: you can use a tool such as `gh-pages` to publish the `dist` directory.

## Customization

- Edit text, links and images in the components under `src/components` and the page in `src/pages/Home.jsx`.
- Replace Lottie files in `src/assets` (or `public/`) and update the import paths.
- Tailwind: modify `tailwind.config.cjs` to change theme tokens or extend utilities.

Before submitting PRs, run and verify the dev server and ensure builds succeed:

```powershell
npm install
npm run build
```



