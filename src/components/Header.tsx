"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home", icon: "home" },
    { label: t.nav.about, href: "#about", icon: "user" },
    { label: t.nav.projects, href: "#projects", icon: "code" },
    { label: t.nav.timeline, href: "#timeline", icon: "briefcase" },
    { label: t.nav.testimonials, href: "#testimonials", icon: "star" },
    { label: t.nav.contact, href: "#contact", icon: "mail" },
  ];

  // Mobil bottom nav için ana 5 link (daha az yer kaplar)
  const mobileNavLinks = [
    { label: t.nav.home, href: "#home", icon: "home" },
    { label: t.nav.about, href: "#about", icon: "user" },
    { label: t.nav.projects, href: "#projects", icon: "code" },
    { label: t.nav.timeline, href: "#timeline", icon: "briefcase" },
    { label: t.nav.contact, href: "#contact", icon: "mail" },
  ];

  const getIcon = (icon: string, isActive: boolean = false) => {
    const strokeWidth = isActive ? 2 : 1.5;
    switch (icon) {
      case "home":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case "user":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case "code":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "briefcase":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "star":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case "mail":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="w-12 h-12 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-lg font-bold gradient-text mb-4 hover:border-[var(--color-border-hover)] transition-all"
        >
          FE
        </a>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1 p-2 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--color-accent)] text-[var(--color-bg-primary)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]"
                }`}
                title={link.label}
              >
                {getIcon(link.icon)}
                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="mt-4 w-12 h-12 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-xs font-bold transition-all hover:border-[var(--color-border-hover)]"
        >
          <span className={language === "tr" ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]"}>
            {language.toUpperCase()}
          </span>
        </button>
      </nav>

      {/* Mobile Top Header - Sadece logo ve dil */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass py-3">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-xl font-bold gradient-text"
          >
            FE<span className="text-[var(--color-text-primary)]">.</span>
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-xs font-medium"
          >
            <span className={language === "tr" ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]"}>
              TR
            </span>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className={language === "en" ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]"}>
              EN
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Bottom Tab Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-[var(--color-border)]">
        <div className="flex items-center justify-around py-2 px-1">
          {mobileNavLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-[60px] ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)]"
                }`}
              >
                <span className={`transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                  {getIcon(link.icon, isActive)}
                </span>
                <span className={`text-[10px] font-medium transition-all duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}>
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
        {/* Safe area for phones with home indicator */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>
    </>
  );
}
