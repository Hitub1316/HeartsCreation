import ReviewList from "@/components/ReviewList";
import ReviewForm from "@/components/ReviewForm";
import SiteLayout from "@/components/SiteLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Hearts Creation",
  description: "What our patrons say about the art of Arunima and Hearts Creation.",
};

export default function ReviewPage() {
  return (
    <SiteLayout>
      <div className="pt-40 pb-24 bg-surface-low min-h-screen">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Header */}
          <div className="max-w-3xl space-y-2">
            <h1 className="text-5xl md:text-7xl font-serif font-light text-charcoal tracking-tight">
              Patron <span className="italic">Reflections</span>
            </h1>
            <p className="text-[10px] md:text-[11px] font-sans text-charcoal/40 leading-relaxed uppercase tracking-widest font-medium">
              A GUESTBOOK OF STORIES & SENSATIONS
            </p>
          </div>

          {/* Review List */}
          <div className="max-w-4xl pt-8">
            <ReviewList />
          </div>

          {/* Feedback Form */}
          <div className="pt-24 border-t border-charcoal/5">
            <ReviewForm />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
