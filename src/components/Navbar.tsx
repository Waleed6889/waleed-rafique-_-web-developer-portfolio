import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Only the 4 allowed navigation tabs
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key for mobile menu accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

 const handleNavClick = (href: string) => {
  setMobileMenuOpen(false);

  const sectionId = href.replace('#', '');

  if (onNavigate) {
    onNavigate(sectionId);
  }

  const element = document.querySelector(href);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0e14]/85 backdrop-blur-md border-b border-white/[0.08] shadow-sm shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            id="brand-logo-link"
            className="group flex items-center gap-2.5 text-white font-semibold tracking-tight text-base sm:text-lg focus-visible:ring-2 focus-visible:ring-[#f97066] rounded-md px-1 py-0.5"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <img
  src="/waleed logo.webp"
  alt="Waleed Rafique logo"
  className="w-8 h-8 rounded-lg object-contain"
/>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm sm:text-base leading-none text-white">
                Waleed Rafique
              </span>
             
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-[#131722]/80 border border-white/[0.08] rounded-full p-1.5 backdrop-blur-sm"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`desktop-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.1] shadow-inner font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#f97066]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Contact CTA Button (Direct Jump to Contact) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              id="desktop-contact-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#f97066]" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141824] border border-white/10 text-zinc-300 hover:text-white focus-visible:ring-2 focus-visible:ring-[#f97066]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="md:hidden fixed inset-0 top-[60px] bg-[#0c0e14]/95 backdrop-blur-xl border-t border-white/[0.08] z-40 px-6 py-8 flex flex-col justify-between animate-in fade-in duration-200"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono px-3">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#181d2c] text-white border border-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#f97066]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-zinc-600" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#f97066] to-[#fb923c] text-[#0c0e14] font-bold text-sm shadow-md"
            >
              <span>Contact Waleed</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-center text-zinc-500 mt-4 font-mono">
              Available for Junior Frontend Roles
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
