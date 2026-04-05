"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImg from "@/assets/logo.jpg";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Reviews", path: "/reviews" },
];

export default function Navbar({ 
  settings,
  theme = 'light',
  toggleTheme
}: { 
  settings?: any;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}) {
  const pathname = usePathname();
  const instagramUrl = settings?.instagramUrl || "https://www.instagram.com/hearts_creations/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/80 dark:bg-black/60 backdrop-blur-xl border-b border-charcoal/5 dark:border-white/5 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center">
        {/* Logo & Brand - Fixed Width/Flex to stay left */}
        <div className="flex-shrink-0 flex items-center gap-6">
          <Link 
            href="/" 
            className="w-12 h-12 relative rounded-full overflow-hidden border whisper-border dark:border-white/10 hover:scale-105 transition-transform duration-700 shadow-sm group"
          >
            <Image 
              src={logoImg} 
              alt="Logo" 
              fill 
              className="object-cover dark:invert transition-all duration-700"
            />
          </Link>
          <Link href="/" className="group flex items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-light text-charcoal dark:text-cream group-hover:text-primary dark:group-hover:text-primary transition-colors duration-700 tracking-tight whitespace-nowrap">
              Heart&apos;s Creation
            </h1>
          </Link>
        </div>

        {/* Desktop Links - Centered using margin-auto */}
        <div className="flex-grow flex justify-center">
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className={`relative text-[10px] uppercase tracking-gallery font-sans transition-colors duration-700 ${
                      isActive ? "text-primary dark:text-primary" : "text-charcoal/40 dark:text-white/40 hover:text-charcoal dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Action / Theme Toggle */}
        <div className="flex-shrink-0 flex items-center justify-end">
          {toggleTheme && (
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden ml-6 text-charcoal dark:text-white opacity-40 hover:opacity-100 transition-opacity p-2">
          <div className="w-5 h-px bg-charcoal dark:bg-white mb-1.5"></div>
          <div className="w-5 h-px bg-charcoal dark:bg-white"></div>
        </button>
      </div>
    </nav>
  );
}
