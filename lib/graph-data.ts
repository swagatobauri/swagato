import { TechNode, TechLink } from '@/hooks/useStackGraph';
import { 
  siPython, 
  siRedis, 
  siNextdotjs, 
  siTailwindcss, 
  siFramer, 
  siGreensock, 
  siTypescript 
} from 'simple-icons/icons';

export const TECH_NODES: TechNode[] = [
  // RAG Pipeline Cluster
  { id: 'python', group: 'rag', label: 'Python', context: 'Core backend and data pipelines', iconPath: siPython.path, iconHex: `#${siPython.hex}` },
  { id: 'groq', group: 'rag', label: 'Groq', context: 'Ultra-low latency LLM inference' },
  { id: 'ragas', group: 'rag', label: 'RAGAS', context: 'Automated retrieval evaluation' },
  { id: 'openai', group: 'rag', label: 'OpenAI', context: 'Embedding models and fallback generation' },
  { id: 'redis', group: 'rag', label: 'Redis', context: 'Vector caching and session state', iconPath: siRedis.path, iconHex: `#${siRedis.hex}` },

  // Frontend Cluster
  { id: 'next', group: 'frontend', label: 'Next.js', context: 'React framework and SSR orchestration', iconPath: siNextdotjs.path, iconHex: `#0A0A0A` },
  { id: 'tw', group: 'frontend', label: 'Tailwind', context: 'Utility-first design system execution', iconPath: siTailwindcss.path, iconHex: `#${siTailwindcss.hex}` },
  { id: 'framer', group: 'frontend', label: 'Framer', context: 'Physics-based micro-interactions', iconPath: siFramer.path, iconHex: `#${siFramer.hex}` },
  { id: 'gsap', group: 'frontend', label: 'GSAP', context: 'Complex scroll and timeline animations', iconPath: siGreensock.path, iconHex: `#${siGreensock.hex}` },
  { id: 'ts', group: 'frontend', label: 'TypeScript', context: 'Strict typing across the full stack', iconPath: siTypescript.path, iconHex: `#${siTypescript.hex}` },
];

export const TECH_LINKS: TechLink[] = [
  // RAG Connections
  { source: 'python', target: 'groq' },
  { source: 'python', target: 'openai' },
  { source: 'python', target: 'ragas' },
  { source: 'python', target: 'redis' },
  { source: 'ragas', target: 'openai' },
  
  // Frontend Connections
  { source: 'next', target: 'ts' },
  { source: 'next', target: 'tw' },
  { source: 'next', target: 'framer' },
  { source: 'next', target: 'gsap' },
  { source: 'framer', target: 'gsap' },

  // Cross-cluster bridge
  { source: 'next', target: 'python' },
];
