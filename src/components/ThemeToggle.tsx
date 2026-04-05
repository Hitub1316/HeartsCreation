"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-charcoal/5 dark:bg-white/10 flex items-center px-1 border border-charcoal/5 dark:border-white/10 transition-colors duration-700 overflow-hidden"
      aria-label="Toggle Theme"
    >
      {/* Sliding Pill */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-sm z-10"
        initial={false}
        animate={{ 
          x: theme === 'dark' ? 32 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-3.5 h-3.5 text-white fill-white" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-white fill-white" />
        )}
      </motion.div>

      {/* Background Icons */}
      <div className="flex w-full justify-between items-center px-1 text-charcoal/20 dark:text-white/20">
        <Sun className="w-3.5 h-3.5" />
        <Moon className="w-3.5 h-3.5" />
      </div>
    </button>
  );
}
