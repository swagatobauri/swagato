import React from 'react';
import clsx from 'clsx';

export interface StatusPillProps {
  children: React.ReactNode;
  status?: 'COMPLETED' | 'IN PROGRESS' | string;
  showPing?: boolean;
  className?: string;
}

export function StatusPill({ children, status, showPing = false, className = '' }: StatusPillProps) {
  const isCompleted = status === 'COMPLETED';
  const isInProgress = status === 'IN PROGRESS';
  
  // Default to standard secondary fill if no specific status matches
  const baseClasses = clsx(
    "px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2",
    {
      "bg-accent text-background border border-accent": isCompleted,
      "bg-transparent text-accent-tertiary border border-accent-tertiary": isInProgress,
      "bg-accent-secondary/20 text-foreground border border-accent-secondary/30": !isCompleted && !isInProgress
    },
    className
  );

  return (
    <div className={baseClasses}>
      {showPing && (
        <span className={clsx(
          "w-2 h-2 rounded-full animate-pulse opacity-80",
          isCompleted ? "bg-background" : (isInProgress ? "bg-accent-tertiary" : "bg-foreground")
        )} />
      )}
      {children}
    </div>
  );
}
