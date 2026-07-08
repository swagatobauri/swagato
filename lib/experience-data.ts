export type TimelineEntry = {
  id: string;
  role: string;
  organization: string;
  date: string;
  description: string;
  type: 'experience' | 'education';
};

export const timelineData: TimelineEntry[] = [
  {
    id: 'exp-1',
    role: 'Full Stack AI Developer',
    organization: 'CareerCafe (Remote)',
    date: 'June 2026 — Present',
    description: 'Built a rule engine that evaluates student interview responses against structured criteria, serving 100+ daily active users on a live AI interview platform. Engineered dynamic follow-up route logic that generates contextual interview questions based on prior response analysis.',
    type: 'experience'
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
