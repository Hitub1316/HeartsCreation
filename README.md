# Heart's Creation

> "There is art in every heart."

Heart’s Creation is a high-fidelity, editorial-grade digital platform for the art of **Arunima**. Built with a "museum-first" aesthetic, the platform blends traditional craftsmanship with modern technology to showcase Pichhwai paintings, custom furniture, and spiritual art.

## Features

-   **Editorial Gallery**: A uniform, high-fidelity grid system designed to present artworks "at a glance" without sacrificing detail.
-   **AI Art Consultant**: A custom-trained AI assistant to help patrons find pieces that resonate with their space and soul.
-   **Patron Reflections**: A community guestbook where collectors share their stories, managed through an admin-controlled moderation backend.
-   **Art Journal**: Story-driven editorial content exploring the process and philosophy behind each creation.
-   **Direct Inquiry**: Seamless WhatsApp-integrated inquiry system for personalized art consultations.

## Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Actions)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **CMS**: [Sanity.io](https://www.sanity.io/) (Headless Content Management)
-   **Design System**: Custom "Hearts Creation" design language focusing on serif elegance and tonal minimalism.

## Getting Started

### Prerequisites

-   Node.js 18.x or later
-   NPM or Yarn
-   Sanity CLI (optional, for studio management)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hitub1316/HeartsCreation.git
   cd HeartsCreation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_WRITE_TOKEN=your_write_token
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Admin Management

The platform is powered by Sanity. To manage artworks, categories, and review approvals:

1. Launch the Studio:
   ```bash
   npm run sanity:start
   # or navigate to /studio in production
   ```
2. **Review Approval**: New submissions from the guestbook appear in the "Patron Reviews" document list as unapproved. Toggle the `Approved` flag to publish them to the site.

## Credits

Designed and developed with ❤️ for the art of **Arunima Jain** by **Hitu Bharal**.
