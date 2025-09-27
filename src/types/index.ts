export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
  linkedin?: string;
  yearsExperience?: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  projectSize: {
    acres: number;
    units: number;
    value: string;
  };
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

export interface ValueModel {
  name: string;
  description: string;
  doorFee?: number;
  monthlyRevenue?: number;
  irr?: number;
  benefits: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  projectSize?: string;
  projectStage?: string;
  message?: string;
}