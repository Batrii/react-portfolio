import React from 'react';
import { PageId } from '../../types';
import { images } from '../../data/portfolioData';
import { ArrowRight, User, Code2, GraduationCap } from 'lucide-react';
import './bento.css';

interface BentoGridProps {
  onNavigate: (page: PageId) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'about-me' as PageId,
      number: '01 • Bio',
      title: 'About Me',
      description:
        'My story, software development ethos, commitment to clean architecture, and the philosophy driving my engineering journey every single day.',
      image: images.bioCard,
      alt: 'Editorial workspace photograph of software developer at night',
      badgeColor: 'text-tertiary',
      tagIcon: <User className="w-3.5 h-3.5 text-secondary" />,
      tagText: 'Mindset • Growth',
      ctaText: 'Read Story →',
    },
    {
      id: 'projects' as PageId,
      number: '02 • Showcase',
      title: 'Featured Projects',
      description:
        'Full-stack web applications, frontend experiments, and production-ready code with live demo deployments, GitHub repositories, and tech breakdowns.',
      image: images.projectsCard,
      alt: 'Sleek UI dashboard analytics interface visualization',
      badgeColor: 'text-primary',
      tagIcon: <Code2 className="w-3.5 h-3.5 text-primary" />,
      tagText: 'Production Demos',
      ctaText: 'View Builds →',
    },
    {
      id: 'educational' as PageId,
      number: '03 • Academic',
      title: 'Educational',
      description:
        'Computer Science coursework, recognized certifications, algorithm studies, and continuous specialized learning tracks in modern software development.',
      image: images.educationalCard,
      alt: 'Abstract 3D architectural geometric forms representing computer science algorithms',
      badgeColor: 'text-secondary',
      tagIcon: <GraduationCap className="w-3.5 h-3.5 text-secondary" />,
      tagText: 'CS Fundamentals',
      ctaText: 'Check Degrees →',
    },
  ];

  const handleCardClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-12 py-12 w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 font-mono text-[11px] text-primary uppercase tracking-widest">
            <span>Portfolio Overview</span>
            <span className="w-8 h-px bg-primary inline-block"></span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-[40px] font-semibold text-on-surface tracking-tight">
            Explore My Journey &amp; Works
          </h2>
        </div>
        <p className="font-body text-[15px] leading-relaxed text-on-surface-variant max-w-md">
          A balanced synthesis of foundational computer science, real-world full-stack experiments, and continuous craft.
        </p>
      </div>

      {/* Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className="group flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:bg-surface-container-high transition-all duration-300 flex-1 cursor-pointer border border-outline-variant/15 bento-card"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden bg-surface-container-low bento-card-image-wrap">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover bento-card-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/40 to-transparent"></div>
              <span
                className={`absolute top-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/80 bento-badge font-mono text-[11px] ${card.badgeColor}`}
              >
                {card.number}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline text-[22px] font-semibold text-on-surface group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="font-body text-[13px] text-on-surface-variant line-clamp-3 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Footer Tag & CTA */}
              <div className="flex items-center justify-between pt-2 border-t border-outline-variant/15">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-outline">
                  {card.tagIcon}
                  <span>{card.tagText}</span>
                </div>
                <span className="font-mono text-[12px] text-primary group-hover:underline flex items-center font-medium">
                  {card.ctaText}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
