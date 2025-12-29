"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = (language: string) => {
    const cvFile = language === 'fr' ? '/ErnestDikoum_CV_FR.pdf' : '/ErnestDikoum_CV_EN.pdf';
    
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = cvFile.split('/').pop() || 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsModalOpen(false);
  };

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
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-purple-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-purple-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger mon CV
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modale */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
          >
            {/* Contenu de la modale */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 relative"
            >
              {/* Bouton fermer */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              {/* Titre */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Choisissez la langue
              </h3>

              {/* Options de téléchargement */}
              <div className="grid grid-cols-2 gap-4">
                {/* Version Française */}
                <motion.button
                  onClick={() => handleDownload('fr')}
                  className="flex flex-col items-center justify-center p-6 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-4xl mb-2">🇫🇷</span>
                  <span className="text-lg font-semibold text-gray-900">Version</span>
                  <span className="text-lg font-semibold text-gray-900">Française</span>
                </motion.button>

                {/* Version Anglaise */}
                <motion.button
                  onClick={() => handleDownload('en')}
                  className="flex flex-col items-center justify-center p-6 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-4xl mb-2">🇬🇧</span>
                  <span className="text-lg font-semibold text-gray-900">English</span>
                  <span className="text-lg font-semibold text-gray-900">Version</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}