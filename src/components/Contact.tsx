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

// Send Icon
const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();

  // Email dışındaki sosyal linkler
  const nonEmailLinks = socialLinks.filter(link => link.icon !== "email");

  return (
    <section id="contact" className="py-16 relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-sm">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Modern Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email Card - Modern Design */}
          <motion.a
            href="mailto:fengin7321@gmail.com"
            className="group relative glass rounded-xl p-6 overflow-hidden hover:border-[var(--color-border-hover)] transition-all duration-500 flex flex-col justify-center cursor-pointer"
            onClick={(e) => {
              window.location.href = "mailto:fengin7321@gmail.com";
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] flex items-center justify-center mb-4 group-hover:border-[var(--color-text-muted)] transition-all duration-300">
                <EmailIcon size={22} className="text-[var(--color-text-secondary)]" />
              </div>

              {/* Content */}
              <h3 className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                {t.contact.email}
              </h3>
              <p className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-secondary)] transition-colors mb-3">
                fengin7321@gmail.com
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] text-sm font-medium transition-colors">
                <span>{t.contact.sendMessage}</span>
                <SendIcon className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Social Links Card */}
          <motion.div
            className="glass rounded-xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-text-muted) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} />

            <div className="relative z-10">
              <h3 className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
                {t.contact.socialMedia}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {nonEmailLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2.5 p-3 rounded-lg bg-[var(--color-bg-tertiary)]/50 hover:bg-[var(--color-accent)]/10 border border-transparent hover:border-[var(--color-accent)]/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="w-8 h-8 rounded-md bg-[var(--color-bg-secondary)] flex items-center justify-center group-hover/link:bg-[var(--color-accent)]/20 transition-colors">
                      <span className="text-[var(--color-text-muted)] group-hover/link:text-[var(--color-accent)] transition-colors [&>svg]:w-4 [&>svg]:h-4">
                        {iconMap[link.icon]}
                      </span>
                    </div>
                    <span className="text-[var(--color-text-primary)] group-hover/link:text-[var(--color-accent)] text-sm font-medium transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
