import React from 'react';
import { PageId } from '../../types';
import { images } from '../../data/portfolioData';
import { Terminal, Share2 } from 'lucide-react';
import './footer.css';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest mt-10 footer-container transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-10 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo & Bio statement */}
          <div className="flex flex-col gap-2 max-w-sm">
            <div className="flex items-center gap-2.5">
              <img
                src={images.monogram}
                alt="Badr Eddine Nafiai Monogram Logo B"
                className="h-7 w-auto object-contain"
              />
              <span className="font-headline text-[18px] font-semibold text-on-surface">
                Badr Eddine Nafiai
              </span>
            </div>
            <p className="font-body text-[13px] text-on-surface-variant leading-relaxed">
              Junior Software Engineer focused on crafting resilient web architectures, elegant code craftsmanship, and modern user experiences.
            </p>
          </div>

          {/* Quick Footer Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-[13px]" aria-label="Footer Navigation">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('about-me')}
              className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              About Me
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('projects')}
              className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('educational')}
              className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Educational
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer font-medium"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Bottom bar with socials & copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-outline-variant/20">
          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 footer-social-link"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 footer-social-link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <span className="font-mono text-[11px] text-outline">
            © 2024 Badr Eddine Nafiai. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
