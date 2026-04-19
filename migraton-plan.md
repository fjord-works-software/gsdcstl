# Migration Plan: Static HTML to SvelteKit + Tailwind CSS

**Goal:** Migrate a large, static HTML site (50+ pages) from Artisteer/jQuery to a modern, maintainable architecture using SvelteKit and Tailwind CSS, optimized for GitHub Pages deployment.

**Current State Challenges:**
1.  Heavy reliance on proprietary styling (Artisteer).
2.  Content is dispersed across numerous static HTML files (`gsdcstl.org/*.html`, yearly reports).
3.  Interactivity managed by jQuery scripts, which must be refactored into reactive components.

**Target State Benefits:**
1.  Component-driven architecture for scalability and reuse.
2.  Modern utility-first styling with Tailwind CSS.
3.  Simplified content management via data structures (JSON/Markdown).
4.  Efficient deployment to GitHub Pages using SvelteKit's build process.

---

## 🗺️ Phase 1: Foundation & Setup (The Scaffold)

**Objective:** Establish the core project structure and tooling.

### Key Tasks:
1.  **Project Initialization:** Create a new SvelteKit project. Configure it to use Tailwind CSS via PostCSS.
2.  **GitHub Pages Configuration:** Configure `svelte.config.js` or ensure the build process correctly handles asset paths for GitHub Pages deployment (e.g., setting the base path).
3.  **Layout Implementation:** Identify common page layouts (Header, Footer, Navigation) from the existing HTML structure and create reusable Svelte components (`+layout.svelte`). This component will serve as the structural shell for all 50+ pages.

### Critical Files/Components:
*   `src/routes/+layout.svelte`: The primary wrapper defining the site's global structure (header, navigation).
*   `tailwind.config.cjs`: Configuring Tailwind to include paths to all Svelte components.
*   `app.css` / `global.css`: Importing and setting up base styles and Tailwind directives.

---

## 📚 Phase 2: Content Structuring & Routing (Data Ingestion)

**Objective:** De-staticize the content, moving away from individual HTML files for reports and dynamic sections.

### Key Tasks:
1.  **Content Audit:** Inventory all static pages and identify data-driven vs. purely presentation-based pages.
2.  **Report Data Refactoring (Critical Step):** For yearly reports (`brags/royal-hecht-20xx.html`), extract the raw content into a structured format, such as JSON or Markdown files stored in `src/data/`.

    *Example:* Instead of 10 separate HTML pages, create one file: `/src/data/reports.json` containing an array of report objects (e.g., `{ "year": 2023, "title": "Royal Hecht", "content": "..." }`).
3.  **Dynamic Routing:** Implement SvelteKit's dynamic routing to handle reports and potentially other content sections.

### Critical Files/Components:
*   `src/data/reports.json`: The central repository for all yearly report data.
*   `src/routes/brags/[year]/+page.svelte`: A dynamically routed component that reads `reports.json`, finds the data corresponding to `[year]`, and renders it using Svelte's logic.

---

## 🎨 Phase 3: Styling & Structure Migration (Visual Fidelity)

**Objective:** Re-implement the visual design using Tailwind CSS while preserving the existing look and feel.

### Key Tasks:
1.  **Component Decomposition:** Break down complex Artisteer/HTML blocks into smaller, logical Svelte components (e.g., `ReportCard.svelte`, `NavigationMenu.svelte`, `FeatureBlock.svelte`).
2.  **Style Translation:** Systematically go through the existing HTML and CSS. Replace inline styles and Artisteer classes with equivalent Tailwind utility classes (`p-4`, `flex`, `text-xl`, etc.). This requires careful mapping of old design tokens to new ones.
3.  **Design Review Loops:** Perform frequent visual checks against the original static site to ensure 1:1 fidelity, especially for complex sections like galleries or navigation bars.

### Critical Files/Components:
*   `src/components/*`: All reusable UI components (e.g., buttons, cards, headers).
*   The primary content pages (`+page.svelte`) where the migrated Tailwind classes will be applied to display component data from Phase 2.

---

## ✨ Phase 4: Interactivity Replacement (Logic)

**Objective:** Replace all jQuery logic and JavaScript interactivity with native Svelte reactivity.

### Key Tasks:
1.  **jQuery Audit:** Analyze `script.responsive.js` and other interaction scripts to map every jQuery selector and event handler (`$(selector).on('click', function...)`) to a corresponding Svelte feature.
2.  **Reactivity Implementation:**
    *   Replace DOM manipulation with Svelte state management (using `let` variables and reactive declarations `$:`). For example, instead of manually changing an element's class on hover via jQuery, use Svelte's `:hover` attribute or reactive bindings.
    *   Complex features like sliders/carousels should either be rewritten using pure Svelte components or integrated via a lightweight, dependency-free JS library that is compatible with the Svelte component lifecycle.
3.  **Responsiveness:** Ensure all layout changes previously handled by `script.responsive.js` are managed natively within Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`).

### Critical Files/Components:
*   Interactive components (e.g., a custom `Slider.svelte`) where the jQuery logic is ported and rewritten using Svelte syntax.
*   The main page components, ensuring all data-driven elements react correctly to state changes.

---

## ✅ Phase 5: Testing & Deployment (Finalization)

**Objective:** Verify functionality and deploy the site.

### Key Tasks:
1.  **Cross-Browser/Device Testing:** Test thoroughly across various screen sizes (using Tailwind breakpoints) and browsers, paying close attention to migrated interactive components.
2.  **Performance Audit:** Verify that the performance gains from moving away from bulky jQuery scripts are realized.
3.  **Deployment Scripting:** Finalize the CI/CD pipeline for GitHub Pages, ensuring the SvelteKit build command (`npm run build`) and subsequent deployment steps are correct.

---

## Architectural Trade-offs Considered

| Aspect | Choice | Rationale / Trade-off |
| :--- | :--- | :--- |
| **Content Handling** | Centralized JSON/Markdown data files + Dynamic Routes | **Pro:** Eliminates file proliferation; simplifies updates (edit one JSON, update 50 pages). **Con:** Requires an initial effort to parse and restructure all content. |
| **Styling** | Tailwind Utility Classes | **Pro:** Faster development iteration; highly maintainable. **Con:** Initial translation from complex Artisteer CSS is labor-intensive and requires meticulous mapping. |
| **Interactivity** | Svelte Reactivity / Lightweight Libs | **Pro:** Eliminates jQuery bloat, resulting in a much smaller bundle size. **Con:** Rewriting existing logic takes significant time; highly non-trivial if the original scripts are complex. |

***

### Critical Files for Implementation
(Note: These are conceptual files required for the *new* implementation plan, as I cannot write them.)
- `src/data/reports.json`
- `src/routes/brags/[year]/+page.svelte`
- `src/components/+layout.svelte`
- `tailwind.config.cjs`