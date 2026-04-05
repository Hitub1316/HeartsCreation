# Deployment Checklist: Heart's Creation Boutique

This document tracks the final preparations for the live launch on Cloudflare Pages.

## Status: Verified Production Ready

### 1. Backend Synchronization
- [x] Create `studioPage` and `legal` documents in Sanity (Seeded)
- [x] Connect `About` and `Contact` with `SanityContent` renderer
- [x] Connect `Privacy` and `Terms` with high-fidelity formatting

### 2. Visual & Architectural Refinement
- [x] Standardize all artwork/info containers to `#301e20`
- [x] Correct heading sizes for backend-selected content
- [x] Update developer credit to "Site by Hitu Bharal"
- [x] Local `npm run build` verification (SUCCESS)

## Production Build Settings (Cloudflare Pages)

When deploying, use these exact settings in the Cloudflare dashboard:

- **Framework preset**: `Next.js`
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Node.js version**: `18.x` or higher (Set in **Settings -> Builds & Deployments -> Toolchain**)

## Required Environment Variables

Add these in **Settings -> Variables and Secrets**:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: `qr1teroj`
- `NEXT_PUBLIC_SANITY_DATASET`: `production`
- `NEXT_PUBLIC_SANITY_API_VERSION`: `2026-03-17`
- `GOOGLE_API_KEY`: [Your key from .env.local]

---
*Site by Hitu Bharal*
