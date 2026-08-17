export type TLanguage = 'vi' | 'en';

export interface IProject {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  category: 'enterprise' | 'frontend' | 'fullstack' | 'webapps';
  projectType: 'enterprise' | 'personal';
  status?: {
    vi: string;
    en: string;
  };
  company?: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  highlights: {
    vi: string[];
    en: string[];
  };
}

export interface ISkillItem {
  name: string;
  level: number; // 0 - 100
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon: string;
  badgeColor?: string;
}

export interface IExperienceItem {
  id: string;
  period: {
    vi: string;
    en: string;
  };
  duration: {
    vi: string;
    en: string;
  };
  role: {
    vi: string;
    en: string;
  };
  company: string;
  employmentType: {
    vi: string;
    en: string;
  };
  workplaceType: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  skills: string[];
}
