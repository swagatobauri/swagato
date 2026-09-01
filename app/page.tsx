import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/Hero';

// Lazy-load heavy and below-the-fold components
const ProjectsSection = dynamic(() => import('@/components/sections/Projects').then(mod => mod.ProjectsSection));
const Footer = dynamic(() => import('@/components/sections/Footer').then(mod => mod.Footer));
const StackCard = dynamic(() => import('@/components/sections/StackCard').then(mod => mod.StackCard));
const LeetCodePanel = dynamic(() => import('@/components/sections/LeetCodePanel').then(mod => mod.LeetCodePanel), { ssr: false });
const SocialBento = dynamic(() => import('@/components/sections/SocialBento').then(mod => mod.SocialBento), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-background w-full">
      <HeroSection />
      
      {/* Dashboard Row 1: Stack Card + Recent Posts */}
      <section className="w-full max-w-[1400px] mx-auto pt-16 pb-8 px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <StackCard />
          <SocialBento />
        </div>
      </section>

      {/* Dashboard Row 2: Full-width LeetCode Panel */}
      <section className="w-full max-w-[1400px] mx-auto pb-16 px-gutter">
        <LeetCodePanel />
      </section>
      
      <ProjectsSection />
      
      <Footer />
    </div>
  );
}
