"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link, github }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateY: 3 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-purple-700/40 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition"
    >
      <h3 className="text-xl text-purple-400 font-bold ">{title}</h3>
      <p className="text-gray-300 mt-3">{description}</p>

      <div className="mt-6 flex gap-4 flex-wrap">
        {link && (
          <a
            href={link}
            className="px-4 py-2 bg-purple-700/20 hover:bg-purple-700/40 rounded-lg text-purple-300 hover:text-white transition"
            target="_blank"
          >
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            className="px-4 py-2 bg-purple-700/20 hover:bg-purple-700/40 rounded-lg text-purple-300 hover:text-white transition"
            target="_blank"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
