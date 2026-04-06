"use client";

import { MotionDiv } from "./ClientMotion";
import SanityContent from "./SanityContent";

export default function ContactInfo({ settings, page }: { settings: any; page?: any }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col items-center text-center w-full bg-background dark:bg-[#301e20] p-10 md:p-16 border whisper-border dark:border-white/5 shadow-sm transition-all duration-700"
    >
      <h1 className="text-4xl md:text-5xl font-serif italic font-light mb-12 tracking-tight text-charcoal dark:text-cream transition-colors duration-700">
        {page?.title || settings?.contactHeading || "Contact"}
      </h1>
      
      <div className="space-y-12 font-sans font-normal transition-colors duration-700 w-full">
        {/* Dynamic Studio Description */}
        {page?.content && (
          <div className="text-lg md:text-xl font-serif italic text-charcoal/80 dark:text-cream/80 max-w-lg mx-auto mb-12 transition-colors duration-700">
            <SanityContent value={page.content} />
          </div>
        )}

        {/* General Inquiries */}
        <div className="group space-y-3">
          <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 font-medium transition-colors duration-700">Direct</h3>
          <a href={`mailto:${settings?.email || "hello@heartscreation.com"}`} className="text-xl md:text-2xl font-serif italic text-charcoal dark:text-cream hover:text-primary transition-all duration-700 font-medium block">
            {settings?.email || "hello@heartscreation.com"}
          </a>
        </div>

        {/* Studio Visit */}
        <div className="group space-y-3">
          <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 font-medium transition-colors duration-700">Studio</h3>
          <p className="text-lg md:text-xl font-serif italic text-charcoal/90 dark:text-cream/90 leading-relaxed max-w-xs mx-auto font-medium transition-colors duration-700">
            {settings?.address || "By appointment in New Delhi."}
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="pt-4">
          <a 
            href={`https://wa.me/${(settings?.whatsappNumber || "918055069122").replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal dark:bg-white/10 dark:hover:bg-primary text-cream text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-wine transition-all duration-700 shadow-lg shadow-charcoal/5"
          >
             {/* WhatsApp SVG path stays the same */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Inquire on WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="group flex flex-col gap-4">
          <h3 className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 font-medium transition-colors duration-700">Social</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-gallery font-semibold text-primary">
            {settings?.instagramUrl && (
              <a href={settings.instagramUrl} target="_blank" className="hover:opacity-60 transition-opacity">Instagram</a>
            )}
            {settings?.etsyUrl && (
              <a href={settings.etsyUrl} target="_blank" className="hover:opacity-60 transition-opacity">Etsy</a>
            )}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
