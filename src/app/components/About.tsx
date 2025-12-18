"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-purple-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        À propos de moi
      </motion.h2>

      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-12">

        {/* Avatar futuriste */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="relative cursor-pointer"
        >
          <div className="absolute -inset-2 rounded-full bg-purple-600/40 blur-xl animate-pulse"></div>
          <img
            src="/avatar.png"
            alt="Ernest avatar"
            className="relative w-40 h-40 rounded-full border border-purple-400 shadow-lg"
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col"
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
            Moi c'est <span className="text-purple-400 font-medium">Ernest DIKOUM</span>, ingénieur logiciel, développeur passionné
            par les technologies modernes. J'aime créer des expériences web futuristes, fluides et élégantes, alliant performance, design et innovation.
            <br /><br />
            Mon objectif ? Construire des solutions numériques <b className="text-purple-400">créatives</b>, <b className="text-purple-400">rapides</b> et <b className="text-purple-400">impactantes</b>.
          </p>

          {/* Bouton centré et un peu plus bas */}
          <div className="flex justify-center mt-8">
            <motion.a
              href="/ErnestDikoum_CV.pdf"
              download
              className="px-8 py-4 bg-purple-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-purple-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger mon CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
