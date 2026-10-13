# Portfolio

An interactive single-page portfolio built with **React + Vite + Tailwind CSS v4**.
Clean, minimal, typography-first — with scroll reveals, a sticky nav, an expandable
work section and a reading-progress bar.

## Run it

```bash
npm install
npm run dev      # opens http://localhost:5173
```

Other commands:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Make it yours

**Everything editable lives in [`src/data.js`](src/data.js).** You should never need to
touch a component to change the content.

| Export            | Controls                                          |
| ----------------- | ------------------------------------------------- |
| `profile`         | Name, role, tagline, email, résumé link, socials  |
| `nav`             | Which sections render, and their nav labels       |
| `intro`           | The "About" headline and paragraphs               |
| `projects`        | The work cards (title, blurb, detail, metrics…)   |
| `experience`      | The timeline entries                              |
| `stackGroups`     | The tool chips, grouped by category               |
| `writing`         | The post list                                     |
| `footer`          | Footer note                                       |

## Re-skin it

Design tokens live at the top of [`src/index.css`](src/index.css) in the `@theme` block:

```css
@theme {
  --color-ink: #0c0c0d;   /* headings and body */
  --color-accent: #2563eb; /* interactive accents */
  --color-line: #e4e4e7;  /* hairlines and borders */
}
```

Change those three and the whole site re-skins. Individual projects can each set their
own `accent` colour in `data.js`.

## Structure

```
src/
├── App.jsx              # page composition
├── data.js              # ← all your content lives here
├── index.css            # design tokens + base styles
└── components/
    ├── Header.jsx       # sticky nav, active section, progress bar
    ├── Hero.jsx         # intro
    ├── Work.jsx         # expandable project cards
    ├── About.jsx        # bio
    ├── Credentials.jsx  # education, training, certifications
    ├── Stack.jsx        # interactive tool chips
    ├── Contact.jsx      # rotating headline + email CTA
    ├── Footer.jsx
    ├── ErrorBoundary.jsx  # stops one bad entry blanking the page
    └── Reveal.jsx         # scroll-reveal wrapper
```

## Accessibility & performance notes

- Scroll reveals honour `prefers-reduced-motion`.
- Skip-to-content link, visible focus rings, and real `<button>`/`<a>` semantics.
- Interactive chips are keyboard-focusable with `aria-pressed`.
- `role`/`aria-expanded` on the project expanders.

## Verify before you ship

```bash
npm run build   # runs the smoke test first, then bundles
```

`npm run build` runs `npm run check` first, which renders the whole app in Node and
asserts your name, email, every project title and every nav target actually appear in
the output. This catches the class of mistake a plain build misses — for example, a
project object missing a `metrics` key that a component assumes exists. That renders
fine at compile time and crashes the whole page in the browser.

Run it on its own with `npm run check`.

## Deploy to GitHub Pages

Automated by `.github/workflows/deploy.yml` — push to `main` and it rebuilds and
publishes. No manual `gh-pages` branch.

**One-time setup, after the first push:**

1. Repo → **Settings** → **Pages**
2. Under *Build and deployment*, Source: **GitHub Actions**

Your site will be at `https://Yashwant1304.github.io/portfolio/`.

### Why the REPO variable

GitHub Pages serves project sites from a subfolder
(`/portfolio/`), not the domain root. Vite has to know that prefix or every asset URL
404s and you get a blank white page. `vite.config.js` reads it from an env var:

```bash
set REPO=portfolio && npm run build     # Windows cmd
```

The workflow sets this automatically from the repo name, so you only need it for local
production builds. Leave `REPO` unset for `npm run dev` and for Netlify/Vercel, which
serve from the root.

**If you rename the repo, the workflow picks up the new name automatically** — the
`REPO` env is set from `${{ github.event.repository.name }}`.

## Deploy elsewhere

Builds to a static `dist/`, so it works on Netlify, Vercel and Cloudflare Pages with no
changes. Just drag the `dist` folder onto
[app.netlify.com/drop](https://app.netlify.com/drop).