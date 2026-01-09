This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## AGENTS.md Compliance Tasks

### Keyboard & Focus
- [ ] Add `focus-visible` ring styles to footer navigation links (`components/footer.tsx:52-63`)
- [ ] Add `focus-visible` styles to SocialButton (`components/ui/buttons.tsx:8-17`)
- [ ] Add `focus-visible` styles to HeatMapButton (`components/ui/buttons.tsx:27-43`)
- [ ] Wrap logo in proper link with focus styles (`components/navbar.tsx:10-16`)
- [ ] Ensure proper focus-visible styling on View link (`app/craft/page.tsx:60-61`)

### Accessibility
- [ ] Add `aria-label` to video element (`components/ui/video.tsx:50-71`)
- [ ] Add `aria-label` or text labels to social icons (`components/page-footer.tsx:18-23`)
- [ ] Change generic `alt="work"` to descriptive alt text (`app/page.tsx:75-84`, `app/work/page.tsx:32-41`)
- [ ] Add "Skip to content" link as first focusable element (`app/layout.tsx`)
- [ ] Add keyboard arrow key navigation to accordion (`components/ui/accordion-04.tsx`)

### Animation (prefers-reduced-motion)
- [ ] Disable or reduce Dithering effect in `prefers-reduced-motion` (`app/layout.tsx:116-125`)
- [ ] Use custom easing from AGENTS.md (`components/container.tsx:29-31`)
- [ ] Reduce 5s animation to under 1s (`components/work-experience.tsx:50-58`)
- [ ] Add reduced motion variant for `animate-line-shadow` (`components/ui/line-shadow-text.tsx:36`)
- [ ] Add reduced motion variants for accordion animations (`app/globals.css:63-64, 126-127`)

### Touch & Interactions
- [ ] Add `touch-action: manipulation` to SocialButton (`components/ui/buttons.tsx:11`)
- [ ] Add `touch-action: manipulation` to HeatMapButton (`components/ui/buttons.tsx:28`)
- [ ] Add `touch-action: manipulation` to footer links (`components/footer.tsx:52-63`)
- [ ] Add `touch-action: manipulation` to View link (`app/craft/page.tsx:60`)

### Layout & Mobile
- [ ] Add `viewport-fit=cover` to meta viewport for iOS safe areas (`app/layout.tsx`)
- [ ] Ensure minimum 44px hit target for logo on mobile (`components/navbar.tsx:7-16`)
- [ ] Ensure footer navigation links meet 44px touch target on mobile (`components/footer.tsx:47-95`)

### Content & Typography
- [ ] Replace curly quotes with straight quotes in metadata description (`app/layout.tsx:28-29`)
- [ ] Replace curly quotes with HTML entities in PageFooter (`components/page-footer.tsx`)
- [ ] Add non-breaking spaces in PageFooter (`components/page-footer.tsx`)
- [ ] Add clear next-step navigation after project lists

### Animation Easing
- [ ] Replace `easeOut` with custom easing (ease-out-cubic) (`components/container.tsx:30`)
- [ ] Review all Motion animations for proper easing per AGENTS.md

### Performance
- [ ] Consider `loading="lazy"` for videos below fold (`components/ui/video.tsx:53`)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
