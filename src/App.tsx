import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Scroll spy effect: detects which of the 4 sections is currently visible
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
       rootMargin: '-20% 0px -30% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0e14] text-[#eceef2] flex flex-col selection:bg-[#f97066]/25 selection:text-[#ffd6cf]">
      {/* Sticky Navigation Bar with only Home, About, Projects, Contact */}
    <Navbar
  activeSection={activeSection}
  onNavigate={(sectionId) => setActiveSection(sectionId)}
/>

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 1. Home / Hero Section */}
        <HeroSection onNavigate={handleNavigate} />

        {/* 2. About Section (Skills, Bio, Modern Tooling) */}
        <AboutSection />

        {/* 3. Projects Section (Card Grid, Interactive Modal) */}
        <ProjectsSection />

        {/* 4. Contact Section (Form, Validation, Direct Links) */}
        <ContactSection />
      </main>

      {/* Accessible Footer */}
      <Footer />
    </div>
  );
}
