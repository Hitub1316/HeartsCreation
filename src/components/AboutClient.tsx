"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";
import PageHeader from "./PageHeader";

interface AboutClientProps {
  tagline: string;
  arunimaImg: StaticImageData;
}

export default function AboutClient({ tagline, arunimaImg }: AboutClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Universal Page Header */}
      <PageHeader 
        title="The Artist" 
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:items-start pt-4">
        {/* Image Section - Framed Mat Look */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative aspect-[3/4] bg-surface-low dark:bg-white/5 p-6 md:p-12 border whisper-border dark:border-white/10"
          >
            <div className="relative w-full h-full overflow-hidden shadow-sm transition-transform duration-[2s] hover:scale-105">
              <Image
                src={arunimaImg}
                alt="Arunima - Artist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Text Section - Staggered Monograph Style */}
        <div className="md:col-span-5 flex flex-col gap-16 pt-8 text-charcoal dark:text-cream transition-colors duration-700">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/40 font-sans font-medium">Philosophy</h3>
              <p className="text-2xl md:text-3xl font-serif italic leading-snug">
                 &ldquo;{tagline}&rdquo;
              </p>
            </div>
            
            <div className="font-sans font-normal text-lg leading-relaxed text-charcoal/80 dark:text-white/70 space-y-6">
              <p>
                With over <span className="font-semibold text-charcoal dark:text-cream">12 years</span> of dedicated practice, 
                Arunima&apos;s work is a silent exploration of materialism and memory. 
                Her process is a deliberate dance of glazes, textures, and conceptually 
                staged emptiness.
              </p>
              
              <p>
                Working primarily with mixed media and modern acrylic techniques, 
                her practice is defined by a meticulous attention to detail and a 
                subtle yet powerful visual language that speaks in the language of 
                shadows and light.
              </p>
            </div>

            <div className="pt-4 flex flex-col gap-3">
               <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/40 font-sans font-medium">Vision</h3>
               <p className="text-sm italic font-serif leading-relaxed uppercase tracking-wider font-medium">
                 Originality &middot; Craftsmanship &middot; Timelessness
               </p>
            </div>
          </motion.div>

          {/* Subtle Footer Accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-[10px] uppercase tracking-gallery text-charcoal/50 dark:text-white/30 font-sans mt-8 font-medium"
          >
            &mdash; Heart&apos;s Creation by Arunima
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
