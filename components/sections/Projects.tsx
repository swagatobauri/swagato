'use client';

import { useRef } from 'react';
import { projectsData, Project } from '@/lib/projects-data';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 624; // Width of card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className="w-full py-20 px-gutter bg-background border-t border-border/50">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col xl:flex-row gap-12 xl:gap-20 items-center xl:items-stretch overflow-visible">
        
        {/* Left Sticky Header */}
        <div className="w-full xl:w-[320px] shrink-0 flex flex-col justify-center items-start gap-8 z-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight">
              Recent<br className="hidden xl:block" /> Projects
            </h2>
            <p className="text-muted text-lg mt-6 max-w-md">
              A few things I've built recently.
            </p>
          </div>
          
          <div className="flex gap-4 mt-2">
            <button 
              onClick={() => scroll('left')} 
              className="w-14 h-14 rounded-full border-2 border-border/50 flex items-center justify-center text-foreground hover:border-foreground transition-colors group bg-background"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-14 h-14 rounded-full border-2 border-border/50 flex items-center justify-center text-foreground hover:border-foreground transition-colors group bg-background"
              aria-label="Next project"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div 
          ref={scrollRef} 
          className="flex-1 flex gap-6 overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-8 pt-4 -mx-gutter px-gutter xl:mx-0 xl:px-0 w-[calc(100%+2*var(--gutter))] xl:w-auto"
        >
          {projectsData.map((project: Project, index: number) => {
            // Using a distinct purple or extracting unique colors per project. 
            // The user screenshot showed vibrant purple cards.
            const isPurple = index % 2 === 0;
            const bgStyle = isPurple ? 'bg-[#a855f7]' : 'bg-[#9333ea]'; // Alternating slight purple shades for depth

            return (
              <Link 
                href={`/projects/${project.id}`} 
                key={project.id} 
                className={`snap-start shrink-0 w-[85vw] md:w-[600px] h-[400px] md:h-[450px] ${bgStyle} rounded-[32px] p-8 md:p-12 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-purple-900/10 cursor-pointer`}
              >
                <div className="bg-white/20 text-white font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full self-start backdrop-blur-md font-bold">
                  {project.status}
                </div>
                
                <div className="flex flex-col gap-2 md:gap-4 mt-auto">
                  <h3 className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight drop-shadow-sm group-hover:scale-[1.02] transform origin-left transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-lg md:text-xl font-medium max-w-[90%] leading-relaxed drop-shadow-sm">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
