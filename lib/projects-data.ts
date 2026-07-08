export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  status: 'SHIPPED' | 'BUILDING' | 'COMPLETED';
  date: string;
  bgClass: string; // The Tailwind class for the top banner background (e.g. bg-accent)
  abbr: string; // Background letters for the visual banner
  
  features: string[]; // For the detail page
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: 'clinical-dosing',
    title: 'Clinical Dosing RAG Assistant',
    subtitle: 'Precision medical context retrieval',
    description: 'A retrieval-augmented generation (RAG) assistant designed to pull real-time medical context for precise clinical dosing calculations.',
    category: 'AI / Healthcare',
    tags: ['Python', 'LangChain', 'FAISS', 'Groq'],
    status: 'BUILDING',
    date: 'August 14, 2026',
    bgClass: 'bg-accent/80',
    abbr: 'CD',
    features: [
      'Real-time semantic search against 50k+ clinical documents',
      'Ultra-low latency Groq LPU inference for fast responses',
      'Automated fallback to traditional search indexing',
      'HIPAA compliant data processing pipeline'
    ],
    githubUrl: 'https://github.com/example/clinical',
    docUrl: 'https://docs.example.com',
  },
  {
    id: 'engageiq-ai',
    title: 'EngageIQ AI',
    subtitle: 'Dynamic LLM endpoint routing',
    description: 'An intelligent routing engine that directs user prompts across multiple LLM endpoints (OpenAI, Anthropic, Groq) in real-time to optimize for latency, cost, and accuracy.',
    category: 'LLM Orchestration',
    tags: ['TypeScript', 'Next.js', 'Redis', 'Python'],
    status: 'SHIPPED',
    date: 'April 22, 2026',
    bgClass: 'bg-accent-secondary/80',
    abbr: 'IQ',
    features: [
      'Multi-model fallback routing and load balancing',
      'Real-time cost and token usage tracking',
      'Redis-based semantic caching layer for frequent queries',
      'Custom dashboard for API key management'
    ],
    githubUrl: 'https://github.com/example/engage',
    liveUrl: 'https://engageiq.example.com',
  },
  {
    id: 'sql-rule-engine',
    title: 'SQL Rule Engine',
    subtitle: 'Automated data compliance',
    description: 'A robust Node.js service that parses and evaluates dynamic SQL rules against a live PostgreSQL database to automate internal data compliance checks.',
    category: 'Backend / Data',
    tags: ['Node.js', 'PostgreSQL', 'Express', 'Jest'],
    status: 'COMPLETED',
    date: 'January 10, 2026',
    bgClass: 'bg-accent-tertiary/90',
    abbr: 'SQL',
    features: [
      'Abstract Syntax Tree (AST) parsing for dynamic rule generation',
      'High-performance batch evaluation of compliance queries',
      'Comprehensive REST API for rule management',
      '100% test coverage with Jest'
    ],
    githubUrl: 'https://github.com/example/sql-engine',
  }
];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((p) => p.id === id);
}
