"use client";

import { useState, useEffect } from "react";
import { MotionDiv, AnimatePresence } from "./ClientMotion";
import Search from "lucide-react/dist/esm/icons/search";
import MessageSquare from "lucide-react/dist/esm/icons/message-square";
import X from "lucide-react/dist/esm/icons/x";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { client } from "@/sanity/lib/client";
import Script from "next/script";
function ArtVault({ images = [] }: { images: string[] }) {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible perspective-[1200px]">
      {/* The Tilted Rotating Ring */}
      <MotionDiv
        initial={{ rotateY: 0, rotateX: -10 }}
        animate={{ rotateY: 360, rotateX: -10 }}
        transition={{ 
          rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 0 } // Static tilt
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-48 h-64"
      >
        {images.map((imgUrl, i) => {
          const angle = i * 45; // 360 / 8
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                transformStyle: "preserve-3d",
                transform: `rotateY(${angle}deg) translateZ(400px)`,
                backfaceVisibility: "visible",
              }}
              className="group"
            >
              {/* Card Container with edge depth */}
              <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={imgUrl} 
                  alt={`Vault Art ${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          );
        })}
      </MotionDiv>
      
      {/* Ambient Floor Shadow/Glow */}
      <div className="absolute bottom-10 w-full h-20 bg-black/20 blur-3xl opacity-40 rounded-[100%] transform -rotate-x-90" />
    </div>
  );
}

export default function AIConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [aiMessage, setAiMessage] = useState("");
  const [sampleArtworks, setSampleArtworks] = useState<string[]>([]);

  useEffect(() => {
    // Fetch a pool of artworks to randomize shuffle cards
    const fetchSamples = async () => {
      try {
        const query = `*[_type == "artwork"] | order(_createdAt desc)[0...20] { "imageUrl": image.asset->url }`;
        const data = await client.fetch(query);
        const urls = data.map((item: any) => item.imageUrl).filter(Boolean);
        
        // Randomize 8 for this session
        const shuffled = [...urls].sort(() => 0.5 - Math.random());
        setSampleArtworks(shuffled.slice(0, 8));
      } catch (err) {
        console.error("Failed to fetch shuffle samples:", err);
      }
    };
    fetchSamples();
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResults([]);
    setIsOpen(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        body: JSON.stringify({ query }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      
      if (data.results) {
        setResults(data.results);
        setAiMessage(data.message);
      } else {
        setAiMessage(data.message || "I couldn't find exactly that, but here are some pieces that might resonate.");
      }
    } catch (error) {
      console.error("Search failed:", error);
      setAiMessage("My apologies, the digital consultant is currently restyling. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
    setAiMessage("");
  };

  return (
    <>
      {/* Global AI Search Feature - Integrated Layout */}
      <section className="bg-background dark:bg-neutral-900/50 pt-2 pb-6 md:py-4 border-b border-charcoal/5 dark:border-white/5 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-xl mx-auto">
            <form 
              onSubmit={handleSearch}
              className="group relative flex items-center bg-white/60 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 rounded-full px-6 py-2.5 shadow-sm hover:shadow-md transition-all duration-700"
            >
              <Search className="w-4 h-4 text-charcoal/30 dark:text-white/30 group-focus-within:text-primary transition-colors" />
              <input 
                type="text"
                placeholder="What are you looking for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent px-4 text-sm font-sans font-normal focus:outline-none text-charcoal dark:text-cream placeholder:text-charcoal/20 dark:placeholder:text-white/20"
              />
              <button 
                type="submit" 
                className="flex items-center gap-2 text-charcoal/40 dark:text-white/40 hover:text-primary transition-all duration-500"
              >
                <span className="text-[10px] uppercase tracking-gallery font-semibold hidden sm:inline">Ask AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Results/Chat Overlay */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, scale: 1.02, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: 10 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#D27D6B] flex items-center justify-center px-6 overflow-y-auto pt-20"
          >
            <button 
              onClick={handleClose}
              className="absolute top-10 right-10 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-8 h-8 font-light" />
            </button>

            <div className="max-w-4xl w-full">
              <div className="mb-12 text-center">
                <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4 font-sans">AI Art Consultant</h2>
                <div className="relative inline-block">
                   <p className="text-3xl md:text-4xl font-serif italic text-white leading-relaxed">
                     &ldquo;{loading ? "Searching the studio..." : aiMessage || "Tell me what resonates with you."}&rdquo;
                   </p>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center py-2 overflow-visible">
                  <ArtVault images={sampleArtworks} />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {results.map((art, idx) => (
                    <MotionDiv
                      key={art._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group flex flex-col"
                    >
                      <a href={`/shop/${art.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-background dark:bg-charcoal mb-6 rounded-sm border border-charcoal/5 dark:border-white/5">
                        <img 
                          src={art.imageUrl} 
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                      </a>
                      <h3 className="text-xl font-serif mb-2 text-charcoal dark:text-cream">{art.title}</h3>
                      <p className="text-xs text-wine/80 dark:text-primary/80 italic font-sans leading-relaxed">{art.reason}</p>
                    </MotionDiv>
                  ))}
                </div>
              )}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
}
