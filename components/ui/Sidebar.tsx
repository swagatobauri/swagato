'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MENU_GROUPS } from '@/lib/nav-links-data';
import { 
  Home, 
  User, 
  Briefcase, 
  FolderKanban, 
  Layers, 
  FileText, 
  Code2, 
  Globe, 
  MessageSquare,
  Code,
  Mail,
  Menu,
  X,
  ChevronsLeft,
  Sun,
  Moon,
  Circle,
  ArrowUpRight
} from 'lucide-react';
import clsx from 'clsx';

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Layers,
  FileText,
  Code2,
  Globe,
  MessageSquare,
  Code,
  Mail,
};

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check initial state from HTML tag which was set by our layout script
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };  return (
    <React.Fragment>
      {/* Mobile Hamburger Trigger */}
      <button 
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-6 right-6 z-[60] w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-md border border-border rounded-full text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Open Menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-[60]"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside 
        className={clsx(
          "fixed md:sticky top-0 left-0 h-[100dvh] bg-background border-r border-border transition-all duration-300 flex flex-col z-[70] overflow-y-auto overflow-x-hidden",
          isCollapsed ? "w-[80px]" : "w-[280px]",
          // Mobile state
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
      
      {/* 1. Profile Block */}
      <div className="p-6 border-b border-border flex items-center justify-between">
        <div className={clsx("flex items-center gap-4 transition-opacity duration-300", isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100")}>
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
            {/* Placeholder Avatar */}
            <User className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-foreground leading-none">Swagato Bauri</span>
            <span className="font-mono text-caption text-muted mt-1">Software Engineer</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          {/* Mobile Close Button */}
          <button 
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-sm hover:bg-muted/10 text-muted hover:text-foreground transition-colors shrink-0"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Desktop Collapse Toggle */}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex w-8 h-8 items-center justify-center rounded-sm hover:bg-muted/10 text-muted hover:text-foreground transition-colors shrink-0"
            aria-label="Toggle Sidebar"
          >
            <ChevronsLeft className={clsx("w-5 h-5 transition-transform duration-300", isCollapsed && "rotate-180")} />
          </button>
          
          {/* Light/Dark Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-muted/10 text-muted hover:text-foreground transition-colors shrink-0"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 2 & 3. Nav Groups */}
      <nav className="flex-1 py-6 flex flex-col gap-8">
        
        {MENU_GROUPS.map((group) => {
          // Identify if this is the "Connect" group which holds the Resume
          const isConnectGroup = group.title === 'Connect';
          const regularItems = isConnectGroup ? group.items.filter(i => i.id !== 'resume') : group.items;
          const resumeItem = isConnectGroup ? group.items.find(i => i.id === 'resume') : null;

          return (
            <div key={group.title} className="flex flex-col px-4">
              
              <h3 className={clsx(
                "font-mono text-[10px] text-muted uppercase tracking-widest mb-4 px-2 transition-opacity duration-300 whitespace-nowrap",
                isCollapsed ? "opacity-0 h-0 overflow-hidden mb-0" : "opacity-100"
              )}>
                {group.title}
              </h3>
              
              <ul className="flex flex-col gap-1">
                {regularItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.iconName && ICON_MAP[item.iconName] ? ICON_MAP[item.iconName] : Circle;

                  const content = (
                    <>
                      <div className="flex items-center gap-3">
                        <Icon className={clsx("w-4 h-4 transition-colors", isActive ? "text-accent" : "text-muted-foreground group-hover:text-foreground")} />
                        
                        {!isCollapsed && (
                          <span className={clsx("font-heading text-bodySm transition-all duration-200", isActive ? "font-bold text-foreground" : "font-medium text-foreground/70")}>
                            {item.label}
                          </span>
                        )}
                      </div>

                      {!isCollapsed && (
                        <div className="flex items-center gap-2">
                          {item.number && (
                            <span className="font-mono text-[10px] text-muted group-hover:text-accent transition-colors">
                              {item.number}
                            </span>
                          )}
                          {item.isExternal && (
                            <ArrowUpRight className="w-3 h-3 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                      )}
                    </>
                  );

                  return (
                    <li key={item.id}>
                      {item.isExternal ? (
                        <a
                          href={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={clsx(
                            "group flex items-center rounded-sm px-2 py-2 transition-colors duration-200",
                            isActive ? "bg-accent/10 text-foreground" : "text-muted hover:text-foreground hover:bg-muted/5",
                            isCollapsed ? "justify-center" : "justify-between"
                          )}
                          title={item.label}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={clsx(
                            "group flex items-center rounded-sm px-2 py-2 transition-colors duration-200",
                            isActive ? "bg-accent/10 text-foreground" : "text-muted hover:text-foreground hover:bg-muted/5",
                            isCollapsed ? "justify-center" : "justify-between"
                          )}
                          title={item.label}
                        >
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Pinned Resume (only in Connect group) */}
              {resumeItem && (
                <div className="mt-4 pt-4 border-t border-border/50">
                   <a 
                      href={resumeItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileOpen(false)}
                      className={clsx(
                        "group flex items-center rounded-sm px-2 py-2 transition-colors duration-200 text-foreground/80 hover:text-foreground hover:bg-accent/10",
                        isCollapsed ? "justify-center" : "justify-between"
                      )}
                      title={resumeItem.label}
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-accent" />
                        {!isCollapsed && (
                          <span className="font-heading text-bodySm font-bold">
                            {resumeItem.label}
                          </span>
                        )}
                      </div>
                      {!isCollapsed && (
                        <ArrowUpRight className="w-3 h-3 text-muted group-hover:text-accent transition-colors" />
                      )}
                  </a>
                </div>
              )}

            </div>
          )
        })}
      </nav>

    </aside>
    </React.Fragment>
  );
}
