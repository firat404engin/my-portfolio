"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TemplateProps {
  children: ReactNode;
}

export default function ProjectTemplate({ children }: TemplateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
