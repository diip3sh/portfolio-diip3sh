 # Portfolio Workspace Overview

 **What this portfolio does:**
 It showcases the current Next.js App Router site built with Tailwind, Shadcn UI, and rich reusable components that highlight craft, work, and contact data across `app/`, `components/`, and `lib/data`.

 **Why it exists:**
 Serves as both a real-world case study and a living resume that demonstrates modern React/Next.js patterns, accessibility-first animations, and responsive UI composability. It helps onboard new collaborators by providing a consistent, documented baseline for contribution.

 ## Key Concepts & Terminology

 - **App Router entry points** (`app/page.tsx`, `app/work/page.tsx`, etc.): define route-level data composition with a shared `layout` and global styles.
 - **Data modules** (`lib/data/*.ts`): export typed records for hero content, craft highlights, vault details, and work experiences so pages stay declarative.
 - **Reusable UI primitives** (`components/ui/*`): Tailwind-powered building blocks (text, video, buttons, accordion) that respect accessibility, motion, and responsiveness.
 - **Container + Layout helpers** (`components/container.tsx`, `components/navbar.tsx`, `components/footer.tsx`): share spacing, navigation, and footer patterns across the site.

 ## Project Structure & Conventions

 - `app/` – App Router routes, nested layouts, and metadata. Every page is a functional component using hooks where needed, with strict null checks and defined props/interfaces.
 - `components/` – Presentational pieces arranged by responsibility (navigation, footers, experiences, UI primitives). Compose with `<Link>`/`<button>` to preserve native semantics.
 - `lib/` – Typed data definitions plus utilities (e.g., `lib/utils.ts`) consumed by pages and components. Prefer `interface` declarations and share them across modules.
 - `public/` – Static assets (icons, logos, GIFs) referenced via `next/image` or inline SVG components under `lib/svg/`.
 - `globals.css` – Tailwind base styles, animation easing definitions, and reduced-motion fallbacks.
 - `next.config.ts` & `tsconfig.json` – Configure App Router, strict TypeScript, and Tailwind integration.

 **Conventions**
 - Tailwind classes only; no inline styles (use `className` helpers).
 - Favor `const handleX = () =>` event handlers, with descriptive names.
 - Accessibility focus: `aria-label`s, `tabIndex`, polite `aria-live`, `prefers-reduced-motion` handling.
 - Animations use transform/opacity, `ease-out` easing, `will-change` hints, and are under 1s.
 - Follow Shadcn UI guidelines; install any missing dependencies via pnpm.
 - Always run `pnpm install` (lockfile is `bun.lock` but pnpm is preferred).

 ## API Documentation & Usage

 ### Data Modules

 ```ts
 // lib/data/about.ts
 export interface AboutBlock {
   title: string;
   description: string;
   cta?: { label: string; href: string };
 }
 ```
 Each data file exports typed arrays/objects consumed by pages:
 - `home.ts`: hero, stat cards, skill badges, CTA copy.
 - `craft.ts`: craft principles, projects, timeline data.
 - `vault.ts`: curated resources or writing highlight entries.
 - `work.ts`: career history entries referenced by `components/work-experience.tsx`.

 #### Example Usage
 ```tsx
 import { homeData } from "@/lib/data/home";
 import WorkExperience from "@/components/work-experience";

 const HeroSection = () => {
   return (
     <section>
       <h1>{homeData.hero.title}</h1>
       <p>{homeData.hero.subtitle}</p>
       <WorkExperience items={homeData.workHistory} />
     </section>
   );
 };
 ```
 Provide proper `key` props and fallback content when mapping arrays.

 ### Reusable Components

 - `components/container.tsx`: wraps content with consistent padding + width caps.
 - `components/navbar.tsx`: responsive nav, `Link` usage, hover states, `aria-hidden` icons.
 - `components/infinite-scroll-container.tsx`: virtualization-ready wrapper (add `Virtua` if necessary).
 - `components/work-experience.tsx`: displays employment history; accepts `items` prop typed from `lib/data/work.ts`.
 - `components/page-footer.tsx` and `components/footer.tsx`: include CTA, social links, and accessibility cues (aria labels, focus rings).

 **Props & Behavior**
 - Always type props with `interface`.
 - Components handle keyboard events, e.g., `handleKeyDown` for space/enter.
 - Use `React.memo`/`useCallback` where repeated renders would be costly.

 ## Implementation Details

 - **Layout**: `app/layout.tsx` defines metadata, fonts, and global context providers. It imports `globals.css` (Tailwind + animation utilities) and wraps pages with `<body className="bg-slate-950 text-slate-100">`.
 - **Pages**: Each route is a functional component that composes data and UI primitives. Navigation flows leverage `next/link` for link semantics and `prefetch`.
 - **Animations**: Use CSS transitions with `ease-out-quad`/`ease-out-cubic` as defined in shared rules. For complex motion, prefer Framer Motion springs with `transform` props and reduced motion fallbacks.
 - **Accessibility**: Inputs/buttons include focus indicators and `aria-label`. Layout roots call `prefers-reduced-motion` media query to disable `transform`.
 - **Performance**: Lazy-load heavy sections, preload above-the-fold images via `<Image priority>`, and virtualize long lists. Avoid animating layout properties.

 ## Onboarding New Developer

 1. **Environment Setup**
    - Install [bun](https://bun.sh/) and [pnpm](https://pnpm.io/) (pnpm runs scripts despite Bun’s lockfile).
    - Run `pnpm install` from the repo root to generate `node_modules`.
    - Create `.env.local` if integrating secrets; copy from `.env.example` (if available).
    - Configure your editor for TypeScript + Tailwind support (format on save, tailwind CSS IntelliSense, linting).

 2. **Local Workflow**
    - Start dev server: `pnpm dev`.
    - Format: `pnpm format` (hooks run biome/other tools as configured).
    - Lint: `pnpm lint`.
    - Build: `pnpm build`.
    - Preview production: `pnpm preview`.
    - Run unit/integration tests if applicable (add `pnpm test` once defined).

 3. **Git & Contribution**
    - Base branches from main; name feature branches like `feat/hero-section`.
    - Run `pnpm lint` + `pnpm format` before commits.
    - Stage relevant files and use `git commit -m` with context (why change).
    - Push to remote, open PR with summary, testing steps, and any blockers.

 4. **Onboarding Checklist**
    - [x] Development environment ready (bun + pnpm)
    - [x] Application runs locally via `pnpm dev`
    - [x] Linting + formatting enforced by scripts
    - [ ] First PR submitted (create your branch, commit, and open a PR)

 ## Best Practices & Common Pitfalls

 - **Motion & Animation**
   - Stick to `transform`/`opacity` only; avoid `top/left`. Use `will-change` sparingly and disable via `prefers-reduced-motion`.
   - Apply `ease-out` curves for entry animations; keep duration ≤ 0.3s.

 - **Accessibility**
   - Ensure hit targets ≥24px (≥44px on mobile) even if visual size is smaller—add padding via Tailwind.
   - Provide `aria-label`s for icon-only buttons and use `aria-live` for dynamic updates.
   - Manage focus when opening dialogs or panels; trap focus when needed.

 - **Styling & Layout**
   - Do not sprinkle inline styles; Tailwind classes only, composable via `className` helpers.
   - Follow Shadcn component guidelines; install missing ones and customize rather than invent barebones versions.
   - Use `scroll-margin-top` on anchor-linked headings and include “Skip to content”.

 - **Content & Interaction**
   - Use ellipsis `…` for states that lead to follow-up actions or loading.
   - Provide redundant cues beyond color for statuses and ensure tables/labels have accessible names.

 - **Performance**
   - Lazy-load content below the fold and set explicit width/height on images to avoid CLS.
   - Keep HTTP mutations <500ms and batch layout reads/writes.
   - Track renders via React DevTools; memoize heavy sections.

 - **Common Pitfalls**
   - Forgetting to wrap links/buttons in `Link` or `button`, breaking middle-click/keyboard behavior.
   - Animating layout properties or dragging with CSS variables (forbidden).
   - Missing `prefers-reduced-motion` variant for transforms.
   - Not trimming inputs before submission or disallowing paste (both MUST be supported).

 ## Next Steps for New Developers

 - Explore each route in `app/` to map how data flows from `lib/data/*`.
 - Review `components/ui` for reusable patterns before adding new UI.
 - When adding new animations, document easing/duration and test `prefers-reduced-motion`.
 - Keep communication open—flag blockers early and document decisions in PR descriptions.
