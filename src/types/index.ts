export type PageId = 'home' | 'about-me' | 'projects' | 'educational' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  architecture: string;
  demoUrl?: string;
  githubUrl: string;
  stars?: number;
  featured?: boolean;
}

export interface Degree {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  gpa?: string;
  keyCourses: string[];
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl?: string;
  skills: string[];
  badgeColor?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  stack: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface DeveloperProfile {
  name: string;
  title: string;
  status: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
  mission: string;
  stack: string[];
  passions: string[];
  currentFocus: string;
  isOpenToOffers: boolean;
}
