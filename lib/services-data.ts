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
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: 'saas-development',
    abbr: 'SA',
    title: 'SaaS Development',
    subtitle: 'SaaS • Web App • Scaling',
    shortDescription: 'Architecting high-throughput, multi-tenant SaaS platforms engineered for rapid scaling and uncompromising performance.',
    detailedDescription: [
      "I engineer complex, distributed SaaS architectures that prioritize data integrity and minimal latency. From the database schema to the CDN edge, every layer is optimized for ruthless efficiency.",
      "I do not build fragile MVPs. I construct production-grade platforms with robust authentication, scalable billing pipelines, and zero-downtime deployment strategies."
    ],
    features: [
      'End-to-end SaaS product development',
      'Product-market fit focus',
      'Fast MVP delivery',
      'Automated database backup and recovery',
      'Seamless scaling for growth',
      'Cross-platform (web & mobile) delivery'
    ],
    moreCount: 3,
    price: '$500',
    isCustomQuote: false,
    bookLink: 'mailto:hello@swagato.com?subject=Inquiry:%20SaaS%20Development',
    featured: true,
    faqs: [
      {
        question: 'What makes your SaaS development process stand out?',
        answer: 'I focus heavily on architecture scalability and user retention loops from day one. I don\'t just write code; I help engineer a product that is designed to grow.'
      },
      {
        question: 'Do you handle the authentication and billing?',
        answer: 'Yes, I fully integrate modern Auth providers (like Clerk or NextAuth) and payment processors (like Stripe) for seamless subscription management.'
      }
    ]
  },
  {
    id: 'custom-website-development',
    abbr: 'WEB',
    title: 'Custom Website Development',
    subtitle: 'Responsive • Performant • Modern',
    shortDescription: 'Engineering hyper-optimized, visually brutalist web experiences that dominate Core Web Vitals and maximize conversion.',
    detailedDescription: [
      "I build web applications that load in milliseconds and execute flawlessly. Forget bloated templates; I write clean, deterministic code tailored for absolute performance.",
      "Leveraging cutting-edge rendering strategies and minimal client-side JavaScript, I ensure perfect SEO scores and instant interactivity across all devices."
    ],
    features: [
      'Custom-built SPA/MPA',
      'Responsive and modern UI',
      'Optimized performance',
      'SEO-friendly structure',
      'CMS Integration'
    ],
    moreCount: 1,
    price: '$100',
    isCustomQuote: false,
    bookLink: 'mailto:hello@swagato.com?subject=Inquiry:%20Custom%20Website',
    featured: true,
    faqs: [
      {
        question: 'Will I be able to edit the content myself?',
        answer: 'Absolutely. I can integrate headless CMS platforms like Sanity or Contentful so you can easily update text and images without touching code.'
      },
      {
        question: 'Do you optimize for mobile?',
        answer: 'Yes, every site is built mobile-first, ensuring it looks and works perfectly on any device size.'
      }
    ]
  },
  {
    id: 'system-design',
    abbr: 'SYS',
    title: 'System Design',
    subtitle: 'Architecture • Scalability • Cloud',
    shortDescription: 'Architecting fault-tolerant, horizontally scalable backend systems capable of absorbing massive traffic spikes.',
    detailedDescription: [
      "I design distributed systems that refuse to fail. By applying advanced microservice patterns and rigorous database modeling, I eliminate single points of failure.",
      "Whether it is an event-driven pipeline or a heavily partitioned relational cluster, I map out technical blueprints that scale cleanly without accumulating technical debt."
    ],
    features: [
      'Scalable system architecture',
      'Clear user flows',
      'Optimized information structure',
      'Database Modeling (SQL/NoSQL)',
      'API Gateway & Microservices'
    ],
    moreCount: 2,
    price: '$250',
    isCustomQuote: false,
    bookLink: 'mailto:hello@swagato.com?subject=Inquiry:%20System%20Design',
    featured: true,
    faqs: [
      {
        question: 'What deliverables are included in System Design?',
        answer: 'You receive comprehensive architecture diagrams, database schemas, API specs, and a technical requirements document ready for implementation.'
      },
      {
        question: 'Can you review an existing architecture?',
        answer: 'Yes, I can audit your current system to identify bottlenecks and design a migration plan to a more scalable architecture.'
      }
    ]
  },
  {
    id: 'payment-gateway',
    abbr: 'PA',
    title: 'Payment Gateway Integration',
    subtitle: 'Stripe • Razorpay • Subscriptions',
    shortDescription: 'Architecting bulletproof, PCI-compliant payment infrastructures that maximize conversion and eliminate revenue leakage.',
    detailedDescription: [
      "I engineer frictionless, deeply integrated payment pipelines. From idempotency keys to complex webhook validation, I ensure your transactions are mathematically secure and immune to network partitions.",
      "Whether deploying high-volume subscription models or multi-currency routing, I build resilient billing logic that operates silently and flawlessly."
    ],
    features: [
      'Stripe and Razorpay integration',
      'One-time and recurring payments',
      'Subscription management',
      'Webhook handling',
      'Failed payment recovery logic'
    ],
    moreCount: 4,
    price: '$150',
    isCustomQuote: false,
    bookLink: 'mailto:hello@swagato.com?subject=Inquiry:%20Payment%20Gateway',
    featured: false,
    faqs: [
      {
        question: 'Do you handle the webhooks and security?',
        answer: 'Yes, I implement robust backend webhook listeners to ensure your database stays perfectly in sync with Stripe/Razorpay.'
      }
    ]
  },
  {
    id: 'landing-page-design',
    abbr: 'LPD',
    title: 'Landing Page Design',
    subtitle: 'Conversion • UI/UX • Design Laws',
    shortDescription: 'Engineering highly-optimized, psychologically driven landing pages engineered strictly for aggressive conversion.',
    detailedDescription: [
      "Aesthetics are secondary to performance. I deploy brutalist UX principles and cognitive design laws (Fitts's Law, Hick's Law) to ruthlessly eliminate friction and guide user behavior.",
      "Every pixel is intentional. I craft interfaces that do not just look modern—they systematically convert traffic into revenue."
    ],
    features: [
      'Conversion-optimized layouts',
      'Application of design laws (Fitts, Hick, Gestalt, etc.)',
      'Trend-aware visual design',
      'A/B Testing setup ready'
    ],
    moreCount: 2,
    price: '$50',
    isCustomQuote: false,
    bookLink: 'mailto:hello@swagato.com?subject=Inquiry:%20Landing%20Page',
    featured: false,
    faqs: [
      {
        question: 'Does this include the development of the page?',
        answer: 'This service is primarily for the UI/UX design (Figma). However, I can bundle development for an additional cost.'
      }
    ]
  },
  {
    id: 'ai-tool-development',
    abbr: 'AI',
    title: 'AI Tool Development',
    subtitle: 'LLMs • RAG • Custom Models',
    shortDescription: 'Deploying robust, deterministic AI microservices and scalable LLM architectures for enterprise workflows.',
    detailedDescription: [
      "I build hardened AI systems that survive outside the Jupyter notebook. From orchestrating complex agentic workflows to deploying custom inference servers, I turn stochastic models into reliable utilities.",
      "Specializing in heavily optimized RAG architectures and vector similarity search, I securely expose your proprietary data to state-of-the-art LLMs without compromising privacy."
    ],
    features: [
      'Custom AI/ML model training',
      'Prompt engineering for LLMs',
      'Big data mining and analysis',
      'Vector Database integration'
    ],
    moreCount: 2,
    price: '$800',
    isCustomQuote: false,
    bookLink: 'mailto:hello@swagato.com?subject=Inquiry:%20AI%20Tool',
    featured: false,
    faqs: [
      {
        question: 'Can the AI use my private company data safely?',
        answer: 'Yes. By using secure API endpoints and dedicated vector databases, your proprietary data is never used to train public models.'
      }
    ]
  },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((service) => service.id === id);
}
