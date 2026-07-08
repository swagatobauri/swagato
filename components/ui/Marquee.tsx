'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // Higher is faster
  direction?: 'left' | 'right';
  className?: string;
}

export function Marquee({ children, speed = 1, direction = 'left', className = '' }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // To ensure a seamless loop, we animate the track which contains two identical inner elements.
    // We animate it by -50% (since it has two copies, that's exactly one full content width).
    const isLeft = direction === 'left';
    
    // Reset position before creating animation (important for HMR/re-renders)
    gsap.set(track, { xPercent: isLeft ? 0 : -50 });

    const animation = gsap.to(track, {
      xPercent: isLeft ? -50 : 0,
      duration: 10 / speed, // Base duration divided by speed
      ease: 'none',
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, [speed, direction]);

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden whitespace-nowrap flex w-full ${className}`}
      aria-hidden="true" // Hide from screen readers since it's decorative/duplicated
    >
      <div 
        ref={trackRef} 
        className="flex w-max"
      >
        <div className="flex shrink-0 px-4">
          {children}
        </div>
        <div className="flex shrink-0 px-4">
          {children}
        </div>
      </div>
    </div>
  );
}
