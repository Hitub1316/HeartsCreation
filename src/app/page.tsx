import HomeHero from "@/components/HomeHero";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import { getFeaturedArtworks, getSiteSettings } from "@/sanity/lib/queries";

export const runtime = "edge";
export const revalidate = 0; // ensure fresh data on every request

export default async function Home() {
  const sanityArtworks = await getFeaturedArtworks();
  const settings = await getSiteSettings();

  return (
    <main className="min-h-screen bg-surface selection:bg-primary/10">
      <HomeHero settings={settings} />
      <div id="featured" className="bg-surface">
        <FeaturedArtworks sanityArtworks={sanityArtworks} />
      </div>
    </main>
  );
}
