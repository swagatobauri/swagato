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
    shortDescription: 'Crafting scalable SaaS platforms with cutting-edge features, ensuring seamless performance and an exceptional user experience.',
    detailedDescription: [
      "I specialize in building scalable SaaS platforms that combine advanced features with seamless performance and intuitive user experiences. From architecture to deployment, I ensure your product is robust, secure, and ready for growth, helping you deliver value to users and stand out in a competitive market.",
      "By utilizing modern tech stacks and cloud infrastructure, I build multi-tenant platforms capable of handling high traffic and complex workflows without compromising speed."
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
    price: '$1000',
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
    shortDescription: 'Building fast, responsive single and multi-page web applications tailored to your business needs, with modern design and robust performance.',
    detailedDescription: [
      "Your website is your digital storefront. I build custom, high-performance websites that not only look stunning but are engineered to convert visitors into customers.",
      "Using the latest web technologies like Next.js and Tailwind CSS, I ensure your site has lightning-fast load times, perfect SEO scores, and flawless mobile responsiveness."
    ],
    features: [
      'Custom-built SPA/MPA',
      'Responsive and modern UI',
      'Optimized performance',
      'SEO-friendly structure',
      'CMS Integration'
    ],
    moreCount: 1,
    price: '$200',
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
    shortDescription: 'Designing robust, scalable system architectures and user flows that power reliable, high-performing applications.',
    detailedDescription: [
      "A great application requires a solid foundation. I design scalable, cloud-native system architectures that handle high concurrency, data integrity, and complex microservice orchestration.",
      "From database schema design to event-driven architectures, I map out the technical blueprint required to ensure your application can scale securely and efficiently."
    ],
    features: [
      'Scalable system architecture',
      'Clear user flows',
      'Optimized information structure',
      'Database Modeling (SQL/NoSQL)',
      'API Gateway & Microservices'
    ],
    moreCount: 2,
    price: '$500',
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
    shortDescription: 'Integrating secure and reliable payment gateways like Stripe and Razorpay into websites and web applications.',
    detailedDescription: [
      "Stop losing revenue to failed transactions. I implement robust, secure, and PCI-compliant payment gateways into your existing web applications.",
      "Whether you need simple one-time checkouts, complex recurring billing cycles, or global multi-currency support, I ensure the checkout flow is frictionless for your customers."
    ],
    features: [
      'Stripe and Razorpay integration',
      'One-time and recurring payments',
      'Subscription management',
      'Webhook handling',
      'Failed payment recovery logic'
    ],
    moreCount: 4,
    price: '$300',
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
    shortDescription: 'Designing landing pages that combine design laws, current trends, and conversion-focused strategies to maximize engagement.',
    detailedDescription: [
      "A beautiful page isn't enough; it needs to convert. I design high-converting landing pages using established design principles (Fitts's Law, Hick's Law) and persuasive visual hierarchies.",
      "By combining modern UI trends with proven psychological design laws, I craft pages that guide user attention directly to your primary call-to-action."
    ],
    features: [
      'Conversion-optimized layouts',
      'Application of design laws (Fitts, Hick, Gestalt, etc.)',
      'Trend-aware visual design',
      'A/B Testing setup ready'
    ],
    moreCount: 2,
    price: '$100',
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
    shortDescription: 'Building AI/ML-powered SaaS products, specializing in training custom models and prompt engineering.',
    detailedDescription: [
      "Leverage the power of Artificial Intelligence to automate workflows and unlock new capabilities. I build custom AI tools, ranging from internal automation scripts to full-fledged AI SaaS products.",
      "Specializing in RAG (Retrieval-Augmented Generation) pipelines, I can securely connect state-of-the-art LLMs (like GPT-4 or Claude 3) to your proprietary business data."
    ],
    features: [
      'Custom AI/ML model training',
      'Prompt engineering for LLMs',
      'Big data mining and analysis',
      'Vector Database integration'
    ],
    moreCount: 2,
    price: '$3000',
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
