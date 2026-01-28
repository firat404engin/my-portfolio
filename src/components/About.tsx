"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { techStack } from "@/lib/data";
import { getTechIcon } from "./TechIcons";

export default function About() {
  const { t } = useLanguage();

  const categories = [
    { key: "backend", label: t.about.backend },
    { key: "database", label: t.about.database },
    { key: "frontend", label: t.about.frontend },
    { key: "devops", label: t.about.devops },
    { key: "it", label: t.about.it },
  ] as const;

  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="space-y-6">
            <motion.div
              className="glass rounded-2xl p-8 card-hover"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                {t.about.whoAmI}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {t.about.intro}
              </p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8 card-hover"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                {t.about.journey}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {t.about.journeyText}
              </p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8 card-hover"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                {t.about.currentFocus}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {t.about.currentText}
              </p>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 card-hover">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                {t.about.techStack}
              </h3>

              <div className="space-y-5">
                {categories.map((category, categoryIndex) => {
                  const items = techStack.filter((item) => item.category === category.key);
                  if (items.length === 0) return null;

                  return (
                    <motion.div
                      key={category.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * categoryIndex }}
                    >
                      <h4 className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                        {category.label}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((tech, techIndex) => (
                          <motion.div
                            key={tech.name}
                            className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-accent-muted)] transition-all duration-300 cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.05 * techIndex }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                              {getTechIcon(tech.icon, 22)}
                            </div>
                            <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
