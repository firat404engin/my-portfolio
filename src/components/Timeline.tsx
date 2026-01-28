"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface TimelineItem {
  id: string;
  year: string;
  titleTr: string;
  titleEn: string;
  roleTr?: string;
  roleEn?: string;
  type: "work" | "education";
  location?: string;
  descriptionTr: string | string[];
  descriptionEn: string | string[];
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    year: "02.2025 – 07.2025",
    titleTr: "Seranit",
    titleEn: "Seranit",
    roleTr: "Yazılım Stajyeri",
    roleEn: "Software Intern",
    type: "work",
    location: "İstanbul, Türkiye",
    descriptionTr: "IFS ve Bimser CSP sistemlerinde veri yönetimi ve süreç optimizasyonu. C#/.NET ile masaüstü ve web uygulamaları, ASP.NET MVC5 ile e-ticaret sistemleri geliştirdim. Oracle SQL, Entity Framework ve Selenium kullandım.",
    descriptionEn: "Data management and process optimization in IFS and Bimser CSP systems. Developed desktop and web applications with C#/.NET, e-commerce systems with ASP.NET MVC5. Used Oracle SQL, Entity Framework and Selenium.",
    skills: ["C#", ".NET", "ASP.NET MVC5", "Oracle SQL", "Bimser CSP", "Entity Framework"],
  },
  {
    id: "2",
    year: "05.2024 – 08.2024",
    titleTr: "Seranit",
    titleEn: "Seranit",
    roleTr: "BT Stajyeri",
    roleEn: "IT Intern",
    type: "work",
    location: "İstanbul, Türkiye",
    descriptionTr: "Active Directory ile kullanıcı yönetimi, donanım/ağ sorun giderme ve IT destek. Sistem güncellemeleri, güvenlik yamaları ve çevre birimleri kurulumunda görev aldım.",
    descriptionEn: "User management with Active Directory, hardware/network troubleshooting and IT support. Handled system updates, security patches and peripheral installations.",
    skills: ["Active Directory", "IT Support", "Networking", "Hardware"],
  },
  {
    id: "3",
    year: "2022 - 2025",
    titleTr: "Namık Kemal Üniversitesi",
    titleEn: "Namık Kemal University",
    type: "education",
    descriptionTr: "Bilgisayar Mühendisliği Lisans • GANO: 3.25",
    descriptionEn: "Computer Engineering BSc • GPA: 3.25",
  },
  {
    id: "4",
    year: "2018 - 2020",
    titleTr: "Maltepe Üniversitesi",
    titleEn: "Maltepe University",
    type: "education",
    descriptionTr: "Bilgisayar Programcılığı Ön Lisans • GANO: 3.00",
    descriptionEn: "Computer Programming Associate Degree • GPA: 3.00",
  },
];

export default function Timeline() {
  const { t, language } = useLanguage();

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="gradient-text">{t.timeline.title}</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm">
            {t.timeline.subtitle}
          </p>
        </motion.div>

        {/* Modern Timeline - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{t.timeline.work}</h3>
            </motion.div>

            <div className="space-y-4">
              {timelineData
                .filter((item) => item.type === "work")
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="group relative pl-6 border-l-2 border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-bg-secondary)] border-2 border-[var(--color-accent)]/50 group-hover:border-[var(--color-accent)] transition-all" />
                    
                    <div className="glass rounded-xl p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded-md">
                          {item.year}
                        </span>
                        {item.location && (
                          <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.location}
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-base font-semibold text-[var(--color-text-primary)] mb-1">
                        {language === "tr" ? item.titleTr : item.titleEn}
                      </h4>
                      
                      {(item.roleTr || item.roleEn) && (
                        <p className="text-sm text-[var(--color-accent)] font-medium mb-2">
                          {language === "tr" ? item.roleTr : item.roleEn}
                        </p>
                      )}
                      
                      {(() => {
                        const description = language === "tr" ? item.descriptionTr : item.descriptionEn;
                        if (Array.isArray(description)) {
                          return (
                            <ul className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3 space-y-1.5">
                              {description.map((desc: string, i: number) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-[var(--color-accent)] mt-1.5">•</span>
                                  <span>{desc}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                            {description}
                          </p>
                        );
                      })()}

                      {item.skills && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-text-muted)]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{t.timeline.education}</h3>
            </motion.div>

            <div className="space-y-4">
              {timelineData
                .filter((item) => item.type === "education")
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="group relative pl-6 border-l-2 border-[var(--color-text-muted)]/30 hover:border-[var(--color-text-muted)] transition-colors"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-bg-secondary)] border-2 border-[var(--color-text-muted)]/50 group-hover:border-[var(--color-text-muted)] transition-all" />
                    
                    <div className="glass rounded-xl p-5">
                      <span className="text-xs font-semibold text-[var(--color-text-secondary)] bg-[var(--color-text-muted)]/10 px-2 py-1 rounded-md">
                        {item.year}
                      </span>
                      
                      <h4 className="text-base font-semibold text-[var(--color-text-primary)] mt-3 mb-2">
                        {language === "tr" ? item.titleTr : item.titleEn}
                      </h4>
                      
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {language === "tr" ? item.descriptionTr : item.descriptionEn}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
