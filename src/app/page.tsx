"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import GlowButton from "./components/GlowButton";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Fix mismatch SSR/CSR

  return (
    <main className="bg-gradient-to-b from-black via-[#0a0a1a] to-black">

      {/* =========================
          SECTION HERO
      ========================== */}
      <AnimatedSection className="min-h-screen flex flex-col items-center justify-center px-6 relative">

        {/* Halo subtil derrière le texte */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-[400px] h-[150px] rounded-full bg-purple-600/10 blur-[90px]" />
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center tracking-tight relative z-10 text-white"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Bonjour et  <span className="text-purple-500">bienvenue</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-center text-lg md:text-xl text-gray-300 max-w-2xl relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Vous vous trouvez sur mon portfolio.
        </motion.p>

        <motion.div
          className="mt-10 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <GlowButton href="#projects">
            Voir mes projets
          </GlowButton>
        </motion.div>
      </AnimatedSection>

      {/* =========================
          SECTIONS DU PORTFOLIO
      ========================== */}
      <AnimatedSection className="min-h-screen">
        <About />
      </AnimatedSection>

      <AnimatedSection className="min-h-screen">
        <Projects />
      </AnimatedSection>

      <AnimatedSection className="min-h-screen">
        <Contact />
      </AnimatedSection>

    </main>
  );
}
