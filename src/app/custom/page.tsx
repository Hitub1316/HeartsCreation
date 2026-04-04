"use client";

import { motion } from "framer-motion";
import CustomOrderForm from "@/components/CustomOrderForm";

export default function CustomOrders() {
  return (
    <main className="min-h-screen bg-cream text-charcoal py-32 px-6 sm:px-12 md:px-24 selection:bg-wine/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Header & Content */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-12 leading-tight">
                Commission <br />
                <span className="italic text-wine/80">Your Vision</span>
              </h1>
              
              <div className="space-y-8 font-sans font-light text-lg leading-relaxed text-charcoal/70 pr-8">
                <p>
                  A custom commission is a collaborative journey. It is where your personal narrative meets my artistic practice to create something truly singular.
                </p>
                <p>
                  Whether you are looking to anchor a residential space or seeking a soulful addition to a private collection, I work closely with you to define the palette, scale, and emotional resonance of the piece.
                </p>
              </div>

              {/* Steps or Info */}
              <div className="mt-16 space-y-12">
                <div className="flex gap-8 group">
                  <div className="text-xl font-serif text-wine/40 group-hover:text-wine transition-colors">01</div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest font-medium mb-2">Consultation</h3>
                    <p className="text-sm text-charcoal/50 leading-relaxed font-sans font-light">
                      We discuss your space, preferred aesthetics, and the emotional core of the commission.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="text-xl font-serif text-wine/40 group-hover:text-wine transition-colors">02</div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest font-medium mb-2">The Creation</h3>
                    <p className="text-sm text-charcoal/50 leading-relaxed font-sans font-light">
                      Meticulous execution of the piece with regular updates on the evolution of the work.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-7 bg-white/30 backdrop-blur-sm p-8 md:p-16 border border-charcoal/5 shadow-2xl overflow-hidden relative">
            {/* Ambient Background Blur for the Form */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-wine/5 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-earth/5 rounded-full blur-[120px]" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-medium mb-12 border-b border-charcoal/10 pb-6 uppercase tracking-widest text-[14px]">
                Artistic Inquiry
              </h2>
              <CustomOrderForm />
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
