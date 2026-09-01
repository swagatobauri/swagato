export interface RoleFAQ {
  q: string;
  a: string;
}

export interface HireRole {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  included: string[];
  faqs: RoleFAQ[];
  pricing: string;
}

export const HIRE_ROLES: HireRole[] = [
  {
    slug: 'full-stack-engineer',
    name: 'Full-Stack Engineer',
    tagline: 'High-throughput architectures forged for resilience.',
    description: 'I engineer deterministic, high-throughput systems from the data layer to the client. Specializing in aggressively optimized Next.js environments and battle-tested backend services, I strip away boilerplate and enforce architectural primitives that scale effortlessly without the technical debt.',
    included: [
      'Frontend Architecture (React/Next.js)',
      'Backend API Design (Node/Python/Go)',
      'Database Modeling & Optimization',
      'CI/CD Pipeline Setup',
      'Performance Auditing'
    ],
    faqs: [
      { q: 'Do you work with existing codebases?', a: 'Yes. I am comfortable jumping into legacy code, refactoring safely, and establishing modern patterns without breaking existing functionality.' },
      { q: 'What is your preferred stack?', a: 'My go-to stack is Next.js (App Router), TailwindCSS, tRPC/REST, and PostgreSQL. However, I adapt to whatever tools best solve the problem.' }
    ],
    pricing: 'Starting at $25/hr'
  },
  {
    slug: 'ai-ml-engineer',
    name: 'AI/ML Engineer',
    tagline: 'Production-grade deterministic AI systems.',
    description: 'I transform fragile, stochastic LLM experiments into hardened, production-ready inference pipelines. From aggressively optimized RAG architectures to secure, local model deployments, I build AI systems that are fast, cost-efficient, and inherently reliable.',
    included: [
      'Custom RAG Pipeline Development',
      'Vector Database Architecture',
      'LLM Orchestration (LangChain/LlamaIndex)',
      'Prompt Engineering & Evaluation',
      'API Integration for AI Models'
    ],
    faqs: [
      { q: 'Can you help us choose the right LLM?', a: 'Absolutely. I evaluate open-source (Llama, Mistral) vs. proprietary (OpenAI, Anthropic) models based on your latency, cost, and privacy constraints.' },
      { q: 'How do you handle data privacy?', a: 'I can deploy local models or configure secure VPC environments to ensure your sensitive data never leaks to public APIs.' }
    ],
    pricing: 'Starting at $30/hr'
  },
  {
    slug: 'technical-consultant',
    name: 'Technical Consultant',
    tagline: 'Ruthless technical strategy for complex engineering.',
    description: 'I parachute into high-stakes engineering environments to untangle technical debt and architect scalable solutions. I provide objective, rigorous code reviews and strategic technical direction to ensure your engineering velocity does not buckle under scale.',
    included: [
      'Architecture & Code Reviews',
      'Scaling Strategy',
      'Technology Stack Selection',
      'Performance Bottleneck Analysis'
    ],
    faqs: [
      { q: 'Do you offer one-off strategy sessions?', a: 'Yes. We can schedule a focused 90-minute deep dive to untangle a specific architectural decision.' },
      { q: 'Do you work on retainer?', a: 'I take on a limited number of retainer clients for ongoing advisory roles. Reach out for availability.' }
    ],
    pricing: 'Starting at $40/hr'
  }
];
