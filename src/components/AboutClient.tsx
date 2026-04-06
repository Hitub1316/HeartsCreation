"use client";

import { MotionDiv } from "./ClientMotion";
import Image from "next/image";
import { StaticImageData } from "next/image";
import PageHeader from "./PageHeader";
import SanityContent from "./SanityContent";

interface AboutClientProps {
  tagline: string;
  arunimaImg: StaticImageData;
  page?: any;
}

export default function AboutClient({ tagline, arunimaImg, page }: AboutClientProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Universal Page Header */}
      <PageHeader 
        title="The Artist" 
        subtitle="Arunima Jain"
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:items-start pt-4 transition-colors duration-700">
        {/* Image Section - Framed Mat Look */}
        <div className="md:col-span-7">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative aspect-[3/4] bg-background dark:bg-[#301e20] p-6 md:p-12 border whisper-border dark:border-white/5 transition-colors duration-700"
          >
            <div className="relative w-full h-full overflow-hidden shadow-sm transition-transform duration-[2s] hover:scale-105">
              <Image
                src={arunimaImg}
                alt={page?.title || "Arunima - Artist"}
                fill
                className="object-cover"
                priority
              />
            </div>
          </MotionDiv>
        </div>

        {/* Text Section - Staggered Monograph Style */}
        <div className="md:col-span-5 flex flex-col gap-16 pt-8 text-charcoal dark:text-cream transition-colors duration-700">
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 font-sans font-medium transition-colors duration-700">Philosophy</h3>
              <p className="text-2xl md:text-3xl font-serif italic leading-snug transition-colors duration-700">
                 &ldquo;{tagline}&rdquo;
              </p>
            </div>
            
            <div className="font-sans font-normal text-lg leading-relaxed text-charcoal/80 dark:text-cream/80 space-y-6 transition-colors duration-700">
              {page?.content ? (
                <div className="max-w-none">
                  <SanityContent value={page.content} />
                </div>
              ) : (
                <>
                  <p>
                    With over <span className="font-semibold text-charcoal dark:text-cream transition-colors duration-700">12 years</span> of dedicated practice, 
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
                </>
              )}
            </div>

            <div className="pt-4 flex flex-col gap-3">
               <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 font-sans font-medium transition-colors duration-700">Vision</h3>
               <p className="text-sm italic font-serif leading-relaxed uppercase tracking-wider font-medium transition-colors duration-700">
                 Originality &middot; Craftsmanship &middot; Timelessness
               </p>
            </div>
          </MotionDiv>

          {/* Subtle Footer Accent */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 font-sans mt-8 font-medium transition-colors duration-700"
          >
            &mdash; Heart&apos;s Creation by Arunima
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
}
