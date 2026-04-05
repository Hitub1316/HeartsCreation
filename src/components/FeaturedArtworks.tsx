"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

// Import images statically for Next.js image optimization
import momentBetweenWorlds from "@/assets/between world.jpeg";
import whereSilenceBlooms from "@/assets/Where silence blooms.jpeg";
import shivNandi from "@/assets/Shiv Nandi.jpeg";

const artworks = [
  {
    id: 1,
    title: "A Moment Between Worlds",
    size: "24” by 24”",
    medium: "Acrylic on canvas",
    image: momentBetweenWorlds,
    content: (
      <>
        <p className="mb-4">This painting represents:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Calm amidst chaos</li>
          <li>Balance of energies</li>
          <li>Mindfulness and inner strength</li>
        </ul>
        <p>
          Rather than bringing heaviness, it encourages introspection,
          grounding, and emotional balance.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Where Silence Blooms",
    size: "24” by 24”",
    medium: "Acrylic on Canvas",
    image: whereSilenceBlooms,
    content: (
      <>
        <p className="mb-6">
          Balancing minimal composition with evocative detail, the painting
          invites contemplation. The window becomes a metaphorical threshold—offering
          a glimpse into memory, solitude, or an unseen world beyond—while the
          surrounding color field reflects the intensity of inner landscapes.
        </p>
        <p>
          This piece embodies a harmonious dialogue between strength and fragility,
          making it a compelling addition to contemporary interiors seeking both
          visual impact and emotional depth.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Shiv k Nadi",
    size: "24” inches by 18” inches",
    medium: "Mix media on canvas",
    image: shivNandi,
    content: (
      <>
        <p className="mb-6">
          A symbol of strength, devotion & unstoppable presence. <br />
          Abstract interpretation of divine energy in motion, where silence holds
          power..
        </p>
        <div className="pl-4 border-l-2 border-wine/30 italic space-y-2 text-charcoal/80">
          <p>“Strength is not loud.</p>
          <p>It stands still… and commands presence.</p>
          <p>Rooted in devotion.</p>
          <p>Driven by power.</p>
          <p>This is not just a bull (Nandi)…</p>
          <p>This is energy.</p>
          <p>This is protection.</p>
          <p>This is Shiv Shakti in motion.”</p>
        </div>
      </>
    ),
  },
];

export default function FeaturedArtworks({ sanityArtworks = [] }: { sanityArtworks?: any[] }) {
  const displayArtworks = sanityArtworks.length > 0 ? sanityArtworks : artworks;

  return (
    <section className="py-24 overflow-hidden bg-background transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 mb-6 font-sans font-medium transition-colors duration-700"
          >
            Selected Works
          </motion.h2>
          <div className="w-12 h-px bg-charcoal/20 dark:bg-white/20 transition-colors duration-700"></div>
        </div>

        {/* Uniform "Curator" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {displayArtworks.map((artwork, index) => {
            const imgSource = artwork.image?.asset 
              ? urlFor(artwork.image).url() 
              : artwork.image; 

            return (
              <motion.div
                key={artwork._id || artwork.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                {/* Artwork Display */}
                <Link
                  href={`/shop/${artwork.slug || artwork.id}`}
                  className="relative aspect-[4/5] w-full overflow-hidden bg-background dark:bg-[#301e20] shadow-sm p-6 md:p-12 whisper-border dark:border-white/5 mb-8 block transition-colors duration-700"
                >
                  <div className="relative w-full h-full overflow-hidden transition-transform duration-1000 group-hover:scale-[1.02]">
                    <img
                      src={imgSource}
                      alt={artwork.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </Link>

                {/* Annotation / Details */}
                <div className="flex flex-col items-start px-2">
                  <h3 className="text-2xl md:text-3xl font-serif italic mb-3 text-charcoal dark:text-cream font-medium transition-colors duration-700">
                    {artwork.title}
                  </h3>
                  <div className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 mb-6 font-sans font-medium transition-colors duration-700">
                    {artwork.size} <span className="mx-2 opacity-30">|</span> {artwork.medium}
                  </div>
                  
                  <div className="font-sans font-normal text-sm leading-relaxed text-charcoal/80 dark:text-cream/80 mb-8 line-clamp-3 transition-colors duration-700">
                    {artwork.content || (artwork.story && (
                      Array.isArray(artwork.story) ? (
                        <PortableText value={artwork.story} />
                      ) : (
                        <p>{artwork.story}</p>
                      )
                    ))}
                  </div>
                  
                  <Link href={`/shop/${artwork.slug || artwork.id}`} className="group flex items-center gap-4 text-[10px] uppercase tracking-gallery font-semibold text-primary mt-auto">
                    View Details
                    <span className="w-8 h-px bg-primary/30 transition-all duration-500 group-hover:w-12 group-hover:bg-primary"></span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
