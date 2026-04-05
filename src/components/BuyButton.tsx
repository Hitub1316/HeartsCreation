"use client";

import { useState } from "react";

interface BuyButtonProps {
  title: string;
  price: number;
  image: string;
  slug: string;
  available: boolean;
}

export default function BuyButton({ title, price, image, slug, available }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!available) return;
    setLoading(true);
    
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price, image, slug }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout failed:", data.error);
        alert("Payment system is currently in development. Please contact the artist directly.");
      }
    } catch (err) {
      console.error("Error redirecting to checkout:", err);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleCheckout}
      disabled={!available || loading}
      className={`w-full py-5 text-xs uppercase tracking-[0.3em] font-medium transition-all duration-700 shadow-xl mb-6 ${
        available && !loading
          ? "bg-charcoal dark:bg-white/10 text-cream dark:text-cream hover:bg-wine dark:hover:bg-primary cursor-pointer shadow-charcoal/10" 
          : "bg-charcoal/20 dark:bg-white/5 text-charcoal/40 dark:text-white/20 cursor-not-allowed"
      }`}
    >
      {loading ? "Processing..." : available ? "Buy Now" : "Sold Out"}
    </button>
  );
}
