'use client';

import dynamic from 'next/dynamic';

/**
 * Tactical Strategy Implementation:
 * This component dynamically imports 'framer-motion' with SSR disabled, 
 * keeping it out of the critical rendering path and reducing the gzipped worker size.
 */

export const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

export const MotionSection = dynamic(() => import('framer-motion').then((mod) => mod.motion.section), {
  ssr: false,
});

export const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), {
  ssr: false,
});

export const MotionH2 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h2), {
  ssr: false,
});

export const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), {
  ssr: false,
});

export const MotionNav = dynamic(() => import('framer-motion').then((mod) => mod.motion.nav), {
  ssr: false,
});

export const MotionButton = dynamic(() => import('framer-motion').then((mod) => mod.motion.button), {
  ssr: false,
});

export const MotionSVG = dynamic(() => import('framer-motion').then((mod) => mod.motion.svg), {
  ssr: false,
});

export const MotionPath = dynamic(() => import('framer-motion').then((mod) => mod.motion.path), {
  ssr: false,
});

export const MotionSpan = dynamic(() => import('framer-motion').then((mod) => mod.motion.span), {
  ssr: false,
});

export const MotionA = dynamic(() => import('framer-motion').then((mod) => mod.motion.a), {
  ssr: false,
});

export const MotionForm = dynamic(() => import('framer-motion').then((mod) => mod.motion.form), {
  ssr: false,
});

export const MotionInput = dynamic(() => import('framer-motion').then((mod) => mod.motion.input), {
  ssr: false,
});

export const MotionTextArea = dynamic(() => import('framer-motion').then((mod) => mod.motion.textarea), {
  ssr: false,
});

export const MotionUl = dynamic(() => import('framer-motion').then((mod) => mod.motion.ul), {
  ssr: false,
});

export const MotionLi = dynamic(() => import('framer-motion').then((mod) => mod.motion.li), {
  ssr: false,
});

export const MotionMain = dynamic(() => import('framer-motion').then((mod) => mod.motion.main), {
  ssr: false,
});

export const AnimatePresence = dynamic(() => import('framer-motion').then((mod) => mod.AnimatePresence), {
  ssr: false,
});
