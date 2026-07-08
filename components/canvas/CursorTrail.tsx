'use client';

import { useEffect, useRef } from 'react';

type Point = {
  x: number;
  y: number;
};

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isTouchRef = useRef(false);

  useEffect(() => {
    // Detect touch devices and reduced-motion via matchMedia to disable the trail
    const touchMediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    isTouchRef.current = touchMediaQuery.matches || motionMediaQuery.matches;

    const handleMediaChange = () => {
      isTouchRef.current = touchMediaQuery.matches || motionMediaQuery.matches;
      if (isTouchRef.current && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    };

    touchMediaQuery.addEventListener('change', handleMediaChange);
    motionMediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      touchMediaQuery.removeEventListener('change', handleMediaChange);
      motionMediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (isTouchRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: Point[] = [];
    const maxPoints = 20;
    
    // Default position (off-screen or center initially)
    let mouse = { x: -100, y: -100 };
    let isActive = false;
    let isHovering = false;

    // Fill points with initial mouse position
    for (let i = 0; i < maxPoints; i++) {
      points.push({ x: mouse.x, y: mouse.y });
    }

    const onMouseMove = (e: MouseEvent) => {
      isActive = true;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseLeave = () => {
      isActive = false;
    };

    const onCustomHover = (e: any) => {
      isHovering = e.detail.active;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('cursor-hover', onCustomHover);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;

    const draw = () => {
      if (isTouchRef.current) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Physics lag / trailing effect
      // The first point follows the mouse closely, the rest follow the one ahead of them
      let targetX = mouse.x;
      let targetY = mouse.y;

      for (let i = 0; i < maxPoints; i++) {
        const p = points[i];
        
        // The easing factor determines the lag. Smaller = more lag.
        // We use a slight elasticity effect by adjusting the easing per point.
        const easing = 0.4 - (i * 0.015);
        
        p.x += (targetX - p.x) * easing;
        p.y += (targetY - p.y) * easing;

        targetX = p.x;
        targetY = p.y;
      }

      // Draw the blob trail
      if (isActive) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Instead of a simple path, draw individual connected circles for size falloff
        for (let i = 0; i < maxPoints - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          // Size and opacity falloff
          const life = 1 - (i / maxPoints);
          const targetRadius = isHovering ? 24 : 8; // Grow on hover
          const radius = targetRadius * life; // Max size of the dot
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          
          // Using the accent color for the trail (from design tokens)
          // #F5D000 -> 245, 208, 0
          ctx.strokeStyle = `rgba(245, 208, 0, ${life * 0.6})`;
          ctx.lineWidth = radius;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
      window.removeEventListener('cursor-hover', onCustomHover);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
