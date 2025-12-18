"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}
