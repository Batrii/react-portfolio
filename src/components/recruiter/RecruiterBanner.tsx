import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import './recruiter.css';
import { developerProfile } from '@/src/data/portfolioData';

interface RecruiterBannerProps {
  onOpenContact: () => void;
}

export const RecruiterBanner: React.FC<RecruiterBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-12 pb-12 w-full">
      <div
        id="recruiter-banner"
        className="relative bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-low rounded-xl p-6 md:p-10 shadow-xl overflow-hidden border border-outline-variant/20"
      >
        {/* Accent decorative glow */}
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-72 h-72 recruiter-glow rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-secondary uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Looking for fresh engineering talent?</span>
            </div>
            <h3 className="font-headline text-2xl md:text-[28px] font-semibold text-on-surface leading-snug">
              Let’s build scalable and delightful web products together.
            </h3>
            <p className="font-body text-[15px] leading-relaxed text-on-surface-variant">
              I am actively seeking Junior Software Engineer roles, graduate programs, and software development internships. Bring strong enthusiasm, code rigor, and fresh perspective to your engineering team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onOpenContact}
              className="recruiter-btn-primary inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary font-headline text-[15px] font-semibold hover:bg-primary transition-all duration-200 cursor-pointer active:scale-95"
            >
              <span>Start Conversation</span>
              <Mail className="w-4 h-4" />
            </button>

            <a
              href={developerProfile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-highest text-on-surface font-headline text-[15px] hover:bg-surface-bright transition-all duration-200 shadow-sm hover:-translate-y-0.5"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
