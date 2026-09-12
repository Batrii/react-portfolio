import React, { useState } from 'react';
import { PageId } from '../../types';
import { images } from '../../data/portfolioData';
import { Sun, Moon, Menu, X, Briefcase } from 'lucide-react';
import './navbar.css';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  isDark,
  onToggleTheme,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about-me', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'educational', label: 'Educational' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 nav-header shadow-[0_1px_12px_rgba(0,0,0,0.35)] transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            aria-label="Go to homepage"
          >
            <img
              src={images.monogram}
              alt="Badr Eddine Nafiai Monogram Logo B"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-headline text-[18px] leading-[24px] font-semibold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                Badr Eddine Nafiai
              </span>
              <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant uppercase tracking-wider">
                Junior Software Engineer
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`font-body text-[15px] px-3.5 py-1.5 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive
                    ? 'text-on-surface font-semibold bg-surface-container-high shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Available for Hire, Theme Toggle, Contact CTA, Avatar */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Available for hire pill */}
          <button
            type="button"
            onClick={onOpenContact}
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer border border-transparent hover:border-secondary/30"
            title="Click to hire or send a message"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-mono text-[11px] font-medium text-secondary">
              Available for hire
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark and light theme"
            className="theme-toggle-btn relative inline-flex items-center justify-center p-2 rounded-xl bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-bright transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-secondary hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-primary hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* Avatar Profile */}
          <button
            type="button"
            onClick={() => handleNavClick('about-me')}
            className="focus:outline-none cursor-pointer"
            title="View About Me"
          >
            <img
              src={images.avatar}
              alt="Badr Eddine Nafiai Profile"
              className="w-8 h-8 rounded-full object-cover nav-avatar-ring hover:scale-105 transition-transform"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-xl bg-surface-container-high text-on-surface hover:text-primary transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container border-b border-outline-variant/30 px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-surface-container-high text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-outline-variant/20 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary-container text-on-primary font-medium text-sm"
            >
              <Briefcase className="w-4 h-4" />
              Available for hire • Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
