'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const navItems = [
  { id: 'hey', label: '01/HEY' },
  { id: 'about', label: '02/ABOUT' },
  { id: 'experience', label: '03/EXP' },
  { id: 'work', label: '04/WORK' },
  { id: 'contact', label: '05/CONTACT' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('hey');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = navItems.map((item) => {
      // In a real app we'd wait for these to exist, but since it's a SPA layout
      // we can use a small delay or just target them directly if they mount together.
      const el = document.getElementById(item.id);
      if (!el) return null;

      return ScrollTrigger.create({
        trigger: el,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveSection(item.id),
        onEnterBack: () => setActiveSection(item.id),
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, []);

  // Check on initial load too (after a brief delay to let DOM settle)
  useEffect(() => {
    const handleInitial = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(handleInitial);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-gutter pointer-events-none text-foreground flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0 bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
      {/* Navigation */}
      <nav className="pointer-events-auto flex flex-row md:flex-col flex-wrap gap-4 md:gap-1 font-mono text-caption uppercase tracking-widest">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition-all duration-300 relative inline-flex items-center group w-max focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm ${activeSection === item.id ? 'opacity-100 font-bold text-accent' : 'opacity-40 hover:opacity-100 text-foreground'
              }`}
          >
            <span className="relative z-10">{item.label}</span>
            {activeSection === item.id && (
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-accent origin-left animate-in fade-in zoom-in-95 duration-300" />
            )}
          </a>
        ))}
      </nav>

      {/* Utility Area */}
      <div className="pointer-events-auto flex items-center gap-3">
        <div className="relative flex items-center justify-center w-4 h-4">
          <span className="absolute inline-flex w-2 h-2 rounded-full bg-accent opacity-75 animate-ping" />
          <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
        </div>
        <span className="font-mono text-caption uppercase tracking-wider opacity-60">Status: Online</span>
      </div>
    </header>
  );
}
