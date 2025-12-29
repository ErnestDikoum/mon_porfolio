"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags = [], 
  image, 
  link, 
  github,
  featured = false 
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group h-full"
    >
      {/* Badge "Featured" */}
      {featured && (
        <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
          <Star size={12} fill="currentColor" />
          Featured
        </div>
      )}

      <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-purple-700/40 overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300 h-full flex flex-col">
        
        {/* Image du projet */}
        {image && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                // Image de fallback si l'image n'existe pas
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23a855f7' width='400' height='300'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E" + title + "%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}

        {/* Contenu */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl text-purple-400 font-bold mb-2 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-purple-700/20 text-purple-300 rounded-md border border-purple-700/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Boutons */}
          <div className="flex gap-3">
            {link && (
              <a
                href={link}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all duration-300 group/btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
                <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {github && (
              <a
                href={github}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white font-medium transition-all duration-300 group/btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                <span className="hidden sm:inline">Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}