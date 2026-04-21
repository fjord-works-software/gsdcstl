# Migration Plan: Static HTML to SvelteKit + Tailwind CSS

**Goal:** Migrate the GSDCSTL static HTML site from Artisteer/jQuery to SvelteKit with `adapter-static`, deployed to GitHub Pages under the existing custom domain `gsdcstl.org`.

**Current State Challenges:**
1. Heavy reliance on proprietary Artisteer v4.3 styling (`art-*` classes throughout).
2. Content dispersed across ~50 HTML files, including 24 year-specific award pages.
3. Two significant jQuery plugins (`ThemeSlider`, `ThemeLightbox`) plus a large responsive-layout script that must be replaced.

**Target State Benefits:**
1. Component-driven architecture for scalability and reuse.
2. Modern utility-first styling with Tailwind CSS.
3. Simplified content management via JSON data files.
4. Automated deployment to GitHub Pages via GitHub Actions.

---

## Phase 1: Foundation & Setup

**Objective:** Establish core project structure, tooling, and global layout shell.

### Tasks:
1. **Project initialization:** Create a new SvelteKit project with TypeScript and `@sveltejs/adapter-static`.
   - `svelte.config.js`: use `adapter-static` with `fallback: '404.html'`.
   - Add `static/CNAME` containing `gsdcstl.org` (custom domain → no base path prefix needed).
2. **Configure Tailwind CSS v4** via the `@tailwindcss/vite` plugin (no PostCSS, no `tailwind.config.js`).
   - Add `tailwindcss()` to the `plugins` array in `vite.config.ts`.
   - Define custom design tokens in `src/app.css` using the `@theme` directive:
     - `--color-primary: #4F6951`, `--color-primary-dark: #3B4E3D`, `--color-primary-light: #7C9C7F`
     - `--font-family-serif: Georgia, serif`
3. **Global layout** (`src/routes/+layout.svelte`):
   - `Header.svelte` — club name/logo and slogan.
   - `NavMenu.svelte` — horizontal nav with dropdown submenus matching existing structure (Club Info, Calendar, Events, Brags, Photo Gallery, Breeders, Links). Active state via `$page.url.pathname`.
   - `MobileNav.svelte` — hamburger button + `transition:slide` menu (replaces jQuery `slideDown/slideUp`).
   - `Footer.svelte` — copyright and contact link.
4. **Global CSS** (`src/app.css`): Tailwind directives only; no Artisteer classes carried over.

### Critical files:
- `svelte.config.js`
- `vite.config.ts`
- `src/app.css`
- `src/routes/+layout.svelte`
- `src/lib/components/NavMenu.svelte`
- `src/lib/components/MobileNav.svelte`
- `static/CNAME`

---

## Phase 2: Content Structuring & Routing

**Objective:** Categorize all pages and establish routing strategy. Avoid dynamic routes where static pages suffice.

### Page classification:

