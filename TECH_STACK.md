# Tech Stack Definition: Heart's Creation 🥂🎯🛡️

This document defines the decoupled architecture designed for high performance and zero-exception deployments.

---

## 1. Storefront (The Boutique) 📉💎
*   **Role**: Public-facing website and customer experience.
*   **Hosting**: Cloudflare Pages (Native Next.js) or Vercel.
*   **Tech Stack**:
    *   **Core**: Next.js 16 (React 19)
    *   **CMS Integration**: `next-sanity`, `@portabletext/react`, `groq`
    *   **UI/UX**: Tailwind CSS, Framer Motion, Styled-Components
    *   **Icons**: Lucide React (Optimized sub-path imports)
    *   **AI Soul**: Google Gemini (Serverless API)
    *   **Payments**: Stripe
    *   **Communication**: Resend (Emails)

---

## 2. Studio (The Workshop) 🎨🛠️
*   **Role**: Content management, Art uploading, and Stories.
*   **Hosting**: Sanity Managed Deployment.
*   **Site**: [hearts-creation.sanity.studio](https://hearts-creation.sanity.studio)
*   **Tech Stack**:
    *   **Platform**: Sanity Studio v3
    *   **Tools**: Sanity CLI, Vision Plugin, Media Plugin

---

## 3. Global Infrastructure 🌐⚡
*   **Database**: Sanity Content Lake (Hosted by Sanity)
*   **CDN**: Sanity Asset CDN (Image optimization)
*   **Serverless**: Cloudflare Workers / Cloudflare Pages Functions
*   **DNS & SSL**: Cloudflare

---

## 🏗️ Deployment Strategy: The "Zero-Lag" Boutique ⚡🛡️
We maintain a **Clean Storefront** by keeping the heavy `@sanity` editor packages out of the root production bundle. All animations are surgically refactored to **dynamic client-side imports**, ensuring the Worker remains lean.

### 📜 Post-Migration Checklist
- [x] **Architecture**: Studio decoupled to managed hosting.
- [x] **Optimization**: Full SSR-Safe Motion Migration (~88KB Server Function).
- [x] **Git Sync**: All structural changes pushed to `main`.
- [ ] **Cloudflare Logs**: Monitor the first live deployment for any 1101 regressions.
- [ ] **Stripe Check**: Verify successful checkout from the live storefront.
- [ ] **DNS Sync**: Finalize domain pointing to `heartscreation.in`.
