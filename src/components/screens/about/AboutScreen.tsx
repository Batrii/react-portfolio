import React from 'react';
import { developerProfile, experienceData, images, skillCategories } from '../../../data/portfolioData';
import { FileText, Mail, MapPin, Briefcase, Calendar, CheckCircle2, ArrowUpRight, Award, Sparkles, Motorbike, MonitorCloud } from 'lucide-react';
import './about.css';

interface AboutScreenProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-10 flex flex-col gap-14">
      {/* 1. Header Bio & Portrait */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-full max-w-sm about-hero-image-wrap group">
            <img
              src={images.avatar}
              alt="Badr Eddine Nafiai at work"
              className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-surface-container-high/90 backdrop-blur-md p-3 rounded-xl border border-outline-variant/20 flex items-center justify-between">
              <div>
                <p className="font-headline text-sm font-semibold text-on-surface">
                  {developerProfile.name}
                </p>
                <p className="font-mono text-[11px] text-secondary">
                  {developerProfile.status}
                </p>
              </div>
              <MonitorCloud className="w-4 h-4 text-secondary" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-5">
          <div className="flex items-center gap-2 font-mono text-[11px] text-primary uppercase tracking-widest">
            <span>Engineering Ethos &amp; Background</span>
            <span className="w-10 h-px bg-primary inline-block"></span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-bold text-on-surface leading-tight">
            Engineering with rigor, curiosity, and an obsession for clean architecture.
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-on-surface-variant">
            <span className="flex items-center gap-1.5 bg-surface-container-high px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>{developerProfile.location}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-surface-container-high px-3 py-1 rounded-full">
              <Briefcase className="w-3.5 h-3.5 text-primary" />
              <span>Junior Software Engineer</span>
            </span>
          </div>

          <p className="font-body text-[16px] leading-[28px] text-on-surface-variant">
            I am a Software Engineer with a deep passion for modern frontend experiences, robust backend systems, and developer ergonomics. Having graduated with honors in Computer Science, I bridge the gap between abstract computer science principles—data structures, systems design, protocol performance—and tangible, pixel-perfect digital products that delight users.
          </p>

          <p className="font-body text-[15px] leading-[26px] text-outline">
            Whether writing reusable React hooks with TypeScript, profiling high-throughput Node.js microservices, or deploying containerized full-stack apps to cloud infrastructure, my focus remains constant: maintainability, performance, and empathy for both users and fellow developers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-container text-on-primary font-headline text-[15px] font-semibold hover:bg-primary transition-all shadow-md cursor-pointer active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume (PDF)</span>
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container-high text-on-surface font-headline text-[15px] hover:bg-surface-bright transition-all shadow-sm cursor-pointer"
            >
              <Mail className="w-4 h-4 text-secondary" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars of Practice */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[11px] text-secondary uppercase tracking-wider">
            Development Philosophy
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-on-surface">
            How I Approach Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/15 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-[18px] font-semibold text-on-surface">
              Modularity &amp; Single Responsibility
            </h3>
            <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
              Every function, component, and module should do one thing exceptionally well. Code written cleanly with strict TypeScript types is inherently self-documenting, easily testable, and painless to refactor.
            </p>
          </div>

          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/15 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-[18px] font-semibold text-on-surface">
              Performance by Default
            </h3>
            <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
              Fast software respects user attention. I prioritize zero unnecessary re-renders in React, optimal bundle chunks, responsive layout shifts (CLS &lt; 0.05), and low-latency database queries.
            </p>
          </div>

          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/15 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-[18px] font-semibold text-on-surface">
              Eagerness to Grow &amp; Learn
            </h3>
            <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
              Software evolves rapidly. I maintain a daily rhythm of reading source repositories, benchmarking new web APIs, exploring cloud patterns, and welcoming constructive architectural code reviews.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Experience & Career Journey */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[11px] text-primary uppercase tracking-wider">
            Hands-on Experience
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-on-surface">
            Career Timeline &amp; Roles
          </h2>
        </div>

        <div className="relative border-l border-outline-variant/30 ml-4 pl-6 flex flex-col gap-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary-container timeline-dot border-2 border-surface"></div>

              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/15 hover:border-primary/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-headline text-[19px] font-semibold text-on-surface">
                      {exp.role}
                    </h3>
                    <p className="font-body text-[14px] text-secondary font-medium">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[12px] text-outline bg-surface-container-high px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="font-body text-[14px] text-on-surface-variant flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-outline-variant/15">
                  <span className="font-mono text-[11px] text-outline mr-2">Stack:</span>
                  {exp.stack.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-low text-tertiary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
