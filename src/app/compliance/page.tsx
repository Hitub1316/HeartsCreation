import React from "react";

export const metadata = {
  title: "Data & Compliance | Hearts Creation",
  description: "Transparency and compliance information for the Hearts Creation art studio.",
};

export default function Compliance() {
  return (
    <main className="min-h-screen bg-cream text-charcoal py-32 px-6 sm:px-12 md:px-24 selection:bg-wine/20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-12 leading-tight">
          Data & Compliance
        </h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Commitment
            </h2>
            <p className="font-serif font-light text-xl leading-relaxed text-charcoal/90">
              We are committed to operating with complete transparency and ensuring that our digital studio meets all regulatory requirements for data processing and international art trade.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              GDPR & Global Privacy
            </h2>
            <div className="space-y-4 font-sans font-light text-charcoal/80">
              <p>
                For our international collectors, we adhere to the core principles of GDPR:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Right to Access: You can request a summary of the data we hold about you.</li>
                <li>Right to Rectification: We will update your shipping or contact details upon request.</li>
                <li>Right to Erasure: You may request the deletion of your inquiry history at any time.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Cookie Compliance
            </h2>
            <p className="font-sans font-light text-charcoal/80">
              Our website uses essential session cookies to ensure the site's core functionality, including the art gallery and contact forms. We do not use intrusive tracking cookies for behavioral advertising.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Compliance Contact
            </h2>
            <p className="font-sans font-light text-charcoal/80">
              For any compliance inquiries, data deletion requests, or information regarding international shipping regulations, please contact our studio at <span className="text-wine">heartscreation@gmail.com</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
