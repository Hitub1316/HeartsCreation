import { getSiteSettings, getStudioPageBySlug } from "@/sanity/lib/queries";
import ContactInfo from "@/components/ContactInfo";

export const runtime = "edge";
// static by default

export default async function Contact() {
  const [settings, page] = await Promise.all([
    getSiteSettings(),
    getStudioPageBySlug("contact")
  ]);

  return (
    <main className="min-h-screen pt-10 md:pt-24 pb-24 px-6 sm:px-12 md:px-24 selection:bg-wine/20 bg-background transition-colors duration-700">
      <div className="max-w-7xl mx-auto flex justify-center">
        {/* Contact Info Wrapper */}
        <div className="max-w-xl w-full">
          <ContactInfo settings={settings} page={page} />
        </div>
      </div>
    </main>
  );
}
