'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SERVICES, Service } from '@/lib/services-data';

export default function ServicesPage() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredCardsRef = useRef<HTMLDivElement>(null);
  const allCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.1, 
            ease: 'power3.out' 
          }
        );
      }

      // Featured Cards Stagger
      if (featuredCardsRef.current) {
        gsap.fromTo(
          featuredCardsRef.current.children,
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.15, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: featuredCardsRef.current,
              start: 'top 85%',
            }
          }
        );
      }

      // All Cards Stagger
      if (allCardsRef.current) {
        gsap.fromTo(
          allCardsRef.current.children,
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.15, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: allCardsRef.current,
              start: 'top 85%',
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderServiceCard = (service: Service) => (
    <div 
      key={service.id} 
      className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Card Header Zone */}
      <div className="relative min-h-[140px] bg-gradient-to-br from-accent/5 to-accent/20 flex items-center p-6 md:p-8 overflow-hidden">
        <span className="absolute -right-4 -bottom-8 font-heading text-[8rem] font-black text-foreground/5 leading-none select-none">
          {service.abbr}
        </span>
        <h3 className="relative font-heading text-2xl md:text-3xl font-bold text-foreground z-10 leading-tight pr-4">
          {service.title}
        </h3>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-8 gap-6">
        <p className="text-bodySm text-foreground/80 leading-relaxed min-h-[60px]">
          {service.shortDescription}
        </p>

        {/* Checklist */}
        <ul className="flex flex-col gap-3 flex-1">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-bodySm font-medium text-foreground/90">{feature}</span>
            </li>
          ))}
          {service.moreCount > 0 && (
            <li className="flex items-center gap-3 mt-1">
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-muted/60" />
              </div>
              <span className="text-caption font-mono text-muted uppercase tracking-wider">
                + {service.moreCount} more
              </span>
            </li>
          )}
        </ul>

        {/* Footer / Price Row */}
        <div className="pt-6 mt-2 border-t border-border flex items-center justify-between">
          <span className="font-heading text-2xl bg-muted/30 px-4 py-2 rounded-lg text-foreground font-bold text-accent">
            {service.price}
          </span>
          
          <Link 
            href={`/services/${service.id}`}
            className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-bodySm font-bold text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );

  return (
    <main 
      ref={containerRef} 
      className="flex flex-col w-full bg-background min-h-[calc(100vh-4rem)] pt-12 md:pt-24 pb-32 px-gutter overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-20">
        
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-start max-w-3xl">
          <span className="font-mono text-accent text-caption uppercase tracking-widest mb-6 block">
            SERVICES
          </span>
          <h1 className="text-h1 md:text-[5rem] leading-[0.9] font-heading font-black text-foreground mb-6 tracking-tight">
            Creative digital solutions.
          </h1>
          <p className="text-bodyLg text-foreground/70 font-medium leading-relaxed">
            Engineering high-performance systems and intelligent products for scaling businesses.
          </p>
        </div>

        {/* All Services Section */}
        <div className="flex flex-col gap-8 mt-4">
          <h2 className="font-heading text-h3 font-bold text-foreground">All Services</h2>
          <div ref={allCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(renderServiceCard)}
          </div>
        </div>

      </div>
    </main>
  );
}