| Category | Pages | Strategy |
|---|---|---|
| **Static Svelte pages** | home, education, members-only, brags/hall-of-fame, brags/wag-n-tongue, events/show-premium, events/event-results, club-info/*, calendar/*, breeders/*, links/* | Individual `+page.svelte` files; content migrated from HTML |
| **Dynamic route** | `brags/royal-hecht-awards/[year]` (24 HTML files, 1999–2022) | JSON data file + one parameterized route |
| **Static pages** | photo-gallery/gallery-1, gallery-2, gallery-3 | Individual `+page.svelte` (content is small and stable — no dynamic route needed) |
| **Static assets** | `Documents/Wags/*.pdf` (60 newsletters, 1986–2018), all images | Copy to `static/` — no migration needed |

### Royal Hecht Awards data extraction (critical step):
Parse each `gsdcstl.org/brags/royal-hecht-awards/royal-hecht-YYYY.html` and extract member award tables into structured JSON.

Target schema:
```json
{
  "year": 2022,
  "date": "April 18, 2023",
  "chairperson": "Laura Marrocco",
  "members": [
    { "name": "Jane Doe", "awards": [{ "category": "Conformation Points", "points": 42 }] }
  ]
}
```

Output: `src/lib/data/royal-hecht-awards.json` (array of all years).

Route: `src/routes/brags/royal-hecht-awards/[year]/+page.svelte` reads from JSON and renders by matching `params.year`. Index page (`+page.svelte` one level up) renders the year grid.

### Critical files:
- `src/lib/data/royal-hecht-awards.json`
- `src/routes/brags/royal-hecht-awards/[year]/+page.ts` (load function)
- `src/routes/brags/royal-hecht-awards/[year]/+page.svelte`
- `static/Documents/` (copied PDF assets)

---

## Phase 3: Styling & Component Migration

**Objective:** Re-implement visual design with Tailwind, eliminating all Artisteer `art-*` classes.

### Tasks:
1. **Design token mapping** — convert the Artisteer theme to Tailwind equivalents:
   - Page background: `bg-gradient-to-b from-[#7C9C7F] to-white` (fixed, full height)
   - Content container: white background, max-width ~1050px, centered
   - Buttons: `bg-primary hover:bg-primary-dark text-white rounded-lg`
   - Post/article cards: `bg-white rounded shadow p-4`
2. **Shared components** to build:
   - `AwardTable.svelte` — renders a member's Royal Hecht award data
   - `PhotoGallery.svelte` — wraps gallery images with lightbox trigger
   - `PageHeader.svelte` — consistent `h1` + divider used on most pages
   - `BragEntry.svelte` — formatted dog show result entry
3. **Drop entirely:** `style.css`, `style.responsive.css`, `style.ie7.css`, all `art-*` classes, all vendor-prefix CSS (`-webkit-`, `-moz-`, `-o-`, `-ms-`).

### Critical files:
- `src/app.css` (`@theme` block with custom colors + fonts)
- `src/lib/components/` (all shared UI components)

---

## Phase 4: Interactivity Replacement

**Objective:** Replace the two jQuery plugins and all responsive JS with Svelte-native equivalents. Drop all IE compatibility code.

### jQuery feature mapping:

| jQuery feature | Replacement | Notes |
|---|---|---|
| `ThemeSlider` (homepage carousel) | `Carousel.svelte` using [Embla Carousel](https://www.embla-carousel.com/) | Lightweight, framework-agnostic, supports autoplay |
| `ThemeLightbox` (gallery expand) | `Lightbox.svelte` — custom Svelte component | Use native `<dialog>` + `transition:fade` + keyboard nav; no extra dependency |
| Mobile menu `slideDown/slideUp` | `MobileNav.svelte` with `transition:slide` | Pure Svelte |
| Responsive breakpoint detection | Tailwind `sm:` `md:` `lg:` prefixes | **Delete `script.responsive.js` entirely** |
| Active nav link detection | `$page.url.pathname` comparison | SvelteKit built-in |
| IE detection + SVG gradient fallback | **Drop entirely** | No IE support needed |
| YouTube `wmode` iframe fix | **Drop entirely** | YouTube no longer requires this |
| Button hover class toggle | CSS `:hover` / Tailwind `hover:` | No JS needed |

### Critical files:
- `src/lib/components/Carousel.svelte`
- `src/lib/components/Lightbox.svelte`
- `src/lib/components/MobileNav.svelte`

---

## Phase 5: Testing & Deployment

### Tasks:
1. **Build test:** `npm run build` — verify `adapter-static` outputs to `build/` with no broken links.
2. **Routing test:** Verify all 24 Royal Hecht Award year pages render correctly from JSON data.
3. **Responsive test:** Test mobile nav, lightbox, and carousel at `sm`, `md`, `lg` breakpoints.
4. **PDF assets:** Confirm `Documents/Wags/` PDFs are accessible from `static/`.
5. **GitHub Actions:** Add `.github/workflows/deploy.yml` using `actions/deploy-pages` to build and publish `build/` on push to `main`.
6. **Custom domain:** Confirm `static/CNAME` contains `gsdcstl.org` and DNS points to GitHub Pages.

### Verification:
- Run `npm run preview` and navigate every page listed in Phase 2's classification table.
- Browser devtools: no console errors, no 404 asset loads, no jQuery references in the network tab.

---

## Architectural Trade-offs

| Aspect | Decision | Rationale |
|---|---|---|
| **IE support** | Dropped entirely | Eliminates `style.ie7.css`, browser detection, SVG gradient fallback — significant simplification |
| **GitHub Pages base path** | None (root `/`) | Custom domain `gsdcstl.org` means no `/repo-name/` prefix; just add `static/CNAME` |
| **Gallery pages** | Static `+page.svelte` per gallery | Content is small and stable; dynamic routing adds complexity without benefit |
| **`script.responsive.js`** | Deleted, not refactored | 100% replaced by Tailwind breakpoints — no JS needed for responsive behavior |
| **Lightbox replacement** | Custom `Lightbox.svelte` with `<dialog>` | Avoids external dependency; browser-native `<dialog>` handles focus trap and accessibility |
| **Carousel replacement** | Embla Carousel | Specific, battle-tested library; supports autoplay and is framework-agnostic |
| **PDF/document archive** | Static assets only | 60 PDFs copied to `static/Documents/` — no HTML migration needed |
| **Content handling** | JSON data files + dynamic routes (Royal Hecht only) | Eliminates 24-file proliferation for awards; all other content is simple enough for static pages |
