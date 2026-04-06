"use client";

import { MotionForm } from "./ClientMotion";

export default function CustomOrderForm() {
  return (
    <MotionForm 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-10 group"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Name */}
        <div className="relative group/field">
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 dark:text-white/40 mb-3 transition-colors duration-700" htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="John Doe"
            className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 focus:outline-none focus:border-wine dark:focus:border-primary transition-colors duration-700 font-sans font-light placeholder:text-charcoal/20 dark:placeholder:text-white/20 text-charcoal dark:text-cream"
          />
        </div>
        
        {/* Email */}
        <div className="relative group/field">
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 dark:text-white/40 mb-3 transition-colors duration-700" htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="hello@example.com"
            className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 focus:outline-none focus:border-wine dark:focus:border-primary transition-colors duration-700 font-sans font-light placeholder:text-charcoal/20 dark:placeholder:text-white/20 text-charcoal dark:text-cream"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Type of Interest */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 dark:text-white/40 mb-3 transition-colors duration-700" htmlFor="interest">Commission Type</label>
          <select 
            id="interest" 
            className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 focus:outline-none focus:border-wine dark:focus:border-primary transition-colors duration-700 font-sans font-light text-charcoal/70 dark:text-cream/70 appearance-none cursor-pointer"
          >
            <option className="bg-background dark:bg-neutral-900">Acrylic on Canvas</option>
            <option className="bg-background dark:bg-neutral-900">Mixed Media</option>
            <option className="bg-background dark:bg-neutral-900">Charcoal / Graphite</option>
            <option className="bg-background dark:bg-neutral-900">Mural Application</option>
            <option className="bg-background dark:bg-neutral-900">Digital Portrait</option>
          </select>
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 dark:text-white/40 mb-3 transition-colors duration-700" htmlFor="budget">Estimated Budget</label>
          <select 
            id="budget" 
            className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 focus:outline-none focus:border-wine dark:focus:border-primary transition-colors duration-700 font-sans font-light text-charcoal/70 dark:text-cream/70 appearance-none cursor-pointer"
          >
            <option className="bg-background dark:bg-neutral-900">₹40,000 - ₹80,000</option>
            <option className="bg-background dark:bg-neutral-900">₹80,000 - ₹2,00,000</option>
            <option className="bg-background dark:bg-neutral-900">₹2,00,000 - ₹4,00,000</option>
            <option className="bg-background dark:bg-neutral-900">₹4,00,000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Size preference */}
        <div className="relative group/field">
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 dark:text-white/40 mb-3 transition-colors duration-700" htmlFor="size">Preferred Size</label>
          <input 
            type="text" 
            id="size" 
            placeholder="e.g. 24x36 inches"
            className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 focus:outline-none focus:border-wine dark:focus:border-primary transition-colors duration-700 font-sans font-light placeholder:text-charcoal/20 dark:placeholder:text-white/20 text-charcoal dark:text-cream"
          />
        </div>
        
        {/* Palette preference */}
        <div className="relative group/field">
          <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 dark:text-white/40 mb-3 transition-colors duration-700" htmlFor="palette">Color Palette</label>
          <input 
            type="text" 
            id="palette" 
            placeholder="e.g. Earthy, Monochromatic, Vibrant"
            className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 focus:outline-none focus:border-wine dark:focus:border-primary transition-colors duration-700 font-sans font-light placeholder:text-charcoal/20 dark:placeholder:text-white/20 text-charcoal dark:text-cream"
          />
        </div>
      </div>

      {/* Story / Context */}
      <div className="relative group/field">
        <label className="block text-[10px] uppercase tracking-widest text-charcoal/40 dark:text-white/40 mb-3 transition-colors duration-700" htmlFor="story">The Story / Vision</label>
        <textarea 
          id="story" 
          rows={5}
          placeholder="Tell me about the space, the emotion, or the concept you wish to bring to life..."
          className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 py-3 focus:outline-none focus:border-wine dark:focus:border-primary transition-colors duration-700 font-sans font-light placeholder:text-charcoal/20 dark:placeholder:text-white/20 text-charcoal dark:text-cream resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-8 text-center md:text-left">
        <button 
          type="submit" 
          className="w-full md:w-auto px-16 py-6 bg-charcoal dark:bg-white text-cream dark:text-charcoal text-[10px] uppercase tracking-[0.4em] hover:bg-wine dark:hover:bg-primary dark:hover:text-white transition-all duration-700 shadow-xl shadow-charcoal/5"
        >
          Send Inquiry
        </button>
      </div>
    </MotionForm>
  );
}
