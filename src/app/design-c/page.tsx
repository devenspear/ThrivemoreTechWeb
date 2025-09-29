"use client"

import React from "react";
import Link from "next/link";
import { Shield, TrendingUp, Target, Users, ChevronRight, BarChart, DollarSign, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { teamMembers, caseStudies, valueModels, companyStats, clients } from "@/data/content";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bar, BarChart as RechartsBarChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Interactive Data Visualization Component
function DataVisualization() {
  const [selectedMetric, setSelectedMetric] = useState<"irr" | "revenue" | "risk">("irr");

  const metrics = {
    irr: {
      label: "IRR Growth",
      color: "hsl(142, 76%, 36%)",
      bgColor: "from-emerald-500 to-teal-500",
      hoverBgColor: "from-emerald-600 to-teal-600",
      chartConfig: {
        value: { label: "IRR %", color: "hsl(142, 76%, 36%)" }
      } satisfies ChartConfig
    },
    revenue: {
      label: "Revenue Impact",
      color: "hsl(217, 91%, 60%)",
      bgColor: "from-blue-500 to-indigo-500",
      hoverBgColor: "from-blue-600 to-indigo-600",
      chartConfig: {
        value: { label: "Revenue $K", color: "hsl(217, 91%, 60%)" }
      } satisfies ChartConfig
    },
    risk: {
      label: "Risk Reduction",
      color: "hsl(24, 70%, 50%)",
      bgColor: "from-orange-500 to-red-500",
      hoverBgColor: "from-orange-600 to-red-600",
      chartConfig: {
        value: { label: "Risk %", color: "hsl(24, 70%, 50%)" }
      } satisfies ChartConfig
    }
  };

  // Prepare chart data based on selected metric with percentage
  const chartData = valueModels.map((model, index) => {
    let value: number;
    let percentage: number;
    let displayValue: string;

    if (selectedMetric === "irr") {
      value = [5, 8, 12, 15][index];
      percentage = value;
      displayValue = `${value}%`;
    } else if (selectedMetric === "revenue") {
      value = [100, 300, 800, 1200][index];
      const maxValue = 1200;
      percentage = Math.round((value / maxValue) * 100);
      displayValue = `$${value}K`;
    } else {
      value = [90, 75, 45, 20][index];
      percentage = value;
      displayValue = `${value}%`;
    }

    return {
      name: model.name,
      value: value,
      percentage: percentage,
      displayValue: displayValue,
      fill: metrics[selectedMetric].color
    };
  });

  return (
    <div className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-slate-900/50">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Partnership Model Comparison</h3>
        <div className="flex space-x-3">
          {(Object.entries(metrics) as [keyof typeof metrics, typeof metrics[keyof typeof metrics]][]).map(([key, metric]) => (
            <button
              key={key}
              onClick={() => setSelectedMetric(key)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                selectedMetric === key
                  ? `bg-gradient-to-r ${metric.bgColor} text-white shadow-md border-2 border-white dark:border-slate-700`
                  : `bg-gradient-to-r ${metric.bgColor} opacity-60 hover:opacity-80 text-white border-2 border-transparent`
              }`}
            >
              {metric.label}
            </button>
          ))}
        </div>
      </div>

      <ChartContainer config={metrics[selectedMetric].chartConfig} className="h-[300px] w-full">
        <RechartsBarChart
          data={chartData}
          layout="vertical"
          margin={{ left: 0, right: 60, top: 5, bottom: 5 }}
        >
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            className="text-xs fill-slate-900 dark:fill-white"
          />
          <XAxis
            type="number"
            domain={[0, selectedMetric === "revenue" ? 1200 : 100]}
            hide
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="value" layout="vertical" radius={5}>
            {chartData.map((entry, index) => (
              <text
                key={`label-${index}`}
                x="100%"
                y={index * 60 + 30}
                fill="currentColor"
                className="text-xs font-semibold fill-slate-900 dark:fill-white"
                textAnchor="start"
                dx={10}
              >
                {entry.percentage}%
              </text>
            ))}
          </Bar>
        </RechartsBarChart>
      </ChartContainer>
    </div>
  );
}

export default function DesignC() {
  const [activeValue, setActiveValue] = useState(0);

  const valuePillars = [
    {
      icon: Shield,
      title: "De-Risk Your Investment",
      subtitle: "Ensuring Day-One Viability",
      description: "Guarantee connectivity and eliminate technology-related project delays through comprehensive planning and provider coordination.",
      metrics: ["100% connectivity guarantee", "Zero technology delays", "Pre-approved infrastructure"]
    },
    {
      icon: DollarSign,
      title: "Transform Cost to Revenue",
      subtitle: "New Investment Models",
      description: "Convert technology infrastructure from cost center to profit center through innovative partnership structures and revenue sharing.",
      metrics: ["15% average IRR", "$50M+ revenue generation", "Joint venture opportunities"]
    },
    {
      icon: TrendingUp,
      title: "Accelerate Sales",
      subtitle: "Enhanced Marketability",
      description: "Increase absorption rates and property values through best-in-class technology infrastructure and smart home integration.",
      metrics: ["23% faster absorption", "15% higher valuations", "Premium positioning"]
    },
    {
      icon: Target,
      title: "Future-Proof Assets",
      subtitle: "Long-Term Value Creation",
      description: "Ensure your development remains competitive and valuable for decades through adaptive technology roadmaps.",
      metrics: ["20+ year roadmap", "Scalable infrastructure", "Technology evolution planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-black text-slate-900 dark:text-white">
      {/* Fixed Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Logo />
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
              <a href="#approach" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium">Approach</a>
              <a href="#value" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium">Value</a>
              <a href="#case-studies" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium">Cases</a>
              <a href="#insights" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium">Insights</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Architecting the Digital DNA of Tomorrow's Communities
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  We de-risk multi-billion dollar developments by securing connectivity infrastructure
                  and transforming technology from a cost center into a revenue-generating asset.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Statistics Dashboard */}
              <div className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
                <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Impact Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                      {companyStats.acres.toLocaleString()}+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Acres Planned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                      {companyStats.units.toLocaleString()}+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Residential Units</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">
                      ${companyStats.value}B+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Investment Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                      {companyStats.projects}+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Master Plans</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Trusted by Premier Developers
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 opacity-60">
                    {clients.slice(0, 3).map((client, index) => (
                      <div key={index} className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {client}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              The 5-Stage Integration Methodology
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our approach seamlessly integrates technology planning into your development lifecycle,
              ensuring optimal outcomes at every stage.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                stage: "01",
                title: "Strategic Site Analysis",
                description: "Comprehensive site evaluation and technology feasibility assessment",
                details: ["Provider landscape mapping", "Regulatory environment analysis", "Infrastructure assessment", "Market opportunity evaluation"]
              },
              {
                stage: "02",
                title: "Concept & Planning",
                description: "Integration of technology requirements into master planning process",
                details: ["Technology master plan development", "Stakeholder alignment", "Budget integration", "Timeline coordination"]
              },
              {
                stage: "03",
                title: "Design & Engineering",
                description: "Detailed infrastructure design and provider coordination",
                details: ["Network topology design", "Provider negotiations", "Technical specifications", "Implementation planning"]
              },
              {
                stage: "04",
                title: "Construction & Implementation",
                description: "Oversight of technology infrastructure deployment",
                details: ["Project management", "Quality assurance", "Timeline management", "Issue resolution"]
              },
              {
                stage: "05",
                title: "Operations & Management",
                description: "Ongoing operations support and technology evolution planning",
                details: ["Performance monitoring", "Technology updates", "Resident support", "Future planning"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center font-bold">
                        {item.stage}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Creation Framework */}
      <section id="value" className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Value Creation Framework
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Four pillars of value that transform technology infrastructure from liability to strategic asset.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Value Pillars Navigation */}
            <div className="space-y-4">
              {valuePillars.map((pillar, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveValue(index)}
                  onClick={() => setActiveValue(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                    activeValue === index
                      ? "bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 border-slate-900 dark:border-slate-200"
                      : "bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeValue === index
                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    }`}>
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{pillar.title}</h3>
                      <p className={`text-sm ${
                        activeValue === index
                          ? "text-white/80 dark:text-slate-900/80"
                          : "text-slate-600 dark:text-slate-400"
                      }`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Active Value Details */}
            <motion.div
              key={activeValue}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center mb-4">
                  {(() => {
                    const IconComponent = valuePillars[activeValue].icon;
                    return <IconComponent className="h-8 w-8" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {valuePillars[activeValue].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {valuePillars[activeValue].description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 dark:text-white">Key Metrics:</h4>
                {valuePillars[activeValue].metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-300">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Data Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <DataVisualization />
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Case Studies in Excellence
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Proven results from partnerships with visionary developers across diverse market segments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-slate-900 dark:text-white text-xl mb-2">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400">
                          {study.client} • {study.location}
                        </CardDescription>
                      </div>
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                        <Building className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">
                          {study.projectSize.acres.toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Acres</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="text-lg font-bold text-slate-900 dark:text-white">
                          {study.projectSize.units.toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Units</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="text-lg font-bold text-emerald-600">
                          {study.projectSize.value}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Value</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                          <Target className="h-4 w-4 mr-2 text-slate-600 dark:text-slate-400" />
                          Challenge
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                          <BarChart className="h-4 w-4 mr-2 text-slate-600 dark:text-slate-400" />
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {study.results.slice(0, 3).map((result, idx) => (
                            <li key={idx} className="text-slate-600 dark:text-slate-300 text-sm flex items-start">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>{result}</span>
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
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Begin Your Technology Master Plan
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your development with cutting-edge technology planning?
              Let's discuss how we can create lasting value for your community.
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
              <div className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Amy Westwood, Partner</p>
                    <p className="text-slate-600 dark:text-slate-400">amy@thrivemoreadvisors.com</p>
                    <p className="text-slate-600 dark:text-slate-400">904.944.4544</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Why Choose Thrivemore?
                </h4>
                {[
                  "Proven methodology with 47+ successful projects",
                  "Guaranteed connectivity from project inception",
                  "Revenue-generating infrastructure partnerships",
                  "Future-proof technology roadmaps"
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-300">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Begin Your Technology Master Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-center">
                    <p className="text-slate-600 dark:text-slate-300">Ready to transform your development with cutting-edge technology planning?</p>
                    <div className="space-y-2">
                      <p className="font-medium text-slate-900 dark:text-white">Amy Westwood, Partner</p>
                      <p className="text-slate-600 dark:text-slate-400">amy@thrivemoreadvisors.com</p>
                      <p className="text-slate-600 dark:text-slate-400">904.944.4544</p>
                    </div>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 min-h-12 flex items-center justify-center">
                      <Link href="#contact" className="w-full h-full flex items-center justify-center">Start Your Project</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-600 py-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Technology Master Planning</li>
                <li>Provider Selection & Negotiation</li>
                <li>Revenue Engineering</li>
                <li>Program Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p>amy@thrivemoreadvisors.com</p>
                <p>904.944.4544</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-slate-600 dark:text-slate-400 text-sm">
            <p>&copy; 2025 Thrivemore Technology Advisors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}