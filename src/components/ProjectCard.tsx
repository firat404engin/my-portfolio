"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GitHubRepo } from "@/types";
import { formatRepoName, getLanguageColor } from "@/lib/github";
import { GitHubIcon, StarIcon, ForkIcon, ExternalLinkIcon } from "./Icons";

interface ProjectCardProps {
  repo: GitHubRepo;
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  const { t } = useLanguage();
  const hasHomepage = repo.homepage && repo.homepage.length > 0;

  const truncateDescription = (desc: string | null, maxLength: number = 120) => {
    if (!desc) return t.projects.noDescription;
    if (desc.length <= maxLength) return desc;
    return desc.slice(0, maxLength).trim() + "...";
  };

  return (
    <article className="glass rounded-xl p-4 card-hover group">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-1">
            {formatRepoName(repo.name)}
          </h3>

          {/* Language Badge */}
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: getLanguageColor(repo.language) }}
              />
              <span className="text-xs text-[var(--color-text-muted)]">
                {repo.language}
              </span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
          <div className="flex items-center gap-1" title="Stars">
            <StarIcon size={12} className="text-yellow-500" />
            <span className="text-xs">{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1" title="Forks">
            <ForkIcon size={12} />
            <span className="text-xs">{repo.forks_count}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed mb-4 min-h-[2.5rem]">
        {truncateDescription(repo.description, 100)}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-1.5 py-0.5 text-[10px] rounded-md bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)]"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 text-xs font-medium"
        >
          <GitHubIcon size={12} />
          {t.projects.github}
        </a>

        {hasHomepage && (
          <a
            href={repo.homepage!}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 text-xs font-medium"
          >
            <ExternalLinkIcon size={10} />
            {t.projects.liveDemo}
          </a>
        )}
      </div>
    </article>
  );
}
