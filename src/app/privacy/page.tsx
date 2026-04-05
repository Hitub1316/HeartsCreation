import React from "react";

export const metadata = {
  title: "Privacy Policy | Hearts Creation",
  description: "How we handle your data and ensure your privacy at Hearts Creation.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream text-charcoal py-32 px-6 sm:px-12 md:px-24 selection:bg-wine/20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-12 leading-tight">
          Privacy Policy
        </h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Overview
            </h2>
            <p className="font-serif font-light text-xl leading-relaxed text-charcoal/90">
              At Hearts Creation, we value your privacy and are committed to protecting the information you share with us. This policy outlines how we collect, use, and safeguard your data when you interact with our original art portfolio and studio.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Information We Collect
            </h2>
            <div className="space-y-4 font-sans font-light text-charcoal/80">
              <p>
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contact us via WhatsApp for inquiries or purchases.</li>
                <li>Submit a contact form on our website.</li>
                <li>Interact with our AI Art Consultant.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              How We Use Your Data
            </h2>
            <div className="space-y-4 font-sans font-light text-charcoal/80">
              <p>
                Your information is used solely to provide and improve our services, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Facilitating art inquiries and custom commissions.</li>
                <li>Processing transactions via our manual payment flow.</li>
                <li>Responding to customer support requests.</li>
                <li>Improving our website and user experience.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Data Security
            </h2>
            <p className="font-sans font-light text-charcoal/80">
              We implement industry-standard security measures to protect your data. Since payments are handled manually through trusted third-party applications (like WhatsApp), we do not store sensitive payment card details on our servers.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-6 border-b border-charcoal/5 pb-4">
              Contact Us
            </h2>
            <p className="font-sans font-light text-charcoal/80">
              If you have any questions regarding this privacy policy, please reach out to us at <span className="text-wine">heartscreation@gmail.com</span> or via the contact page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
