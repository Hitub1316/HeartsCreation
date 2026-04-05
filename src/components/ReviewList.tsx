"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getApprovedReviews } from "@/sanity/lib/queries";

export default function ReviewList() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getApprovedReviews();
        setReviews(data || []);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  if (loading) {
    return <div className="text-charcoal/40 dark:text-white/40 animate-pulse font-sans py-12 transition-colors duration-700">Retrieving stories from the studio...</div>;
  }

  if (reviews.length === 0) {
    return <div className="text-charcoal/20 dark:text-white/20 font-serif italic py-12 transition-colors duration-700">The guestbook is waiting for its first story.</div>;
  }

  return (
    <div className="space-y-12">
      {reviews.map((review, index) => (
        <motion.div
          key={review._id || index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="group"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-sm sm:text-base uppercase tracking-gallery text-charcoal/80 dark:text-white/90 font-sans font-semibold transition-colors duration-700">
              {review.name}
            </h3>
            <div className="relative pl-6 border-l border-primary/10 group-hover:border-primary/30 transition-colors duration-700">
              <p className="text-base md:text-lg font-sans font-normal text-charcoal/70 dark:text-cream/80 leading-relaxed italic transition-colors duration-700">
                &ldquo;{review.content}&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
