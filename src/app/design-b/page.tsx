"use client"

import Link from "next/link";
import { ArrowLeft, Network, Zap, BarChart3, Cpu, Wifi, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { teamMembers, caseStudies, valueModels, companyStats, clients } from "@/data/content";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Particle animation component - subtle floating dots
function ParticleNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Floating dots animation */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function DesignB() {
  const [activeSection, setActiveSection] = useState("discovery");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 text-white overflow-x-hidden">
      {/* Fixed Navigation Header */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/30 z-50">
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
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <a href="#connectivity" className="text-cyan-300 hover:text-white transition-colors">Connectivity</a>
              <a href="#beyond-wires" className="text-cyan-300 hover:text-white transition-colors">Beyond Wires</a>
              <a href="#advisory" className="text-cyan-300 hover:text-white transition-colors">Advisory</a>
              <a href="#value-matrix" className="text-cyan-300 hover:text-white transition-colors">Value</a>
              <a href="#case-studies" className="text-cyan-300 hover:text-white transition-colors">Cases</a>
              <a href="#contact" className="text-cyan-300 hover:text-white transition-colors">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section with Particle Network */}
      <section className="relative pt-24 pb-8 px-4 min-h-[50vh] flex items-center">
        <ParticleNetwork />
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl font-bold mb-8 text-white">
              The New Development Imperative
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-2xl text-cyan-200 mb-6 leading-relaxed">
              From Land and Bricks to Enduring, Connected Places
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-lg text-cyan-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Thrivemore Technology Advisors helps developers de-risk their investments and create enduring value
              by architecting the digital DNA of their communities. The Future Well Grounded.™
            </p>
          </motion.div>

          {/* Tech Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:bg-cyan-500/10 border-2 border-blue-300 dark:border-cyan-500/30 rounded-lg p-6 shadow-lg shadow-blue-100/50 dark:shadow-none">
              <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-1">
                <AnimatedCounter end={companyStats.acres} suffix="K+" />
              </div>
              <div className="text-slate-700 dark:text-cyan-200 text-sm">Acres Connected</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:bg-cyan-500/10 border-2 border-purple-300 dark:border-cyan-500/30 rounded-lg p-6 shadow-lg shadow-purple-100/50 dark:shadow-none">
              <div className="text-3xl font-bold text-purple-600 dark:text-cyan-400 mb-1">
                <AnimatedCounter end={companyStats.units} suffix="K+" />
              </div>
              <div className="text-slate-700 dark:text-cyan-200 text-sm">Smart Units</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:bg-cyan-500/10 border-2 border-green-300 dark:border-cyan-500/30 rounded-lg p-6 shadow-lg shadow-green-100/50 dark:shadow-none">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                <AnimatedCounter end={companyStats.value} prefix="$" suffix="B+" />
              </div>
              <div className="text-slate-700 dark:text-cyan-200 text-sm">Digital Value</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:bg-cyan-500/10 border-2 border-orange-300 dark:border-cyan-500/30 rounded-lg p-6 shadow-lg shadow-orange-100/50 dark:shadow-none">
              <div className="text-3xl font-bold text-orange-600 dark:text-cyan-400 mb-1">
                <AnimatedCounter end={companyStats.projects} suffix="+" />
              </div>
              <div className="text-slate-700 dark:text-cyan-200 text-sm">Tech Plans</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connectivity Mandate Section */}
      <section id="connectivity" className="py-20 bg-gradient-to-r from-slate-800/50 to-cyan-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  The Connectivity Mandate
                </h2>
                <p className="text-xl text-cyan-200 mb-8 leading-relaxed">
                  In today's deregulated market, there's no guarantee your development will have connectivity.
                  This creates unprecedented risk and liability for developers.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: BarChart3, title: "Impeded Sales", description: "Without connectivity, absorption rates drop 23% on average", gradient: "from-red-50 to-orange-50", border: "border-red-300", shadow: "shadow-red-100/50", iconGradient: "from-red-500 to-orange-500" },
                    { icon: Zap, title: "Reduced Valuations", description: "Properties command 15% lower prices without tech infrastructure", gradient: "from-amber-50 to-yellow-50", border: "border-amber-300", shadow: "shadow-amber-100/50", iconGradient: "from-amber-500 to-yellow-500" },
                    { icon: Database, title: "Financing Challenges", description: "Lenders require technology master plans for approval", gradient: "from-rose-50 to-pink-50", border: "border-rose-300", shadow: "shadow-rose-100/50", iconGradient: "from-rose-500 to-pink-500" }
                  ].map((risk, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-start space-x-4 p-4 bg-gradient-to-br ${risk.gradient} dark:bg-slate-800/30 rounded-lg border-2 ${risk.border} dark:border-cyan-500/20 shadow-lg ${risk.shadow} dark:shadow-none`}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${risk.iconGradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <risk.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{risk.title}</h4>
                        <p className="text-slate-700 dark:text-cyan-200 text-sm">{risk.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-cyan-500/20 dark:to-blue-500/20 p-8 rounded-2xl border-2 border-indigo-300 dark:border-cyan-500/30 shadow-xl shadow-indigo-100/50 dark:shadow-none"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The $71 Billion Question</h3>
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                      <Network className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  <div className="space-y-4 text-center">
                    <div className="p-4 bg-gradient-to-r from-red-100 to-orange-100 dark:bg-slate-800/50 rounded-lg border-2 border-red-300 dark:border-transparent shadow-md dark:shadow-none">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-300">NO GUARANTEE</div>
                      <div className="text-slate-700 dark:text-cyan-200 text-sm">of connectivity for new developments</div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-orange-100 to-amber-100 dark:bg-slate-800/50 rounded-lg border-2 border-orange-300 dark:border-transparent shadow-md dark:shadow-none">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-300">MASSIVE LIABILITY</div>
                      <div className="text-slate-700 dark:text-cyan-200 text-sm">for unprepared developers</div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:bg-slate-800/50 rounded-lg border-2 border-green-300 dark:border-transparent shadow-md dark:shadow-none">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-300">SOLUTION READY</div>
                      <div className="text-slate-700 dark:text-cyan-200 text-sm">with Thrivemore's expertise</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beyond Wires Section */}
      <section id="beyond-wires" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Beyond Wires: The Connected Community
            </h2>
            <p className="text-xl text-cyan-200 leading-relaxed">
              Modern communities require integrated IoT, wellness technology, and sustainable infrastructure
              that adapts and evolves with resident needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Network,
                title: "IoT & Connectivity",
                description: "Smart sensors, environmental monitoring, and seamless connectivity throughout the community",
                features: ["Fiber-to-the-home", "5G infrastructure", "Smart lighting", "Environmental sensors"],
                gradient: "from-blue-50 to-cyan-50",
                border: "border-blue-300",
                shadow: "shadow-blue-100/50",
                iconGradient: "from-cyan-500 to-blue-500",
                bulletColors: ["bg-blue-500", "bg-cyan-500", "bg-indigo-500", "bg-sky-500"]
              },
              {
                icon: Zap,
                title: "Wellness Technology",
                description: "Health-focused infrastructure that promotes wellbeing and quality of life for residents",
                features: ["Air quality monitoring", "Noise management", "Wellness apps", "Biometric integration"],
                gradient: "from-green-50 to-emerald-50",
                border: "border-green-300",
                shadow: "shadow-green-100/50",
                iconGradient: "from-green-500 to-emerald-500",
                bulletColors: ["bg-green-500", "bg-emerald-500", "bg-teal-500", "bg-lime-500"]
              },
              {
                icon: Cpu,
                title: "Sustainability",
                description: "Technology solutions that reduce environmental impact and promote sustainable living",
                features: ["Energy optimization", "Water management", "Waste reduction", "Carbon tracking"],
                gradient: "from-purple-50 to-violet-50",
                border: "border-purple-300",
                shadow: "shadow-purple-100/50",
                iconGradient: "from-purple-500 to-violet-500",
                bulletColors: ["bg-purple-500", "bg-violet-500", "bg-fuchsia-500", "bg-indigo-500"]
              }
            ].map((dimension, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-gradient-to-br ${dimension.gradient} dark:from-slate-800/50 dark:to-cyan-900/30 border-2 ${dimension.border} dark:border-cyan-500/30 h-full hover:border-opacity-70 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-lg ${dimension.shadow} dark:shadow-none`}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${dimension.iconGradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                      <dimension.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-slate-900 dark:text-white text-xl">{dimension.title}</CardTitle>
                    <CardDescription className="text-slate-700 dark:text-cyan-200">{dimension.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {dimension.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-700 dark:text-cyan-200 text-sm">
                          <div className={`w-2 h-2 ${dimension.bulletColors[idx]} dark:bg-cyan-400 rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Practice Section */}
      <section id="advisory" className="py-20 bg-gradient-to-r from-slate-800/50 to-cyan-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our Advisory Practice
            </h2>
            <p className="text-xl text-cyan-200 leading-relaxed">
              Architecting the Digital DNA of Your Community through proven methodologies and lifecycle integration.
            </p>
          </motion.div>

          {/* Interactive Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Timeline Navigation */}
              <div className="lg:w-1/3">
                <div className="space-y-4">
                  {[
                    { id: "discovery", title: "Discovery & Analysis", desc: "Provider landscape mapping" },
                    { id: "planning", title: "Master Planning", desc: "Network topology design" },
                    { id: "selection", title: "Negotiation & Selection", desc: "Competitive evaluation" },
                    { id: "implementation", title: "Implementation", desc: "Project management" },
                    { id: "operations", title: "Operations & Evolution", desc: "Ongoing optimization" }
                  ].map((stage, index) => (
                    <motion.button
                      key={stage.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setActiveSection(stage.id)}
                      onClick={() => setActiveSection(stage.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                        activeSection === stage.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400 text-white"
                          : "bg-slate-800/30 border-slate-600 text-cyan-200 hover:border-cyan-500"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          activeSection === stage.id ? "bg-cyan-400 text-slate-900" : "bg-slate-600 text-white"
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold">{stage.title}</h4>
                          <p className="text-sm opacity-80">{stage.desc}</p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Timeline Content */}
              <div className="lg:w-2/3">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-slate-800/50 to-cyan-900/30 p-8 rounded-lg border border-cyan-500/30"
                >
                  {activeSection === "discovery" && (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Discovery & Analysis</h3>
                      <p className="text-cyan-200 mb-6">
                        Comprehensive assessment of your project's connectivity landscape, provider options, and technology requirements.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">Site Analysis</h4>
                          <p className="text-sm text-cyan-200">Detailed feasibility and coverage mapping</p>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">Provider Landscape</h4>
                          <p className="text-sm text-cyan-200">Market research and capability assessment</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeSection === "planning" && (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Master Planning</h3>
                      <p className="text-cyan-200 mb-6">
                        Development of comprehensive technology infrastructure plans that integrate seamlessly with your community design.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">Network Design</h4>
                          <p className="text-sm text-cyan-200">Fiber backbone and distribution planning</p>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">Future-Proofing</h4>
                          <p className="text-sm text-cyan-200">20+ year technology roadmap development</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeSection === "selection" && (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Negotiation & Selection</h3>
                      <p className="text-cyan-200 mb-6">
                        Competitive evaluation process ensuring optimal provider selection and maximum developer value.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">RFP Process</h4>
                          <p className="text-sm text-cyan-200">Structured competitive bidding framework</p>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">Deal Structuring</h4>
                          <p className="text-sm text-cyan-200">Optimized partnership agreements</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeSection === "implementation" && (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Implementation</h3>
                      <p className="text-cyan-200 mb-6">
                        End-to-end project management ensuring on-time, on-budget technology infrastructure deployment.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">Project Management</h4>
                          <p className="text-sm text-cyan-200">Construction oversight and coordination</p>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">Quality Assurance</h4>
                          <p className="text-sm text-cyan-200">Testing and performance validation</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeSection === "operations" && (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Operations & Evolution</h3>
                      <p className="text-cyan-200 mb-6">
                        Ongoing optimization and technology evolution to ensure long-term community value.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">Monitoring</h4>
                          <p className="text-sm text-cyan-200">Real-time performance tracking</p>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded">
                          <h4 className="font-semibold text-cyan-400 mb-2">Evolution</h4>
                          <p className="text-sm text-cyan-200">Technology upgrade planning</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Value Matrix */}
      <section id="value-matrix" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              The Thrivemore Value Matrix
            </h2>
            <p className="text-xl text-cyan-200 leading-relaxed">
              Interactive partnership models showing escalating returns from basic agreements to joint ventures.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-cyan-900/30 rounded-lg border border-cyan-500/30 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                {valueModels.map((model, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 border-r border-b border-cyan-500/20 hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                      <p className="text-cyan-200 text-sm mb-4">{model.description}</p>
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-green-400 mb-1">{model.irr}%</div>
                        <div className="text-cyan-200 text-xs">Typical IRR</div>
                      </div>
                      <div className="space-y-1">
                        {model.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="text-xs text-cyan-200 opacity-80">
                            • {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies with Interactive Elements */}
      <section id="case-studies" className="py-20 bg-gradient-to-r from-slate-800/50 to-cyan-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Case Studies in Innovation
            </h2>
            <p className="text-xl text-cyan-200 leading-relaxed">
              Real results from cutting-edge technology implementations across premier developments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-cyan-900/30 border-cyan-500/30 h-full hover:border-cyan-400/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-white text-2xl mb-2">{study.title}</CardTitle>
                        <CardDescription className="text-cyan-300">
                          {study.client} • {study.location}
                        </CardDescription>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Wifi className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-slate-800/50 rounded">
                        <div className="text-cyan-400 font-bold">{study.projectSize.acres.toLocaleString()}</div>
                        <div className="text-xs text-cyan-200">Acres</div>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded">
                        <div className="text-cyan-400 font-bold">{study.projectSize.units.toLocaleString()}</div>
                        <div className="text-xs text-cyan-200">Units</div>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded">
                        <div className="text-green-400 font-bold">{study.projectSize.value}</div>
                        <div className="text-xs text-cyan-200">Value</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-cyan-400 mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Challenge
                        </h4>
                        <p className="text-cyan-200 text-sm">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-cyan-400 mb-2 flex items-center">
                          <Cpu className="h-4 w-4 mr-2" />
                          Solution
                        </h4>
                        <p className="text-cyan-200 text-sm">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                          <BarChart3 className="h-4 w-4 mr-2" />
                          Results
                        </h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 3).map((result, idx) => (
                            <li key={idx} className="text-cyan-200 text-sm flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Begin Your Technology Master Plan
            </h2>
            <p className="text-xl text-cyan-200 leading-relaxed">
              Ready to architect the digital DNA of your community? Let's connect and explore the possibilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
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
                    "100% connectivity guarantee from day one",
                    "Transform costs into revenue streams",
                    "Future-proof infrastructure planning",
                    "Award-winning innovation partnerships"
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2"></div>
                      <span className="text-cyan-200">{advantage}</span>
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
              <Card className="w-full max-w-md bg-gradient-to-br from-slate-800/50 to-cyan-900/30 border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-white">Begin Your Technology Master Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-center">
                    <p className="text-cyan-200">Ready to architect the digital DNA of your community?</p>
                    <div className="space-y-2">
                      <p className="text-white font-semibold">Amy Westwood, Partner</p>
                      <p className="text-cyan-200">amy@thrivemoreadvisors.com</p>
                      <p className="text-cyan-200">904.944.4544</p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0">
                      Connect & Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/30 py-8 bg-slate-900/95">
        <div className="container mx-auto px-4 text-center text-cyan-300">
          <p>&copy; 2025 Thrivemore Technology Advisors. All rights reserved.</p>
          <p className="mt-2">The Future Well Grounded™</p>
        </div>
      </footer>
    </div>
  );
}