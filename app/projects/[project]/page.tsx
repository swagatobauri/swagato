import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Globe, FileText, CheckCircle2, GitBranch } from 'lucide-react';
import { projectsData, getProjectById } from '@/lib/projects-data';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    project: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { project: string } }) {
  const project = getProjectById(params.project);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col w-full bg-background min-h-[calc(100vh-4rem)] pt-12 md:pt-16 pb-32 px-gutter">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-16">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between w-full">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-widest text-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          
          <span className="font-mono text-caption text-muted bg-muted/10 px-3 py-1.5 rounded-sm">
            {project.date}
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Visual Banner & Tech Specs */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
            
            {/* Visual Header Card (Same style as list, but larger) */}
            <div className={`relative w-full h-64 md:h-80 rounded-3xl ${project.bgClass} flex flex-col items-start p-8 md:p-10 overflow-hidden shadow-sm border border-border/30`}>
              <div className="relative z-10 font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full bg-background/40 text-foreground backdrop-blur-md font-bold mb-auto border border-border/30">
                {project.status}
              </div>
              
              <span className="absolute -right-8 -bottom-16 font-heading text-[12rem] font-black text-foreground opacity-10 leading-none select-none pointer-events-none">
                {project.abbr}
              </span>
              
              <div className="relative z-10 flex flex-col mt-auto w-full">
                <h1 className="text-h3 md:text-h2 font-heading font-black text-foreground leading-tight">
                  {project.title}
                </h1>
                <p className="text-bodyLg font-medium text-foreground/80 mt-2">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Links & Category */}
            <div className="flex items-center justify-between px-2">
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-xl text-muted hover:text-foreground hover:bg-muted/10 transition-colors shadow-sm">
                    <GitBranch className="w-5 h-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-xl text-muted hover:text-foreground hover:bg-muted/10 transition-colors shadow-sm">
                    <Globe className="w-5 h-5" />
                  </a>
                )}
                {project.docUrl && (
                  <a href={project.docUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-xl text-muted hover:text-foreground hover:bg-muted/10 transition-colors shadow-sm">
                    <FileText className="w-5 h-5" />
                  </a>
                )}
              </div>
              <span className="font-mono text-caption uppercase tracking-widest px-4 py-2 bg-accent/10 text-accent rounded-lg font-bold border border-accent/20">
                {project.category}
              </span>
            </div>

            {/* Technologies Grid */}
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="font-heading text-h5 font-bold text-foreground">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    <span className="text-bodySm font-medium text-foreground/90">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Details & Features */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-12 lg:pt-4">
            
            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-h2 md:text-[3.5rem] font-black text-foreground leading-[1.1] tracking-tight">
                {project.title}
              </h2>
              <p className="text-bodyLg text-foreground/80 leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </section>

            <section className="flex flex-col gap-8">
              <h3 className="font-heading text-h3 font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  ✨
                </span>
                Features
              </h3>
              
              <ul className="flex flex-col gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-bodyLg font-medium text-foreground/90 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

        </div>

      </div>
    </main>
  );
}
