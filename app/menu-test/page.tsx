'use client';

import { OverlayMenu } from '@/components/ui/OverlayMenu';

export default function MenuTestPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-background text-foreground relative">
      <OverlayMenu />

      <section className="w-full flex flex-col items-center justify-center p-gutter min-h-screen border-b border-border">
        <h1 className="text-h1 font-heading font-black tracking-tighter">PAGE CONTENT</h1>
        <p className="text-muted font-mono mt-4">Click "Explore" in the top right.</p>
      </section>

      <section className="w-full flex flex-col items-center justify-center p-gutter min-h-screen bg-muted/20">
        <h2 className="text-h2 font-heading font-bold">SCROLL TEST</h2>
        <p className="text-muted font-mono mt-4">Ensure body scroll locks when menu opens.</p>
      </section>
    </main>
  );
}
