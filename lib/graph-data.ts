import { TechNode, TechLink } from '@/hooks/useStackGraph';
import { 
  siPython, 
  siRedis, 
  siNextdotjs, 
  siTailwindcss, 
  siFramer, 
  siGreensock, 
  siTypescript,
  siNodedotjs,
  siPostgresql,
  siExpress,
  siCplusplus,
  siReact,
  siMongodb,
  siMysql,
  siPrisma,
  siDocker,
  siVercel,
  siJavascript,
  siFastapi,
  siFlask,
  siVite,
  siGithubactions,
  siHuggingface
} from 'simple-icons/icons';

export const TECH_NODES: TechNode[] = [
  // RAG Pipeline Cluster
  { id: 'python', group: 'rag', label: 'Python', context: 'Core backend and data pipelines', iconPath: siPython.path, iconHex: `#${siPython.hex}` },
  { id: 'langchain', group: 'rag', label: 'LangChain', context: 'LLM orchestration and tooling pipelines' },
  { id: 'langgraph', group: 'rag', label: 'LangGraph', context: 'Stateful AI agents' },
  { id: 'ml', group: 'rag', label: 'Machine Learning', context: 'Model training' },
  { id: 'genai', group: 'rag', label: 'GenAI', context: 'Generative AI integration' },
  { id: 'huggingface', group: 'rag', label: 'Hugging Face', context: 'Transformer models', iconPath: siHuggingface.path, iconHex: `#${siHuggingface.hex}` },
  { id: 'groq', group: 'rag', label: 'Groq', context: 'Ultra-low latency LLM inference' },
  { id: 'faiss', group: 'rag', label: 'FAISS', context: 'High-dimensional semantic vector search' },
  { id: 'ragas', group: 'rag', label: 'RAGAS', context: 'Automated retrieval evaluation' },
  { id: 'openai', group: 'rag', label: 'OpenAI', context: 'Embedding models and fallback generation' },
  { id: 'redis', group: 'rag', label: 'Redis', context: 'Vector caching and session state', iconPath: siRedis.path, iconHex: `#${siRedis.hex}` },

  // Backend & Core Cluster
  { id: 'node', group: 'backend', label: 'Node.js', context: 'High-performance API services', iconPath: siNodedotjs.path, iconHex: `#${siNodedotjs.hex}` },
  { id: 'pg', group: 'backend', label: 'PostgreSQL', context: 'Relational databases', iconPath: siPostgresql.path, iconHex: `#${siPostgresql.hex}` },
  { id: 'mysql', group: 'backend', label: 'MySQL', context: 'Relational databases', iconPath: siMysql.path, iconHex: `#${siMysql.hex}` },
  { id: 'mongodb', group: 'backend', label: 'MongoDB', context: 'NoSQL document database', iconPath: siMongodb.path, iconHex: `#${siMongodb.hex}` },
  { id: 'prisma', group: 'backend', label: 'Prisma ORM', context: 'Type-safe database access', iconPath: siPrisma.path }, // omitted hex for dark icons
  { id: 'express', group: 'backend', label: 'Express', context: 'RESTful API routing', iconPath: siExpress.path }, // omitted hex
  { id: 'fastapi', group: 'backend', label: 'FastAPI', context: 'High-performance Python API', iconPath: siFastapi.path, iconHex: `#${siFastapi.hex}` },
  { id: 'flask', group: 'backend', label: 'Flask', context: 'Python microframework', iconPath: siFlask.path }, // omitted hex
  { id: 'cpp', group: 'core', label: 'C++', context: 'Competitive programming & DSA (LeetCode 1700+)', iconPath: siCplusplus.path, iconHex: `#${siCplusplus.hex}` },
  { id: 'js', group: 'core', label: 'JavaScript', context: 'Dynamic web behavior', iconPath: siJavascript.path, iconHex: `#${siJavascript.hex}` },
  { id: 'sql', group: 'core', label: 'SQL', context: 'Relational data querying' },

  // Frontend Cluster
  { id: 'react', group: 'frontend', label: 'React', context: 'Interactive UI architecture', iconPath: siReact.path, iconHex: `#${siReact.hex}` },
  { id: 'next', group: 'frontend', label: 'Next.js', context: 'React framework and SSR orchestration', iconPath: siNextdotjs.path }, // omitted hex
  { id: 'vite', group: 'frontend', label: 'Vite', context: 'Lightning fast build tool', iconPath: siVite.path, iconHex: `#${siVite.hex}` },
  { id: 'tw', group: 'frontend', label: 'Tailwind', context: 'Utility-first design system execution', iconPath: siTailwindcss.path, iconHex: `#${siTailwindcss.hex}` },
  { id: 'framer', group: 'frontend', label: 'Framer', context: 'Physics-based micro-interactions', iconPath: siFramer.path, iconHex: `#${siFramer.hex}` },
  { id: 'gsap', group: 'frontend', label: 'GSAP', context: 'Complex scroll and timeline animations', iconPath: siGreensock.path, iconHex: `#${siGreensock.hex}` },
  { id: 'ts', group: 'frontend', label: 'TypeScript', context: 'Strict typing across the full stack', iconPath: siTypescript.path, iconHex: `#${siTypescript.hex}` },

  // DevOps Cluster
  { id: 'docker', group: 'devops', label: 'Docker', context: 'Containerization', iconPath: siDocker.path, iconHex: `#${siDocker.hex}` },
  { id: 'ghactions', group: 'devops', label: 'GitHub Actions', context: 'CI/CD automation', iconPath: siGithubactions.path, iconHex: `#${siGithubactions.hex}` },
  { id: 'vercel', group: 'devops', label: 'Vercel', context: 'Edge deployment', iconPath: siVercel.path }, // omitted hex
];

export const TECH_LINKS: TechLink[] = [
  // RAG Connections
  { source: 'python', target: 'ml' },
  { source: 'python', target: 'langchain' },
  { source: 'ml', target: 'genai' },
  { source: 'genai', target: 'langchain' },
  { source: 'langchain', target: 'langgraph' },
  { source: 'langchain', target: 'groq' },
  { source: 'langchain', target: 'openai' },
  { source: 'langchain', target: 'faiss' },
  { source: 'python', target: 'ragas' },
  { source: 'python', target: 'redis' },
  { source: 'ragas', target: 'openai' },
  
  // Backend Connections
  { source: 'js', target: 'node' },
  { source: 'node', target: 'express' },
  { source: 'node', target: 'prisma' },
  { source: 'prisma', target: 'pg' },
  { source: 'prisma', target: 'mysql' },
  { source: 'prisma', target: 'mongodb' },
  { source: 'node', target: 'redis' },
  { source: 'sql', target: 'pg' },
  { source: 'sql', target: 'mysql' },
  
  // Core Connections
  { source: 'cpp', target: 'python' },
  
  // Frontend Connections
  { source: 'ts', target: 'react' },
  { source: 'react', target: 'next' },
  { source: 'next', target: 'tw' },
  { source: 'react', target: 'framer' },
  { source: 'react', target: 'gsap' },
  { source: 'framer', target: 'gsap' },

  // DevOps Connections
  { source: 'docker', target: 'node' },
  { source: 'docker', target: 'python' },
  { source: 'next', target: 'vercel' },

  // Cross-cluster bridges
  { source: 'next', target: 'node' },
  { source: 'node', target: 'python' },
  { source: 'ts', target: 'node' },
  { source: 'js', target: 'ts' },
];
