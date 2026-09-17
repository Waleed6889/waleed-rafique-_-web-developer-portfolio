import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="site-footer"
      className="border-t border-white/[0.08] bg-[#090b10] text-zinc-400 text-xs py-12"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Brand & Mission Statement */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
            <div className="flex items-center gap-2">
             <img
  src="/waleed logo.webp"
  alt="Waleed Rafique logo"
  className="w-8 h-8 rounded-lg object-contain"
/>
              <span className="font-bold text-white text-sm font-heading">
                Waleed Rafique
              </span>
            </div>
            <p className="text-zinc-500 text-xs max-w-sm">
              Frontend web developer crafting responsive, user-friendly, and accessible websites for the modern web.
            </p>
          </div>

          {/* Clean 4-Tab Navigation Echo */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Waleed6889"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#141824] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/waleedrafique889/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#141824] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:waleedrafique15@gmail.com"
              className="p-2 rounded-lg bg-[#141824] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all ml-2"
              title="Scroll to top of page"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & AdSense/SEO Clean Structure */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Waleed Rafique. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1">
            
          </p>
        </div>
      </div>
    </footer>
  );
};
