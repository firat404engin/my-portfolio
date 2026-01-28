"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { QuoteIcon, LinkedInIcon, EmailIcon } from "./Icons";

interface TestimonialItem {
  id: number;
  quoteTr: string;
  quoteEn: string;
  author: string;
  roleTr: string;
  roleEn: string;
  company?: string;
  image?: string;
  email?: string;
  linkedin?: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quoteTr: "Fırat, bizimle çalıştığı süre boyunca olağanüstü problem çözme becerileri sergiledi. C# ve .NET Framework konusundaki yetkinliği, Excel otomasyonu ve Outlook entegrasyonu projelerinde büyük katkı sağladı. Bimser CSP platformunda dijital süreç tasarımındaki çalışmaları takdire şayandı.",
    quoteEn: "Fırat demonstrated exceptional problem-solving skills during his time with us. His proficiency in C# and .NET Framework made significant contributions to Excel automation and Outlook integration projects. His work on digital process design in the Bimser CSP platform was commendable.",
    author: "Bayram ELPE",
    roleTr: "Yazılım Uzmanı",
    roleEn: "Software Specialist",
    company: "SERANİT",
    image: "https://i.hizliresim.com/hz19zoj.jpg",
    email: "bayramelpe1@gmail.com",
    linkedin: "https://www.linkedin.com/in/bayram-elpe-16aa91190/",
  },
  {
    id: 2,
    quoteTr: "Fırat, Active Directory üzerinden kullanıcı hesap yönetimi, yeni personel bilgisayar kurulumları ve donanım/ağ sorunlarının çözümünde başarılı bir performans sergiledi. Yazıcı ve çevre birimleri kurulumu, sistem güncellemeleri ve güvenlik yamalarının uygulanmasında destek verdi. IT destek taleplerini zamanında ve verimli şekilde çözüme kavuşturma konusunda güvenilir bir ekip arkadaşıydı.",
    quoteEn: "Fırat demonstrated successful performance in user account management via Active Directory, new employee computer setups, and hardware/network troubleshooting. He provided support in printer and peripheral installation, system updates, and security patch implementation. He was a reliable team member in resolving IT support requests in a timely and efficient manner.",
    author: "Emin AYDIN",
    roleTr: "IT Uzmanı",
    roleEn: "IT Specialist",
    company: "SERANİT",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGS7r6bQjJKAA/profile-displayphoto-crop_800_800/B4DZpPgaK9KQAM-/0/1762270489188?e=1771459200&v=beta&t=R3tivY3y_0Dtj_SGkvv3nOdFPjaEzRCg4ELHCLy_kmY",
    email: "emin.aydin@seranit.com.tr",
    linkedin: "https://www.linkedin.com/in/emin-aydin-643b27183/",
  },
];

export default function Testimonials() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // 6 saniyede bir değişir

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="gradient-text">{t.testimonials.title}</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.article
              key={currentTestimonial.id}
              className="glass rounded-2xl p-8 md:p-10 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Quote Icon - Background */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <QuoteIcon className="text-[var(--color-accent)] opacity-20" size={60} />
              </div>

              {/* Quote */}
              <blockquote className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg mb-8 relative z-10">
                {language === "tr" ? currentTestimonial.quoteTr : currentTestimonial.quoteEn}
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent mb-6" />

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Avatar */}
                {currentTestimonial.image ? (
                  <motion.img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-[var(--color-accent)]/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                ) : (
                  <motion.div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-blue-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentTestimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </motion.div>
                )}

                <div className="flex-1">
                  <h4 className="font-semibold text-[var(--color-text-primary)] text-base sm:text-lg">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                    {language === "tr" ? currentTestimonial.roleTr : currentTestimonial.roleEn}
                    {currentTestimonial.company && (
                      <span className="text-[var(--color-accent)]">
                        {" "}@ {currentTestimonial.company}
                      </span>
                    )}
                  </p>
                  
                  {/* Social Links - Mobilde altına taşındı */}
                  <div className="flex items-center gap-2 mt-2 sm:hidden">
                    {currentTestimonial.linkedin && (
                      <a
                        href={currentTestimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[#0A66C2] hover:bg-[var(--color-bg-tertiary)] transition-all"
                        title="LinkedIn"
                      >
                        <LinkedInIcon size={18} />
                      </a>
                    )}
                    {currentTestimonial.email && (
                      <a
                        href={`mailto:${currentTestimonial.email}`}
                        className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)] transition-all"
                        title={currentTestimonial.email}
                      >
                        <EmailIcon size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Social Links - Desktop */}
                <div className="hidden sm:flex items-center gap-2">
                  {currentTestimonial.linkedin && (
                    <a
                      href={currentTestimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[#0A66C2] hover:bg-[var(--color-bg-tertiary)] transition-all"
                      title="LinkedIn"
                    >
                      <LinkedInIcon size={20} />
                    </a>
                  )}
                  {currentTestimonial.email && (
                    <a
                      href={`mailto:${currentTestimonial.email}`}
                      className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)] transition-all"
                      title={currentTestimonial.email}
                    >
                      <EmailIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-[var(--color-accent)]"
                    : "w-2 h-2 bg-[var(--color-text-muted)]/30 hover:bg-[var(--color-text-muted)]/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-1 bg-[var(--color-border)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-accent)] to-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? `${((currentIndex + 1) / testimonials.length) * 100}%` : "100%" }}
              transition={{
                duration: isPaused ? 0.3 : 6,
                ease: "linear",
              }}
              key={`progress-${currentIndex}-${isPaused}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
