"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/shared/logo";
import { motion } from "framer-motion";

export default function Home() {
  // Force dark mode on splash page
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);
  const designs = [
    {
      id: "design-a",
      letter: "A",
      route: "/design-a",
      color: "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
    },
    {
      id: "design-b",
      letter: "B",
      route: "/design-b",
      color: "from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800"
    },
    {
      id: "design-c",
      letter: "C",
      route: "/design-c",
      color: "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
    },
    {
      id: "design-d",
      letter: "D",
      route: "/design-d",
      color: "from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white dark">
      {/* Header */}
      <header className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-6 flex justify-center items-center">
          <Logo />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Thrivemore Technology Advisors
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Explore the four conceptual options below and consider the content functionality and layout that would potentially best serve a Thrivemore technology web audience.
          </p>
        </div>
      </section>

      {/* Design Options Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {designs.map((design, index) => (
              <Link key={design.id} href={design.route} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full aspect-square bg-gradient-to-br ${design.color} rounded-xl flex items-center justify-center cursor-pointer relative overflow-hidden border-4 border-white/30 shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-white/10 blur-xl" />
                  </motion.div>

                  {/* Particle effects */}
                  <div className="absolute inset-0 opacity-30">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  {/* Letter */}
                  <motion.span
                    className="text-white text-6xl font-bold z-10 relative"
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0 0 20px rgba(255,255,255,0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {design.letter}
                  </motion.span>

                  {/* Border glow animation */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-white"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(255,255,255,0.3)',
                        '0 0 30px rgba(255,255,255,0.6)',
                        '0 0 10px rgba(255,255,255,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2025 Thrivemore Advisors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
