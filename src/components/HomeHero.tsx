"use client";

import { motion } from "framer-motion";
import HeroSVG from "@/components/HeroSVG";

export default function HomeHero({ settings }: { settings?: any }) {
  const tagline = settings?.tagline || "There is art in every heart.";

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-surface">
        
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none mix-blend-darken"
      >
        <source src="/Babyelephantvid.mp4" type="video/mp4" />
      </video>

      {/* Hero Content - Centered Layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12 w-full max-w-4xl"
        >
          <HeroSVG />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl px-4"
        >
          <p className="text-xl md:text-2xl font-serif italic font-normal text-charcoal/80 leading-relaxed mb-16">
            {tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <a 
            href="/shop" 
            className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden font-medium transition-all bg-primary rounded-none hover:bg-white border-2 border-transparent hover:border-primary"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-primary-container rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-primary-container rounded-full blur-md"></span>
            </span>
            <span className="relative text-[10px] uppercase tracking-gallery text-white group-hover:text-primary transition-colors duration-300">
              Explore the Collection
            </span>
          </a>
        </motion.div>
      </div>

      {/* Vertical Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 right-12 flex flex-col items-center gap-6"
      >
        <span className="text-[10px] uppercase tracking-gallery text-charcoal/30 font-sans [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-[1px] h-24 bg-charcoal/5 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-primary/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
