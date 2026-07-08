'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

interface AccordionProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function Accordion({ question, answer, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group focus-visible:outline-none"
      >
        <span className={clsx(
          "font-heading text-bodyLg font-bold transition-colors duration-200",
          isOpen ? "text-accent" : "text-foreground group-hover:text-accent/80"
        )}>
          {question}
        </span>
        <ChevronDown 
          className={clsx(
            "w-5 h-5 text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] shrink-0 ml-4",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-bodySm text-foreground/70 leading-relaxed max-w-3xl pr-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
