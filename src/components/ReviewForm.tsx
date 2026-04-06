"use client";

import { useState } from "react";
import { MotionDiv, MotionP } from "./ClientMotion";
import { submitReview } from "@/app/actions/reviews";

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    review: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const result = await submitReview({
      name: formData.name,
      content: formData.review
    });

    if (result.success) {
      setFeedback({ type: 'success', message: result.message });
      setFormData({ name: "", review: "" });
    } else {
      setFeedback({ type: 'error', message: result.message });
    }
    setIsSubmitting(false);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-background dark:bg-neutral-900/50 p-12 md:p-20 shadow-sm whisper-border dark:border-white/5 transition-colors duration-700"
    >
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif italic font-light text-charcoal dark:text-cream transition-colors duration-700">
            Share your Experience
          </h2>
          <div className="w-12 h-px bg-charcoal/20 dark:bg-white/20 mx-auto transition-colors duration-700"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-2 group">
            <label className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 group-focus-within:text-primary transition-colors duration-500 font-sans font-medium">
              Your Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-charcoal/10 dark:border-white/10 focus:border-primary outline-none py-3 text-xl font-serif text-charcoal dark:text-cream placeholder:text-charcoal/20 dark:placeholder:text-white/20 transition-all duration-700"
              placeholder="How should we address you?"
            />
          </div>

          <div className="space-y-4 group">
            <label className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 group-focus-within:text-primary transition-colors duration-500 font-sans font-medium">
              The Review
            </label>
            <textarea
              required
              rows={5}
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              className="w-full bg-transparent border border-charcoal/10 dark:border-white/10 focus:border-primary outline-none p-6 text-2xl font-serif italic text-charcoal dark:text-cream placeholder:text-charcoal/20 dark:placeholder:text-white/20 transition-all duration-700 leading-relaxed shadow-inner"
              placeholder="Describe your journey with Hearts Creation art..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-charcoal dark:bg-white text-cream dark:text-charcoal py-6 px-12 text-[11px] uppercase tracking-gallery font-sans font-medium group relative overflow-hidden transition-all duration-700 hover:tracking-[0.4em] disabled:opacity-50 disabled:hover:tracking-gallery shadow-xl shadow-charcoal/5"
          >
            <span className="relative z-10">{isSubmitting ? "Sharing your story..." : "Leave a review"}</span>
            {!isSubmitting && <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>}
          </button>

          {feedback && (
            <MotionP 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center text-[10px] uppercase tracking-gallery font-semibold ${feedback.type === 'success' ? 'text-green-600' : 'text-red-500'}`}
            >
              {feedback.message}
            </MotionP>
          )}
        </form>
      </div>
    </MotionDiv>
  );
}
