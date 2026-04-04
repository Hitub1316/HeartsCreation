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
    <>
      <Navbar settings={settings} />
      <AIConsultant />
      <main className="flex-grow">
        {children}
      </main>
      <Footer settings={settings} />
    </>
  );
}
