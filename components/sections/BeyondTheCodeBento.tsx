'use client';

import { useState } from 'react';
import { Camera, Music, Award, Play, Pause, X, ShieldCheck, FileText } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);
import clsx from 'clsx';

export function BeyondTheCodeBento() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full max-w-[480px] mx-auto flex flex-col gap-6">
      
      {/* Section Header */}
      <div className="font-mono text-[10px] sm:text-caption text-muted flex items-center gap-4">
        <span>[ human.log ]</span>
        <span className="flex-1 h-[1px] bg-border/50" />
        <span className="uppercase tracking-widest">// Beyond the Code</span>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 gap-4 auto-rows-[160px]">
        
        {/* 1. Photography Card (Spans 1 col, 2 rows) */}
        <a 
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative col-span-1 row-span-2 rounded-2xl overflow-hidden bg-card border border-border grayscale-[0.8] opacity-80 hover:grayscale-0 hover:opacity-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
        >
          <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-md p-2 rounded-full shadow-sm text-foreground">
            <Camera className="w-4 h-4" />
          </div>
          
          {/* Inner 2x2 Photo Grid */}
          <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-1 p-1 bg-border/20">
            <img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=400&q=80" alt="Product" className="w-full h-full object-cover rounded-tl-xl" />
            <img src="https://images.unsplash.com/photo-1541604193435-22287d32c2c2?w=400&q=80" alt="Setup" className="w-full h-full object-cover rounded-tr-xl" />
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" alt="Code" className="w-full h-full object-cover rounded-bl-xl" />
            <img src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&q=80" alt="Hardware" className="w-full h-full object-cover rounded-br-xl" />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
            <InstagramIcon className="w-8 h-8 text-foreground" />
            <span className="font-heading font-bold text-sm text-foreground">View more on Instagram</span>
          </div>
        </a>

        {/* 2. Flute Performance (Spans 1 col, 1 row) */}
        <div className="col-span-1 row-span-1 rounded-2xl bg-card border border-border grayscale-[0.5] opacity-90 hover:grayscale-0 hover:opacity-100 hover:shadow-lg transition-all duration-500 p-4 flex flex-col justify-between group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
              <Music className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider">Flute</span>
            </div>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-background flex items-center justify-center transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
          </div>
          
          {/* Minimal Waveform */}
          <div className="flex items-end justify-between h-8 gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className={clsx(
                  "w-1.5 bg-accent rounded-full transition-all duration-300",
                  isPlaying ? "animate-pulse" : ""
                )}
                style={{ 
                  height: isPlaying ? `${Math.max(20, Math.random() * 100)}%` : `${[20,40,60,30,80,100,70,40,90,50,30,20][i]}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>

          <div className="font-mono text-[10px] text-muted truncate">
            flute_improv_01.mp3
          </div>
        </div>

        {/* 3. Credentials (Spans 1 col, 1 row) */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="col-span-1 row-span-1 rounded-2xl bg-card border border-border grayscale-[0.8] opacity-80 hover:grayscale-0 hover:opacity-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 p-5 flex flex-col items-center justify-center gap-4 group"
        >
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center z-20 group-hover:-translate-y-2 transition-transform duration-300">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center z-10 scale-90 group-hover:translate-x-2 transition-transform duration-300">
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center z-0 scale-75 group-hover:translate-x-4 transition-transform duration-300">
              <FileText className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading font-bold text-sm text-foreground">Credentials</span>
            <span className="font-mono text-[9px] text-muted uppercase tracking-widest">View Milestones</span>
          </div>
        </button>

      </div>

      {/* Lightweight Credentials Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-gutter">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-border/50 flex justify-between items-center bg-muted/5">
              <h3 className="font-heading font-bold text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                Verified Credentials
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-6">
              
              <div className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-background transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">LeetCode Top 12%</h4>
                  <p className="font-sans text-sm text-muted mt-1">Achieved a global contest rating of 1,714. Solved over 500 algorithmic challenges.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-background transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent-secondary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-accent-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Codeforces 1050+</h4>
                  <p className="font-sans text-sm text-muted mt-1">Active participant in competitive programming contests.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
