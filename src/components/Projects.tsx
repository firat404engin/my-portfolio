"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { manualProjects } from "@/lib/github";
import { GitHubRepo, Project } from "@/types";
import ManualProjectCard from "./ManualProjectCard";
import ProjectCard from "./ProjectCard";
import { GitHubIcon } from "./Icons";

export default function Projects() {
  const { t } = useLanguage();
  const [pinnedRepos, setPinnedRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("/api/github");
        if (response.ok) {
          const data = await response.json();
          setPinnedRepos(data);
        }
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Manuel Projeler */}
        <div className="mb-10">
          <motion.h3
            className="text-lg font-semibold text-[var(--color-text-primary)] mb-5 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full"></span>
            {t.projects.featured}
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-4">
            {manualProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ManualProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Pinned Repos */}
        {pinnedRepos.length > 0 && (
          <div>
            <motion.h3
              className="text-lg font-semibold text-[var(--color-text-primary)] mb-5 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full"></span>
              {t.projects.pinnedRepos}
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pinnedRepos.map((repo: GitHubRepo, index: number) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard repo={repo} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* View More Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/firat404engin?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] rounded-xl hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon size={16} />
            {t.projects.viewAll}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
