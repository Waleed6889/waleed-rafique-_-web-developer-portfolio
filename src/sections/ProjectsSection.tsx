import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Code, Layers, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { Project } from '../types';
import { ProjectModal } from '../components/ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'React & Apps', 'Games', 'Tools'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter);

  return (
    <section
      id="projects"
      aria-label="Projects Showcase"
      className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0c0e14]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161a25] border border-white/10 text-xs font-mono text-[#f97066] mb-3">
              <span>FEATURED WORK</span>
            </div>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
            >
              Curated Frontend Projects & Prototypes
            </h2>
            <p className="mt-3 text-zinc-400 text-base leading-relaxed">
              Real functional web applications showcasing clean component architecture, responsive styling, and modern web APIs. Designed for easy customization with your own live projects.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-[#141824] p-1.5 rounded-xl border border-white/10 text-xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`filter-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                  selectedFilter === cat
                    ? 'bg-white/10 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative flex flex-col rounded-2xl bg-[#121622] border border-white/[0.08] hover:border-white/20 shadow-lg hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Project Visual Placeholder / Graphic Mockup with Zoom Effect */}
              <div className="relative w-full h-48 sm:h-52 bg-[#0d1017] overflow-hidden border-b border-white/[0.06]">
                {/* Background gradient glow accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradientClass} opacity-60 group-hover:opacity-90 transition-opacity duration-300`}
                />

                {/* Subtle visual grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                {/* Simulated UI Window Preview with Zoom Effect */}
                <div className="absolute inset-x-4 inset-y-4 rounded-xl bg-[#141824]/90 border border-white/10 p-3 flex flex-col justify-between shadow-inner transform group-hover:scale-[1.03] transition-transform duration-300">
                  {/* Mini Window Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400/70" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                      <span className="w-2 h-2 rounded-full bg-green-400/70" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Graphic Centerpiece */}
                  <div className="flex flex-col items-center justify-center my-auto">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-1.5 border border-white/10 shadow-sm"
                      style={{ backgroundColor: `${project.accentColor}18` }}
                    >
                      <Code className="w-5 h-5" style={{ color: project.accentColor }} />
                    </div>
                    <span className="text-xs font-bold text-white tracking-tight font-heading">
                      {project.title}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono mt-0.5 line-clamp-1">
                      {project.tagline}
                    </span>
                  </div>

                  {/* Micro Footer Bar */}
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pt-1 border-t border-white/5">
                    <span>Clean Code</span>
                    <span style={{ color: project.accentColor }}>Interactive</span>
                  </div>
                </div>

                {/* Category Pill on top right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#0c0e14]/80 backdrop-blur-md border border-white/10 text-zinc-300">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content Body */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#f97066] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#f97066] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Badges */}
                <div className="pt-2">
                  <div className="flex items-center gap-1 text-[11px] text-zinc-500 font-mono mb-2">
                    <Layers className="w-3 h-3" />
                    <span>Tech Stack:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#161a26] border border-white/[0.08] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons: "View Project" and optional "GitHub" */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <button
                    type="button"
                    id={`view-project-btn-${project.id}`}
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/20 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3 h-3 text-[#f97066]" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-xl bg-[#141824] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                      title={`View ${project.title} on GitHub`}
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Helpful note for beginner developer customization */}
      
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
