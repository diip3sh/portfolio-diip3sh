# AGENTS.md: AI Collaboration Guide

This document provides essential context for AI models interacting with this project. Adhering to these guidelines will ensure consistency and maintain code quality.

## 1. Project Overview & Purpose

- **Primary Goal:** This is a personal portfolio/blogfolio website for Braydon Coyer, a senior front-end developer. The site showcases work, blog posts, speaking engagements, tools, and serves as a playground for experimenting with new ideas and technologies.
- **Business Domain:** Personal branding, content creation, and web development showcase. The site demonstrates modern React/Next.js patterns and serves as both a portfolio and technical blog.

## 2. Core Technologies & Stack

- **Languages:** TypeScript (5.x), JavaScript (ES2018+), HTML, CSS
- **Frameworks & Runtimes:** Next.js 15.1.2 (App Router), React 18, Node.js
- **Databases:** Supabase (PostgreSQL) for dynamic data, static data files for tools/hardware
- **Key Libraries/Dependencies:**
  - **UI/Styling:** TailwindCSS 3.4.7, Framer Motion 11.3.19, @headlessui/react 2.1.8, Geist fonts
  - **Content:** Velite 0.1.1 (MDX processing), next-mdx-remote 4.4.1, rehype-raw 7.0.0
  - **Data Fetching:** SWR 2.2.5, @supabase/ssr 0.5.2, @supabase/supabase-js 2.49.1
  - **Utilities:** clsx 2.1.1, tailwind-merge 2.5.4, usehooks-ts 3.1.0, uuid 11.1.0
- **Platforms:** Web (responsive design for desktop, tablet, mobile)
- **Package Manager:** npm (with package-lock.json)

## 3. Architectural Patterns

- **Overall Architecture:** Modern React application using Next.js App Router with a bento-style grid layout. The architecture follows a component-based design with server-side rendering and static generation capabilities.
- **Directory Structure Philosophy:**
  - `/app`: Next.js App Router directory containing all pages, components, and API routes
  - `/app/components`: Reusable UI components following a bento card design system
  - `/app/data`: Static data files and site metadata
  - `/app/db`: Database operations, server actions, and data fetching logic
  - `/app/lib`: Utility functions, custom hooks, and helper modules
  - `/content`: MDX content files processed by Velite
  - `/public`: Static assets including images, icons, and other media files
- **Module Organization:** Components are organized by functionality with clear separation of concerns. Each component is self-contained with its own styling and logic.

## 4. Coding Conventions & Style Guide

- **Formatting:** Uses Prettier with TailwindCSS plugin for consistent code formatting. Follows Next.js and React best practices with 2-space indentation.
- **Naming Conventions:**
  - Components: PascalCase (`BentoCard`, `AnimatedText`)
  - Files: PascalCase for components (`BentoCard.tsx`), camelCase for utilities (`utils.ts`)
  - Variables and functions: camelCase (`formatDate`, `getCurrentlyPlaying`)
  - Constants: SCREAMING_SNAKE_CASE (`VALID_REACTIONS`)
  - CSS classes: kebab-case with Tailwind utilities
- **API Design:**
  - **Style:** Primarily functional with React hooks and server actions. Uses composition over inheritance.
  - **Abstraction:** Components are designed to be reusable with clear prop interfaces. Server actions handle data mutations.
  - **Extensibility:** Components accept className props for customization and use compound component patterns where appropriate.
  - **Trade-offs:** Prioritizes developer ergonomics and maintainability while maintaining good performance through Next.js optimizations.
- **Common Patterns & Idioms:**
  - **Component Composition:** Heavy use of compound components and children props for flexibility
  - **Server Actions:** Uses Next.js server actions for data mutations with proper error handling
  - **Type Safety:** TypeScript with strict null checks enabled, proper typing for all props and data
  - **Animation:** Framer Motion for smooth animations with staggered delays
  - **State Management:** Uses React hooks, SWR for server state, and cookies for client state
