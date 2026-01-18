# AI Agent Guidelines for Portfolio Website

This guide provides essential information for AI agents working with the portfolio codebase - a Next.js dev portfolio website featuring work showcase, experience, and interactive components.

## Project Overview

Modern Next.js portfolio website with:

- Interactive work showcase with shuffling animations
- Work experience timeline
- Craft/design section
- Custom UI components with animations
- Responsive design with dark/light mode support

### Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Package Manager**: Bun
- **Language**: TypeScript
- **Animations**: CSS animations with performance optimizations
- **Deployment**: Vercel

## Project Structure

### Key Directories

- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Homepage
  - `work/page.tsx` - Work showcase page
  - `craft/page.tsx` - Craft/design page
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles
- `components/` - Shared UI components
  - `ui/` - Reusable UI components (buttons, text, etc.)
  - `work-card-shuffle.tsx` - Interactive work card component
  - `work-experience.tsx` - Experience timeline component
  - `navbar.tsx` - Navigation component
  - `footer.tsx` - Footer component
- `lib/` - Utility libraries and data
  - `data/` - Static data files (work, about, home content)
  - `utils.ts` - Utility functions
  - `svg/` - Custom SVG icon components
- `public/` - Static assets (images, icons, etc.)

### Important Files

- `app/layout.tsx` - Root layout with metadata and fonts
- `app/page.tsx` - Homepage component
- `lib/data/home.ts` - Homepage content and configuration
- `lib/data/work.ts` - Work showcase data
- `lib/data/about.ts` - About section data
- `components/work-card-shuffle.tsx` - Main interactive component
- `components/work-experience.tsx` - Experience timeline
- `tailwind.config.ts` - Tailwind configuration
- `next.config.ts` - Next.js configuration

## Component Architecture

### Core Components

**Work Card Shuffle** (`components/work-card-shuffle.tsx`):
- Interactive card shuffling animation
- Image gallery with smooth transitions
- Responsive grid layout
- Performance-optimized animations

**Work Experience** (`components/work-experience.tsx`):
- Timeline-based experience display
- Smooth scrolling animations
- Responsive design
- Accessibility-compliant

**UI Components** (`components/ui/`):
- Reusable button, text, and layout components
- Consistent styling patterns
- Accessibility features

### Animation System

The project uses optimized CSS animations following these principles:

- **Fast animations**: 0.2s-0.3s duration maximum
- **Ease-out easing**: For natural motion
- **Hardware acceleration**: Transform and opacity properties
- **Reduced motion**: Respects `prefers-reduced-motion`

## Development Guidelines

### Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev  # Runs on default Next.js port (3000)

# Build for production
bun run build

