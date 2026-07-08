'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutPage() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Staggered Text Reveal
      if (textRef.current) {
        const elements = textRef.current.children;
        gsap.fromTo(
          elements,
          { y: 40, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.15, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
            }
          }
        );
      }

      // 2. Quote Cards Spring Pop
      if (visualsRef.current) {
        const blob = visualsRef.current.querySelector('.blob-bg');
        const cards = visualsRef.current.querySelectorAll('.quote-card');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: visualsRef.current,
            start: 'top 70%',
          }
        });

        tl.fromTo(
          blob,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
        )
        .fromTo(
          cards,
          { scale: 0.8, opacity: 0, rotateZ: (i) => (i === 0 ? -15 : 15) },
          { 
            scale: 1, 
            opacity: 1, 
            rotateZ: (i) => (i === 0 ? -4 : 6), // Settle at slight rotations
            duration: 1.2, 
            stagger: 0.2, 
            ease: 'back.out(1.5)' 
          },
          "-=1"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef} 
      className="flex flex-col w-full bg-background min-h-[calc(100vh-4rem)] pt-12 md:pt-24 pb-32 px-gutter overflow-hidden"
    >
      <div className="grid-container w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Editorial Copy */}
        <div ref={textRef} className="flex flex-col items-start z-10 w-full max-w-2xl">
          
          <span className="font-mono text-accent text-caption uppercase tracking-widest mb-6 block">
            ABOUT ME
          </span>
          
          <h1 className="text-h1 md:text-[5.5rem] leading-[0.9] font-heading font-black text-foreground mb-10 tracking-tight">
            Hi, I am <br/> Swagato.
          </h1>

          <div className="space-y-6 text-bodyLg font-medium text-foreground/80 leading-relaxed">
            <p>
              I am a software engineer who builds high-performance RAG systems and full-stack applications. I like my code like I like my coffee: fast, robust, and completely free of boilerplate.
            </p>
            <p>
              Most of my time is spent obsessing over latency, optimizing LLM inference pipelines, and arguing with the borrow checker. When I am not writing code, I am usually deleting it. I believe less is more—especially when it comes to bundle size and server costs.
            </p>
            <p>
              I do not just build MVP prototypes that fall over under load. I design systems with SOLID architecture that are meant to be scaled, maintained, and shipped to production. If you are building something hard, we should talk.
            </p>
          </div>
          
        </div>

        {/* Right Column: Visuals & Quote Cards (Hidden on Mobile) */}
        <div ref={visualsRef} className="hidden lg:flex relative w-full h-[600px] items-center justify-center pointer-events-none">
          
          {/* Soft Accent Blob Wash */}
          <div className="blob-bg absolute w-[500px] h-[500px] bg-accent-secondary/30 rounded-full blur-[80px]" />

          {/* Floating Sticky Note / Quote Cards */}
          <div className="relative w-full h-full">
            
            {/* Card 1 */}
            <div className="quote-card absolute top-24 left-12 w-64 p-8 bg-background border border-border shadow-2xl flex flex-col gap-4 transform -rotate-6">
              {/* Tape visual */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-md border border-white/20 shadow-sm rotate-2 opacity-80" />
              <p className="font-heading text-bodyLg italic text-foreground leading-snug">
                "The most reliable code is the code you never write."
              </p>
              <div className="mt-2 h-px w-8 bg-border" />
              <span className="font-mono text-caption text-muted uppercase tracking-widest">
                — A running joke
              </span>
            </div>

            {/* Card 2 */}
            <div className="quote-card absolute bottom-32 right-12 w-72 p-8 bg-muted/30 backdrop-blur-md border border-border shadow-xl flex flex-col gap-4 transform rotate-6">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-md border border-white/20 shadow-sm -rotate-3 opacity-80" />
              <p className="font-heading text-bodyLg italic text-foreground leading-snug">
                "It works on my machine."
              </p>
              <div className="mt-2 h-px w-8 bg-border" />
              <span className="font-mono text-caption text-muted uppercase tracking-widest">
                — Famous last words
              </span>
            </div>

          </div>
          
        </div>

      </div>
    </main>
  );
}
