import ReviewList from "@/components/ReviewList";
import ReviewForm from "@/components/ReviewForm";
import SiteLayout from "@/components/SiteLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Hearts Creation",
  description: "What our patrons say about the art of Arunima and Hearts Creation.",
};

import PageHeader from "@/components/PageHeader";

export default function ReviewPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Universal Page Header */}
        <PageHeader 
          title="Patron Reflections" 
          subtitle="A GUESTBOOK OF STORIES & SENSATIONS"
          className="mb-20"
        />

        <div className="space-y-32">
          {/* Review List */}
          <div className="max-w-4xl">
            <ReviewList />
          </div>

          {/* Feedback Form */}
          <div className="pt-24 border-t border-charcoal/5 dark:border-white/5 transition-colors duration-700">
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
}
