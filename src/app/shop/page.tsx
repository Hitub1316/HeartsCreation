import ShopGallery from "@/components/ShopGallery";
import { getArtworksGroupedByCategory } from "@/sanity/lib/queries";
import PageHeader from "@/components/PageHeader";

export const runtime = "edge";
export const revalidate = 60; // revalidate every minute

export default async function Shop() {
  const allCategories = await getArtworksGroupedByCategory();
  
  // Sort categories to prioritize "Summer Collection 2026"
  const categories = [...(allCategories || [])].sort((a: any, b: any) => {
    if (a.name === "Summer Collection 2026") return -1;
    if (b.name === "Summer Collection 2026") return 1;
    return a.name.localeCompare(b.name);
  });

  const totalPieces = categories?.reduce((acc: number, cat: any) => acc + (cat.artworks?.length || 0), 0) || 0;

  return (
    <main className="min-h-screen pt-8 md:pt-12 pb-24 selection:bg-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Universal Page Header */}
        <PageHeader 
          title="The Collection" 
          subtitle="Available works from the studio."
          rightElement={`${totalPieces} Pieces — Curated`}
          className="mb-20"
        />

        {/* Gallery Grid Client Component */}
        <ShopGallery categories={categories} />

      </div>
    </main>
  );
}
