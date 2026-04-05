"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessPage() {
  return (
    <main className="min-h-screen text-charcoal dark:text-cream flex flex-col items-center justify-center px-6 selection:bg-wine/20 transition-colors duration-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md text-center"
      >
        <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-12">
          <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight">
          Thank <span className="italic">You</span>
        </h1>
        
        <div className="space-y-6 font-sans font-light text-lg text-charcoal/60 leading-relaxed mb-12">
          <p>
            Your order has been received. A piece of Heart&apos;s Creation is now being prepared for its new home.
          </p>
          <p>
            You will receive a confirmation email with shipping details shortly.
          </p>
        </div>

        <Link 
          href="/shop" 
          className="inline-block px-12 py-5 bg-charcoal text-cream text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-wine transition-all duration-700 shadow-xl shadow-charcoal/10"
        >
          Return to Collection
        </Link>
      </motion.div>

      {/* Subtle Background Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wine/5 rounded-full blur-[120px]" />
      </div>
    </main>
  );
}
