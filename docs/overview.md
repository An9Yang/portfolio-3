# Project Overview

## Structure

### Pages
- `src/pages/home.tsx`: Main landing page with hero section and navigation header

### Components
- `src/components/layout/header.tsx`: Top navigation bar with Mitchy logo, centered menu items (Home, Work, About, Service, Blog, Contact), and right-aligned Pages dropdown + Book a Call CTA button
- `src/components/layout/hero.tsx`: Hero section featuring large "GROWTH HACKING" headline with orange accent, left-aligned description text, and BOOK A CALL link

### Styles
- `src/styles/globals.css`: Global styles with custom beige/orange color scheme (--background: 40 20% 90%, --primary: 15 100% 55%)
- `tailwind.config.ts`: Tailwind configuration with extended color palette

### Design System
- **Background**: Warm beige (hsl(40, 20%, 90%))
- **Text**: Pure black (hsl(0, 0%, 0%))
- **Accent/Primary**: Vibrant orange (hsl(15, 100%, 55%))
- **Border Radius**: 2rem for pill-shaped buttons
- **Typography**: Bold, modern sans-serif with large clamp-based responsive sizing for headlines
