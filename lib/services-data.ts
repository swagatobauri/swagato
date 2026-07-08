export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type Service = {
  id: string;
  abbr: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  detailedDescription: string[];
  features: string[];
  moreCount: number;
  price: string;
  isCustomQuote: boolean;
  bookLink: string;
  faqs: ServiceFAQ[];
};

export const SERVICES: Service[] = [
  {
    id: 'ai-rag-systems',
    abbr: 'AI',
    title: 'AI & RAG Systems',
    subtitle: 'LLMs • RAG • Intelligent Agents',
    shortDescription: 'Custom Large Language Model integrations, retrieval-augmented generation pipelines, and intelligent agents.',
    detailedDescription: [
      "I build custom AI solutions that connect foundation models to your proprietary data. Instead of generic chatbots, I engineer robust Retrieval-Augmented Generation (RAG) pipelines that drastically reduce hallucinations and provide accurate, context-aware answers.",
      "From setting up optimized vector databases to orchestrating complex agent workflows with LangChain or LlamaIndex, I ensure your AI features are scalable, fast, and secure."
    ],
    features: [
      'Vector Database Setup (Pinecone, Qdrant, etc.)',
      'LLM Orchestration & Agentic Workflows',
      'Semantic Search Integration',
      'Prompt Engineering & Evaluation',
      'Fine-tuning & RAG pipeline optimization',
      'Production Deployment'
    ],
    moreCount: 0,
    price: '$2,000+',
    isCustomQuote: false,
    bookLink: 'mailto:hello@swagato.com?subject=Inquiry:%20AI%20&%20RAG%20Systems',
    faqs: [
      {
        question: 'Which LLMs do you work with?',
        answer: 'I work with OpenAI (GPT-4), Anthropic (Claude 3), and open-source models via Groq or local deployment (Llama 3, Mistral) depending on your privacy, cost, and latency requirements.'
      },
      {
        question: 'How do you ensure my data is secure?',
        answer: 'I can architect solutions that run entirely in your VPC, use private LLM endpoints, or leverage self-hosted open-source models so your proprietary data never leaves your infrastructure.'
      },
      {
        question: 'How long does a typical AI integration take?',
        answer: 'A standard RAG MVP can take 2-3 weeks, while complex agentic workflows and full platform integrations typically take 4-8 weeks.'
      }
    ]
  },
  {
    id: 'full-stack-development',
    abbr: 'FS',
    title: 'Full-Stack Development',
    subtitle: 'SPA • MPA • Web App • Responsive • SEO',
    shortDescription: 'End-to-end web application development using React, Next.js, and modern high-performance backends.',
    detailedDescription: [
      "I build modern, responsive web applications—from sleek one-page portfolios to fully-featured SaaS platforms and eCommerce stores. Each site is tailored to your brand and goals, featuring fast performance, a clean UI, and a smooth user experience across all devices.",
      "My stack is heavily focused on the modern JavaScript/TypeScript ecosystem (React, Next.js, Node.js) combined with robust SQL databases, ensuring the applications I build are maintainable and easily scalable."
    ],
    features: [
      'Custom-built SPA/MPA using Next.js',
      'Responsive and modern UI with Tailwind CSS',
      'Optimized performance and Core Web Vitals',
      'SEO-friendly structure',
      'API Design & Architecture (REST/GraphQL)',
      'Database Modeling & Integration'
    ],
    moreCount: 2,
    price: 'Custom',
    isCustomQuote: true,
    bookLink: 'mailto:hello@swagato.com?subject=Inquiry:%20Full-Stack%20Development',
    faqs: [
      {
        question: 'Will my app be SEO-friendly and load fast?',
        answer: 'Yes! By leveraging Next.js App Router, Server-Side Rendering (SSR), and Static Site Generation (SSG), I ensure optimal load times and perfect SEO scores out of the box.'
      },
      {
        question: 'Do you handle the backend and database too?',
        answer: 'Absolutely. I design scalable database schemas (PostgreSQL, MySQL) and build secure REST or GraphQL APIs to power your frontend applications.'
      },
      {
        question: 'Will my app be mobile-friendly?',
        answer: 'Every application I build is designed mobile-first, ensuring a flawless and native-feeling experience on phones, tablets, and desktops.'
      }
    ]
  },
  {
    id: 'performance-audits',
    abbr: 'PO',
    title: 'Performance Audits',
    subtitle: 'Latency • Core Web Vitals • Bottlenecks',
    shortDescription: 'Deep-dive technical audits to identify bottlenecks, optimize latency, and reduce infrastructure costs.',
    detailedDescription: [
      "Slow applications kill conversions and skyrocket infrastructure costs. I conduct comprehensive technical audits of your existing codebase and infrastructure to identify exactly what's slowing you down.",
      "You'll receive a detailed, actionable report highlighting database query inefficiencies, massive JavaScript bundles, unoptimized rendering paths, and memory leaks, along with the exact code required to fix them."
    ],
    features: [
      'Core Web Vitals & Lighthouse Audit',
      'Database Query Profiling & Optimization',
      'Bundle Size Analysis & Reduction',
      'Memory Leak Detection',
      'Infrastructure Cost Optimization',
      'Actionable Technical Report'
    ],
    moreCount: 0,
    price: '$500',
    isCustomQuote: false,
    bookLink: 'mailto:hello@swagato.com?subject=Inquiry:%20Performance%20Audits',
    faqs: [
      {
        question: 'What do I get at the end of the audit?',
        answer: 'You will receive a comprehensive PDF report detailing the bottlenecks found, their business impact, and step-by-step technical instructions (including code snippets) on how to resolve them.'
      },
      {
        question: 'Can you implement the fixes too?',
        answer: 'Yes! After the audit, if you do not have the in-house capacity to execute the fixes, you can hire me to implement the optimizations directly.'
      },
      {
        question: 'How long does an audit take?',
        answer: 'A standard audit takes 3-5 business days depending on the size and complexity of your application.'
      }
    ]
  }
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((service) => service.id === id);
}
