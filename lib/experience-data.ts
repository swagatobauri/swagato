export type TimelineEntry = {
  id: string;
  role: string;
  organization: string;
  date: string;
  description: string;
  type: 'experience' | 'education';
  links?: {
    website?: string;
    linkedin?: string;
  };
};

export const timelineData: TimelineEntry[] = [
  {
    id: 'exp-patchifi',
    role: 'Artificial Intelligence Engineer',
    organization: 'Patchifi',
    date: 'Aug 2026 — Present',
    description: 'Working exclusively on Patchifi to design, build, and deploy autonomous AI systems. Key focus areas:\n• LLM & Agent Development: Building and maintaining LLM pipelines, agent workflows, prompt/retrieval systems, and orchestration logic.\n• Backend Engineering: Developing APIs, services, and data pipelines to integrate AI functionalities with existing product systems.\n• End-to-End Delivery: Shipping AI features from problem definition through to production deployment and monitoring.\n• Model Evaluation: Defining evaluation criteria and iterating on prompts and models to ensure high accuracy and reliability.',
    type: 'experience',
    links: {
      website: 'https://patchifi.com',
      linkedin: 'https://www.linkedin.com/company/patchifi/'
    }
  },
  {
    id: 'exp-1',
    role: 'Full Stack AI Developer',
    organization: 'CareerCafe',
    date: 'Jun 2026 — Aug 2026',
    description: 'Built a rule engine that evaluates student interview responses against structured criteria, serving 100+ daily active users on a live AI interview platform. Engineered dynamic follow-up route logic that generates contextual interview questions based on prior response analysis.',
    type: 'experience',
    links: {
      website: 'https://www.careercafe.in/',
      linkedin: 'https://www.linkedin.com/company/the-career-cafe'
    }
  },
  {
    id: 'edu-1',
    role: 'Bachelor of Technology (Artificial Intelligence)',
    organization: 'Newton School of Technology, Rishihood University',
    date: '2024 — 2028',
    description: 'Grade: Pursuing',
    type: 'education'
  },
  {
    id: 'edu-2',
    role: 'Intermediate (Class XII)',
    organization: 'Jawahar Navodaya Vidyalaya',
    date: '2023 — 2024',
    description: 'Grade: 7.5/10.0',
    type: 'education'
  },
  {
    id: 'edu-3',
    role: 'Matriculation (Class X)',
    organization: 'Jawahar Navodaya Vidyalaya',
    date: '2020 — 2021',
    description: 'Grade: 92.0%',
    type: 'education'
  }
];
