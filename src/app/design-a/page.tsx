"use client"

import Link from "next/link";
import { Shield, TrendingUp, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { ClientScrollingBanner } from "@/components/shared/client-scrolling-banner";
import { teamMembers, caseStudies, valueModels, companyStats } from "@/data/content";
import { motion } from "framer-motion";

export default function DesignA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-700 to-slate-800 text-white">
      {/* Fixed Navigation Header */}
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
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <a href="#problem" className="text-slate-300 hover:text-white transition-colors">Problem</a>
              <a href="#solution" className="text-slate-300 hover:text-white transition-colors">Solution</a>
              <a href="#value" className="text-slate-300 hover:text-white transition-colors">Value</a>
              <a href="#proof" className="text-slate-300 hover:text-white transition-colors">Proof</a>
              <a href="#team" className="text-slate-300 hover:text-white transition-colors">Team</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-8 mt-20 text-slate-900 dark:text-white"
          >
            The New Development Imperative
          </motion.h1>
          <p className="text-xl text-slate-400 dark:text-slate-300 mb-8 leading-relaxed">
            From Land and Bricks to Enduring, Connected Places
          </p>
          <p className="text-lg text-slate-400 mb-12">
            Thrivemore Technology Advisors helps developers de-risk their investments and create enduring value by architecting the digital DNA of their communities.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 min-h-12 flex items-center justify-center">
              <Link href="#contact" className="w-full h-full flex items-center justify-center">Schedule a Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600/10 hover:border-green-500 hover:text-green-500 min-h-12 flex items-center justify-center">
              <Link href="#proof" className="w-full h-full flex items-center justify-center">View Case Studies</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-slate-400 text-sm mb-4">Trusted by Premier Developers</p>
            <ClientScrollingBanner />
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:bg-gradient-to-br dark:from-slate-800/50 dark:via-slate-800/30 dark:to-slate-700/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">A Fundamental Shift in Development Risk You Can't Afford to Ignore</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              The deregulation of telecommunications has created unprecedented liability for developers.
              Telcos are no longer obligated to service new developments, creating massive financial risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-red-50 via-orange-50 to-white dark:bg-slate-900/50 border-red-200 dark:border-slate-700 shadow-lg shadow-red-100/50 dark:shadow-none">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 dark:bg-red-500/30 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <TrendingUp className="h-6 w-6 text-white dark:text-red-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Impeded Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">Without guaranteed connectivity, sales velocity decreases and buyer confidence erodes, directly impacting project timelines and absorption rates.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 via-amber-50 to-white dark:bg-slate-900/50 border-orange-200 dark:border-slate-700 shadow-lg shadow-orange-100/50 dark:shadow-none">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 dark:bg-red-500/30 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <TrendingUp className="h-6 w-6 text-white dark:text-red-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Reduced Valuations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">Properties without proper technology infrastructure command lower prices and face challenges in attracting premium buyers and tenants.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 via-yellow-50 to-white dark:bg-slate-900/50 border-amber-200 dark:border-slate-700 shadow-lg shadow-amber-100/50 dark:shadow-none">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 dark:bg-red-500/30 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Shield className="h-6 w-6 text-white dark:text-red-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Financing Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">Lenders increasingly require technology master plans and connectivity guarantees as part of their due diligence and loan requirements.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gradient-to-br from-slate-50/30 via-slate-100/20 to-slate-200/30 dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Architecting the Digital DNA of Your Community</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Our disciplined, lifecycle-integrated approach mirrors the five stages of real estate development,
              ensuring technology planning is seamlessly woven into your project from day one.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-8">The Technology Master Plan: A Lifecycle Approach</h3>
                <div className="space-y-6">
                  {[
                    { phase: "Strategic Site Analysis", description: "Comprehensive site evaluation and technology feasibility assessment" },
                    { phase: "Concept & Planning", description: "Integration of technology requirements into master planning process" },
                    { phase: "Design & Engineering", description: "Detailed infrastructure design and provider coordination" },
                    { phase: "Construction & Implementation", description: "Oversight of technology infrastructure deployment" },
                    { phase: "Operations & Management", description: "Ongoing operations support and technology evolution planning" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{item.phase}</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-slate-100 dark:bg-slate-900/50 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-8">Our Phased Methodology</h3>
                <div className="space-y-6">
                  {[
                    { title: "Discovery & Immersion", description: "Deep dive into project requirements, market analysis, and stakeholder alignment" },
                    { title: "Master Plan & Provider Selection", description: "Comprehensive RFP process and competitive provider evaluation" },
                    { title: "Program Management & Operations", description: "End-to-end implementation support and ongoing optimization" }
                  ].map((phase, index) => (
                    <div key={index} className="pb-6 border-b border-slate-300 dark:border-slate-700 last:border-b-0">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{phase.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section id="value" className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:bg-gradient-to-br dark:from-slate-800/50 dark:via-slate-800/30 dark:to-slate-700/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">De-Risking Investments, Unlocking New Value</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              The Thrivemore Value Matrix: Four pillars of value creation that transform technology from liability to asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: "Mitigating Risk", icon: Shield, description: "Ensuring Day-One Viability" },
              { title: "Engineering Revenue", icon: TrendingUp, description: "New Investment Models" },
              { title: "Enhancing Value", icon: Zap, description: "Long-Term Asset Value" },
              { title: "Streamlining Complexity", icon: Users, description: "Expert Navigation" }
            ].map((pillar, index) => {
              const colors = [
                { bg: "from-blue-50 via-indigo-50 to-white", border: "border-blue-200", icon: "from-blue-500 to-indigo-500", shadow: "shadow-blue-100/50" },
                { bg: "from-green-50 via-emerald-50 to-white", border: "border-green-200", icon: "from-green-500 to-emerald-500", shadow: "shadow-green-100/50" },
                { bg: "from-purple-50 via-violet-50 to-white", border: "border-purple-200", icon: "from-purple-500 to-violet-500", shadow: "shadow-purple-100/50" },
                { bg: "from-cyan-50 via-teal-50 to-white", border: "border-cyan-200", icon: "from-cyan-500 to-teal-500", shadow: "shadow-cyan-100/50" }
              ];
              return (
                <Card key={index} className={`bg-gradient-to-br ${colors[index].bg} dark:bg-slate-900/50 ${colors[index].border} dark:border-slate-700 text-center shadow-lg ${colors[index].shadow} dark:shadow-none`}>
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors[index].icon} dark:bg-slate-600/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                      <pillar.icon className="h-8 w-8 text-white dark:text-slate-400" />
                    </div>
                    <CardTitle className="text-slate-900 dark:text-white">{pillar.title}</CardTitle>
                    <CardDescription className="text-slate-700 dark:text-slate-400">{pillar.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Partnership Model Table */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Partnership Model Returns</h3>
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-white dark:bg-slate-900/50 rounded-lg border border-green-200 dark:border-slate-700 overflow-hidden shadow-lg shadow-green-100/50 dark:shadow-none">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-100 to-emerald-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-slate-900 dark:text-white font-semibold">Model</th>
                    <th className="px-6 py-4 text-left text-slate-900 dark:text-white font-semibold">Description</th>
                    <th className="px-6 py-4 text-left text-slate-900 dark:text-white font-semibold">Typical IRR</th>
                    <th className="px-6 py-4 text-left text-slate-900 dark:text-white font-semibold">Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  {valueModels.map((model, index) => (
                    <tr key={index} className="border-b border-slate-300 dark:border-slate-700 last:border-b-0">
                      <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">{model.name}</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{model.description}</td>
                      <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">{model.irr}%</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{model.benefits.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section id="proof" className="py-20 bg-gradient-to-br from-slate-50/30 via-slate-100/20 to-slate-200/30 dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Case Studies in Visionary Development</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Real results from partnerships with premier developers across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white text-2xl">{study.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {study.client} • {study.location}
                  </CardDescription>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-slate-600 dark:text-slate-400">{study.projectSize.acres.toLocaleString()} acres</span>
                    <span className="text-slate-600 dark:text-slate-400">{study.projectSize.units.toLocaleString()} units</span>
                    <span className="text-green-600 dark:text-green-400">{study.projectSize.value} value</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Challenge:</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Solution:</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Results:</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-slate-400 mb-2">{companyStats.acres.toLocaleString()}+</div>
              <div className="text-slate-400">Acres Planned</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-400 mb-2">{companyStats.units.toLocaleString()}+</div>
              <div className="text-slate-400">Residential Units</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">${companyStats.value}B+</div>
              <div className="text-slate-400">Total Investment Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-400 mb-2">{companyStats.projects}+</div>
              <div className="text-slate-400">Master Plans Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:bg-gradient-to-br dark:from-slate-800/50 dark:via-slate-800/30 dark:to-slate-700/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Decades of Experience at the Intersection of Real Estate and Technology</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Our leadership team combines deep real estate development expertise with cutting-edge technology knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-slate-900 dark:text-white" />
                  </div>
                  <CardTitle className="text-slate-900 dark:text-white">{member.name}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{member.bio}</p>
                  {member.yearsExperience && (
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 font-semibold">
                      {member.yearsExperience}+ years experience
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Begin Your Technology Master Plan</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Let us help you build a community that is not just for today, but for generations to come.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">What makes your story unique?</h3>
                <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>Guaranteed connectivity from day one</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>Transform infrastructure costs into revenue streams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>Proven track record with premier developers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>Future-proof technology roadmaps</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <Card className="w-full max-w-md bg-gradient-to-br from-white to-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Start Your Technology Master Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-center">
                    <p className="text-slate-600 dark:text-slate-300">Ready to transform your development?</p>
                    <div className="space-y-2">
                      <p className="text-slate-900 dark:text-white font-semibold">Amy Westwood, Partner</p>
                      <p className="text-slate-600 dark:text-slate-300">amy@thrivemoreadvisors.com</p>
                      <p className="text-slate-600 dark:text-slate-300">904.944.4544</p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 min-h-12 flex items-center justify-center">
                      <Link href="#contact" className="w-full h-full flex items-center justify-center">Schedule Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 bg-slate-900">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2025 Thrivemore Technology Advisors. All rights reserved.</p>
          <p className="mt-2">The Future Well Grounded™</p>
        </div>
      </footer>
    </div>
  );
}