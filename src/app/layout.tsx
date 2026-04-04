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
  title: "Hearts Creation",
  description: "Original handcrafted art by Arunima",
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
