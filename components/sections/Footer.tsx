'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocalTime } from '@/hooks/useLocalTime';
import { StatusPill } from '@/components/ui/StatusPill';
import { MENU_GROUPS } from '@/lib/nav-links-data';

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const time = useLocalTime();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      // 1. Stagger link column
      tl.fromTo('.footer-link', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out' }
      );

      // 2. Draw signature SVG
      const signaturePath = document.querySelector('.signature-path') as SVGPathElement;
      if (signaturePath) {
        const length = signaturePath.getTotalLength();
        gsap.set(signaturePath, { strokeDasharray: length, strokeDashoffset: length });
        tl.to(signaturePath, { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut' }, '-=0.4');
      }

      // 3. Stagger status pills
      tl.fromTo('.status-row',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=1'
      );


      // 5. Reveal massive wordmark
      tl.fromTo('.massive-wordmark',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.8'
      );

      // 6. Fade in blob & bottom text
      tl.fromTo('.blob-centerpiece, .bottom-utility',
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=0.5'
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={containerRef} className="w-full min-h-screen bg-background text-foreground flex flex-col justify-between pt-48 md:pt-[30vh] overflow-hidden relative"
      style={{ backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
    >
      
      {/* Background Mask for Links (so dots don't clash with text) */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, var(--background) 0%, transparent 20%, transparent 80%, var(--background) 100%)' }} />

      <div className="grid-container px-gutter w-full max-w-7xl mx-auto flex-1 flex flex-col relative z-10">
        
        {/* === ZONE 1: TOP ROW === */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end mb-24 gap-16 md:gap-0 mt-[40vh]">
          
          {/* Left: Email */}
          <div className="flex flex-col gap-4 font-mono text-bodySm tracking-tight">
              <a 
                href="mailto:hello@swagato.com"
                className="footer-link group flex items-center gap-2 w-max text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm transition-colors duration-300 relative"
              >
                <span>hello@swagato.com</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
              </a>
          </div>

          {/* Right: Signature Wordmark */}
          <div className="hidden md:block">
            <svg 
              className="w-48 h-auto stroke-foreground fill-none opacity-80" 
              viewBox="0 0 200 80"
              style={{ strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}
            >
              {/* Abstract handwritten loop mimicking an "S.B" signature */}
              <path className="signature-path" d="M 20 60 C 10 30, 40 10, 60 20 C 80 30, 30 70, 70 60 C 110 50, 100 20, 130 30 C 160 40, 120 70, 180 50" />
            </svg>
          </div>
        </div>


        {/* === ZONE 2: STATUS ROW === */}
        <div className="w-full flex justify-start md:justify-end mb-32 status-row">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 font-mono text-bodySm tracking-tight">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
              Open to work
            </div>
            <div>Based in Bengaluru</div>
            <div>{time || 'Syncing...'}</div>
          </div>
        </div>

      </div>


      {/* === MEGA FOOTER (Link Dump) === */}
      <div className="w-full px-gutter max-w-7xl mx-auto border-t border-border pt-16 pb-16 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {MENU_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted mb-6">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={item.href}
                      className="font-heading font-bold text-bodyLg text-foreground/70 hover:text-foreground transition-colors duration-300 flex items-center group w-max focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                    >
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        {item.label}
                      </span>
                      {item.isExternal && (
                        <svg className="w-3 h-3 ml-1 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* === ZONE 3: CENTERPIECE (Full Bleed) === */}
      <div className="w-full relative mt-auto mb-6 md:mb-0 z-10">

          {/* Massive Wordmark (HTML text for fluid viewport scaling without SVG clipping) */}
          <div className="w-full pb-2 flex justify-start overflow-hidden">
            <h1 className="massive-wordmark text-[16vw] leading-[0.75] font-heading font-black tracking-tighter text-foreground whitespace-nowrap -ml-[0vw]">
              swag<span className="text-accent">.</span>
            </h1>
          </div>
        </div>

      {/* === ZONE 4: BOTTOM UTILITY LINE === */}
      <div className="bottom-utility w-full px-gutter pb-6 pt-4 flex justify-between font-mono text-caption text-muted uppercase tracking-wider">
        <span>© {new Date().getFullYear()} Swagato Bauri</span>
        <span className="hidden md:inline-block">Designed & Engineered in-house</span>
      </div>

    </footer>
  );
}
