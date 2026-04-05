import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import Image from "next/image";
import Link from "next/link";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 dark:bg-[#492428]/40 backdrop-blur-xl border-b border-charcoal/5 dark:border-white/5 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center">
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="w-10 h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden border whisper-border dark:border-white/10 hover:scale-105 transition-transform duration-700 shadow-sm"
            >
              <Image
                src={logoImg}
                alt="Logo"
                fill
                className="object-cover"
              />
            </Link>
            <Link href="/" className="group">
              <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-serif font-light text-charcoal dark:text-cream group-hover:text-primary transition-colors duration-700 tracking-tight whitespace-nowrap">
                Heart&apos;s Creation
              </h1>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="flex-grow flex justify-center">
            <ul className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`relative text-[10px] uppercase tracking-gallery font-sans transition-colors duration-700 ${isActive ? "text-primary dark:text-primary" : "text-charcoal/40 dark:text-white/40 hover:text-charcoal dark:hover:text-white"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Action / Theme Toggle */}
          <div className="flex-shrink-0 flex items-center justify-end scale-90 sm:scale-100">
            {toggleTheme && (
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-4 p-2 text-charcoal dark:text-white opacity-60 hover:opacity-100 transition-opacity"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay - MOVED OUTSIDE NAV FOR ABSOLUTE OPACITY */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[70] w-[80%] max-w-sm bg-[#fdf9f4] dark:bg-[#492428] opacity-100 shadow-[0_0_50px_rgba(0,0,0,0.3)] md:hidden flex flex-col p-10 border-l border-charcoal/5 dark:border-white/5 transition-colors duration-700"
            >
              <div className="flex justify-end mb-12">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 text-charcoal dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <X className="w-8 h-8 stroke-[1px]" />
                </button>
              </div>

              <ul className="space-y-10">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-xl sm:text-2xl uppercase tracking-[0.3em] font-serif italic transition-colors duration-500 block ${isActive ? "text-primary" : "text-charcoal dark:text-cream"
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto pt-10 border-t border-charcoal/5 dark:border-white/5">
                <p className="text-[10px] uppercase tracking-gallery text-charcoal/40 dark:text-white/40 mb-2">Heart's Creation</p>
                <div className="w-8 h-px bg-primary/30"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
