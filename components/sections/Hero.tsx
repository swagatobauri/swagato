'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLocalTime } from '@/hooks/useLocalTime';
import { StatusPill } from '@/components/ui/StatusPill';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  
  const time = useLocalTime();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Left Column Stagger
      if (leftColRef.current) {
        const elements = leftColRef.current.children;
        tl.fromTo(
          elements,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 1 },
          0.2
        );
      }

      // Right Column Spring Pop
      if (rightColRef.current) {
        const blob = rightColRef.current.querySelector('.blob-bg');
        const cards = rightColRef.current.querySelectorAll('.abstract-card');
        
        // Blob scale up
        tl.fromTo(
          blob,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.7)' },
          0.4
        );
        
        // Cards drop in with slight rotation
        tl.fromTo(
          cards,
          { y: -50, opacity: 0, rotateZ: -10, scale: 0.9 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            rotateZ: (index) => [ -5, 4, -2 ][index], // Different final rotations for stacked look
            stagger: 0.15, 
            duration: 1.2, 
            ease: 'back.out(1.5)' 
          },
          0.6
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hey"
      ref={containerRef}
      className="relative w-full min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center pt-24 pb-16 px-gutter overflow-hidden"
    >
      <div className="grid-container w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Copy & Actions */}
        <div ref={leftColRef} className="flex flex-col items-start z-10 w-full max-w-2xl">
          
          {/* Breadcrumb */}
          <div className="font-mono text-caption text-muted uppercase tracking-widest flex items-center gap-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            HOME / 01
          </div>

          {/* Heading */}
          <h1 className="text-h1 font-heading font-bold uppercase tracking-tighter leading-[0.9] text-foreground mb-6 -ml-1">
            <span className="block">Swagato</span>
            <span className="block text-accent">Bauri.</span>
          </h1>

          {/* Tagline */}
          <p className="text-bodyLg font-heading font-medium text-foreground/80 mb-8 flex items-center gap-3 flex-wrap">
            <span>AI</span>
            <span className="text-accent">•</span>
            <span>RAG Systems</span>
            <span className="text-accent">•</span>
            <span>Full-Stack</span>
          </p>

          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-12 font-mono text-[10px] sm:text-caption">
            <StatusPill showPing>Available for hire</StatusPill>
            <StatusPill>Based in India</StatusPill>
            <StatusPill className="min-w-[120px]">{time || 'Syncing...'}</StatusPill>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/projects" 
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-background font-heading font-bold text-bodySm uppercase tracking-wider rounded-sm overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a 
              href="https://my.newtonschool.co/template/user/swagato731123/resume/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 border border-border text-foreground font-heading font-bold text-bodySm uppercase tracking-wider rounded-sm overflow-hidden transition-all hover:border-foreground hover:bg-muted/5 active:scale-[0.98]"
            >
              <span>Read Resume</span>
              <FileText className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
            </a>
          </div>

        </div>

        {/* Right Column: Decorative Blob (Desktop Only) */}
        <div ref={rightColRef} className="hidden lg:flex relative w-full h-[600px] items-center justify-center pointer-events-none">
          
          {/* Soft Accent Blob Wash */}
          <div className="blob-bg absolute w-[500px] h-[500px] bg-accent-secondary/30 rounded-full blur-[80px]" />

          {/* Abstract Stacked Cards */}
          <div className="relative w-[340px] h-[400px]">
            {/* Card 1 (Back) */}
            <div className="abstract-card absolute top-12 -left-8 w-full h-full bg-background border border-border rounded-xl shadow-xl p-6 flex flex-col justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
              </div>
              <div className="space-y-3 w-full">
                <div className="h-2 w-3/4 bg-border rounded-full" />
                <div className="h-2 w-1/2 bg-border rounded-full" />
              </div>
            </div>

            {/* Card 2 (Middle) */}
            <div className="abstract-card absolute top-6 -right-6 w-full h-full bg-muted/30 border border-border rounded-xl shadow-xl p-6 backdrop-blur-sm flex flex-col justify-between">
               <div className="w-full h-32 bg-border/50 rounded-md" />
               <div className="w-full h-12 bg-border/50 rounded-md mt-auto" />
            </div>

            {/* Card 3 (Front) */}
            <div className="abstract-card absolute top-0 left-0 w-full h-full bg-background border border-border rounded-xl shadow-2xl p-6 flex flex-col gap-4">
              <div className="w-full flex justify-between items-center mb-4">
                <div className="h-4 w-1/3 bg-foreground/20 rounded-full" />
                <div className="h-6 w-16 bg-accent/20 rounded-full" />
              </div>
              {/* Code-like lines */}
              <div className="space-y-2">
                <div className="h-2 w-full bg-muted-foreground/20 rounded-full" />
                <div className="h-2 w-5/6 bg-muted-foreground/20 rounded-full" />
                <div className="h-2 w-4/6 bg-muted-foreground/20 rounded-full" />
              </div>
              <div className="mt-auto w-full h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-md border border-accent/30" />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
