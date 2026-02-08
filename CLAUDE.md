# Project: Mevoot Eron – Greenhouse Collaboration Page

## Overview
A redesigned single-page site for the educational institution "Mevoot Eron" showcasing their collaboration programs with the Ecological Greenhouse at Ein Shemer. Built with Next.js (App Router) + Tailwind CSS v4, RTL Hebrew layout.

## Tech Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 with `@theme inline` for custom colors
- **Font**: Heebo (Google Fonts, imported via CSS `@import url()`)
- **Language**: Hebrew, RTL (`dir="rtl"`, `lang="he"`)

## Key Learnings & Gotchas

### Tailwind v4 + RTL: `mx-auto` Bug
Tailwind v4 does NOT reliably generate the `mx-auto` utility in RTL mode. Containers using `max-w-*` with `mx-auto` will be flush-right instead of centered. **Fix**: Add explicit CSS rule in globals.css:
```css
.mx-auto {
  margin-inline-start: auto;
  margin-inline-end: auto;
}
```

### Tailwind v4 Theme Configuration
Tailwind v4 uses `@theme inline {}` blocks instead of `tailwind.config.js`. Custom colors are defined as CSS custom properties:
```css
@theme inline {
  --color-sage: #A5C89E;
  --color-olive: #AEB877;
}
```
These become usable as `bg-sage`, `text-olive`, etc.

### Color Palette (Current)
From https://colorhunt.co/palette/a5c89efffbb1d8e983aeb877
- `sage` (#A5C89E) — primary accent, headings, overlays
- `yellow` (#FFFBB1) — page background
- `lime` (#D8E983) — secondary accent, badges, card alternation
- `olive` (#AEB877) — CTA/highlight accent

### Wix Image Extraction
Wix gallery images are locked inside proprietary `<wix-iframe>` elements and cannot be extracted via DOM inspection, network requests, or page source scraping. If images from a Wix site are needed, find them from alternative sources or ask the user to provide them.

### Video as Remote Resource
The hero video is loaded from a remote URL (`https://greenhouse.org.il/wp-content/uploads/2023/01/vid3.mp4`) rather than downloaded locally. This avoids large binary files in the repo.

### Next.js Image Component
When using `next/image` with local files in `public/`, paths start with `/` (e.g., `/images/greenhouse/research.jpg`). The `fill` prop requires a parent with `relative` positioning and explicit dimensions.

## Project Structure
```
app/
  globals.css          — Theme, animations, mx-auto fix, scrollbar
  layout.tsx           — Root layout (RTL, Hebrew, Heebo font)
  page.tsx             — Main page assembling all sections
components/
  Hero.tsx             — Video background hero section
  ProgramCard.tsx      — Program card with image, badge, fade-in
  ParallaxSection.tsx  — Parallax image break between sections
  PhotoGrid.tsx        — 8-photo gallery grid
  Footer.tsx           — Footer with background image
public/images/
  logo.png             — School logo
  greenhouse/          — 12 images from greenhouse.org.il
```

## Design Patterns Used
- **Intersection Observer** for scroll-triggered fade-in animations on cards and gallery
- **CSS `background-attachment: fixed`** for parallax effect on section breaks
- **Alternating card accents** using `index % 2` for visual variety
- **Staggered animation delays** using `animationDelay: index * 0.08s`
- **Video background** with dark gradient overlay for hero readability

## Deployment
- **Live URL**: https://shlomsh.github.io/mevot/
- **Local dev**: `npx next dev --port 3001` (port 3000 may be occupied)
