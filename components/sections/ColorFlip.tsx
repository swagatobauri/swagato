import { Marquee } from '@/components/ui/Marquee';

export function ColorFlipSection() {
  return (
    // "dark" class triggers the inverted CSS variables defined in globals.css
    <section className="dark w-full py-32 bg-background text-foreground overflow-hidden flex flex-col justify-center border-y border-border">
      <div className="flex flex-col gap-8 transform rotate-[-2deg] scale-110">
        <Marquee speed={1.2} direction="left" className="text-h1 uppercase tracking-tighter font-heading font-black text-accent py-4">
          — SWAGATO BAURI — HIGH PERFORMANCE WEB — SWAGATO BAURI — HIGH PERFORMANCE WEB 
        </Marquee>
        <Marquee speed={0.8} direction="right" className="text-h2 uppercase tracking-tighter font-heading font-bold text-foreground py-4 opacity-50">
          DESIGN / ENGINEER / SCALE — DESIGN / ENGINEER / SCALE — DESIGN / ENGINEER / SCALE
        </Marquee>
      </div>
    </section>
  );
}
