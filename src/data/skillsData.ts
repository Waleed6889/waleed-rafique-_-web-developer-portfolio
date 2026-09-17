import { SkillItem } from '../types';

export const SKILLS_DATA: SkillItem[] = [
  // Core Frontend
  {
    name: 'HTML5',
    category: 'Frontend Core',
    description: 'Semantic markup, accessible DOM structure (WAI-ARIA), and SEO-friendly document hierarchy.',
    iconName: 'Code2',
    levelBadge: 'Semantic Web',
  },
  {
    name: 'CSS3',
    category: 'Frontend Core',
    description: 'Modern flexbox, CSS grid, custom properties, animations, and responsive media queries.',
    iconName: 'Palette',
    levelBadge: 'Modern Layouts',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend Core',
    description: 'DOM manipulation, asynchronous fetch APIs, event listeners, array methods, and modular code.',
    iconName: 'FileCode2',
    levelBadge: 'Core Logic',
  },
  {
    name: 'React',
    category: 'Frontend Core',
    description: 'Functional components, hooks (useState, useEffect, useMemo), props management, and component architecture.',
    iconName: 'Atom',
    levelBadge: 'Component Architecture',
  },

  // Styling & Frameworks
  {
    name: 'Tailwind CSS',
    category: 'Styling & Frameworks',
    description: 'Utility-first styling, design system tokens, responsive variants, and clean custom configurations.',
    iconName: 'Layers',
    levelBadge: 'Utility-First',
  },
  {
    name: 'Bootstrap',
    category: 'Styling & Frameworks',
    description: 'Grid systems, responsive breakpoints, utility classes, and mobile-friendly UI layout patterns.',
    iconName: 'LayoutGrid',
    levelBadge: 'Responsive Grids',
  },

  // Tools & Workflow
  {
    name: 'Git',
    category: 'Tools & Workflow',
    description: 'Branch management, feature commits, conflict resolution, and local version tracking.',
    iconName: 'GitBranch',
    levelBadge: 'Version Control',
  },
  {
    name: 'GitHub',
    category: 'Tools & Workflow',
    description: 'Repository hosting, pull requests, issue tracking, GitHub Pages, and collaborative open-source flow.',
    iconName: 'Github',
    levelBadge: 'Collaboration',
  },
  {
    name: 'AI-Assisted Development',
    category: 'Tools & Workflow',
    description: 'Using modern AI models for test scenario generation, semantic code reviews, debugging, and rapid prototyping.',
    iconName: 'Sparkles',
    levelBadge: 'Workflow Velocity',
  },
];
