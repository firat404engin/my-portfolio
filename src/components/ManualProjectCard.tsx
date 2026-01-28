"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types";
import { getLanguageColor, getCategoryLabel } from "@/lib/github";
import { GitHubIcon, ExternalLinkIcon } from "./Icons";

interface ManualProjectCardProps {
  project: Project;
}

export default function ManualProjectCard({ project }: ManualProjectCardProps) {
  const { t, language } = useLanguage();

  return (
    <article className="glass rounded-xl p-5 card-hover group relative overflow-hidden">
      {/* Category Badge */}
      <div className="absolute top-3 right-3">
        <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)]">
          {getCategoryLabel(project.category)}
        </span>
      </div>

      {/* Header */}
      <div className="mb-3 pr-14">
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-1 cursor-pointer">
            {project.name[language]}
          </h3>
        </Link>

        {/* Language Badge */}
        <div className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: getLanguageColor(project.language) }}
          />
          <span className="text-xs text-[var(--color-text-muted)]">
            {project.language}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed mb-4">
        {project.description[language]}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] rounded-md bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <Link
          href={`/projects/${project.id}`}
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 text-xs font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {language === "tr" ? "Detay" : "Details"}
        </Link>
        
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 text-xs font-medium"
        >
          <GitHubIcon size={14} />
          {t.projects.github}
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 text-xs font-medium"
          >
            <ExternalLinkIcon size={12} />
            {t.projects.liveDemo}
          </a>
        )}
      </div>

      {/* Decorative gradient */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />
    </article>
  );
}