- **Error Handling:** Uses try-catch blocks in server actions, proper error boundaries, and graceful fallbacks for external API calls.

## 5. Key Files & Entrypoints

- **Main Entrypoint:** `app/layout.tsx` (root layout), `app/page.tsx` (homepage)
- **Configuration:**
  - `next.config.mjs` - Next.js configuration with redirects and Velite integration
  - `tailwind.config.ts` - TailwindCSS configuration with custom colors and typography
  - `velite.config.ts` - Content processing configuration for MDX files
  - `tsconfig.json` - TypeScript configuration with path mapping
- **CI/CD Pipeline:** No GitHub Actions workflows detected in the current codebase

## 6. Development & Testing Workflow

- **Local Development Environment:**
  - **Prerequisites:** Node.js, npm
  - **Setting up the project:**
    1. Clone the repository
    2. Run `npm install` to install dependencies
    3. Set up environment variables for Supabase and external APIs
    4. Run `npm run dev` to start the development server
- **Task Configuration:**
  - **npm Scripts:**
    - `npm run dev` - Start development server
    - `npm run build` - Build for production
    - `npm run start` - Start production server
    - `npm run lint` - Run ESLint
- **Testing:** No formal testing framework detected. Consider adding Jest/React Testing Library for unit tests and Playwright for E2E tests.
- **CI/CD Process:** No automated CI/CD pipeline detected. Manual deployment process likely used.

## 7. Specific Instructions for AI Collaboration

- **Contribution Guidelines:**
  - Follow existing code style and patterns
  - Use TypeScript for all new code
  - Maintain the bento card design system consistency
  - Ensure responsive design for all new components
  - Use server actions for data mutations
  - Follow the established component composition patterns
- **Security:**
  - Never hardcode API keys or secrets
  - Use environment variables for sensitive configuration
  - Validate all user inputs in server actions
  - Use proper CORS and authentication for external API calls
- **Dependencies:**
  - When adding new dependencies, use `npm install <package>`
  - Update package-lock.json by running `npm install`
  - Consider bundle size impact when adding new libraries
  - Prefer lightweight, well-maintained packages
- **Commit Messages:**
  - Use descriptive commit messages
  - Follow conventional commit format when possible (feat:, fix:, docs:, etc.)
  - Include context about what was changed and why

## 8. Project-Specific Patterns

- **Bento Grid System:** The site uses a bento-style grid layout with `GridWrapper` and `BentoCard` components. New components should follow this pattern for consistency.
- **Animation System:** Uses Framer Motion with staggered delays. Animation delays are calculated relative to each other (e.g., `HEADING_DELAY = PROFILE_DELAY + 0.2`).
- **Content Management:** MDX files are processed by Velite and stored in the `.velite` directory. Content is type-safe and follows defined schemas.
- **Data Flow:** Server actions handle data mutations, SWR manages client-side data fetching, and cookies store user preferences.
- **Styling Approach:** TailwindCSS with custom color palette and typography. Uses CSS variables for theming and custom utility classes for specific design patterns.

## 9. Performance Considerations

- **Image Optimization:** Use Next.js Image component for all images
- **Bundle Size:** Be mindful of import sizes, use dynamic imports for heavy components
- **Caching:** Leverage Next.js caching strategies and SWR for data caching
- **SEO:** Proper meta tags, structured data, and semantic HTML are important for this portfolio site

## 10. Areas for Improvement

- **Testing:** Add comprehensive test coverage with Jest and React Testing Library
- **Accessibility:** Enhance ARIA labels and keyboard navigation
- **Performance Monitoring:** Add error tracking and performance monitoring
- **Documentation:** Add JSDoc comments and component documentation
- **CI/CD:** Implement automated testing and deployment pipeline

---

**Note:** This is a Next.js/React project, not a Nim project as initially requested. The analysis has been adapted to reflect the actual technology stack and patterns used in this codebase.
