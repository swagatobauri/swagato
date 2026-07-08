import { Marquee } from '@/components/ui/Marquee';

export default function FeelTestPage() {
  return (
    <main className="min-h-[200vh] flex flex-col justify-center items-center overflow-hidden py-32 bg-background relative selection:bg-accent selection:text-foreground">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="w-full flex flex-col gap-16 md:gap-24 relative z-10 my-auto">
        <header className="text-center mb-8 px-4">
          <h1 className="text-h2 uppercase tracking-tighter mb-4 text-foreground">Asymmetric Flow</h1>
          <p className="text-bodyBase text-muted max-w-xl mx-auto font-mono">
            Scroll down to test inertial scroll. Move mouse to test physics canvas trail.
          </p>
        </header>

        <div className="flex flex-col gap-4 md:gap-8 -rotate-2 scale-105">
          <Marquee speed={0.8} direction="left" className="text-h1 uppercase tracking-tight text-accent opacity-90 font-bold">
            <span className="mr-8">CREATIVE DEVELOPER</span>
            <span className="mr-8 text-transparent" style={{ WebkitTextStroke: '2px var(--accent)' }}>CREATIVE DEVELOPER</span>
            <span className="mr-8">CREATIVE DEVELOPER</span>
            <span className="mr-8 text-transparent" style={{ WebkitTextStroke: '2px var(--accent)' }}>CREATIVE DEVELOPER</span>
          </Marquee>

          <Marquee speed={1.2} direction="right" className="text-h2 uppercase tracking-tighter text-foreground font-black bg-accent py-4">
            <span className="mr-8">SELECTED WORK</span>
            <span className="mr-8">SELECTED WORK</span>
            <span className="mr-8">SELECTED WORK</span>
            <span className="mr-8">SELECTED WORK</span>
            <span className="mr-8">SELECTED WORK</span>
            <span className="mr-8">SELECTED WORK</span>
          </Marquee>

          <Marquee speed={0.5} direction="left" className="text-h1 uppercase tracking-tight text-muted/30 font-bold">
            <span className="mr-8">INTERACTIVE EXPERIENCES</span>
            <span className="mr-8">INTERACTIVE EXPERIENCES</span>
            <span className="mr-8">INTERACTIVE EXPERIENCES</span>
          </Marquee>
        </div>
      </div>
    </main>
  );
}
