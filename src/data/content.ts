import { TeamMember, CaseStudy, ValueModel } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    name: "Charles Adams",
    title: "Founding Partner",
    bio: "Charles brings over 25 years of experience in real estate development and technology integration. He has led technology master planning for developments exceeding $20 billion in value.",
    yearsExperience: 25
  },
  {
    name: "Amy Westwood",
    title: "Partner",
    bio: "Amy specializes in provider negotiations and revenue engineering. She has structured joint venture partnerships that have generated over $100M in additional developer value.",
    yearsExperience: 18
  },
  {
    name: "Mike Brunetti",
    title: "Senior Technology Strategist",
    bio: "Mike focuses on emerging technologies and smart city integration. He leads our IoT and wellness technology initiatives for master-planned communities.",
    yearsExperience: 15
  },
  {
    name: "Sherry Lesley",
    title: "Operations Director",
    bio: "Sherry manages program implementation and ongoing operations. She ensures seamless execution across all phases of technology master planning.",
    yearsExperience: 12
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "waterlin",
    title: "Waterlin",
    client: "Confidential Developer",
    location: "Florida",
    projectSize: {
      acres: 6000,
      units: 15000,
      value: "$4.2B"
    },
    challenge: "A 6,000-acre, 20+ year buildout requiring a scalable, future-ready technology strategy that could evolve with changing technology standards.",
    solution: "Implemented a rigorous RFP process that evolved into a groundbreaking Joint Venture partnership, transforming infrastructure from a cost center into a revenue-generating asset.",
    results: [
      "15% IRR on infrastructure Joint Venture",
      "Guaranteed connectivity from day one",
      "Revenue sharing model generating $50M+ over project lifecycle",
      "Future-proof technology roadmap spanning 20+ years"
    ],
    images: ["/placeholders/waterlin-hero.jpg", "/placeholders/waterlin-aerial.jpg"]
  },
  {
    id: "asteria",
    title: "Asteria, a StoryLiving by Disney Community",
    client: "DMB Development",
    location: "North Carolina",
    projectSize: {
      acres: 1900,
      units: 4000,
      value: "$1.8B"
    },
    challenge: "Meeting the absolute standard of excellence for a Disney-affiliated community while ensuring world-class connectivity and smart home integration.",
    solution: "Developed a comprehensive Comparison Dashboard providing data-driven provider selection with rigorous performance standards matching Disney's quality expectations.",
    results: [
      "100% fiber-to-the-home connectivity",
      "Smart home integration in every residence",
      "Award-winning community Wi-Fi infrastructure",
      "Seamless integration with Disney's digital ecosystem"
    ],
    images: ["/placeholders/asteria-hero.jpg", "/placeholders/asteria-homes.jpg"]
  }
];

export const valueModels: ValueModel[] = [
  {
    name: "NEMA",
    description: "Non-Exclusive Marketing Agreement",
    doorFee: 100,
    monthlyRevenue: 0,
    irr: 5,
    benefits: [
      "Low barrier to entry",
      "Multiple provider options",
      "Flexible terms"
    ]
  },
  {
    name: "EMA",
    description: "Exclusive Marketing Agreement",
    doorFee: 300,
    monthlyRevenue: 0,
    irr: 8,
    benefits: [
      "Exclusive provider relationship",
      "Higher door fees",
      "Dedicated service levels"
    ]
  },
  {
    name: "Bulk Service",
    description: "Bulk Service Agreement",
    doorFee: 0,
    monthlyRevenue: 45,
    irr: 12,
    benefits: [
      "Monthly revenue stream",
      "Bundled services",
      "Reduced resident costs"
    ]
  },
  {
    name: "Joint Venture",
    description: "Infrastructure Joint Venture",
    doorFee: 0,
    monthlyRevenue: 0,
    irr: 15,
    benefits: [
      "Equity participation",
      "Revenue sharing",
      "Long-term value creation",
      "Infrastructure ownership"
    ]
  }
];

export const companyStats = {
  acres: 114000,
  units: 130000,
  value: 71,
  projects: 47
};

export const clients = [
  "The Walt Disney Company",
  "DMB Development",
  "Kitson and Partners",
  "Crescent Communities",
  "Discovery Land Company",
  "Toll Brothers",
  "Lennar Corporation"
];