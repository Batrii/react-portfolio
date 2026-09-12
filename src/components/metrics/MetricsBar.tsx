import React from 'react';
import { Layers, Zap, Code, Brain } from 'lucide-react';
import './metrics.css';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      title: 'Clean Code',
      category: 'Modular Architecture',
      description: 'Strict adherence to DRY, scalable patterns & testability.',
      icon: <Code className="w-5 h-5 text-primary" />,
      tagColor: 'text-primary',
    },
    {
      title: 'Agile Learner',
      category: 'Fast Adaptation',
      description: 'Quick to master new frameworks, libraries, and protocols.',
      icon: <Zap className="w-5 h-5 text-secondary" />,
      tagColor: 'text-secondary',
    },
    {
      title: 'Modern Stack',
      category: 'Contemporary Tech',
      description: 'Full-stack React, Next.js, TypeScript, REST & SQL.',
      icon: <Layers className="w-5 h-5 text-primary-container" />,
      tagColor: 'text-primary-container',
    },
    {
      title: 'Problem Solver',
      category: 'End-to-End Mindset',
      description: 'Translating business goals into streamlined web systems.',
      icon: <Brain className="w-5 h-5 text-tertiary" />,
      tagColor: 'text-tertiary',
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-12 py-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-surface-container rounded-xl p-4 shadow-md border border-outline-variant/15">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-1 p-3 rounded-lg hover:bg-surface-container-high transition-colors metric-card"
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="font-headline text-[17px] font-semibold text-on-surface">
                {item.title}
              </span>
            </div>
            <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-wider">
              {item.category}
            </span>
            <p className="font-body text-[13px] text-outline leading-relaxed mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
