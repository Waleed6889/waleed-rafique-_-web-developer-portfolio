import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Monitor } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        id="project-modal-card"
        className="relative w-full max-w-2xl bg-[#11141d] border border-white/15 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d1017]">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#f97066]"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Visual Graphic Banner */}
          <div
            className={`relative w-full h-52 sm:h-64 rounded-xl overflow-hidden bg-gradient-to-br ${project.gradientClass} border border-white/10 flex flex-col items-center justify-center p-6 text-center`}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#141824] border border-white/15 flex items-center justify-center mb-3 shadow-lg">
              <Monitor className="w-7 h-7" style={{ color: project.accentColor }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md font-sans">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Overview & Architecture
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Key Features & Implementation
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: project.accentColor }}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#181d2c] border border-white/10 text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0d1017] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-zinc-500 font-mono">
            Placeholder project ready for custom links
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}

           <a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#f97066] to-[#fb923c] text-[#0c0e14] text-xs font-bold hover:brightness-110 transition-all shadow-md"
>
  <span>Live Demo</span>
  <ExternalLink className="w-3.5 h-3.5" />
</a>
          </div>
        </div>
      </div>
    </div>
  );
};
