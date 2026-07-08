'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timelineData } from '@/lib/experience-data';

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef1 = useRef<HTMLDivElement>(null);
  const lineRef2 = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray('.timeline-row');
      
      // Animate the vertical lines drawing down
      [lineRef1.current, lineRef2.current].forEach(line => {
        if (line) {
          gsap.fromTo(line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: line,
                start: "top 70%",
                end: "bottom 90%",
                scrub: 1
              }
            }
          );
        }
      });

      // Stagger reveal the rows
      rows.forEach((row: Element) => {
        const dot = row.querySelector('.timeline-dot');
        const content = row.querySelector('.timeline-content');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        tl.fromTo(dot, 
          { scale: 0, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }
        )
        .fromTo(content,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = timelineData.filter(d => d.type === 'experience');
  const education = timelineData.filter(d => d.type === 'education');

  const renderTimeline = (data: typeof timelineData, lineRef: React.RefObject<HTMLDivElement>) => (
    <div className="relative mb-24">
      {/* Vertical Connecting Line */}
      <div 
        ref={lineRef}
        className="absolute left-0 md:left-1/4 top-2 bottom-0 w-[1px] bg-border origin-top hidden md:block"
      />

      <div className="flex flex-col gap-16 md:gap-24 relative">
        {data.map((item) => (
          <div key={item.id} className="timeline-row group flex flex-col md:flex-row relative">
            
            {/* Date Column (Left on Desktop, Top on Mobile) */}
            <div className="md:w-1/4 shrink-0 pb-4 md:pb-0 md:pr-12 md:text-right flex items-start md:justify-end">
              <span className="font-mono text-caption text-muted font-bold tracking-widest uppercase mt-1">
                {item.date}
              </span>
            </div>

            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/4 -translate-x-1/2 top-[6px] w-3 h-3 rounded-full border-2 border-background bg-border group-hover:bg-accent transition-colors duration-300 timeline-dot z-10" />

            {/* Content Column */}
            <div className="timeline-content md:w-3/4 md:pl-12 flex flex-col">
              <h3 className="text-h3 font-heading font-bold text-foreground mb-1 leading-tight">
                {item.role}
              </h3>
              <div className="font-heading font-semibold text-bodyBase text-foreground/80 mb-4">
                {item.organization}
              </div>
              <p className="font-heading font-normal text-bodyBase text-muted leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" ref={sectionRef} className="w-full py-section-xl px-gutter bg-background relative z-10">
      <div className="grid-container max-w-4xl mx-auto">
        
        <header className="mb-16 md:mb-24">
          <h2 className="text-h2 font-heading font-bold text-foreground leading-none">
            Experience
          </h2>
        </header>

        {renderTimeline(experiences, lineRef1)}

        <header className="mb-16 md:mb-24 mt-8">
          <h2 className="text-h2 font-heading font-bold text-foreground leading-none">
            Education
          </h2>
        </header>

        {renderTimeline(education, lineRef2)}

      </div>
    </section>
  );
}
