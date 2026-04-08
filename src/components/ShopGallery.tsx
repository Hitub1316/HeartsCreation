"use client";

import { useState } from "react";
import { MotionDiv, AnimatePresence } from "./ClientMotion";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";

// Import images statically as placeholders for fallback (though less likely with grouped categories)
import momentBetweenWorlds from "@/assets/between world.jpeg";
import whereSilenceBlooms from "@/assets/Where silence blooms.jpeg";
import shivNandi from "@/assets/Shiv Nandi.jpeg";

const dummyArtworks = [
  {
    _id: "dummy1",
    title: "A Moment Between Worlds",
    size: "24” by 24”",
    medium: "Acrylic on canvas",
    image: momentBetweenWorlds,
    slug: "a-moment-between-worlds"
  },
  {
    _id: "dummy2",
    title: "Where Silence Blooms",
    size: "24” by 24”",
    medium: "Acrylic on Canvas",
    image: whereSilenceBlooms,
    slug: "where-silence-blooms"
  },
  {
    _id: "dummy3",
    title: "Shiv k Nadi",
    size: "24” inches by 18” inches",
    medium: "Mix media on canvas",
    image: shivNandi,
    slug: "shiv-k-nadi"
  },
];

function CategorySection({ category, index }: { category: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const artworks = category.artworks || [];

  if (artworks.length === 0) return null;

  return (
    <div className="mb-12 last:mb-0 group/section">
      {/* Category Header - Minimalist Editorial Style */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-end justify-between py-8 group mb-8 border-b border-charcoal/5 dark:border-white/5 transition-colors duration-700"
      >
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-4xl md:text-5xl font-serif italic font-light text-charcoal dark:text-cream group-hover:text-primary transition-all duration-700 tracking-tight">
            {category.name}
          </h2>
        </div>
        <div className="flex flex-col items-end gap-3">
          <span className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 font-sans font-medium transition-colors duration-700">
            {artworks.length} Works
          </span>
          <MotionDiv
            animate={{ rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-charcoal/40 dark:text-white/40 group-hover:text-primary transition-colors"
          >
            <ChevronDown className="w-5 h-5 stroke-[1px]" />
          </MotionDiv>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Uniform Shop Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
              {artworks.map((artwork: any) => {
                const imgSource = artwork.image?.asset 
                  ? urlFor(artwork.image).url() 
                  : artwork.image; 
                
                return (
                  <MotionDiv
                    key={artwork._id}
                    className="md:col-span-1 group/card"
                  >
                    <Link
                      href={`/shop/${artwork.slug}`}
                      className="flex flex-col gap-6"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-background dark:bg-[#301e20] p-6 md:p-12 whisper-border dark:border-white/5 transition-colors duration-700">
                        <div className="relative w-full h-full overflow-hidden shadow-sm transition-transform duration-1000 group-hover/card:scale-[1.02]">
                          <img
                            src={typeof imgSource === 'string' ? imgSource : imgSource?.src}
                            alt={artwork.title}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-start pt-2 px-1">
                        <div className="space-y-3">
                          <h3 className="text-xl md:text-2xl font-serif italic text-charcoal dark:text-cream group-hover/card:text-primary transition-colors duration-700 font-medium">
                            {artwork.title}
                          </h3>
                          <p className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 font-sans font-medium transition-colors duration-700">
                            {artwork.medium} &middot; {artwork.size}
                          </p>
                        </div>
                        <div className="text-[10px] uppercase tracking-gallery text-primary/80 font-semibold pt-2">
                           Inquiry Only
                        </div>
                      </div>
                    </Link>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ShopGallery({ categories = [] }: { categories?: any[] }) {
  if (categories.length === 0) {
    return (
      <CategorySection 
        category={{ name: "The Main Collection", artworks: dummyArtworks }} 
        index={0} 
      />
    );
  }

  return (
    <div className="flex flex-col">
      {categories.map((category, index) => (
        <CategorySection key={category._id || index} category={category} index={index} />
      ))}
    </div>
  );
}
