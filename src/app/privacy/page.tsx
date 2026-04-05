import PageHeader from "@/components/PageHeader";
import { getLegalPageBySlug } from "@/sanity/lib/queries";
import SanityContent from "@/components/SanityContent";
import Link from "next/link";

export default async function PrivacyPolicy() {
  const page = await getLegalPageBySlug("privacy-policy");

  return (
    <main className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-background transition-colors duration-700">
      <div className="max-w-4xl mx-auto">
        <PageHeader 
          title={page?.title || "Privacy Policy"} 
          subtitle={page?.subtitle || "How we honor your space and data."} 
        />
        
        <div className="mt-16 space-y-12 font-sans font-light text-charcoal/80 dark:text-cream/80 leading-relaxed text-lg transition-colors duration-700">
          {page?.content ? (
            <div className="max-w-none transition-all duration-700">
              <SanityContent value={page.content} />
            </div>
          ) : (
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif italic text-charcoal dark:text-cream transition-colors duration-700">Introduction</h2>
                <p>
                  Your privacy is as sacred as the art we create. This policy describes how **Heart&apos;s Creation** (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and shares your personal information when you visit our studio website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif italic text-charcoal dark:text-cream transition-colors duration-700">Information We Collect</h2>
                <p>
                  We only collect information that you voluntarily provide to us when you inquire about an artwork, message us via WhatsApp, or submit a review.
                </p>
              </section>

              <div className="p-6 bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 italic text-sm">
                To manage this content, create a document in your Sanity Studio with the slug <strong>privacy-policy</strong>.
              </div>
            </div>
          )}

          <section className="pt-12 border-t border-charcoal/5 dark:border-white/5">
            <p className="text-sm font-serif italic text-charcoal/40 dark:text-white/40">
              Last updated: {page?._updatedAt ? new Date(page._updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
