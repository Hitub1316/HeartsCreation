import Link from "next/link";
import { getBlogPostBySlug } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function JournalPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug) as any;

  // Fallback for demo if not in Sanity
  const isDemo = !post;
  const displayTitle = post?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const displayDate = post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "March 20, 2024";

  return (
    <main className="min-h-screen bg-surface text-charcoal py-32 px-6 sm:px-12 md:px-24 selection:bg-primary/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="mb-16 flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest text-charcoal/40">
          <Link href="/journal" className="hover:text-charcoal transition-colors">Journal</Link>
          <span className="w-4 h-px bg-charcoal/20"></span>
          <span className="text-charcoal/80">Reflections</span>
        </div>

        <article className="text-center">
          <header className="mb-20">
            <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40 mb-6 font-medium">
              {displayDate}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-12 leading-tight">
              {displayTitle}
            </h1>
            <div className="w-20 h-px bg-wine/30 mx-auto"></div>
          </header>

          <div className="font-sans font-light text-lg md:text-xl leading-relaxed text-charcoal/70 text-left space-y-8 max-w-2xl mx-auto">
            {isDemo ? (
              <>
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-wine">
                  Every creation begins with a silent dialogue between the artist and the canvas. This journal entry is a placeholder for the deeper insights and stories behind each brushstroke. 
                </p>
                <p>
                  In the coming weeks, this space will be filled with reflections on the creative process, the philosophy of space, and the quiet moments of inspiration that fuel Heart&apos;s Creation.
                </p>
                <div className="py-12 italic font-serif text-2xl text-charcoal/90 border-y border-charcoal/5 my-12">
                  &ldquo;Art evokes the mystery without which the world would not exist.&rdquo;
                </div>
                <p>
                  Stay tuned for stories on how specific pieces like &apos;Where Silence Blooms&apos; came to life, from the initial sketch to the final layer of glazes.
                </p>
              </>
            ) : (
              <p>Content from Sanity will be rendered here...</p>
            )}
          </div>

          <footer className="mt-32 pt-12 border-t border-charcoal/5">
            <Link href="/journal" className="text-xs uppercase tracking-[0.2em] font-medium text-wine hover:text-charcoal transition-colors">
              Back to Journal
            </Link>
          </footer>
        </article>

      </div>
    </main>
  );
}
