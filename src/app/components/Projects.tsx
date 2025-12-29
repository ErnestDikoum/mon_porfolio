"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Mon Portfolio",
      description: "Interface moderne animée avec Next.js 16, TailwindCSS et Framer Motion.",
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      image: "/projects/portfolio.png",
      link: "https://mon-porfolio-alpha.vercel.app/",
      github: "https://github.com/ErnestDikoum/mon_porfolio",
      featured: true,
    },
    {
      title: "Medic-360 — Application web santé",
      description: "Medic-360 est une application web innovante dédiée à la gestion et à la consultation d’informations médicales de manière simple, rapide et accessible depuis n’importe quel appareil.",
      tags: ["React", "Laravel", "API", "Sqlite"],
      image: "/projects/medic-360.png",
      link: "https://medic-360.netlify.app/",
      github: "#",
      featured: false,
    },
    {
      title: "Application web de gestion de soutenances",
      description: "App Flutter de gestion des dépenses avec authentification et synchronisation cloud.",
      tags: ["Python", "Django", "Postgrest"],
      image: "/projects/mobile-app.png",
      link: "https://id-preview--501c1673-94cb-4926-bc73-4b700e205204.lovable.app/ma-soutenance",
      github: "#",
      featured: true,
    },
    
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          Mes Projets
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Une sélection de mes réalisations récentes, alliant créativité et performance technique.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 mb-4">Envie d'en voir plus ?</p>
        <a
          href="https://github.com/ErnestDikoum"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 rounded-lg text-purple-300 hover:text-white transition-all duration-300"
        >
          Visitez mon GitHub
        </a>
      </motion.div>
    </section>
  );
}