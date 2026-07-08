import { useEffect, useState, useRef, useMemo } from 'react';
import * as d3 from 'd3-force';

export type TechNode = d3.SimulationNodeDatum & {
  id: string;
  group: string;
  label: string;
  context: string;
  iconPath?: string;
  iconHex?: string;
};

export type TechLink = d3.SimulationLinkDatum<TechNode> & {
  source: string | TechNode;
  target: string | TechNode;
};

interface UseStackGraphProps {
  initialNodes: TechNode[];
  initialLinks: TechLink[];
  width: number;
  height: number;
  enabled?: boolean;
}

export function useStackGraph({ initialNodes, initialLinks, width, height, enabled = true }: UseStackGraphProps) {
  const [nodes, setNodes] = useState<TechNode[]>([]);
  const [links, setLinks] = useState<TechLink[]>([]);
  
  // Keep refs for the mutable d3 arrays
  const nodesRef = useRef<TechNode[]>([]);
  const linksRef = useRef<TechLink[]>([]);

  useEffect(() => {
    if (!enabled || width === 0 || height === 0) {
      // If disabled (e.g. mobile), just set static positions or return empty
      // We will handle static layout in the component for fallback
      return;
    }

    // Deep copy to prevent d3 from mutating the original props across re-renders
    nodesRef.current = initialNodes.map(d => ({ ...d }));
    linksRef.current = initialLinks.map(d => ({ ...d }));

    const simulation = d3.forceSimulation<TechNode>(nodesRef.current)
      .force('link', d3.forceLink<TechNode, TechLink>(linksRef.current).id(d => d.id).distance(140))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide().radius(60))
      .alphaDecay(0.02) // Slower decay = longer gentle movement
      .velocityDecay(0.4); // More drag = less bouncy, more restrained

    simulation.on('tick', () => {
      // Constrain nodes to bounds
      const padding = 60;
      nodesRef.current.forEach(node => {
        if (node.x !== undefined) node.x = Math.max(padding, Math.min(width - padding, node.x));
        if (node.y !== undefined) node.y = Math.max(padding, Math.min(height - padding, node.y));
      });
      
      // Create new arrays so React detects the change
      setNodes([...nodesRef.current]);
      setLinks([...linksRef.current]);
    });

    return () => {
      simulation.stop();
    };
  }, [initialNodes, initialLinks, width, height, enabled]);

  return { nodes, links };
}
