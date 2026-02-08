# החממה | מבואות עירון

A redesigned single-page site for the educational institution **Mevoot Eron**, showcasing collaboration programs with the Ecological Greenhouse at Ein Shemer.

**Live site**: [https://shlomsh.github.io/mevot/](https://shlomsh.github.io/mevot/)

## Demo

The site features:
- Full-screen **video hero** with the greenhouse footage
- **8 educational program cards** with images, grade badges, and scroll-triggered animations
- **Parallax image breaks** between content sections
- **Photo gallery** with hover zoom effects
- RTL Hebrew layout with the Heebo font

Visit the live demo: [shlomsh.github.io/mevot](https://shlomsh.github.io/mevot/)

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Font**: Heebo (Google Fonts)
- **Layout**: RTL Hebrew

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  globals.css          — Theme colors, animations, RTL fixes
  layout.tsx           — Root layout (RTL, Hebrew, Heebo font)
  page.tsx             — Main page assembling all sections
components/
  Hero.tsx             — Video background hero section
  ProgramCard.tsx      — Program card with image, badge, fade-in
  ParallaxSection.tsx  — Parallax image break between sections
  PhotoGrid.tsx        — Photo gallery grid
  Footer.tsx           — Footer with background image
public/images/
  logo.png             — School logo
  greenhouse/          — Images from greenhouse.org.il
```

## Color Palette

From [ColorHunt](https://colorhunt.co/palette/a5c89efffbb1d8e983aeb877):

| Name   | Hex       | Role                          |
|--------|-----------|-------------------------------|
| Sage   | `#A5C89E` | Primary accent, headings      |
| Yellow | `#FFFBB1` | Page background               |
| Lime   | `#D8E983` | Secondary accent, badges      |
| Olive  | `#AEB877` | CTA / highlight accent        |
