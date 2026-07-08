'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Layers, Database, Layout, Server, Cpu, Wrench } from 'lucide-react';

// PLACEHOLDER DATA: Update with real categories and tools
const STACK_CATEGORIES = [
  { id: 'all', label: 'All Tools' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'devops', label: 'DevOps' },
];

const CATEGORY_STYLES: Record<string, { border: string; bg: string; text: string }> = {
  'frontend': { border: 'group-hover:border-accent', bg: 'group-hover:bg-accent/10', text: 'group-hover:text-accent' },
  'backend': { border: 'group-hover:border-accent-tertiary', bg: 'group-hover:bg-accent-tertiary/10', text: 'group-hover:text-accent-tertiary' },
  'devops': { border: 'group-hover:border-accent-tertiary', bg: 'group-hover:bg-accent-tertiary/10', text: 'group-hover:text-accent-tertiary' },
  'ai-ml': { border: 'group-hover:border-accent-secondary', bg: 'group-hover:bg-accent-secondary/15', text: 'group-hover:text-accent-secondary' },
  'default': { border: 'group-hover:border-accent', bg: 'group-hover:bg-accent/10', text: 'group-hover:text-accent' },
};

const STACK_DATA = [
  { id: 'python', category: 'backend', name: 'Python', desc: 'Core backend language', Icon: Server },
  { id: 'node', category: 'backend', name: 'Node.js', desc: 'Runtime & APIs', Icon: Server },
  { id: 'postgres', category: 'backend', name: 'PostgreSQL', desc: 'Relational database', Icon: Database },
  
  { id: 'react', category: 'frontend', name: 'React', desc: 'UI architecture', Icon: Layout },
  { id: 'next', category: 'frontend', name: 'Next.js', desc: 'Full-stack framework', Icon: Layout },
  { id: 'tailwind', category: 'frontend', name: 'Tailwind CSS', desc: 'Utility styling', Icon: Layout },
  
  { id: 'langchain', category: 'ai-ml', name: 'LangChain', desc: 'LLM orchestration', Icon: Cpu },
  { id: 'groq', category: 'ai-ml', name: 'Groq', desc: 'Fast inference', Icon: Cpu },
  { id: 'ragas', category: 'ai-ml', name: 'RAGAS', desc: 'Evaluation metrics', Icon: Cpu },
  
  { id: 'docker', category: 'devops', name: 'Docker', desc: 'Containerization', Icon: Wrench },
  { id: 'vercel', category: 'devops', name: 'Vercel', desc: 'Edge deployment', Icon: Wrench },
];

export function StackCard() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = activeCategory === 'all' 
    ? STACK_DATA 
    : STACK_DATA.filter(tool => tool.category === activeCategory);

  return (
    <div className="w-full h-full border border-border rounded-2xl bg-background shadow-sm flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-h3 font-heading font-bold text-foreground leading-none mb-1">
            Stack
          </h3>
          <p className="font-mono text-caption text-muted">
            Tools I use.
          </p>
        </div>

        {/* Dropdown Filter */}
        <div className="relative">
          <select 
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="appearance-none w-full sm:w-48 bg-muted/10 border border-border rounded-lg px-4 py-2.5 pr-10 font-heading font-medium text-bodySm text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow cursor-pointer"
          >
            {STACK_CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Body: 2-Column Grid with Crossfade */}
      <div className="flex-1 p-6 md:p-8 min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8"
          >
            {filteredTools.map((tool) => {
              const styles = CATEGORY_STYLES[tool.category] || CATEGORY_STYLES.default;
              return (
                <div key={tool.id} className="flex items-center gap-4 group">
                  <div className={`w-10 h-10 shrink-0 rounded-lg border border-border bg-muted/10 flex items-center justify-center transition-colors ${styles.border} ${styles.bg}`}>
                    <tool.Icon className={`w-5 h-5 text-muted-foreground transition-colors ${styles.text}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-foreground text-bodySm leading-tight">
                      {tool.name}
                    </span>
                    <span className="font-heading font-normal text-muted text-caption mt-0.5">
                      {tool.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer CTA */}
      <div className="p-6 md:p-8 border-t border-border/50 bg-muted/5">
        <a 
          href="#tech-graph"
          className="group flex items-center justify-center gap-2 w-full py-3.5 bg-background border border-border hover:border-foreground rounded-lg font-heading font-bold text-bodySm text-foreground transition-all active:scale-[0.98]"
        >
          <Layers className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
          <span>View Full Architecture</span>
          <ArrowRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors group-hover:translate-x-1" />
        </a>
      </div>

    </div>
  );
}
