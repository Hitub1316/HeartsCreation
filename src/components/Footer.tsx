import Link from "next/link";

export default function Footer({ settings }: { settings?: any }) {
  const tagline = settings?.tagline || "There is art in every heart.";
  const instagramUrl = settings?.instagramUrl || "https://www.instagram.com/hearts_creations/";
  const etsyUrl = settings?.etsyUrl || "https://www.etsy.com/in-en/shop/HeartsCreationsByAJ?ref=search_shop_redirect&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

  return (
    <footer className="bg-surface py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-serif italic mb-8 text-charcoal tracking-tight">Heart&apos;s Creation</h2>
            <p className="font-sans font-light text-charcoal/40 leading-relaxed italic max-w-sm">
              {tagline}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/20 mb-10">Studio</h3>
            <ul className="space-y-6">
              <li><Link href="/shop" className="text-[10px] uppercase tracking-gallery text-charcoal/60 hover:text-primary transition-colors">The Collection</Link></li>
              <li><Link href="/about" className="text-[10px] uppercase tracking-gallery text-charcoal/60 hover:text-primary transition-colors">The Artist</Link></li>
              <li><Link href="/contact" className="text-[10px] uppercase tracking-gallery text-charcoal/60 hover:text-primary transition-colors">Inquiry</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4">
            <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/20 mb-10">Connect</h3>
            <div className="flex flex-col gap-6">
              <a href={instagramUrl} target="_blank" className="text-[10px] uppercase tracking-gallery text-charcoal/60 hover:text-primary transition-colors">Instagram</a>
              <a href={etsyUrl} target="_blank" className="text-[10px] uppercase tracking-gallery text-charcoal/60 hover:text-primary transition-colors">Etsy Shop</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-[10px] uppercase tracking-gallery text-charcoal/20">
            &copy; {new Date().getFullYear()} Heart&apos;s Creation. All rights reserved.
          </div>
          <div className="text-[10px] uppercase tracking-gallery text-charcoal/20 flex items-center gap-4">
            <span>Site by Arunima</span>
            <Link href="/studio" className="w-1.5 h-1.5 bg-primary/20 rounded-full hover:bg-primary transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
