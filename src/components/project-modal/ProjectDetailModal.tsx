import React from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Terminal, CheckCircle2, Layers, Cpu } from 'lucide-react';
import './projectModal.css';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 project-modal-overlay"
      onClick={onClose}
    >
      <div
        className="bg-surface-container rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto project-modal-card border border-outline-variant/30 text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-surface-container-low">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent"></div>
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-surface-container-lowest/80 text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <div>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-primary-container text-on-primary font-semibold">
                {project.category}
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mt-1.5">
                {project.title}
              </h2>
            </div>
            {project.stars && (
              <span className="hidden sm:inline-flex items-center gap-1 font-mono text-xs bg-surface-container-high px-3 py-1 rounded-full text-secondary">
                ★ {project.stars} stars
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Description */}
          <div className="flex flex-col gap-2">
            <h3 className="font-headline text-[17px] font-semibold text-on-surface">Overview</h3>
            <p className="font-body text-[15px] leading-relaxed text-on-surface-variant">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture block */}
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/15 flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-[12px] text-primary">
              <Cpu className="w-4 h-4" />
              <span className="font-semibold uppercase tracking-wider">System Architecture</span>
            </div>
            <p className="font-body text-[14px] text-outline leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Key Features */}
          <div className="flex flex-col gap-3">
            <h3 className="font-headline text-[17px] font-semibold text-on-surface flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>Key Features &amp; Implementation</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="font-body text-[13px] text-on-surface-variant flex items-start gap-2 bg-surface-container-high/60 p-2.5 rounded-lg border border-outline-variant/10"
                >
                  <span className="text-secondary mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-col gap-2">
            <h3 className="font-headline text-[17px] font-semibold text-on-surface flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              <span>Toolset &amp; Libraries</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded bg-surface-container-high font-mono text-[12px] text-tertiary border border-outline-variant/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-outline-variant/20">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-headline text-sm font-medium transition-colors"
            >
              <Terminal className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-headline text-sm font-semibold transition-colors"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
