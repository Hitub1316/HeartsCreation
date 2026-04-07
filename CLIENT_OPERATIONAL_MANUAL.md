# Hearts Creation | Client Operational Manual 🥂🎯

Welcome to the definitive guide for managing your premium art boutique, **Hearts Creation**. This document outlines every functionality of your digital platform and provides a step-by-step masterclass on using **Sanity.io** to manage your content.

---

## 1. Website Overview 🌍

The Hearts Creation website is built on a high-performance **Next.js** framework, synchronized in real-time with your **Sanity Studio**.

### Core Sections:
- **Home**: Featuring your signature color-changing cinematic background video and **Featured Artworks**.
- **Shop**: An organized gallery of your creations, filtered by category.
- **About / Studio**: Evocative editorial pages describing the heart of Arunima's laboratory.
- **Contact**: A streamlined interface for bespoke inquiries and studio connection.
- **Patron Reflections**: A curated guestbook where your audience shares their sensations.

---

## 2. Managing Content via Sanity.io 🎭

Your **Sanity Studio** is the command center of your boutique. Every change made here reflects on the website once "Published."

### A. Managing Artworks (`artwork`)
- **Adding New Art**: Click the `+` icon under "Artworks." Provide a title, slug (URL name), and high-resolution images.
- **Featured Art**: Toggle the **"Featured"** switch to `ON` to display the artwork on the homepage showcase.
- **Availability**: Toggle **"Available"** to `OFF` to automatically mark an artwork as **SOLD OUT** on the frontend.
- **Details**: Ensure you specify the **Price, Size, and Medium** for a premium shopping experience.

### B. Organizing the Gallery (`category`)
- Artworks are grouped by Categories (e.g., *Canvas*, *Vapor*, *Vivid*).
- You can create new categories and assign multiple artworks to them to organize your shop.

### C. The Guestbook: Moderating Reviews (`review`) 📉⚡
> [!IMPORTANT]
> **The Two-Step Approval Protocol**:
> To protect the integrity of your brand, all reviews follow a strict synchronization protocol:
> 1. **The Approval Toggle**: Inside a specific review document, you MUST switch **"Approved by Admin"** to **ON**.
> 2. **The Publishing Action**: You MUST then click the **"Publish"** button at the bottom of the studio. 
> 
> *Without BOTH actions, the review will remain invisible to your patrons.*

### D. Strategic Logistics & Address (`siteSettings`) 🌍
Managed via the **Site Settings** (Singleton) document:
- **Shipping Origin**: Update this field (e.g., "Hyderabad") to instantly change the shipping info across all artwork pages and SEO tags.
- **Studio Address**: Manage the primary contact address used in the website footer and contact section.
- **Social Links**: Update your Instagram and other touchpoints globally.

### E. Legal & Editorial Content (`legal`, `studioPage`)
- Use the **Legal Pages** document to manage your Terms of Service and Shipping Policies.
- Use the **Studio Pages** document to update the narrative content of your "About" or "Laboratory" sections.

---

## 3. Best Practices for Excellence 🛡️💎

- **Drafts vs. Published**: Changes are saved locally as "Drafts." They will NOT appear on the website until you click the **Publish** button.
- **Image Quality**: Always upload high-resolution `.jpg` or `.png` files. Sanity automatically optimizes these for mobile and desktop performance.
- **Synchronicity**: If changes aren't appearing instantly, ensure you have clicked **Publish** and refreshed your browser.

---

*Manual synthesized by Hearts Creation Engineering Team.* 🥂🚀📈✅
