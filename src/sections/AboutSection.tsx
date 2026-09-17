import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Atom, 
  Layers, 
  LayoutGrid, 
  GitBranch, 
  Github, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SKILLS_DATA } from '../data/skillsData';

// Map icon strings to Lucide icon components
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-[#f97066]" />,
  Palette: <Palette className="w-5 h-5 text-[#fb923c]" />,
  FileCode2: <FileCode2 className="w-5 h-5 text-[#b8b5d1]" />,
  Atom: <Atom className="w-5 h-5 text-[#8b5cf6]" />,
  Layers: <Layers className="w-5 h-5 text-[#bef264]" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5 text-[#f97066]" />,
  GitBranch: <GitBranch className="w-5 h-5 text-[#fb923c]" />,
  Github: <Github className="w-5 h-5 text-[#b8b5d1]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#bef264]" />,
};

export const AboutSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend Core', 'Styling & Frameworks', 'Tools & Workflow'];

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="about"
      aria-label="About the Developer"
      className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0c0e14]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161a25] border border-white/10 text-xs font-mono text-[#f97066] mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Passionate about clean code, modern web standards, and craft.
          </h2>
          <p className="mt-3 text-zinc-400 text-base leading-relaxed">
            A look into who I am, my development philosophy, and the modern toolkit I use to bring ideas to life.
          </p>
        </div>

        {/* Narrative Bio */}
        <div className="max-w-3xl space-y-5 text-zinc-300 leading-relaxed text-base mb-16">
          <p>
            I am an aspiring web developer who discovered a passion for the craft by building interactive layouts and solving everyday problems on the web. What started as curiosity about how websites work quickly turned into a dedicated daily practice of writing semantic code and exploring modern frontend architectures.
          </p>
          <p>
            My core focus is on <strong className="text-white font-semibold">frontend development</strong>—turning clean visual designs into accessible, performant, and mobile-friendly web experiences. I work extensively with <strong className="text-white font-semibold">HTML5, CSS3, JavaScript (ES6+), React</strong>, and utility-driven systems like <strong className="text-white font-semibold">Tailwind CSS</strong> and Bootstrap.
          </p>
          <p>
            I am particularly excited about how <strong className="text-white font-semibold">AI-assisted development</strong> is transforming the industry. By pairing modern AI tools with a solid understanding of core web fundamentals, I accelerate component iteration, perform rigorous code reviews, test for edge cases, and ensure semantic markup without cutting corners.
          </p>
          <p>
            Above all, my goal is simple: to create websites that are genuinely useful, fast to load, visually balanced, and enjoyable for people of all abilities to navigate.
          </p>

          {/* Quick Principles / Value Pills */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141824] border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#bef264] mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-white block">Mobile-First & Accessible</span>
                <span className="text-[12px] text-zinc-400">Tested across viewport sizes and keyboard inputs</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141824] border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#f97066] mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-white block">Continuous Learner</span>
                <span className="text-[12px] text-zinc-400">Constantly building, shipping, and refining my stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills-section" className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Technical Skills & Technologies
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Modern tools I use regularly in building frontend applications.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-[#141824] p-1 rounded-xl border border-white/10 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-white/10 text-white font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Modern Visual Skill Cards Grid (NO old-fashioned progress bars) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="group relative p-5 rounded-2xl bg-[#121622]/90 border border-white/[0.08] hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#181d2c] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[skill.iconName] || <Code2 className="w-5 h-5 text-[#f97066]" />}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/5 border border-white/10 text-zinc-300">
                    {skill.levelBadge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#f97066] transition-colors">
                  {skill.name}
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
