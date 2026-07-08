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
  featured?: boolean; // Controls if it shows up on the Home Page carousel
  
  features: string[]; // For the detail page
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
};

export const projectsData: Project[] = [
  {
  id: 'tars',
  title: 'TARS: Threat Analysis & Response System',
  subtitle: 'Autonomous cyber defense pipeline',
  description: 'A fully autonomous, real-time intrusion detection and mitigation agent built around a 7-stage O.A.R.D.A.L.V. closed-loop security architecture.',
  category: 'AI / Cybersecurity',
  tags: ['Python', 'FastAPI', 'Celery', 'Redis', 'Next.js', 'Groq', 'Scikit-learn'],
  status: 'COMPLETED',
  date: 'May 2026',
  bgClass: 'bg-accent/80',
  abbr: 'TS',
  featured: true,
  features: [
    'Ensemble ML anomaly detection using Isolation Forest and One-Class SVM models',
    'Real-time attacker tracking across cyber kill-chain stages from recon to exploit',
    'Groq-powered LLaMA 3 reasoning engine generating plain-English threat mitigation logs',
    'Fail-safe execution gate supporting both automated human-in-the-loop and shadow modes',
    '7th-step verification confirming post-action efficacy before resolution closure'
  ],
  githubUrl: 'https://github.com/swagatobauri/TARS---Threat-Analysis-Response-System',
  liveUrl: 'https://tars-frontend-demo.onrender.com/',
  docUrl: 'https://github.com/swagatobauri/TARS---Threat-Analysis-Response-System#readme'
  },
  {
    id: 'ultron-agency',
    title: 'ULTRON AGENCY',
    subtitle: 'Hierarchical autonomous agent swarm',
    description: 'A robust agent orchestration framework featuring supervisory loops, explicit tool use execution gates, and parallel asynchronous processing routines.',
    category: 'AI / Autonomous Agents',
    tags: ['Python', 'LangGraph', 'Redis', 'Celery', 'FastAPI'],
    status: 'COMPLETED',
    date: 'July 2026',
    bgClass: 'bg-red-500/10',
    abbr: 'UA',
    featured: true,
    features: [
      'Hierarchical agent design where a master supervisor agent breaks down sub-tasks to child workers',
      'Asynchronous thread pooling enabling multiple agents to run background tools simultaneously',
      'State recovery structures utilizing persistent Redis stores to prevent task loops from failing mid-way',
      'Closed-loop self-correction layers where output code or logic is automatically evaluated and refactored'
    ],
    githubUrl: 'https://github.com/swagatobauri/ULTRON_AGENCY',
    docUrl: 'https://github.com/swagatobauri/ULTRON_AGENCY#readme',
    liveUrl: 'https://ultron-agency.vercel.app/'
  },
  {
    id: 'clinical-dosing',
    title: 'Clinical Dosing & Guideline Assistant',
    subtitle: 'Precision medical context & dosage retrieval',
    description: 'An advanced retrieval-augmented generation (RAG) assistant designed to parse extensive medical documentation and extract real-time clinical guidelines for accurate dosage limits.',
    category: 'AI / Healthcare',
    tags: ['Python', 'LangChain', 'FAISS', 'Groq', 'FastAPI'],
    status: 'BUILDING',
    date: 'August 2026',
    bgClass: 'bg-emerald-500/10',
    abbr: 'CD',
    featured: true,
    features: [
      'Semantic search mapping against medical knowledge graphs and clinical trial parameters',
      'Ultra-low latency inference using Groq LPUs for point-of-care clinical workflows',
      'Automated fallback handling to traditional vector indexing for highly precise document chunking',
      'HIPAA-aligned local data parsing pipeline preserving patient data security limits'
    ],
    githubUrl: 'https://github.com/swagatobauri/Clinical_Dosing_and_Guideline_Assistant',
    docUrl: 'https://github.com/swagatobauri/Clinical_Dosing_and_Guideline_Assistant#readme',
    liveUrl: 'https://clinicaldosingandguidelineassistant-bfdqt97vfvevppzwdxfkwj.streamlit.app/'
  },
  {
    id: 'insurance-adjudication',
    title: 'Insurance Claims Adjudication Agent',
    subtitle: 'Automated multi-agent policy verification',
    description: 'An intelligent multi-agent framework built to ingest, cross-reference, and validate medical or generic insurance claims against dense policy boundaries to detect anomalies and automate approvals.',
    category: 'AI / FinTech',
    tags: ['Python', 'LangGraph', 'Pydantic Log', 'FastAPI', 'Groq'],
    status: 'BUILDING',
    date: 'July 2026',
    bgClass: 'bg-blue-500/10',
    abbr: 'IA',
    featured: true,
    features: [
      'Multi-agent task breakdown distributing claim ingestion, policy matching, and fraud check responsibilities',
      'Deterministic execution routing ensuring absolute compliance with structural claim rules',
      'Human-in-the-loop validation checkpoints for edge-case billing codes and high-value claim exceptions',
      'Structured Pydantic outputs optimizing downstream database logging and claims processing speed'
    ],
    githubUrl: 'https://github.com/swagatobauri/Insurance_Claims_Adjudication_Agent',
    docUrl: 'https://github.com/swagatobauri/Insurance_Claims_Adjudication_Agent#readme',
  },
  {
    id: 'veda-ai',
    title: 'VedaAI',
    subtitle: 'Contextual knowledge synthesis platform',
    description: 'A comprehensive multi-source knowledge engine designed to ingest diverse datasets, map semantic correlations, and present structured executive summaries over deep information networks.',
    category: 'AI / Knowledge Management',
    tags: ['Python', 'LangChain', 'ChromaDB', 'HuggingFace', 'Streamlit'],
    status: 'COMPLETED',
    date: 'June 2026',
    bgClass: 'bg-purple-500/10',
    abbr: 'VA',
    featured: false,
    features: [
      'Cross-document semantic cross-referencing to eliminate hallucinations in deep research analysis',
      'Persistent vector embedding pipelines optimized for handling massive unstructured file formats',
      'Dynamic metadata filtering allowing users to isolate contextual knowledge by date, author, or weight',
      'Minimalist dashboard showcasing real-time processing feedback and trace logs'
    ],
    githubUrl: 'https://github.com/swagatobauri/VedaAI',
    docUrl: 'https://github.com/swagatobauri/VedaAI#readme',
    liveUrl: 'https://veda-ai-zeta.vercel.app/'
  },
  {
    id: 'nlp-research-analyzer',
    title: 'NLP Research Analyzer',
    subtitle: 'Automated academic document parsing & synthesis',
    description: 'A parsing ecosystem that extracts mathematical equations, key methodologies, and core conclusions from complex machine learning and natural language processing research papers.',
    category: 'NLP / Research',
    tags: ['Python', 'Transformers', 'PyPDF2', 'LangChain', 'Ollama'],
    status: 'COMPLETED',
    date: 'May 2026',
    bgClass: 'bg-amber-500/10',
    abbr: 'RA',
    featured: false,
    features: [
      'Custom regex-backed structural PDF parser extracting layouts without breaking logical reading order',
      'Automated abstract tokenizing and citation extraction pipelines mapping conceptual research trends',
      'Local model integration (Ollama) enabling completely private, offline paper synthesis and queries',
      'Comparative grid output contrasting methodologies between older and newer parsed manuscripts'
    ],
    githubUrl: 'https://github.com/swagatobauri/NLP-Research-Analyzer',
    docUrl: 'https://github.com/swagatobauri/NLP-Research-Analyzer#readme',
    liveUrl: 'https://github.com/swagatobauri/NLP-Research-Analyzer'
  },

];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((p) => p.id === id);
}
