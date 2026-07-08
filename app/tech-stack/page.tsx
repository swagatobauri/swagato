import dynamic from 'next/dynamic';

const TechGraph = dynamic(() => import('@/components/canvas/TechGraph').then(mod => mod.TechGraph), { ssr: false });
import { TECH_NODES, TECH_LINKS } from '@/lib/graph-data';

export default function TechStackPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen pt-12 pb-24">
      <section className="w-full relative z-10 px-gutter">
        <h2 className="text-h2 font-heading font-bold mb-12">Full Architecture</h2>
        <div className="w-full max-w-6xl mx-auto h-[600px] md:h-[800px] overflow-hidden bg-background border border-border rounded-[2rem] shadow-sm relative">
           <TechGraph initialNodes={TECH_NODES} initialLinks={TECH_LINKS} />
        </div>
      </section>
    </div>
  );
}
