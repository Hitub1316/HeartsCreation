import { getSiteSettings } from "@/sanity/lib/queries";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const revalidate = 0; // ensure fresh data on every request

export default async function Contact() {
  const settings = await getSiteSettings();

  return (
    <main className="min-h-screen bg-cream text-charcoal py-40 px-6 sm:px-12 md:px-24 selection:bg-wine/20">
      <div className="max-w-7xl mx-auto flex justify-center">

        {/* Contact Info Wrapper */}
        <div className="max-w-xl w-full">
          <ContactInfo settings={settings} />
        </div>

      </div>
    </main>
  );
}
