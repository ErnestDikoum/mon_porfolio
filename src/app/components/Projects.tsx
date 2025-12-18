"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Mon Portfolio",
      description: "Interface moderne animée avec Next.js 16, TailwindCSS et Framer Motion.",
      link: "#",
      github: "#",
    },
    {
      title: "Dashboard Data",
      description: "UI professionnelle avec visualisations de données et intégration API.",
      link: "#",
      github: "#",
    },
    {
      title: "Application Mobile",
      description: "App Flutter de gestion des dépenses.",
      link: "#",
      github: "#",
    },
    {
      title: "Unway",
      description: "Application mobile pour la gestion de trajets et d’itinéraires.",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mes Projets
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
