"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-xl bg-black/80 border-b border-white/10 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 border-white/20" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-purple-500 hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] transition"
        >
          Ernest.dev
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-white/90">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-purple-400 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.7)] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-6 flex flex-col justify-between items-center"
          >
            <span
              className={`block h-0.5 w-full bg-gray-300 rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-300 rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-300 rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4 text-white">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-400 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
