"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIConsultant from "./AIConsultant";

export default function SiteLayout({ 
  children, 
  settings 
}: { 
  children: React.ReactNode;
  settings?: any;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar settings={settings} />
      
      {/* Global Features Area */}
      <div className="pt-24 flex flex-col">
        <AIConsultant />
        <main className="flex-grow">
          {children}
        </main>
      </div>

      <Footer settings={settings} />
    </div>
  );
}
