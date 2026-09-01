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
              I am a software engineer who turns caffeine, chaos, and a healthy dose of late-night existential dread into high-performance AI agents and scalable backends. I thrive in the deep end of the tech stack, building systems that don&apos;t just survive contact with reality—they dominate it.
            </p>
            <p>
              Most of my day is spent orchestrating LLM pipelines, shipping chaotic pull requests to CNCF open-source projects, and aggressively optimizing algorithmic complexities just to feel alive. When I&apos;m not gaslighting my compiler or arguing with edge cases in a graph traversal, I&apos;m deleting boilerplate. I believe the best architectures are forged in the fires of production.
            </p>
            <p>
              I don&apos;t build fragile prototypes held together by duct tape and hope. I engineer resilient, deterministic systems designed to scale cleanly and handle anomalies before they become 3 AM pager alerts. If you are building something absurdly ambitious, we should talk.
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
              <p className="font-mono text-bodyLg text-foreground leading-snug tracking-tight">
                {':(){ :|:& };:'}</p>
              <div className="mt-2 h-px w-8 bg-border" />
              <span className="font-mono text-caption text-muted uppercase tracking-widest">
                — MY SOLUTION TO LOAD BALANCING
              </span>
            </div>

            {/* Card 2 */}
            <div className="quote-card absolute bottom-32 right-12 w-72 p-8 bg-muted/30 backdrop-blur-md border border-border shadow-xl flex flex-col gap-4 transform rotate-6">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-md border border-white/20 shadow-sm -rotate-3 opacity-80" />
              <p className="font-heading text-bodyLg italic text-foreground leading-snug">
                &quot;Chaos Engineering is just a highly respectable way to say &apos;I broke the cluster on purpose.&apos;&quot;
              </p>
              <div className="mt-2 h-px w-8 bg-border" />
              <span className="font-mono text-caption text-muted uppercase tracking-widest">
                — CNCF APPROVED BEHAVIOR
              </span>
            </div>

          </div>
          
        </div>

      </div>
    </main>
  );
}
