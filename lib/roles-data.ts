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
    tagline: 'End-to-end web architectures built for scale.',
    description: 'I design and build robust web applications from the database to the DOM. I specialize in React, Next.js, and high-performance backend APIs, focusing on clean architecture and maintainability.',
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
    pricing: 'Contact for Pricing & Schedule'
  },
  {
    slug: 'ai-ml-engineer',
    name: 'AI/ML Engineer',
    tagline: 'Production-ready AI integrations and RAG pipelines.',
    description: 'I help teams bridge the gap between Jupyter notebooks and production. From deploying custom LLM pipelines to building scalable Retrieval-Augmented Generation (RAG) systems.',
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
    pricing: 'Starting at $100/hr'
  },
  {
    slug: 'technical-consultant',
    name: 'Technical Consultant',
    tagline: 'Strategic guidance for hard engineering problems.',
    description: 'I provide architectural reviews, team mentoring, and technical strategy for startups looking to scale their engineering operations efficiently.',
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
    pricing: 'Contact for Pricing & Schedule'
  }
];
