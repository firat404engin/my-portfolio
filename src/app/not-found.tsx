"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--color-bg-primary)]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-text-muted) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-[var(--color-accent)]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-4">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[150px] sm:text-[200px] font-bold leading-none gradient-text">
            404
          </h1>
        </motion.div>

        {/* Glitch Effect Line */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-[var(--color-accent)] to-blue-500 mx-auto mb-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)] mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-md mx-auto mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
            dönerek devam edebilirsiniz.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/">
            <motion.button
              className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-semibold rounded-xl hover:bg-[var(--color-text-secondary)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Ana Sayfaya Dön
            </motion.button>
          </Link>

          <Link href="/#contact">
            <motion.button
              className="flex items-center gap-2 px-8 py-4 border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold rounded-xl hover:border-[var(--color-text-muted)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              İletişime Geç
            </motion.button>
          </Link>
        </motion.div>

        {/* Fun Message */}
        <motion.p
          className="mt-12 text-sm text-[var(--color-text-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="font-mono">console.log</span>
          <span className="text-[var(--color-accent)]">(</span>
          <span className="text-green-400">&quot;Kaybolmuş görünüyorsunuz!&quot;</span>
          <span className="text-[var(--color-accent)]">)</span>
          <span className="text-[var(--color-text-muted)]">;</span>
        </motion.p>
      </div>
    </div>
  );
}
