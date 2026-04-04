"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImg from "@/assets/logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ settings }: { settings?: any }) {
  const pathname = usePathname();
  const instagramUrl = settings?.instagramUrl || "https://www.instagram.com/hearts_creations/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center">
        {/* Logo & Brand - Fixed Width/Flex to stay left */}
        <div className="flex-shrink-0 flex items-center gap-6">
          <Link 
            href="/" 
            className="w-12 h-12 relative rounded-full overflow-hidden border whisper-border hover:scale-105 transition-transform duration-700 shadow-sm group"
          >
            <Image 
              src={logoImg} 
              alt="Logo" 
              fill 
              className="object-cover"
            />
          </Link>
          <Link href="/" className="group hidden lg:block">
            <h1 className="text-2xl md:text-3xl font-serif font-light text-charcoal group-hover:text-primary transition-colors duration-700 tracking-tight">
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
                      isActive ? "text-primary" : "text-charcoal/40 hover:text-charcoal"
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

        {/* Action / Connect - Removed Register but keeping div for Flex spacing balance */}
        <div className="flex-shrink-0 w-48 hidden lg:flex justify-end invisible md:visible">
          {/* Empty space to balance the logo on the left */}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden ml-auto text-charcoal opacity-40 hover:opacity-100 transition-opacity p-2">
          <div className="w-5 h-px bg-charcoal mb-1.5"></div>
          <div className="w-5 h-px bg-charcoal"></div>
        </button>
      </div>
    </nav>
  );
}
