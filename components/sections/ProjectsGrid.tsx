'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Code2, FileText } from 'lucide-react';
import { projectsData } from '@/lib/projects-data';
import { StatusPill } from '@/components/ui/StatusPill';

export function ProjectsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-grid-card',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full pt-24 pb-32 px-gutter min-h-screen bg-background">
      <div className="max-w-screen-2xl mx-auto w-full" ref={containerRef}>
        
        <div className="mb-16">
          <h1 className="font-heading font-bold text-h2 text-foreground mb-4">
            Projects
          </h1>
          <p className="font-sans text-bodyLg text-muted max-w-xl">
            A deep dive into the systems, applications, and experiments I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              className="project-grid-card group flex flex-col rounded-2xl overflow-hidden bg-card border border-border hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-smooth cursor-pointer"
            >
              {/* TOP HALF: Vibrant Purple Banner */}
              <div className="relative w-full h-[280px] bg-gradient-to-br from-[#a855f7] to-[#9333ea] p-8 flex flex-col justify-between overflow-hidden">
                {/* Background Lettering */}
                <div className="absolute -bottom-4 -right-4 text-[120px] font-heading font-black text-white/10 leading-none select-none pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
                  {project.abbr}
                </div>
                
                <div className="relative z-10 flex justify-start">
                   <StatusPill status={project.status}>{project.status}</StatusPill>
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-white/80 text-sm md:text-base">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* BOTTOM HALF: Details */}
              <div className="flex-1 flex flex-col p-8 bg-card">
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full border border-border/50 bg-background text-[11px] font-mono text-muted group-hover:text-foreground transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h4 className="font-heading font-bold text-xl text-foreground mb-3">
                  {project.title}
                </h4>
                <p className="font-sans text-muted text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>

                {/* Footer (Icons & Date) */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-muted/10 transition-colors" aria-label="Live Demo">
                      <Globe className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-muted/10 transition-colors" aria-label="GitHub Source">
                      <Code2 className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-muted/10 transition-colors" aria-label="Documentation">
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="font-mono text-caption text-muted">
                    {project.date}
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
