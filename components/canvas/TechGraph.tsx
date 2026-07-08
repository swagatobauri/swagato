'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStackGraph, TechNode, TechLink } from '@/hooks/useStackGraph';

export interface TechGraphProps {
  initialNodes: TechNode[];
  initialLinks: TechLink[];
}

export function TechGraph({ initialNodes, initialLinks }: TechGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const edgesRef = useRef<(SVGPathElement | null)[]>([]);
  const nodesRef = useRef<(SVGGElement | null)[]>([]);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ visible: boolean; x: number; y: number; text: string }>({
    visible: false, x: 0, y: 0, text: ''
  });

  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Measure container and check accessibility
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = window.innerWidth < 768;
    setIsReducedMotion(mediaQuery.matches || isMobile);

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
      setIsReducedMotion(mediaQuery.matches || window.innerWidth < 768);
    };

    updateDimensions();
    mediaQuery.addEventListener('change', updateDimensions);
    window.addEventListener('resize', updateDimensions);

    return () => {
      mediaQuery.removeEventListener('change', updateDimensions);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const { nodes, links } = useStackGraph({
    initialNodes,
    initialLinks,
    width: dimensions.width,
    height: dimensions.height,
    enabled: !isReducedMotion
  });

  // Setup GSAP Animation on Scroll
  useEffect(() => {
    if (isReducedMotion || nodes.length === 0 || !svgRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const edges = edgesRef.current.filter(Boolean);
      const nodeElements = nodesRef.current.filter(Boolean);

      // Reset states
      gsap.set(edges, { strokeDasharray: 500, strokeDashoffset: 500 });
      gsap.set(nodeElements, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      // 1. Draw edges
      tl.to(edges, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut',
        stagger: 0.1
      });

      // 2. Pop in nodes
      tl.to(nodeElements, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.5)',
        stagger: 0.05
      }, '-=1'); // Start before edges finish
      
    }, containerRef);

    return () => ctx.revert();
  }, [nodes.length, isReducedMotion]);

  // Handle Hover logic to determine active connections
  const isNodeActive = (nodeId: string) => {
    if (!hoveredNodeId) return true;
    if (nodeId === hoveredNodeId) return true;
    
    return links.some((link) => {
      const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
      const targetId = typeof link.target === 'string' ? link.target : link.target.id;
      return (sourceId === hoveredNodeId && targetId === nodeId) || 
             (targetId === hoveredNodeId && sourceId === nodeId);
    });
  };

  const isLinkActive = (link: TechLink) => {
    if (!hoveredNodeId) return true;
    const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
    const targetId = typeof link.target === 'string' ? link.target : link.target.id;
    return sourceId === hoveredNodeId || targetId === hoveredNodeId;
  };

  if (isReducedMotion) {
    return (
      <div className="w-full flex flex-col gap-12 p-gutter bg-background">
        {/* Simple Fallback Layout */}
        <h3 className="text-h4 font-heading font-bold text-foreground">Core Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {initialNodes.map((node) => (
            <div key={node.id} className="p-4 rounded-xl border border-border flex flex-col gap-2">
              <span className="font-heading font-semibold text-foreground">{node.label}</span>
              <span className="font-mono text-caption text-muted">{node.context}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full min-h-[600px] relative bg-background">
      
      {/* Tooltip Overlay */}
      {tooltip.visible && (
        <div 
          className="absolute z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-4 px-4 py-2 bg-foreground text-background rounded-lg font-mono text-caption shadow-xl transition-all duration-200 whitespace-nowrap"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
        </div>
      )}

      {dimensions.width > 0 && (
        <svg ref={svgRef} width={dimensions.width} height={dimensions.height} className="w-full h-full block">
          {/* Edges */}
          <g className="edges">
            {links.map((link, idx) => {
              const source = typeof link.source === 'object' ? link.source : null;
              const target = typeof link.target === 'object' ? link.target : null;
              
              if (!source || !target) return null;

              const active = isLinkActive(link);
              
              // We render edges as paths to support curved lines or simple straight lines. Straight line for simplicity and "circuit" feel.
              const d = `M ${source.x} ${source.y} L ${target.x} ${target.y}`;

              return (
                <path
                  key={`${source.id}-${target.id}`}
                  ref={(el) => { edgesRef.current[idx] = el; }}
                  d={d}
                  fill="none"
                  strokeWidth="2"
                  className={`transition-colors duration-300 ${active ? 'stroke-border' : 'stroke-border/20'}`}
                  style={{
                    stroke: hoveredNodeId && active ? 'var(--accent)' : undefined
                  }}
                />
              );
            })}
          </g>

          {/* Nodes */}
          <g className="nodes">
            {nodes.map((node, idx) => {
              const active = isNodeActive(node.id);
              
              return (
                <g
                  key={node.id}
                  ref={(el) => { nodesRef.current[idx] = el; }}
                  transform={`translate(${node.x || 0}, ${node.y || 0})`}
                  className="cursor-pointer transition-opacity duration-300"
                  style={{ opacity: active ? 1 : 0.3 }}
                  onMouseEnter={(e) => {
                    setHoveredNodeId(node.id);
                    const rect = e.currentTarget.getBoundingClientRect();
                    const containerRect = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
                    setTooltip({
                      visible: true,
                      x: rect.left - containerRect.left + rect.width / 2,
                      y: rect.top - containerRect.top - 10,
                      text: node.context
                    });
                  }}
                  onMouseLeave={() => {
                    setHoveredNodeId(null);
                    setTooltip(t => ({ ...t, visible: false }));
                  }}
                >
                  {/* Node Panel via foreignObject for flexible HTML layout */}
                  <foreignObject 
                    x="-75" 
                    y="-20" 
                    width="150" 
                    height="40"
                    className="overflow-visible"
                  >
                    <div className="w-full h-full flex items-center justify-center pointer-events-none">
                       <div className="bg-background border-[1.5px] border-border rounded-full px-4 py-1.5 flex items-center justify-center max-w-full shadow-sm pointer-events-auto">
                           {node.iconPath ? (
                              <svg width="18" height="18" viewBox="0 0 24 24">
                                <path d={node.iconPath} fill={node.iconHex || 'var(--foreground)'} />
                              </svg>
                           ) : (
                              <span className="font-heading font-semibold text-[13px] text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                                {node.label}
                              </span>
                           )}
                       </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </g>
        </svg>
      )}
    </div>
  );
}
