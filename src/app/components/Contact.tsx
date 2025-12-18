"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 flex flex-col items-center">
      
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Me contacter
      </motion.h2>

      <form className="w-full max-w-xl space-y-6 bg-black/20 p-8 rounded-2xl border border-purple-600/30 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]">
        
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full bg-black/40 p-4 rounded-xl border border-purple-500/40 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 focus:outline-none transition"
        />

        <input
          type="email"
          placeholder="Votre email"
          className="w-full bg-black/40 p-4 rounded-xl border border-purple-500/40 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 focus:outline-none transition"
        />

        <textarea
          placeholder="Votre message"
          className="w-full bg-black/40 p-4 rounded-xl border border-purple-500/40 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 focus:outline-none h-40 resize-none transition"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] transition-all"
        >
          Envoyer
        </motion.button>

      </form>

      <div className="mt-12 text-gray-400 text-center">
        Ou écris-moi directement à :  
        <a href="mailto:ernestito.dikoum@gmail.com" className="text-purple-400 ml-2 hover:underline">
          ernestito.dikoum@gmail.com
        </a>
      </div>

    </section>
  );
}
