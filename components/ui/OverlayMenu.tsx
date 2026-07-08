'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { MENU_GROUPS } from '@/lib/nav-links-data';

export function OverlayMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return;

    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      const tl = gsap.timeline();
      
      // Reveal overlay backdrop
      tl.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.2,
        ease: 'power2.out'
      });

      // Slide in panel
      tl.fromTo(panelRef.current, 
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power3.out' },
        '<0.05'
      );

      // Stagger list items
      const validItems = itemsRef.current.filter(Boolean);
      tl.fromTo(validItems,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.03, ease: 'power2.out' },
        '<0.2'
      );
      
    } else {
      // Re-enable body scroll
      document.body.style.overflow = '';

      const tl = gsap.timeline();
      
      tl.to(panelRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in'
      });
      
      tl.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.2,
        ease: 'power2.in'
      }, '<0.1');
    }

  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle click outside panel
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-50 px-4 py-2 bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm border border-border rounded-full font-mono text-caption uppercase tracking-widest text-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Explore
      </button>

      {/* Overlay Backdrop */}
      <div 
        ref={overlayRef}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-[60] bg-background/50 backdrop-blur-md opacity-0 pointer-events-none flex justify-end"
      >
        {/* Slide-in Panel */}
        <div 
          ref={panelRef}
          className="w-full md:w-[400px] h-full bg-background border-l border-border shadow-2xl flex flex-col p-8 md:p-12 overflow-y-auto"
          style={{ transform: 'translateX(100%)' }}
        >
          <div className="flex justify-between items-center mb-16">
            <span className="font-mono text-caption text-muted uppercase tracking-widest">Navigation</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="Close menu"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-12 flex-1">
            {MENU_GROUPS.map((group, groupIdx) => (
              <div key={group.title} className="flex flex-col">
                <h3 className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-6 pb-2 border-b border-border/50">
                  {group.title}
                </h3>
                
                <div className="flex flex-col gap-4">
                  {group.items.map((item, itemIdx) => {
                    const globalIdx = groupIdx * 10 + itemIdx;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        ref={(el) => { itemsRef.current[globalIdx] = el; }}
                        className="group flex items-center w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                      >
                        {/* Hover transform target */}
                        <div className="flex items-center w-full transform transition-transform duration-300 group-hover:translate-x-2">
                          
                          {/* Number or Bullet (changes to accent on hover) */}
                          <span className="w-8 shrink-0 font-mono text-caption text-muted group-hover:text-accent transition-colors duration-300">
                            {item.number ? item.number : '—'}
                          </span>
                          
                          {/* Label */}
                          <span className="font-heading font-bold text-h4 text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                            {item.label}
                          </span>

                          {/* External Icon */}
                          {item.isExternal && (
                            <svg className="w-3 h-3 ml-2 text-muted group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
