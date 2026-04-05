import { getSiteSettings, getStudioPageBySlug } from "@/sanity/lib/queries";
import AboutClient from "@/components/AboutClient";
import arunimaImg from "@/assets/Arunima.jpeg";

export const runtime = "edge";
// static by default

export default async function AboutPage() {
  const [settings, page] = await Promise.all([
    getSiteSettings(),
    getStudioPageBySlug("about")
  ]);
  
  const tagline = page?.subtitle || settings?.tagline || "There is art in every heart.";

  return (
    <main className="min-h-screen pt-10 md:pt-32 pb-20 px-6 sm:px-12 md:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <AboutClient tagline={tagline} arunimaImg={arunimaImg} page={page} />
      </div>
    </main>
  );
}