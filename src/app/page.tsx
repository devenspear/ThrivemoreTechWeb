import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/shared/logo";

export default function Home() {
  const designs = [
    {
      id: "design-a",
      title: "Conservative Professional",
      description: "Traditional, authoritative design with deep blues and charcoals. Targets C-suite executives with emphasis on trust and credibility.",
      features: ["Clean, professional aesthetic", "Conservative color palette", "Authority-focused messaging", "Traditional layouts"],
      route: "/design-a",
      thumbnail: {
        background: "bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900",
        accent: "from-blue-400 to-cyan-400",
        title: "THRIVEMORE",
        subtitle: "Technology Advisors",
        tagline: "The Future Well Grounded™"
      }
    },
    {
      id: "design-b",
      title: "Tech-Forward",
      description: "Modern tech aesthetic with particle networks and dynamic elements. Emphasizes innovation and connectivity.",
      features: ["Dynamic animations", "Tech-oriented visuals", "Interactive elements", "Innovation-focused"],
      route: "/design-b",
      thumbnail: {
        background: "bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900",
        accent: "from-cyan-400 to-teal-400",
        title: "THRIVEMORE",
        subtitle: "Technology Advisors",
        tagline: "The Future Well Grounded™"
      }
    },
    {
      id: "design-c",
      title: "Modern Minimalist",
      description: "Sophisticated design with clean lines and data visualizations. Balances authority with innovation.",
      features: ["Minimalist layouts", "Data visualizations", "Sophisticated animations", "Clean design language"],
      route: "/design-c",
      thumbnail: {
        background: "bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800",
        accent: "from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-100",
        title: "THRIVEMORE",
        subtitle: "Technology Advisors",
        tagline: "The Future Well Grounded™"
      }
    },
    {
      id: "design-d",
      title: "Interactive Storytelling",
      description: "Engaging narrative-driven design with motion graphics and interactive elements.",
      features: ["Storytelling approach", "Interactive timelines", "Motion graphics", "Engaging user journey"],
      route: "/design-d",
      thumbnail: {
        background: "bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900",
        accent: "from-yellow-400 to-orange-500",
        title: "The Future",
        subtitle: "Well Grounded",
        tagline: "Every great community starts with a vision"
      }
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
            Choose from four distinct design approaches for our digital presence.
            Each design targets the same audience with a unique aesthetic and user experience.
          </p>
        </div>
      </section>

      {/* Design Options Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {designs.map((design) => (
              <Link key={design.id} href={design.route} className="block h-full">
                <Card className="h-full hover:shadow-lg hover:shadow-slate-700/50 transition-all cursor-pointer hover:scale-105 transform transition-transform bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">{design.title}</CardTitle>
                    <CardDescription className="text-base text-slate-300">
                      {design.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Thumbnail Preview */}
                    <div className={`relative h-32 ${design.thumbnail.background} rounded-lg mb-4 overflow-hidden flex items-center justify-center`}>
                      <div className="text-center z-10">
                        <h3 className={`text-lg font-bold bg-gradient-to-r ${design.thumbnail.accent} bg-clip-text text-transparent`}>
                          {design.thumbnail.title}
                        </h3>
                        <p className="text-white/90 text-sm font-medium">{design.thumbnail.subtitle}</p>
                        <p className="text-white/70 text-xs mt-1">{design.thumbnail.tagline}</p>
                      </div>
                      {/* Background decoration */}
                      <div className="absolute inset-0 opacity-10">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {design.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-md text-center font-medium hover:from-cyan-600 hover:to-blue-700 transition-colors">
                      View {design.title} Design
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2025 Thrivemore Technology Advisors. All rights reserved.</p>
          <p className="mt-2">Four designs, one vision</p>
        </div>
      </footer>
    </div>
  );
}
