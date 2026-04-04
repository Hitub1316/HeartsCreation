"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const journalPosts = [
  {
    id: 1,
    title: "The Story Behind 'Where Silence Blooms'",
    date: "March 15, 2024",
    excerpt: "Exploring the metaphorical threshold between memory and solitude, and how the surrounding color field reflects the intensity of inner landscapes.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop",
    category: "Process"
  },
  {
    id: 2,
    title: "Balance of Energies: A Study in Acrylic",
    date: "February 28, 2024",
    excerpt: "Searching for calm amidst the chaos of a busy studio. This study explores the mindfulness and inner strength required to find balance in a world that never stops.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop",
    category: "Insights"
  },
  {
    id: 3,
    title: "Finding Rhythm in the Abstract",
    date: "February 12, 2024",
    excerpt: "Abstract art is not just about color and form—it's about the silent rhythm that connects every stroke. A reflection on my recent series 'Shiv Shakti in Motion'.",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop",
    category: "Creative Practice"
  }
];

export default function Journal() {
  return (
    <main className="min-h-screen bg-cream text-charcoal py-32 px-6 sm:px-12 md:px-24 selection:bg-wine/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8">Journal</h1>
          <p className="font-sans font-light text-xl text-charcoal/60 leading-relaxed max-w-2xl">
            Reflections on process, the philosophy of space, and the quiet moments between creation.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {journalPosts.map((post, index) => {
            const isFirst = index === 0;
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className={`flex flex-col gap-8 ${isFirst ? 'lg:col-span-12 lg:grid lg:grid-cols-2 lg:items-center' : 'lg:col-span-6'}`}
              >
                {/* Post Image */}
                <div className="relative aspect-[16/10] overflow-hidden group shadow-xl">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-cream/90 backdrop-blur px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-charcoal shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="flex flex-col justify-start">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 mb-4 font-sans font-medium">
                    {post.date}
                  </div>
                  <h2 className={`font-serif font-light mb-6 hover:text-wine transition-colors cursor-pointer leading-tight ${isFirst ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                    {post.title}
                  </h2>
                  <p className="font-sans font-light text-charcoal/60 leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  <div>
                    <a href={`/journal/${post.id}`} className="inline-block text-[10px] uppercase tracking-[0.3em] font-medium border-b border-charcoal/20 pb-2 hover:border-charcoal transition-colors">
                      Read Entry
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer Accent */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-40 pt-12 border-t border-charcoal/5 text-center italic font-serif text-charcoal/30"
        >
          &quot;Art is the only way to run away without leaving home.&quot; — Twyla Tharp
        </motion.div>

      </div>
    </main>
  );
}
