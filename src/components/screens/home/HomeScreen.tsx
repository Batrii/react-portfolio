import React from 'react';
import { PageId } from '../../../types';
import { Hero } from '../../hero/Hero';
import { MetricsBar } from '../../metrics/MetricsBar';
import { BentoGrid } from '../../bento/BentoGrid';
import { RecruiterBanner } from '../../recruiter/RecruiterBanner';
import './home.css';

interface HomeScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenResume,
  onOpenContact,
}) => {
  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      {/* Subtle Ambient Glow Orbs */}
      <div className="absolute -top-32 -left-20 w-96 h-96 ambient-glow-1 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] ambient-glow-2 rounded-full blur-[140px] pointer-events-none"></div>

      {/* 1. HERO SECTION (Wide Desktop Split Layout) */}
      <Hero
        onNavigate={onNavigate}
        onOpenResume={onOpenResume}
        onOpenContact={onOpenContact}
      />

      {/* 2. QUICK METRICS / HIGHLIGHTS BAR */}
      <MetricsBar />

      {/* 3. JOURNEY & SECTIONS OVERVIEW (Desktop Bento Grid) */}
      <BentoGrid onNavigate={onNavigate} />

      {/* 4. INTERACTIVE RECRUITER / COLLABORATION BANNER */}
      <RecruiterBanner onOpenContact={onOpenContact} />
    </div>
  );
};