# Preview production build
bun run start
```

### Code Standards

- **TypeScript**: Strict mode with proper typing
- **ESLint**: Biome configuration
- **File naming**: kebab-case for components and files
- **Component naming**: PascalCase for React components

### Coding Guidelines

When writing code for this project, follow these principles:

- Write type-safe TypeScript code with explicit types
- Use descriptive variable and function names
- Prefer functional components with hooks
- Implement accessibility features (ARIA labels, keyboard navigation)
- Use Tailwind CSS classes for styling
- Follow React best practices (keys, memoization when needed)
- Keep components small and focused
- Use early returns for cleaner code

### Component Development

1. Create component in `components/` directory
2. Use TypeScript with proper prop types
3. Implement accessibility features
4. Add responsive design with Tailwind
5. Include proper error handling
6. Test component in different screen sizes

## Working with Content

### Portfolio Data Structure

**Data Files** (`lib/data/`):

- `home.ts` - Homepage hero section, featured work, stats
- `work.ts` - Work showcase items with images, descriptions, links
- `about.ts` - Personal information, skills, contact details
- `craft.ts` - Craft/design projects data

### Content Management

- All content is managed through TypeScript data files
- Images are stored in `public/` directory
- SVG icons are React components in `lib/svg/`
- Content supports internationalization-ready structure

### Adding New Work

1. Add work data to `lib/data/work.ts`
2. Place images in `public/work/` directory
3. Update component to handle new data structure
4. Test responsive layout and animations

## Animation Guidelines

### Keep your animations fast

- Default to use `ease-out` for most animations
- Animations should never be longer than 1s (unless illustrative), most should be 0.2s-0.3s

### Easing rules

Use these custom easing functions for specific use cases:

- **`ease-out`**: (Starts fast, slows down) Best for elements entering screen
  - `ease-out-quad`: `cubic-bezier(.25, .46, .45, .94)`
  - `ease-out-cubic`: `cubic-bezier(.215, .61, .355, 1)`
  - `ease-out-quart`: `cubic-bezier(.165, .84, .44, 1)`

### Performance Optimization

- Use `transform` and `opacity` for animations
- Avoid animating layout properties (`top`, `left`, `width`, `height`)
- Respect `prefers-reduced-motion` media query
- Use `will-change` sparingly for performance-critical animations

## Environment & Configuration

### Environment Variables

The project uses minimal environment configuration:

- Standard Next.js environment variables
- No external API dependencies for core functionality
- Vercel deployment configuration

### Build Configuration

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `biome.json` - Code formatting and linting
- `postcss.config.mjs` - PostCSS configuration

## Common Tasks

### Adding a New Work Item

1. Update `lib/data/work.ts` with new work data
2. Add corresponding images to `public/work/` directory
3. Update `components/work-card-shuffle.tsx` if needed
4. Test animations and responsive layout

### Updating Personal Information

1. Edit `lib/data/about.ts` for personal details
2. Update `lib/data/home.ts` for homepage content
3. Modify components to display new information
4. Test all pages for consistency

### Adding New Components

1. Create component file in `components/` or `components/ui/`
2. Implement with TypeScript and proper props
3. Add accessibility features
4. Use Tailwind classes for styling
5. Import and use in appropriate pages

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow existing color scheme and spacing
- Implement responsive design (mobile-first)
- Support both light and dark modes
- Use CSS custom properties for theme colors

## Important Notes

### Performance Considerations

- Components are optimized for fast loading
- Images use Next.js Image component for optimization
- Animations use CSS transforms for hardware acceleration
- Bundle size is kept minimal

### Accessibility Features

- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Reduced motion preferences respected

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

### Personal Information

When adapting this codebase, update ALL personal information:

- `lib/data/about.ts` - Personal details and bio
- `lib/data/home.ts` - Homepage content and branding
- `lib/data/work.ts` - Work experience and projects
- `public/` - Replace logo and images
- Social media links in components

## Build Commands

```bash
bun install          # Install dependencies
bun dev              # Start development server
bun run build        # Production build
bun run start        # Start production server
bun run lint         # Run linting
```

## Animations Guidelines

### Keep your animations fast

- Default to use `ease-out` for most animations.
- Animations should never be longer than 1s (unless illustrative), most of them should be around 0.2s to 0.3s.

### Easing rules

Don't use built-in CSS easings unless it's `ease` or `linear`.
Use the following easings for their described use case:
  - **`ease-in`**: (Starts slow, speeds up) Should generally be avoided as it makes the UI feel slow.
    - `ease-in-quad`: `cubic-bezier(.55, .085, .68, .53)`
    - `ease-in-cubic`: `cubic-bezier(.550, .055, .675, .19)`
    - `ease-in-quart`: `cubic-bezier(.895, .03, .685, .22)`
    - `ease-in-quint`: `cubic-bezier(.755, .05, .855, .06)`
    - `ease-in-expo`: `cubic-bezier(.95, .05, .795, .035)`
    - `ease-in-circ`: `cubic-bezier(.6, .04, .98, .335)`

  - **`ease-out`**: (Starts fast, slows down) Best for elements entering the screen or user-initiated interactions.
    - `ease-out-quad`: `cubic-bezier(.25, .46, .45, .94)`
    - `ease-out-cubic`: `cubic-bezier(.215, .61, .355, 1)`
    - `ease-out-quart`: `cubic-bezier(.165, .84, .44, 1)`
    - `ease-out-quint`: `cubic-bezier(.23, 1, .32, 1)`
    - `ease-out-expo`: `cubic-bezier(.19, 1, .22, 1)`
    - `ease-out-circ`: `cubic-bezier(.075, .82, .165, 1)`

  - **`ease-in-out`**: (Smooth acceleration and deceleration) Perfect for elements moving within the screen.
    - `ease-in-out-quad`: `cubic-bezier(.455, .03, .515, .955)`
    - `ease-in-out-cubic`: `cubic-bezier(.645, .045, .355, 1)`
    - `ease-in-out-quart`: `cubic-bezier(.77, 0, .175, 1)`
    - `ease-in-out-quint`: `cubic-bezier(.86, 0, .07, 1)`
    - `ease-in-out-expo`: `cubic-bezier(1, 0, 0, 1)`
    - `ease-in-out-circ`: `cubic-bezier(.785, .135, .15, .86)`


## Hover transitions

- Use the built-in CSS `ease` with a duration of `200ms` for simple hover transitions like `color`, `background-color`, `opacity`.
- Fall back to easing rules for more complex hover transitions.
- Disable hover transitions on touch devices with the `@media (hover: hover) and (pointer: fine)` media query.

## Accessibility

- If `transform` is used in the animation, disable it in the `prefers-reduced-motion` media query.

## Origin-aware animations

- Elements should animate from the trigger. If you open a dropdown or a popover it should animate from the button. Change `transform-origin` according to the trigger position.

## Performance

- Stick to opacity and transforms when possible. Example: Animate using `transform` instead of `top`, `left`, etc. when trying to move an element.
- Do not animate drag gestures using CSS variables.
- Do not animate blur values higher than 20px.
- Use `will-change` to optimize your animation, but use it only for: `transform`, `opacity`, `clipPath`, `filter`.
- When using Motion/Framer Motion use `transform` instead of `x` or `y` if you need animations to be hardware accelerated.

## Spring animations

- Default to spring animations when using Framer Motion.
- Avoid using bouncy spring animations unless you are working with drag gestures.

---

# Add Documentation

## Overview

Add comprehensive documentation for the current code/feature and format it according to the project's documentation standards, including it in the appropriate location (README, docs folder, or inline comments).

## Steps

1. **Overview**
    - What this code/feature does
    - Why it exists and its purpose
    - Key concepts and terminology
2. **API Documentation**
    - Function/method signatures
    - Parameters and return values
    - Example usage with code snippets
    - Error handling and edge cases
3. **Implementation Details**
    - Architecture overview
    - Important design decisions
    - Dependencies and integrations
4. **Examples**
    - Common use cases with full examples
    - Best practices and patterns
    - Common pitfalls to avoid

## Add Documentation Checklist

- [ ] Explained what this code/feature does
- [ ] Documented why it exists and its purpose
- [ ] Defined key concepts and terminology
- [ ] Documented function/method signatures
- [ ] Documented parameters and return values
- [ ] Included example usage with code snippets
- [ ] Documented error handling and edge cases
- [ ] Provided architecture overview
- [ ] Documented important design decisions
- [ ] Included common use cases with full examples
- [ ] Documented best practices and patterns
- [ ] Documented common pitfalls to avoid
