import React, { useState, useEffect } from 'react';
import { PageId, Project } from './types';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { HomeScreen } from './components/screens/home/HomeScreen';
import { AboutScreen } from './components/screens/about/AboutScreen';
import { ProjectsScreen } from './components/screens/projects/ProjectsScreen';
import { EducationalScreen } from './components/screens/educational/EducationalScreen';
import { ContactModal } from './components/contact/ContactModal';
import { ResumeModal } from './components/resume/ResumeModal';
import { ProjectDetailModal } from './components/project-modal/ProjectDetailModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : true; // default dark as in reference
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.add('transition-theme');
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setTimeout(() => {
      document.documentElement.classList.remove('transition-theme');
    }, 300);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-body transition-colors">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-grow bg-surface">
        {currentPage === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'about-me' && (
          <AboutScreen
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsScreen
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'educational' && <EducationalScreen />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
