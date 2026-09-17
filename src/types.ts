export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'React & Apps' | 'Games' | 'Tools';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor: string; // coral, lavender, violet, peach, chartreuse
  gradientClass: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend Core' | 'Styling & Frameworks' | 'Tools & Workflow';
  description: string;
  iconName: string;
  levelBadge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}
