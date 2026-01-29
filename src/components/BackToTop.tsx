"use client";

import React, { useState, useEffect } from "react";

// Arrow Up Icon
const ArrowUpIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 300px aşağı kaydırılınca görünür
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-lg hidden lg:flex ${
        isVisible
          ? "lg:opacity-100 lg:translate-y-0"
          : "lg:opacity-0 lg:translate-y-4 lg:pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUpIcon size={20} />
    </button>
  );
}
