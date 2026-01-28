"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { GitHubIcon, LinkedInIcon } from "./Icons";

interface Achievement {
  id: string;
  icon: React.ReactNode;
  titleTr: string;
  titleEn: string;
  valueTr: string;
  valueEn: string;
  link?: string;
  color: string;
}

const achievements: Achievement[] = [
  {
    id: "github-repos",
    icon: <GitHubIcon size={24} />,
    titleTr: "GitHub Repoları",
    titleEn: "GitHub Repos",
    valueTr: "15+",
    valueEn: "15+",
    link: "https://github.com/firat404engin?tab=repositories",
    color: "#ffffff",
  },
  {
    id: "projects-completed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    titleTr: "Tamamlanan Projeler",
    titleEn: "Completed Projects",
    valueTr: "10+",
    valueEn: "10+",
    color: "#22c55e",
  },
  {
    id: "experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    titleTr: "Deneyim",
    titleEn: "Experience",
    valueTr: "1+ Yıl",
    valueEn: "1+ Year",
    color: "#3b82f6",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon size={24} />,
    titleTr: "LinkedIn Bağlantıları",
    titleEn: "LinkedIn Connections",
    valueTr: "500+",
    valueEn: "500+",
    link: "https://linkedin.com/in/firatengin404",
    color: "#0A66C2",
  },
  {
    id: "technologies",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    titleTr: "Kullanılan Teknolojiler",
    titleEn: "Technologies Used",
    valueTr: "15+",
    valueEn: "15+",
    color: "#a855f7",
  },
  {
    id: "education",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    titleTr: "Bilgisayar Mühendisliği",
    titleEn: "Computer Engineering",
    valueTr: "GPA 3.25",
    valueEn: "GPA 3.25",
    color: "#f59e0b",
  },
];

export default function Achievements() {
  const { language } = useLanguage();

  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            <span className="gradient-text">
              {language === "tr" ? "Başarılar & İstatistikler" : "Achievements & Stats"}
            </span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm">
            {language === "tr"
              ? "Kariyer yolculuğumdaki önemli kilometre taşları"
              : "Key milestones in my career journey"}
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {achievement.link ? (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <AchievementCard achievement={achievement} language={language} />
                </a>
              ) : (
                <AchievementCard achievement={achievement} language={language} />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function AchievementCard({
  achievement,
  language,
}: {
  achievement: Achievement;
  language: "tr" | "en";
}) {
  return (
    <motion.div
      className="glass rounded-xl p-4 h-full flex flex-col items-center text-center group cursor-pointer"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors"
        style={{ backgroundColor: `${achievement.color}15` }}
      >
        <span style={{ color: achievement.color }}>{achievement.icon}</span>
      </div>

      {/* Value */}
      <div
        className="text-2xl font-bold mb-1"
        style={{ color: achievement.color }}
      >
        {language === "tr" ? achievement.valueTr : achievement.valueEn}
      </div>

      {/* Title */}
      <div className="text-xs text-[var(--color-text-muted)] leading-tight">
        {language === "tr" ? achievement.titleTr : achievement.titleEn}
      </div>
    </motion.div>
  );
}
