'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import React from 'react';

export function Breadcrumb() {
  const pathname = usePathname();
  
  // Do not show on home page or if no pathname
  if (!pathname || pathname === '/') return null;

  // Split path into segments, remove empty strings
  const segments = pathname.split('/').filter(Boolean);

  return (
    <div className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
      <nav className="flex items-center gap-2 px-gutter py-4 font-mono text-caption text-muted overflow-x-auto whitespace-nowrap">
        <Link 
          href="/" 
          className="hover:text-foreground transition-colors uppercase tracking-widest"
        >
          Home
        </Link>
        
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          const isLast = index === segments.length - 1;
          
          // Format segment text: replace dashes with spaces, capitalize words
          const formattedSegment = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          return (
            <React.Fragment key={href}>
              <ChevronRight className="w-3 h-3 text-border shrink-0" />
              {isLast ? (
                <span className="text-accent font-bold uppercase tracking-widest">
                  {formattedSegment}
                </span>
              ) : (
                <Link 
                  href={href} 
                  className="hover:text-foreground transition-colors uppercase tracking-widest"
                >
                  {formattedSegment}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}
