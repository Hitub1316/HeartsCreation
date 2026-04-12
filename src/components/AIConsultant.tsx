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

// High-fidelity fallback artworks for vault resilience (Studio Originals)
const STUDIO_FALLBACKS = [
  "https://cdn.sanity.io/images/qr1teroj/production/eb4b320f4e768bc5193473dae9ab13476b7fba5b-1592x1600.jpg",
  "https://cdn.sanity.io/images/qr1teroj/production/09c23d1164689e07beaa7924b1fbcde42036cf0c-1174x1280.jpg",
  "https://cdn.sanity.io/images/qr1teroj/production/69167f2cbbd51f54a3c98252dd3e382bb51528ee-1158x1280.jpg",
  "https://cdn.sanity.io/images/qr1teroj/production/669cda4e5883baff542584bfbf3064539631d1e7-960x1280.jpg",
  "https://cdn.sanity.io/images/qr1teroj/production/1a5c4bd13a85439e0cab4c56134f6230f3640102-1242x1600.jpg",
  "https://cdn.sanity.io/images/qr1teroj/production/a39a3840d26f163280d3df0246e3fb2f96c31fd4-1122x1600.jpg",
  "https://cdn.sanity.io/images/qr1teroj/production/9341724247c77cac78d0d139f1c3435d5a9f937a-1592x1559.jpg",
  "https://cdn.sanity.io/images/qr1teroj/production/a7380de03b9ad76615719d5ea19339dda73dfe8c-1526x1600.jpg"
];
function ArtVault({ images = [] }: { images: string[] }) {
  // Use fallbacks if no live artworks are available due to CORS/API latency
  const displayImages = images.length > 0 ? images : STUDIO_FALLBACKS;

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible perspective-[1200px]">
      {/* The Tilted Rotating Ring */}
      <MotionDiv
        initial={{ rotateY: 0, rotateX: -10 }}
        animate={{ rotateY: 360, rotateX: -10 }}
        transition={{ 
          rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 0 } // Static tilt
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-48 h-64"
      >
        {displayImages.map((imgUrl, i) => {
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
                transform: `rotateY(${angle}deg) translateZ(500px)`, // Increased depth for better perspective shift
                backfaceVisibility: "visible",
              }}
              className="group"
            >
              {/* Card Container with edge depth and pulse */}
              <div className="relative w-full h-full bg-white/5 backdrop-blur-xl rounded-lg overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-700 group-hover:scale-105 group-hover:border-white/30">
                <img 
                  src={imgUrl} 
                  alt={`Vault Art ${i}`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />
              </div>
            </div>
          );
        })}
      </MotionDiv>
      
      {/* Ambient Floor Shadow/Glow - Enhanced for Dark Brick Red */}
      <div className="absolute bottom-5 w-[1200px] h-[300px] bg-black/40 blur-[120px] rounded-[100%] transform -rotate-x-90 -z-10" />
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

  // Sourcing high-fidelity artwork samples for the transition vault
  useEffect(() => {
    async function fetchSamples() {
      try {
        // Fetch through the server-side proxy to bypass CORS at the edge
        const res = await fetch("/api/artworks/samples");
        const data = await res.json();
        
        if (data.samples && data.samples.length > 0) {
          setSampleArtworks(data.samples);
        } else {
          // Fallback to high-fidelity hardcoded originals if data is blocked
          setSampleArtworks(STUDIO_FALLBACKS);
        }
      } catch (error) {
        console.warn("Vault sourcing falling back to Studio Originals:", error);
        setSampleArtworks(STUDIO_FALLBACKS);
      }
    }
    fetchSamples();
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResults([]);
    setIsOpen(true);

    try {
      // Create a promise for the search and a promise for a minimum editorial delay
      const searchPromise = fetch("/api/ai", {
        method: "POST",
        body: JSON.stringify({ query }),
        headers: { "Content-Type": "application/json" }
      });
      const delayPromise = new Promise(resolve => setTimeout(resolve, 1500));

      // Wait for both to ensure patrons see the high-fidelity 3D transition
      const [res] = await Promise.all([searchPromise, delayPromise]);
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
            className="fixed inset-0 z-[60] bg-[#8B3A34] flex items-center justify-center px-6 overflow-y-auto pt-20"
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
