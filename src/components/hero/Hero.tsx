import React from 'react';
import { PageId } from '../../types';
import { TerminalCard } from '../terminal/TerminalCard';
import { ArrowRight, FileText, Terminal, Share2 } from 'lucide-react';
import './hero.css';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenResume,
  onOpenContact,
}) => {
  const techStack = [
    { name: 'JavaScript', dotColor: 'bg-secondary' },
    { name: 'TypeScript', dotColor: 'bg-primary' },
    { name: 'React', dotColor: 'bg-primary-container' },
    { name: 'Next.js', dotColor: 'bg-on-surface' },
    { name: 'Node.js', dotColor: 'bg-secondary-fixed-dim' },
    { name: 'Python', dotColor: 'bg-tertiary' },
    { name: 'Tailwind CSS', dotColor: 'bg-primary-fixed' },
    { name: 'Git', dotColor: 'bg-secondary' },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-12 pt-6 md:pt-10 pb-10 w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Hero Left Content (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high hero-pill-badge">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="font-mono text-[11px] font-semibold text-secondary tracking-wide uppercase">
              Open for Junior Software Engineer Roles &amp; Internships
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-1">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] font-bold text-on-surface tracking-tight">
              Hi, I’m <span className="font-extrabold text-on-surface">Badr Eddine Nafiai</span>
            </h1>
            <div className="font-headline text-2xl sm:text-3xl lg:text-[38px] font-semibold hero-gradient-text">
              Junior Software Engineer
            </div>
          </div>

          {/* Mission Statement */}
          <p className="font-body text-[16px] sm:text-[17px] leading-[28px] text-on-surface-variant max-w-xl">
            Crafting responsive, reliable, and modern web applications with clean code, modern frontend frameworks, and robust backends. Dedicated to scalable engineering and elegant user journeys.
          </p>

          {/* CTA Group & Socials */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="hero-cta-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary font-headline text-[15px] font-semibold cursor-pointer active:scale-95"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-high text-on-surface font-headline text-[15px] font-medium hover:bg-surface-bright transition-all shadow-sm cursor-pointer hover:-translate-y-0.5 active:scale-95"
            >
              <span>About Me &amp; Resume</span>
              <FileText className="w-4 h-4 text-primary" />
            </button>

            <div className="flex items-center gap-2 ml-auto lg:ml-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="p-3 rounded-xl bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all shadow-sm"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="p-3 rounded-xl bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all shadow-sm"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Toolset & Technologies Pill Row */}
          <div className="flex flex-col gap-2 pt-4 w-full">
            <span className="font-mono text-[11px] text-outline uppercase tracking-wider">
              Core Toolset &amp; Technologies
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2.5 py-1 rounded bg-surface-container-low text-tertiary font-mono text-[11px] shadow-sm flex items-center gap-1.5 border border-outline-variant/15"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${tech.dotColor}`}></span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Right Bento / Interactive Code Terminal (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col">
          <TerminalCard onConnectClick={onOpenContact} />
        </div>
      </div>
    </section>
  );
};
