import React from "react";

export const metadata = {
  title: "Terms of Use | Hearts Creation",
  description: "Terms and conditions for buying art and using the Hearts Creation studio website.",
};

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-cream text-charcoal py-32 px-6 sm:px-12 md:px-24 selection:bg-wine/20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-12 leading-tight">
          Terms of Use
        </h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Agreement
            </h2>
            <p className="font-serif font-light text-xl leading-relaxed text-charcoal/90">
              By accessing and using <span className="text-wine">Hearts Creation</span>, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Ordering & Payments
            </h2>
            <div className="space-y-4 font-sans font-light text-charcoal/80">
              <p>
                All orders are processed manually through our digital studio inquiry flow:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Artwork prices are listed in INR unless otherwise specified.</li>
                <li>Final confirmation of availability occurs upon WhatsApp inquiry.</li>
                <li>Payments are handled through secure, manual payment links or direct bank transfers.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Intellectual Property
            </h2>
            <p className="font-sans font-light text-charcoal/80">
              All artworks, images, and content on this website are the intellectual property of Arunima and Hearts Creation. You may not reproduce, distribute, or use any content from this site for commercial purposes without explicit written consent.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Shipping & Returns
            </h2>
            <div className="space-y-4 font-sans font-light text-charcoal/80">
              <p>
                As our products are unique handcrafted artworks:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>International and domestic shipping timelines vary by piece and destination.</li>
                <li>All sales are final once the artwork has been shipped from our New Delhi studio.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Modifications
            </h2>
            <p className="font-sans font-light text-charcoal/80">
              Hearts Creation reserves the right to modify these terms at any time without prior notice. Continued use of the site constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
