const fs = require('fs');

const svgContent = fs.readFileSync('src/Heart’s Creation.svg', 'utf-8');

// Extract all path d attributes
const regex = /<path d=\"(.*?)\"/g;
let match;
const paths = [];
while ((match = regex.exec(svgContent)) !== null) {
  paths.push(match[1]);
}

const componentCode = `
"use client";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { pathLength: 0, fill: "rgba(110, 8, 8, 0)" },
  visible: { 
    pathLength: 1, 
    fill: "rgba(247, 78, 86, 0.93)", 
    transition: { 
      pathLength: { duration: 3, ease: "easeInOut" },
      fill: { duration: 1.5, delay: 2 }
    }
  }
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function HeroSVG() {
  return (
    <motion.svg 
      viewBox="0 0 260 38" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      variants={containerVariants as any}
      initial="hidden" 
      animate="visible"
      className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto overflow-visible drop-shadow-sm"
    >
      ${paths.reverse().map(p => `<motion.path d="${p}" stroke="rgba(110, 8, 8, 0.93)" strokeWidth="0.5" variants={itemVariants as any} />`).join('\n      ')}
    </motion.svg>
  );
}
`;

fs.writeFileSync('src/components/HeroSVG.tsx', componentCode.trim());
console.log("HeroSVG built successfully!");
