"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getProjectById, getLanguageColor } from "@/lib/github";
import { GitHubIcon, ExternalLinkIcon } from "@/components/Icons";
import { CustomCursor } from "@/components";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const { language, t } = useLanguage();
  const project = getProjectById(params.id as string);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Proje Bulunamadı
          </h1>
          <Link
            href="/#projects"
            className="text-[var(--color-accent)] hover:underline"
          >
            Projelere Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-[var(--color-bg-primary)]">
        {/* Back Button */}
        <motion.div
          className="fixed top-6 left-6 z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="hidden sm:inline">
              {language === "tr" ? "Geri" : "Back"}
            </span>
          </button>
        </motion.div>

        {/* Language Toggle */}
        <motion.div
          className="fixed top-6 right-6 z-50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="hidden sm:inline">
              {language === "tr" ? "Ana Sayfa" : "Home"}
            </span>
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category & Year */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] uppercase">
                {project.category}
              </span>
              {project.year && (
                <span className="text-sm text-[var(--color-text-muted)]">
                  {project.year}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">{project.name[language]}</span>
            </h1>

            {/* Language Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(project.language) }}
              />
              <span className="text-[var(--color-text-secondary)]">
                {project.language}
              </span>
            </div>

            {/* Short Description */}
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {project.description[language]}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-xl hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
            >
              <GitHubIcon size={20} />
              {language === "tr" ? "Kaynak Kodu" : "Source Code"}
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-xl hover:bg-[var(--color-text-secondary)] transition-all duration-300"
              >
                <ExternalLinkIcon size={18} />
                {language === "tr" ? "Canlı Demo" : "Live Demo"}
              </a>
            )}
          </motion.div>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Long Description */}
          {project.longDescription && (
            <motion.div
              className="glass rounded-2xl p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[var(--color-text-secondary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                {language === "tr" ? "Proje Hakkında" : "About Project"}
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {project.longDescription[language]}
              </p>
            </motion.div>
          )}

          {/* Features */}
          {project.features && (
            <motion.div
              className="glass rounded-2xl p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[var(--color-text-secondary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                {language === "tr" ? "Özellikler" : "Features"}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features[language].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[var(--color-text-secondary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </span>
                {language === "tr" ? "Zorluklar & Çözümler" : "Challenges & Solutions"}
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {project.challenges[language]}
              </p>
            </motion.div>
          )}

          {/* Back to Projects */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {language === "tr" ? "Tüm Projelere Dön" : "Back to All Projects"}
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
