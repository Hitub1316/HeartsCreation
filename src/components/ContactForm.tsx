"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className="md:pt-12"
    >
      <h2 className="text-[10px] uppercase tracking-gallery text-charcoal/50 mb-12 px-1 font-medium">
        Direct Inquiry
      </h2>
      
      <form className="space-y-10">
        <div style={{ display: 'none' }} aria-hidden="true">
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <label className="block text-[10px] uppercase tracking-gallery text-charcoal/60 mb-3 font-medium" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:outline-none focus:border-primary transition-colors font-sans font-normal"
            />
          </div>
          <div className="relative">
            <label className="block text-[10px] uppercase tracking-gallery text-charcoal/60 mb-3 font-medium" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:outline-none focus:border-primary transition-colors font-sans font-normal"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-[10px] uppercase tracking-gallery text-charcoal/60 mb-3 font-medium" htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:outline-none focus:border-primary transition-colors font-sans font-normal"
          />
        </div>

        <div className="relative">
          <label className="block text-[10px] uppercase tracking-gallery text-charcoal/60 mb-3 font-medium" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            rows={5}
            className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:outline-none focus:border-primary transition-colors font-sans font-normal resize-none"
          ></textarea>
        </div>

        <div className="pt-8">
          <button 
            type="submit" 
            className="group relative w-full md:w-auto px-16 py-6 overflow-hidden bg-primary transition-all duration-700"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-primary-container rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-primary-container rounded-full blur-md"></span>
            </span>
            <span className="relative text-[10px] uppercase tracking-gallery text-white font-medium">
              Send Message
            </span>
          </button>
        </div>
      </form>
    </motion.div>
  );
}
