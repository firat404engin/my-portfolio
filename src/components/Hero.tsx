"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDownIcon } from "./Icons";

// Göz ikonu
const EyeIcon = ({ className, size = 18 }: { className?: string; size?: number }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Typewriter Component
function TypewriterText({ texts, className }: { texts: string[]; className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && displayText === currentText) {
      // Pause at end of word
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-[var(--color-accent)] ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}

export default function Hero() {
  const { t, language } = useLanguage();
  
  const roles = language === "tr" 
    ? ["Bilgisayar Mühendisi", ".NET Geliştirici", "Backend Developer", "Full Stack Developer"]
    : ["Computer Engineer", ".NET Developer", "Backend Developer", "Full Stack Developer"];

  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Profile Image */}
          <motion.div
            className="flex-shrink-0 order-1 lg:order-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Profile Image - Portrait ratio (2:3) to match 1024x1536 */}
              <div className="w-56 h-[336px] sm:w-64 sm:h-96 md:w-72 md:h-[432px] lg:w-80 lg:h-[480px] rounded-2xl overflow-hidden relative">
                <Image
                  src="https://i.hizliresim.com/8pvbpam.png"
                  alt="Fırat Engin"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left flex-1">
            {/* Greeting Badge - Desktop only */}
            <motion.div
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-[var(--color-text-secondary)]">
                {t.hero.available}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-[var(--color-text-primary)]">{t.hero.greeting} </span>
              <span className="gradient-text">FIRAT ENGİN</span>
              <span className="text-[var(--color-text-primary)]">.</span>
            </motion.h1>

            {/* Subheading with Typewriter */}
            <motion.div
              className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                {t.hero.role}{" "}
                <TypewriterText 
                  texts={roles} 
                  className="text-[var(--color-text-primary)] font-medium"
                />
              </p>
              {t.hero.roleAfter && (
                <p className="mt-2">{t.hero.roleAfter}</p>
              )}
            </motion.div>

            {/* Greeting Badge - Mobile only (after description) */}
            <motion.div
              className="flex lg:hidden justify-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {t.hero.available}
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                onClick={handleScrollToProjects}
                className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-semibold rounded-xl hover:bg-[var(--color-text-secondary)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.viewWork}
                <ArrowDownIcon className="group-hover:translate-y-1 transition-transform" size={18} />
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/1JPevuRYhq7WXu-NX6nBd_GUuVrmBW9MX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold rounded-xl hover:border-[var(--color-text-muted)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.downloadCV}
                <EyeIcon className="group-hover:scale-110 transition-transform" size={18} />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 1 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-6 h-10 border-2 border-[var(--color-border)] rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[var(--color-text-muted)] rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
