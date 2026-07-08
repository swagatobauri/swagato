'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Layers } from 'lucide-react';
import { TECH_NODES } from '@/lib/graph-data';

// PLACEHOLDER DATA: Update with real categories and tools
const STACK_CATEGORIES = [
  { id: 'all', label: 'All Tools' },
  { id: 'core', label: 'Languages' },
  { id: 'backend', label: 'Backend & DB' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'devops', label: 'DevOps' },
];

const CATEGORY_STYLES: Record<string, { border: string; bg: string; text: string }> = {
  'core': { border: 'group-hover:border-foreground', bg: 'group-hover:bg-foreground/10', text: 'group-hover:text-foreground' },
  'frontend': { border: 'group-hover:border-accent', bg: 'group-hover:bg-accent/10', text: 'group-hover:text-accent' },
  'backend': { border: 'group-hover:border-accent-tertiary', bg: 'group-hover:bg-accent-tertiary/10', text: 'group-hover:text-accent-tertiary' },
  'devops': { border: 'group-hover:border-accent-tertiary', bg: 'group-hover:bg-accent-tertiary/10', text: 'group-hover:text-accent-tertiary' },
  'ai-ml': { border: 'group-hover:border-accent-secondary', bg: 'group-hover:bg-accent-secondary/15', text: 'group-hover:text-accent-secondary' },
  'default': { border: 'group-hover:border-accent', bg: 'group-hover:bg-accent/10', text: 'group-hover:text-accent' },
};

// Removed STACK_DATA, now using TECH_NODES directly for a single source of truth

export function StackCard() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredTools = activeCategory === 'all' 
    ? TECH_NODES 
    : TECH_NODES.filter(tool => {
        if (activeCategory === 'core' && tool.group === 'core') return true;
        if (activeCategory === 'backend' && tool.group === 'backend') return true;
        if (activeCategory === 'frontend' && tool.group === 'frontend') return true;
        if (activeCategory === 'ai-ml' && tool.group === 'rag') return true;
        if (activeCategory === 'devops' && tool.group === 'devops') return true;
        return false;
      });

  const displayTools = (activeCategory === 'all' && !isExpanded) 
    ? filteredTools.slice(0, 10) 
    : filteredTools;

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
            onChange={(e) => {
              setActiveCategory(e.target.value);
              setIsExpanded(false); // Reset expansion on category change
            }}
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
            {displayTools.map((tool) => {
              const mappedCategory = tool.group === 'rag' ? 'ai-ml' : tool.group;
              const styles = CATEGORY_STYLES[mappedCategory] || CATEGORY_STYLES.default;
              return (
                <div key={tool.id} className="flex items-center gap-4 group">
                  <div className={`w-10 h-10 shrink-0 rounded-lg border border-border bg-muted/10 flex items-center justify-center transition-colors ${styles.border} ${styles.bg}`}>
                    {tool.iconPath ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" className="transition-transform group-hover:scale-110 duration-300">
                        <path d={tool.iconPath} fill={tool.iconHex || 'currentColor'} className={`transition-colors ${styles.text}`} />
                      </svg>
                    ) : (
                      <div className={`font-heading font-bold text-[10px] uppercase tracking-wider transition-colors ${styles.text}`}>
                        {tool.id.substring(0, 3)}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-foreground text-bodySm leading-tight">
                      {tool.label}
                    </span>
                    <span className="font-heading font-normal text-muted text-caption mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                      {tool.context}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Expand/Collapse Button */}
        {activeCategory === 'all' && filteredTools.length > 10 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2 rounded-full border border-border text-muted text-bodySm font-heading font-medium hover:text-foreground hover:bg-muted/10 transition-colors flex items-center gap-2"
            >
              {isExpanded ? 'Show Less' : `View All ${filteredTools.length} Tools`}
            </button>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="p-6 md:p-8 border-t border-border/50 bg-muted/5">
        <Link 
          href="/tech-stack"
          className="group flex items-center justify-center gap-2 w-full py-3.5 bg-background border border-border hover:border-foreground rounded-lg font-heading font-bold text-bodySm text-foreground transition-all active:scale-[0.98]"
        >
          <Layers className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
          <span>View Full Architecture</span>
          <ArrowRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  );
}
