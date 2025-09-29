"use client"

import React from "react";
import Link from "next/link";
import { Play, MapPin, Clock, TrendingUp, Users, Building2, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { teamMembers, caseStudies, valueModels, companyStats } from "@/data/content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasAnimated]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
}


// Parallax Hero Component
const ParallaxHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-6xl lg:text-8xl font-bold mb-4 mt-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 dark:from-slate-100 dark:via-white dark:to-slate-100 bg-clip-text text-transparent">
              The Future
              <br />
              Well Grounded
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl text-slate-700 dark:text-white/90 mb-4 leading-relaxed"
        >
          Every great community starts with a vision. Ours begins with connection.
        </motion.p>

      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 dark:bg-white rounded-full opacity-40 dark:opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        {/* Additional particles for light mode */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`light-${i}`}
            className="absolute w-2 h-2 bg-slate-600 dark:bg-cyan-400 rounded-full opacity-20 dark:opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function DesignD() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Logo variant="white" />
            <div className="hidden md:flex items-center gap-3">
              {[
                { id: "design-a", letter: "A", route: "/design-a", color: "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800" },
                { id: "design-b", letter: "B", route: "/design-b", color: "from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800" },
                { id: "design-c", letter: "C", route: "/design-c", color: "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800" },
                { id: "design-d", letter: "D", route: "/design-d", color: "from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800" }
              ].map((design) => (
                <Link key={design.id} href={design.route}>
                  <div className={`w-10 h-10 bg-gradient-to-br ${design.color} rounded-lg flex items-center justify-center cursor-pointer border-2 border-white/30 hover:border-white/50 transition-all hover:scale-110`}>
                    <span className="text-white text-lg font-bold">
                      {design.letter}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a href="#story" className="text-slate-300 hover:text-white transition-colors">Story</a>
              <a href="#journey" className="text-slate-300 hover:text-white transition-colors">Journey</a>
              <a href="#success" className="text-slate-300 hover:text-white transition-colors">Success</a>
              <a href="#vision" className="text-slate-300 hover:text-white transition-colors">Vision</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Connect</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Parallax Hero */}
      <ParallaxHero />

      {/* Story Introduction */}
      <section id="story" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-8 text-slate-900 dark:text-white">
              Every Revolution Starts with a Problem
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-12">
              In 2019, the telecommunications landscape shifted forever. Deregulation meant no guarantees,
              no certainties, and suddenly, every new development faced an invisible threat that could
              cripple its future before the first foundation was poured.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "$71 Billion at Risk",
                  description: "Total investment value threatened by connectivity uncertainty",
                  lightGradient: "from-red-500 to-orange-500",
                  darkGradient: "from-red-500 to-orange-500",
                  cardBg: "from-red-50 to-orange-50",
                  border: "border-red-200"
                },
                {
                  icon: Clock,
                  title: "23% Slower Sales",
                  description: "Average impact on absorption rates without connectivity guarantees",
                  lightGradient: "from-amber-500 to-yellow-500",
                  darkGradient: "from-amber-500 to-yellow-500",
                  cardBg: "from-amber-50 to-yellow-50",
                  border: "border-amber-200"
                },
                {
                  icon: TrendingUp,
                  title: "15% Value Loss",
                  description: "Reduction in property valuations due to infrastructure concerns",
                  lightGradient: "from-orange-500 to-red-500",
                  darkGradient: "from-orange-500 to-red-500",
                  cardBg: "from-orange-50 to-red-50",
                  border: "border-orange-200"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${stat.cardBg} dark:bg-slate-800/50 p-6 rounded-xl border-2 ${stat.border} dark:border-slate-700 shadow-lg ${stat.cardBg.replace('from-', 'shadow-').replace('-50', '-100/50')} dark:shadow-none`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.lightGradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    {(() => {
                      const IconComponent = stat.icon;
                      return <IconComponent className="h-8 w-8 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{stat.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Journey - Interactive Timeline */}
      <section id="journey" className="py-24 bg-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              The Journey from Risk to Revenue
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Follow the transformation of a visionary development as it evolves from connectivity
              uncertainty to becoming a model for the future of connected communities.
            </p>
          </motion.div>

          {/* <StoryTimeline /> */}
        </div>
      </section>

      {/* Success Stories with Motion */}
      <section id="success" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Stories of Transformation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real communities, real challenges, real solutions. See how visionary developers
              turned technology uncertainty into competitive advantage.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                          <MapPin className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-2xl">{study.title}</CardTitle>
                          <CardDescription className="text-slate-300">
                            {study.client} • {study.location}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-white/10 rounded-lg">
                          <div className="text-2xl font-bold text-white">{study.projectSize.acres.toLocaleString()}</div>
                          <div className="text-slate-300 text-sm">Acres</div>
                        </div>
                        <div className="text-center p-4 bg-white/10 rounded-lg">
                          <div className="text-2xl font-bold text-white">{study.projectSize.units.toLocaleString()}</div>
                          <div className="text-slate-300 text-sm">Units</div>
                        </div>
                        <div className="text-center p-4 bg-white/10 rounded-lg">
                          <div className="text-2xl font-bold text-green-400">{study.projectSize.value}</div>
                          <div className="text-slate-300 text-sm">Value</div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-orange-400 mb-3 text-lg">The Challenge</h4>
                          <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-blue-400 mb-3 text-lg">The Solution</h4>
                          <p className="text-slate-300 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-green-400 mb-3 text-lg">The Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-3 text-slate-300"
                              >
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{result}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="aspect-video bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-400">Interactive Case Study</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section id="vision" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-8 text-white">
              Your Story Starts Here
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              Every great community has a beginning. Every visionary developer has that moment when
              they see beyond today's challenges to tomorrow's possibilities. Your moment is now.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600"
              >
                <h3 className="text-2xl font-bold text-white mb-4">The Challenge You Face</h3>
                <ul className="space-y-3 text-slate-900 dark:text-slate-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Uncertain connectivity landscape</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Technology infrastructure risks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Evolving buyer expectations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Complex vendor negotiations</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-800 to-blue-800 p-8 rounded-xl border border-green-600"
              >
                <h3 className="text-2xl font-bold text-white mb-4">The Future We Build</h3>
                <ul className="space-y-3 text-slate-900 dark:text-slate-200">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Guaranteed day-one connectivity</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Revenue-generating infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Future-proof technology roadmaps</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Competitive market advantage</span>
                  </li>
                </ul>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Stories of Transformation - Collective Impact */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Stories of Transformation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Collective Impact Across Communities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3 p-6 bg-gradient-to-br from-teal-500/10 to-cyan-600/10 rounded-xl border border-teal-500/20 hover:scale-105 transition-transform"
            >
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                <AnimatedCounter end={114} suffix="K+" />
              </div>
              <div className="text-slate-300 font-medium">Acres Connected</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20 hover:scale-105 transition-transform"
            >
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                <AnimatedCounter end={130} suffix="K+" />
              </div>
              <div className="text-slate-300 font-medium">Smart Homes</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-3 p-6 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-xl border border-green-500/20 hover:scale-105 transition-transform"
            >
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                <AnimatedCounter end={71} prefix="$" suffix="B+" />
              </div>
              <div className="text-slate-300 font-medium">Investment Value</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3 p-6 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-xl border border-purple-500/20 hover:scale-105 transition-transform"
            >
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                <AnimatedCounter end={47} suffix="+" />
              </div>
              <div className="text-slate-300 font-medium">Master Plans</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact with Storytelling */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Let's Write Your Success Story
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Every transformational partnership begins with a conversation. Share your vision,
              and let's explore how we can turn your development challenges into competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">What makes your story unique?</h3>
                <div className="space-y-4">
                  {[
                    "Every challenge becomes an opportunity",
                    "Technology transforms from cost to revenue",
                    "Your vision becomes our shared mission",
                    "Success stories inspire future communities"
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2"></div>
                      <span className="text-slate-300">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Card className="w-full max-w-md bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Let's Write Your Success Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-center">
                    <p className="text-slate-300">Share your vision, and let's explore how we can turn your development challenges into competitive advantages.</p>
                    <div className="space-y-2">
                      <p className="text-white font-semibold">Amy Westwood, Partner</p>
                      <p className="text-slate-300">Chief Storyteller & Revenue Architect</p>
                      <p className="text-slate-400">amy@thrivemoreadvisors.com</p>
                      <p className="text-slate-400">904.944.4544</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <Logo variant="white" showTagline />
          <p className="mt-6 text-slate-400">
            Every great story has a beginning. Yours starts here.
          </p>
          <p className="mt-2 text-slate-500 text-sm">
            &copy; 2025 Thrivemore Technology Advisors. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}