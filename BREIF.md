# Hearts Creation — Project Brief

## About
Art selling website for Arunima, an Indian artist (@hearts_creations on Instagram).
Brand: warm, spiritual, sustainable, handmade art and decor.

## Tagline
"There is art in every heart"

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom palette below)
- Sanity CMS (content management)
- Stripe (payments)
- Spline (3D hero animation)
- Framer Motion (page transitions)
- Vercel (hosting)

## Color Palette
- Wine:    #8B2E4A (primary accent)
- Grey:    #3D3D3D (text), #F5F5F5 (light bg)
- Earth:   #A07850 (warm accents)
- Cream:   #FAF6F1 (background)
- Charcoal:#2A2A2A (dark sections)

## Pages
/ → Home (Spline hero, featured artworks, categories)
/about → Arunima's story
/shop → Gallery with category filter
/shop/[slug] → Individual artwork
/custom → Commissions form
/journal → Blog/process posts
/contact → Contact + social links

## Categories
1. Originals & Folk Art (Pichhwai, Buddha, Ganesha, abstracts)
2. Home Decor (torans, upcycled furniture, festive decor)
3. Bookmarks & Gifts (watercolor, personalized, fabric art)

## Sanity Schemas needed
- artwork (title, slug, image, price, size, medium, story, available, featured, category)
- category (name, slug, description)
- blogPost (title, slug, body, images, date)
- siteSettings (tagline, hero image, featured artworks, socials)

## Notes
- Artworks are one-of-a-kind; mark as sold after purchase via Stripe webhook
- Arunima manages content herself via Sanity Studio
- Mobile-first, image-heavy layout
```

---

### How to Prompt the Agent (Task by Task)

Antigravity doesn't autocomplete line by line — you give it a task, it breaks it into steps, executes them, runs tests, fixes what broke, and hands you a verified result.  So use it like this:

**Task 1 — Scaffold the project**
```
Read BRIEF.md and scaffold a Next.js 14 project with TypeScript, 
Tailwind CSS with the custom color palette defined in the brief, 
and the folder structure for all pages listed.
```

**Task 2 — Set up Sanity**
```
Using BRIEF.md, set up Sanity CMS inside this Next.js project. 
Create all four schemas (artwork, category, blogPost, siteSettings), 
register them, and create a /lib/sanity.ts client with fetch 
functions for artworks and categories.
```

**Task 3 — Build the Shop**
```
Build the /shop page that fetches artworks from Sanity and displays 
them in a responsive masonry grid. Include category filter tabs. 
Use the wine/earth/grey palette. Each card should show the image, 
title, price, and an "Available" or "Sold" badge.
```

**Task 4 — Spline Hero**
```
Add a Spline 3D scene to the homepage hero section using 
@splinetool/react-spline. The hero should have the Spline scene 
as a background with a dark overlay, centered text showing the 
tagline "There is art in every heart", and two CTA buttons: 
"Shop Originals" and "Commission a Piece". Use the cream and wine colors.