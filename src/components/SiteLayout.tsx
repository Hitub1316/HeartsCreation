"use client";

import { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const isStudio = pathname?.startsWith("/studio");

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme || systemTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <div className={`flex flex-col min-h-screen ${theme}`}>
      <Navbar settings={settings} theme={theme} toggleTheme={toggleTheme} />
      
      {/* Global Features Area */}
      <div className="pt-24 flex flex-col bg-background dark:bg-neutral-900 transition-colors duration-700">
        <AIConsultant />
        <main className="flex-grow">
          {children}
        </main>
      </div>

      <Footer settings={settings} />
    </div>
  );
}
