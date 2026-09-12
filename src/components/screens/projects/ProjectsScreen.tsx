import React, { useState } from 'react';
import { Project } from '../../../types';
import { projectsData } from '../../../data/portfolioData';
import { ArrowUpRight, Terminal, Search } from 'lucide-react';
import './projects.css';

interface ProjectsScreenProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Full-Stack', 'Frontend', 'Systems & APIs'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-10 flex flex-col gap-10">
      {/* Header section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px] text-primary uppercase tracking-widest">
          <span>Engineering Portfolio</span>
          <span className="w-10 h-px bg-primary inline-block"></span>
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-bold text-on-surface">
          Featured Projects &amp; Software Systems
        </h1>
        <p className="font-body text-[16px] text-on-surface-variant max-w-2xl leading-relaxed">
          Explore production-grade full-stack web applications, interactive frontend engines, and microservices backends built with modern best practices.
        </p>
      </div>

      {/* Filter and search bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant/20">
        {/* Category pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-[12px] px-3.5 py-1.5 rounded-xl cursor-pointer transition-all ${
                selectedCategory === cat
                  ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by tech or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline text-[13px] font-mono border border-outline-variant/30 focus:outline-none focus:border-primary-container"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center text-on-surface-variant font-mono text-sm">
          No projects found matching "{searchQuery}".
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/20 flex flex-col justify-between cursor-pointer project-card-interactive"
            >
              {/* Media image container */}
              <div className="relative h-56 w-full overflow-hidden bg-surface-container-low">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
                <span className="absolute top-3 right-3 font-mono text-[11px] px-2.5 py-1 rounded bg-surface-container-lowest/80 text-primary backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Content info */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline text-[20px] font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    {project.stars && (
                      <span className="font-mono text-xs text-secondary">
                        ★ {project.stars}
                      </span>
                    )}
                  </div>
                  <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-tertiary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="font-mono text-[11px] text-outline">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Footer action bar */}
                <div
                  className="flex items-center justify-between pt-3 border-t border-outline-variant/15 text-xs font-mono"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-on-surface-variant hover:text-primary flex items-center gap-1"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-primary hover:underline font-medium cursor-pointer"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
