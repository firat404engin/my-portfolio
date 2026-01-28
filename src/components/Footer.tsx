"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, EmailIcon, InstagramIcon, MediumIcon } from "./Icons";

const iconMap: Record<string, React.ReactNode> = {
  github: <GitHubIcon size={18} />,
  linkedin: <LinkedInIcon size={18} />,
  instagram: <InstagramIcon size={18} />,
  medium: <MediumIcon size={18} />,
  email: <EmailIcon size={18} />,
};

// Code Icon
const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// Heart Icon
const HeartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-text-muted) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.icon !== "email" ? "_blank" : undefined}
                  rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                  className="group w-10 h-10 rounded-xl bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-accent)]/10 border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 flex items-center justify-center transition-all duration-300"
                  aria-label={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                    {iconMap[link.icon]}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

            {/* Copyright & Credits */}
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-2">
                {t.footer.designedWith}
                <CodeIcon />
                <span>&</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                >
                  <HeartIcon />
                </motion.span>
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                © {currentYear} Fırat Engin. {t.footer.rights}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-accent)] via-blue-500 to-[var(--color-accent)]" />
      
      {/* Mobile bottom nav spacing */}
      <div className="lg:hidden h-20" />
    </footer>
  );
}
