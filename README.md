# [diip3sh.netlify.app](https://diip3sh.netlify.app) &middot; [![GitHub License](https://img.shields.io/github/license/diip3sh/portfolio-2025?label=License)](https://github.com/diip3sh/portfolio-2025/blob/main/LICENSE)

A modern, pixel-perfect portfolio showcasing design engineering work, featuring clean animations, accessibility-first design, and performance-optimized components.

→ Check out the live site: [diip3sh.netlify.app](https://diip3sh.netlify.app)

## Overview

### Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion (Framer Motion)

### Featured

- **Clean & Modern Design**: Minimalist aesthetic with custom dithering backgrounds and corner shapes
- **Accessibility-First**: Full keyboard navigation, focus management, screen reader support, and reduced motion preferences
- **Performance Optimized**: Hardware-accelerated animations, lazy loading, and optimized images
- **Responsive & Mobile-First**: Seamless experience across all devices with touch-friendly interactions
- **Type-Safe Architecture**: Strict TypeScript with comprehensive interfaces and type guards
- **SEO Optimized**: Rich metadata, Open Graph images, and structured data for better discoverability
- **Component Registry**: Reusable UI primitives built with shadcn/ui patterns
- **Animation System**: Custom easing curves, transform-based animations, and motion preferences

### Portfolio Sections

- **Home**: Hero section with work experience, skills overview, and recent features
- **Work**: Detailed showcase of professional projects and contributions
- **Craft**: Design principles, development philosophy, and creative process

### Component Architecture

A comprehensive component library featuring:

- **UI Primitives**: Text components, buttons, accordions, and image showcases
- **Layout Components**: Container, navbar, footer with responsive navigation
- **Specialized Components**: Work experience cards, infinite scroll containers, and animated elements
- **Data-Driven**: Typed data modules for content management and easy updates

## Development

### Environment Setup

1. **Prerequisites**
   - [bun](https://bun.sh/) and [pnpm](https://pnpm.io/) (pnpm preferred for scripts despite Bun's lockfile)
   - Node.js 18+

2. **Installation**
   ```bash
   pnpm install
   ```

3. **Development**
   ```bash
   pnpm dev          # Start development server
   pnpm build        # Build for production
   pnpm start        # Start production server
   pnpm lint         # Run linting
   pnpm format       # Format code with Biome
   ```

### Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── work/page.tsx     # Work showcase
│   └── craft/page.tsx    # Craft & philosophy
├── components/            # React components
│   ├── ui/               # Reusable UI primitives
│   ├── container.tsx     # Layout container
│   ├── navbar.tsx        # Navigation component
│   └── work-*.tsx        # Work-related components
├── lib/
│   ├── data/             # Typed content data
│   ├── svg/              # Inline SVG components
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

### Key Concepts

- **Data Modules**: Typed TypeScript interfaces for content management
- **Component Composition**: Modular, reusable components following shadcn/ui patterns
- **Animation System**: CSS-based animations with custom easing and motion preferences
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized images, lazy loading, and hardware-accelerated animations

### API Documentation

#### Data Modules

```ts
// lib/data/home.ts
export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface StackItem {
  label: string;
  logo: string;
}
```

#### Component Usage

```tsx
import { Container } from "@/components/container";
import { WorkExperience } from "@/components/work-experience";
import { homeData } from "@/lib/data/home";

export default function HomePage() {
  return (
    <Container
      gridOne={<HeroSection />}
      gridTwo={
        <WorkExperience items={homeData.workExperience} />
      }
    />
  );
}
```

## Best Practices

### Animation & Motion
- Use `transform` and `opacity` for hardware acceleration
- Custom easing curves: `ease-out-quad`, `ease-out-cubic`
- Respect `prefers-reduced-motion` media queries
- Keep animations under 300ms

### Accessibility
- Minimum 24px touch targets (44px on mobile)
- Full keyboard navigation support
- Screen reader friendly with proper ARIA labels
- Focus management and visible focus indicators

### Performance
- Lazy load images with explicit dimensions
- Virtualize long lists when needed
- Batch DOM reads/writes
- Optimize re-renders with React.memo

### Code Quality
- Strict TypeScript with no `any` types
- Descriptive component and function names
- Event handlers prefixed with `handle`
- Tailwind classes only (no inline styles)

## License

Licensed under the [MIT license](./LICENSE).

You're free to use my code! Just make sure to <ins>remove all my personal information</ins> before publishing your website. It's awesome to see my code being useful to someone!

## Acknowledgments

- [React](https://react.dev)
- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Motion](https://motion.dev)
- [Radix UI](https://www.radix-ui.com)
- [Base UI](https://base-ui.com)
- [HugeIcons](https://hugeicons.com)
- [Paper Design Shaders](https://paper.design)
- And many other open-source libraries used in `package.json`
