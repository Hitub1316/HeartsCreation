import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtworkBySlug, getSiteSettings } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/client";
import BuyButton from "@/components/BuyButton";
import { PortableText } from "@portabletext/react";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const artwork = await getArtworkBySlug(slug);
  
  if (!artwork) {
    return {
      title: "Artwork Not Found",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const ogImageUrl = artwork.image ? urlFor(artwork.image).width(1200).height(630).url() : "";

  return {
    title: artwork.title,
    description: `Explore ${artwork.title} – ${artwork.medium}. A unique handcrafted artwork by Arunima.`,
    openGraph: {
      title: `${artwork.title} | Hearts Creation`,
      description: artwork.story ? (typeof artwork.story === 'string' ? artwork.story.slice(0, 160) : "Original art by Arunima") : `Discover ${artwork.title}, a ${artwork.medium} masterpiece.`,
      url: `https://hearts-creation.pages.dev/shop/${slug}`,
      images: ogImageUrl ? [ogImageUrl, ...previousImages] : previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title: artwork.title,
      description: `Explore ${artwork.title} by Arunima.`,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}

// Import images statically as placeholders for the 3 featured artworks
import momentBetweenWorlds from "@/assets/between world.jpeg";
import whereSilenceBlooms from "@/assets/Where silence blooms.jpeg";
import shivNandi from "@/assets/Shiv Nandi.jpeg";

const dummyArtworks: Record<string, any> = {
  "a-moment-between-worlds": {
    title: "A Moment Between Worlds",
    size: "24” by 24”",
    medium: "Acrylic on canvas",
    image: momentBetweenWorlds,
    price: 1200,
    story: "This painting represents calm amidst chaos, the balance of energies, and mindfulness. Rather than bringing heaviness, it encourages introspection, grounding, and emotional balance."
  },
  "where-silence-blooms": {
    title: "Where Silence Blooms",
    size: "24” by 24”",
    medium: "Acrylic on Canvas",
    image: whereSilenceBlooms,
    price: 1500,
    story: "Balancing minimal composition with evocative detail, the painting invites contemplation. The window becomes a metaphorical threshold—offering a glimpse into memory, solitude, or an unseen world beyond."
  },
  "shiv-k-nadi": {
    title: "Shiv k Nadi",
    size: "24” inches by 18” inches",
    medium: "Mix media on canvas",
    image: shivNandi,
    price: 950,
    story: "A symbol of strength, devotion & unstoppable presence. Abstract interpretation of divine energy in motion, where silence holds power. Rooted in devotion, driven by power."
  }
};

export default async function ShopItem({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch artwork and settings in parallel
  const [artworkData, settings] = await Promise.all([
    getArtworkBySlug(slug),
    getSiteSettings()
  ]);

  let artwork = artworkData;
  const whatsappNumber = settings?.whatsappNumber || "918055069122";
  
  // If not in Sanity, check if it's one of our featured dummy artworks
  if (!artwork || !artwork.title) {
    artwork = dummyArtworks[slug];
  }

  // If still no artwork, 404
  if (!artwork) {
    notFound();
  }

  const imgSource = artwork._id 
    ? (artwork.image ? urlFor(artwork.image).url() : "") 
    : artwork.image;

  return (
    <main className="min-h-screen py-32 px-6 sm:px-12 md:px-24 selection:bg-wine/20 bg-background transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="mb-12 flex items-center gap-4 text-[10px] uppercase tracking-widest text-charcoal/40 dark:text-white/40 transition-colors duration-700">
          <Link href="/shop" className="hover:text-charcoal dark:hover:text-white transition-colors">Collection</Link>
          <span className="w-4 h-px bg-charcoal/20 dark:bg-white/20 transition-colors duration-700"></span>
          <span className="text-charcoal/80 dark:text-white/80 transition-colors duration-700">{artwork.title}</span>
        </div>

        {/* Header Section - FULL WIDTH */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight text-charcoal dark:text-cream transition-colors duration-700 max-w-4xl">
            {artwork.title}
          </h1>
          
          <div className="flex items-center gap-6 mb-12">
            <span className="text-3xl font-serif text-wine dark:text-wine-light transition-colors duration-700">₹{artwork.price || "Contact for Price"}</span>
            {artwork.available === false && (
              <span className="text-[12px] uppercase tracking-widest bg-charcoal dark:bg-white text-cream dark:text-charcoal px-4 py-1.5 transition-colors duration-700">Sold</span>
            )}
          </div>

          {/* Story - FULL EXTENT PIECE */}
          <div className="text-lg md:text-xl font-serif italic text-charcoal/80 dark:text-cream/80 leading-relaxed max-w-4xl transition-colors duration-700">
            {Array.isArray(artwork.story) ? (
              <PortableText value={artwork.story} />
            ) : (
              artwork.story || artwork.content || "Every piece begins with a breath, a silent intention that takes form through color and texture. This work is an exploration of the unseen rhythms that define our existence."
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Visual Section */}
          <div className="lg:col-span-12 xl:col-span-8">
            <div className="relative min-h-[50vh] xl:min-h-[75vh] flex items-center justify-center overflow-hidden bg-background dark:bg-[#301e20] border whisper-border dark:border-white/5 shadow-sm transition-colors duration-700">
              {imgSource && (
                <img 
                  src={imgSource} 
                  alt={artwork.title} 
                  className="w-auto h-auto max-w-full max-h-[75vh] object-contain shadow-2xl transition-transform duration-1000 hover:scale-[1.02]"
                />
              )}
              {/* Subtle Overlay to make it feel like a gallery piece */}
              <div className="absolute inset-0 bg-charcoal/5 dark:bg-white/5 pointer-events-none mix-blend-multiply dark:mix-blend-overlay opacity-30 transition-colors duration-700" />
            </div>
          </div>

          {/* Details & Specs Section */}
          <div className="lg:col-span-12 xl:col-span-4 flex flex-col justify-start">
            <div className="sticky top-32">
              {/* Specs */}
              <div className="space-y-6 pt-0 border-t-0 mb-12 transition-colors duration-700">
                <div className="flex justify-between items-center group">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 font-medium transition-colors duration-700">Medium</span>
                  <span className="font-sans font-light text-charcoal/80 dark:text-white/80 transition-colors duration-700">{artwork.medium}</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 font-medium transition-colors duration-700">Dimensions</span>
                  <span className="font-sans font-light text-charcoal/80 dark:text-white/80 transition-colors duration-700">{artwork.size}</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 font-medium transition-colors duration-700">Authentication</span>
                  <span className="font-sans font-light text-charcoal/80 dark:text-white/80 transition-colors duration-700">Signed by Artist</span>
                </div>
              </div>

              {/* WhatsApp Redirection Integration */}
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in purchasing your artwork: ${artwork.title} (${slug}) listed for ₹${artwork.price || "Contact for Price"}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 bg-charcoal dark:bg-white/10 text-cream dark:text-cream text-xs uppercase tracking-[0.3em] font-medium hover:bg-wine dark:hover:bg-primary transition-all duration-700 shadow-xl shadow-charcoal/10 mb-6"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Inquire on WhatsApp
              </a>

              <p className="text-center text-[10px] uppercase tracking-widest text-charcoal/30 dark:text-white/30 transition-colors duration-700">
                Worldwide shipping available. Shipped from {settings?.shippingOrigin || "Hyderabad"}.
              </p>
            </div>
          </div>
        </div>

        {/* Similar Works Placeholder */}
        <div className="mt-40 pt-20 border-t border-charcoal/5 dark:border-white/5 transition-colors duration-700">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif font-light text-charcoal dark:text-cream transition-colors duration-700">Explore More</h2>
            <Link href="/shop" className="text-xs uppercase tracking-widest font-medium border-b border-charcoal/20 dark:border-white/20 pb-1 hover:border-charcoal dark:hover:border-white text-charcoal dark:text-cream transition-colors duration-700">
              Full Collection
            </Link>
          </div>
          {/* Small gallery rows would go here */}
        </div>
      </div>
    </main>
  );
}
