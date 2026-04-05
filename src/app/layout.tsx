import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIConsultant from "@/components/AIConsultant";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Hearts Creation | Original Handcrafted Art by Arunima",
    template: "%s | Hearts Creation"
  },
  description: "Explore exquisite handcrafted art, acrylic paintings, and mixed media works by Arunima. Boutique art studio based in New Delhi, shipping worldwide.",
  keywords: ["Handcrafted Art", "Arunima Art", "Acrylic Paintings", "Mixed Media", "Custom Art Commissions", "New Delhi Artist"],
  authors: [{ name: "Arunima" }],
  creator: "Arunima",
  publisher: "Hearts Creation",
  metadataBase: new URL("https://hearts-creation.pages.dev"), // Replace with your final domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hearts-creation.pages.dev",
    siteName: "Hearts Creation",
    images: [
      {
        url: "/og-image.png", // Ensure this exists in public/
        width: 1200,
        height: 630,
        alt: "Hearts Creation Art Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hearts Creation | Original Handcrafted Art",
    description: "Original handcrafted art by Arunima. Explore the collection of acrylics and mixed media.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { getSiteSettings } from "@/sanity/lib/queries";

import SiteLayout from "@/components/SiteLayout";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased bg-cream text-charcoal min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <SiteLayout settings={settings}>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}
