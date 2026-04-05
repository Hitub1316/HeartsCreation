import PageHeader from "@/components/PageHeader";
import { getLegalPageBySlug } from "@/sanity/lib/queries";
import SanityContent from "@/components/SanityContent";

export default async function TermsOfUse() {
  const page = await getLegalPageBySlug("terms-of-use");

  return (
    <main className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-background transition-colors duration-700">
      <div className="max-w-4xl mx-auto">
        <PageHeader 
          title={page?.title || "Terms of Use"} 
          subtitle={page?.subtitle || "Our shared values and studio protocols."} 
        />
        
        <div className="mt-16 space-y-12 font-sans font-light text-charcoal/80 dark:text-cream/80 leading-relaxed text-lg transition-colors duration-700">
          {page?.content ? (
            <div className="max-w-none transition-all duration-700">
              <SanityContent value={page.content} />
            </div>
          ) : (
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif italic text-charcoal dark:text-cream transition-colors duration-700">Agreement</h2>
                <p>
                  By accessing and using this website, you agree to be bound by the protocols outlined here. If these terms are not in alignment with your values, we kindly request that you refrain from using our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif italic text-charcoal dark:text-cream transition-colors duration-700">Copyright</h2>
                <p>
                  All artworks, images, and content on this website are the creative property of **Arunima** (&ldquo;Heart&apos;s Creation&rdquo;) and are protected by copyright laws. 
                </p>
              </section>

              <div className="p-6 bg-charcoal/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/10 italic text-sm">
                To manage this content, create a document in your Sanity Studio with the slug <strong>terms-of-use</strong>.
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
