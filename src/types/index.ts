export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

export interface Project {
  id: string;
  name: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  longDescription?: {
    tr: string;
    en: string;
  };
  language: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category: "web" | "mobile" | "desktop" | "api";
  featured?: boolean;
  images?: string[];
  features?: {
    tr: string[];
    en: string[];
  };
  challenges?: {
    tr: string;
    en: string;
  };
  year?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  category: "backend" | "frontend" | "database" | "devops" | "tools" | "it";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
