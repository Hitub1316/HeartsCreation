import ShopGallery from "@/components/ShopGallery";
import { getArtworksGroupedByCategory } from "@/sanity/lib/queries";

export const revalidate = 60; // revalidate every minute

export default async function Shop() {
  const categories = await getArtworksGroupedByCategory();

  return (
    <main className="min-h-screen bg-surface text-charcoal py-40 selection:bg-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 group animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-8xl font-serif italic font-light tracking-tight">The Collection</h1>
            <div className="w-12 h-px bg-charcoal/10"></div>
            <p className="text-charcoal/40 font-sans tracking-gallery text-[10px] uppercase">Available works from the studio.</p>
          </div>
          <div className="mt-12 md:mt-0 text-[10px] tracking-gallery uppercase text-charcoal/20">
            {categories?.reduce((acc: number, cat: any) => acc + (cat.artworks?.length || 0), 0) || 0} Pieces &mdash; Curated
          </div>
        </div>

        {/* Gallery Grid Client Component */}
        <ShopGallery categories={categories} />

      </div>
    </main>
  );
}
