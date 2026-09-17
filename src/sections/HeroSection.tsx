import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [avatarSrc, setAvatarSrc] = useState<string>('/waleed avatar.webp');
  const [candidateIndex, setCandidateIndex] = useState<number>(0);

  // Preferred public filenames to try in order
  const imageCandidates = [
    '/waleed avatar.webp'
  ];

  useEffect(() => {
    // Check if user has uploaded/saved their photo locally in the browser
    const saved = localStorage.getItem('waleed_avatar_data');
    if (saved) {
      setAvatarSrc(saved);
    }
  }, []);

  const handleImageError = () => {
    // If not using a saved custom data URL, try next public candidate
    if (!avatarSrc.startsWith('data:')) {
      if (candidateIndex + 1 < imageCandidates.length) {
        const nextIndex = candidateIndex + 1;
        setCandidateIndex(nextIndex);
        setAvatarSrc(imageCandidates[nextIndex]);
      }
    }
  };
  return (
    <section
      id="home"
      aria-label="Introduction & Hero"
      className="relative min-h-[85vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background visual ambience with warm coral and muted lavender glows (strictly avoiding cheap blue gradients) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-48 w-96 h-96 bg-[#f97066]/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-48 w-96 h-96 bg-[#b8b5d1]/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 order-2 lg:order-1">
            {/* Small Professional Badge */}
            <div
              id="hero-developer-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171b26] border border-white/10 text-xs font-mono font-medium text-zinc-300 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
              <span className="tracking-wider uppercase text-[#eceef2] font-semibold">
                WEB DEVELOPER
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">Available for Work</span>
            </div>

            {/* Single Page H1 Headline */}
            <h1
              id="hero-main-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Building modern websites for the web.
            </h1>

            {/* Short Supporting Paragraph */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl font-normal"
            >
              Hi, I’m <strong className="font-semibold text-white">Waleed Rafique</strong>. I build fast, accessible, and responsive websites with modern technologies like React, Tailwind CSS, and clean JavaScript. Focused on crafting intuitive user experiences that work seamlessly across all screen sizes.
            </p>

            {/* Two Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                type="button"
                id="hero-cta-view-projects"
                onClick={() => onNavigate('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f97066] to-[#fb923c] text-[#0c0e14] font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#f97066]/20 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-cta-contact-me"
                onClick={() => onNavigate('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#151926] border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#f97066]" />
              </button>
            </div>

            {/* Subtle Tech Stack Marquee / Micro Bar */}
            <div className="pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Sparkles className="w-3.5 h-3.5 text-[#f97066]" />
                <span>Modern Stack:</span>
              </span>
              <span className="text-zinc-300">HTML5</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">CSS / Tailwind</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">JavaScript</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">React</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">Git / GitHub</span>
            </div>
          </div>

          {/* Right Column: Waleed's Photo Avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Outer decorative ambient glow ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-tr from-[#f97066]/30 via-[#38bdf8]/20 to-[#fb923c]/25 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500"
              />

              {/* Avatar Frame (Static Display) */}
              <div
                id="hero-avatar-frame"
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-b from-white/15 via-white/5 to-[#151926] shadow-2xl border border-white/10"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0c0e14] flex items-center justify-center relative">
                  <img
                    id="hero-avatar-image"
                    src={avatarSrc}
                    alt="Waleed Rafique - Web Developer"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    className="w-full h-full object-cover rounded-full select-none"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
