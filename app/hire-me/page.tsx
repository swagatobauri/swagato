import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HIRE_ROLES } from '@/lib/roles-data';

export default function HireMePage() {
  return (
    <main className="flex flex-col w-full bg-background min-h-[calc(100vh-4rem)] pt-12 md:pt-24 pb-32 px-gutter">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <span className="font-mono text-accent text-caption uppercase tracking-widest mb-6 block">
            HIRE ME
          </span>
          <h1 className="text-h1 md:text-[5rem] leading-[0.9] font-heading font-black text-foreground mb-6 tracking-tight">
            Specialized engineering roles.
          </h1>
          <p className="text-bodyLg text-foreground/70 font-medium leading-relaxed">
            Select a role below to view my specific capabilities, frequently asked questions, and availability.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {HIRE_ROLES.map((role) => (
            <Link 
              key={role.slug}
              href={`/hire-me/${role.slug}`}
              className="group flex flex-col p-8 bg-card border border-border rounded-2xl hover:bg-accent/5 hover:border-accent/20 transition-all duration-300"
            >
              <h3 className="font-heading text-h3 font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {role.name}
              </h3>
              <p className="text-bodySm text-foreground/70 mb-8 min-h-[40px]">
                {role.tagline}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                <span className="font-mono text-caption uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                  View Role Details
                </span>
                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
