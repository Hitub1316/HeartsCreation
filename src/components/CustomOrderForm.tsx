"use client";

import { motion } from "framer-motion";

export default function CustomOrderForm() {
  return (
    <motion.form 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-10 group"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Name */}
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-3" htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="John Doe"
            className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-wine transition-colors font-sans font-light placeholder:text-charcoal/20"
          />
        </div>
        
        {/* Email */}
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-3" htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="hello@example.com"
            className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-wine transition-colors font-sans font-light placeholder:text-charcoal/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Type of Interest */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-3" htmlFor="interest">Commission Type</label>
          <select 
            id="interest" 
            className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-wine transition-colors font-sans font-light text-charcoal/70 appearance-none cursor-pointer"
          >
            <option>Acrylic on Canvas</option>
            <option>Mixed Media</option>
            <option>Charcoal / Graphite</option>
            <option>Mural Application</option>
            <option>Digital Portrait</option>
          </select>
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-3" htmlFor="budget">Estimated Budget</label>
          <select 
            id="budget" 
            className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-wine transition-colors font-sans font-light text-charcoal/70 appearance-none cursor-pointer"
          >
            <option>₹40,000 - ₹80,000</option>
            <option>₹80,000 - ₹2,00,000</option>
            <option>₹2,00,000 - ₹4,00,000</option>
            <option>₹4,00,000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Size preference */}
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-3" htmlFor="size">Preferred Size</label>
          <input 
            type="text" 
            id="size" 
            placeholder="e.g. 24x36 inches"
            className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-wine transition-colors font-sans font-light placeholder:text-charcoal/20"
          />
        </div>
        
        {/* Palette preference */}
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-3" htmlFor="palette">Color Palette</label>
          <input 
            type="text" 
            id="palette" 
            placeholder="e.g. Earthy, Monochromatic, Vibrant"
            className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-wine transition-colors font-sans font-light placeholder:text-charcoal/20"
          />
        </div>
      </div>

      {/* Story / Context */}
      <div className="relative">
        <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-3" htmlFor="story">The Story / Vision</label>
        <textarea 
          id="story" 
          rows={5}
          placeholder="Tell me about the space, the emotion, or the concept you wish to bring to life..."
          className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-wine transition-colors font-sans font-light placeholder:text-charcoal/20 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-8">
        <button 
          type="submit" 
          className="w-full md:w-auto px-12 py-5 bg-charcoal text-cream text-xs uppercase tracking-[0.3em] hover:bg-wine transition-all duration-700 shadow-lg shadow-charcoal/10"
        >
          Send Inquiry
        </button>
      </div>
    </motion.form>
  );
}
