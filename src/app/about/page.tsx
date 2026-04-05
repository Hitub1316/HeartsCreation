import { getSiteSettings } from "@/sanity/lib/queries";
import AboutClient from "@/components/AboutClient";
import arunimaImg from "@/assets/Arunima.jpeg";

export const revalidate = 0; // ensure fresh data on every request

export default async function AboutPage() {
  const settings = await getSiteSettings();
  const tagline = settings?.tagline || "There is art in every heart.";

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 md:px-24 bg-cream text-charcoal">
      <div className="max-w-6xl mx-auto">
        <AboutClient tagline={tagline} arunimaImg={arunimaImg} />
      </div>
    </main>
  );
}