import Link from "next/link";

export default function Footer({ settings }: { settings?: any }) {
  const tagline = settings?.tagline || "There is art in every heart.";
  const instagramUrl = settings?.instagramUrl || "https://www.instagram.com/hearts_creations/";
  const etsyUrl = settings?.etsyUrl || "https://www.etsy.com/in-en/shop/HeartsCreationsByAJ?ref=search_shop_redirect&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

  return (
    <footer className="py-24 md:py-32 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32">
          
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5">
            <h2 className="text-3xl font-serif italic mb-8 text-charcoal dark:text-cream tracking-tight transition-colors duration-700">Heart&apos;s Creation</h2>
            <p className="font-sans font-light text-charcoal/40 dark:text-white/40 leading-relaxed italic max-w-sm transition-colors duration-700">
              {tagline}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/20 dark:text-white/20 mb-10 transition-colors duration-700">Studio</h3>
            <ul className="space-y-6">
              <li><Link href="/shop" className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 hover:text-primary transition-colors duration-700">The Collection</Link></li>
              <li><Link href="/about" className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 hover:text-primary transition-colors duration-700">The Artist</Link></li>
              <li><Link href="/contact" className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 hover:text-primary transition-colors duration-700">Inquiry</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/20 dark:text-white/20 mb-10 transition-colors duration-700">Connect</h3>
            <div className="flex flex-col gap-6">
              <a href={instagramUrl} target="_blank" className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 hover:text-primary transition-colors duration-700">Instagram</a>
              <a href={etsyUrl} target="_blank" className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 hover:text-primary transition-colors duration-700">Etsy Shop</a>
              <Link href="/reviews" className="text-[10px] uppercase tracking-gallery text-charcoal/60 dark:text-white/60 hover:text-primary transition-colors duration-700">Patron Reflections</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pt-12 border-t border-charcoal/5 dark:border-white/5 transition-all duration-700">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-12">
            <div className="text-[10px] uppercase tracking-gallery text-charcoal/20 dark:text-white/20 transition-colors duration-700 text-center md:text-left">
              &copy; {new Date().getFullYear()} Heart&apos;s Creation. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 hover:text-primary transition-colors duration-700">Privacy Policy</Link>
              <Link href="/terms" className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 hover:text-primary transition-colors duration-700">Terms of Use</Link>
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-gallery text-charcoal/20 dark:text-white/20 flex items-center gap-4 transition-colors duration-700">
            <span>Site by Hitu Bharal</span>
            <Link href="/studio" className="w-1.5 h-1.5 bg-primary/20 dark:bg-white/20 rounded-full hover:bg-primary transition-colors duration-700" />
          </div>
        </div>
      </div>
    </footer>
  );
}
