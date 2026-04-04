# Design System: Heart's Creation

## 1. Visual Theme & Atmosphere
An intimate, gallery-airy art studio interface with restrained asymmetric layouts and fluid spring-physics motion. The atmosphere is warm yet sophisticated — like walking through a private collection in a sunlit loft with exposed brick and linen curtains. Density: 3 (Gallery Airy). Variance: 6 (Offset Asymmetric). Motion: 6 (Fluid CSS).

## 2. Color Palette & Roles
- **Warm Cream** (#FAF6F1) — Primary background surface, the gallery wall
- **Deep Charcoal** (#2A2A2A) — Primary text, headings, navigation
- **Wine Accent** (#8B2E4A) — Single accent for CTAs, active states, hover indicators, links
- **Wine Light** (#C17C8A) — Soft highlight, selection background, decorative borders
- **Wine Dark** (#5C1A2E) — Deep emphasis, footer accents
- **Earth Warm** (#A07850) — Secondary warmth, metadata, subtle tags
- **Earth Light** (#D4B896) — Tertiary warmth, card borders, divider lines
- **Muted Charcoal** (rgba(42,42,42,0.4)) — Secondary text, descriptions, timestamps
- **Whisper Border** (rgba(42,42,42,0.05)) — Structural lines, section dividers

**Banned:** Pure black (#000000), neon/purple glows, oversaturated gradients.

## 3. Typography Rules
- **Display/Headlines:** Cormorant Garamond — Elegant serif with italic emphasis for artistic quotes. Track-tight, weight-driven hierarchy through light (300) and semi-bold (600).
- **Body/UI:** DM Sans — Clean geometric sans-serif. Relaxed leading (1.7), 65ch max-width. Font-light (300) for body, regular (400) for UI labels.
- **Accent Text:** Uppercase tracking-[0.2em] DM Sans at 10-12px for section labels, navigation, and metadata tags.
- **Banned:** Inter, system-ui defaults, Times New Roman, Georgia.

## 4. Component Stylings
* **Buttons:** Flat, no outer glow. Border-only default state (1px charcoal/20). Fill on hover (charcoal bg, cream text). Uppercase tracking-widest. Transition duration 500ms.
* **Cards:** Minimal — no heavy shadows. Use subtle border (charcoal/5) with generous padding. Hover: scale-105 with 1000ms transition for artwork images.
* **Navigation:** Fixed top, cream/80 backdrop-blur-md. Logo left, links right. Active state: wine color with spring-animated underline.
* **Search Bar:** Floating, centered, white/40 backdrop-blur-xl. Rounded-full with ghost border.
* **Sections:** Section labels as uppercase tracking-[0.3em] text at 10px in charcoal/40.

## 5. Layout Principles
- Grid-first responsive architecture with 12-column grid on desktop
- Asymmetric splits for Hero (content centered over video background)
- Strict single-column collapse below 768px
- Max-width containment at 1400px (7xl)
- Generous horizontal padding: px-6 (mobile) → px-12 (tablet) → px-24 (desktop)
- Section spacing: py-24 to py-32 for breathing room

## 6. Motion & Interaction
- Framer Motion for all page transitions and micro-interactions
- Spring physics: stiffness 380, damping 30 for navigation underlines
- Staggered cascade reveals for artwork grids (delay: idx * 0.1)
- Fade-in-up pattern: initial y:20, opacity:0 → animate y:0, opacity:1
- Background video at opacity-15 with mix-blend-multiply
- Collapsable sections with AnimatePresence for smooth expand/collapse

## 7. Hero Section
- Full viewport height (h-screen)
- Background: Elephant video (Babyelephantvid.mp4) at 15% opacity with mix-blend-multiply
- Foreground: Centered SVG logo + tagline in italic serif + single CTA button
- Scroll indicator: Animated line at bottom center

## 8. Design System Notes for Stitch Generation

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first with mobile responsive
- Palette: Warm Cream (#FAF6F1) background, Deep Charcoal (#2A2A2A) text, Wine (#8B2E4A) single accent
- Typography: Cormorant Garamond for display/headlines (italic, light weight), DM Sans for body/UI (light, geometric)
- Styles: Minimal roundness (sharp edges for artwork frames, rounded-full for search), no heavy shadows, whisper borders (1px charcoal/5)
- Atmosphere: Intimate art gallery, warm linen tones, sophisticated restraint, slow graceful motion
- Motion: Framer Motion spring physics, staggered grid reveals, 500ms+ transitions
- Identity: Artist Arunima Jain's private studio — themes of silence, texture, and emotional depth

## 9. Anti-Patterns (Banned)
- No emojis in UI
- No Inter font
- No pure black (#000000)
- No neon/outer glow shadows
- No oversaturated accents
- No 3-column equal card layouts
- No generic placeholder names
- No AI copywriting clichés ("Elevate", "Seamless", "Next-Gen")
- No "Scroll to explore" filler text (use the existing scroll indicator pattern instead)
- No broken Unsplash links
- No circular loading spinners (use line/shimmer patterns)
