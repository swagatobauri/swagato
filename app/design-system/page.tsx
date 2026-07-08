import { tokens } from "@/styles/design-tokens";

export default function DesignSystem() {
  return (
    <div className="min-h-screen py-section-sm">
      <div className="grid-container">
        <header className="mb-section-sm">
          <h1 className="text-h1 mb-4">Design System</h1>
          <p className="text-bodyLg text-muted">A style guide for the portfolio architecture.</p>
        </header>

        {/* Colors */}
        <section className="mb-section-md">
          <h2 className="text-h2 mb-8 border-b border-border pb-4">Colors</h2>
          
          <div className="grid-12 mb-12">
            <div className="col-span-full mb-4">
              <h3 className="text-h4 font-sans font-medium">Light Theme (Default)</h3>
            </div>
            <ColorSwatch name="Background" variable="var(--background)" hex={tokens.colors.light.background} />
            <ColorSwatch name="Card" variable="var(--card)" hex="#FFFFFF" />
            <ColorSwatch name="Foreground" variable="var(--foreground)" hex={tokens.colors.light.foreground} />
            <ColorSwatch name="Primary (Rose)" variable="var(--accent)" hex={tokens.colors.light.accent} />
            <ColorSwatch name="Secondary (Blush)" variable="var(--accent-secondary)" hex={tokens.colors.light.accentSecondary} />
            <ColorSwatch name="Tertiary (Green)" variable="var(--accent-tertiary)" hex={tokens.colors.light.accentTertiary} />
            <ColorSwatch name="Muted" variable="var(--muted)" hex={tokens.colors.light.muted} />
            <ColorSwatch name="Border" variable="var(--border)" hex={tokens.colors.light.border} />
          </div>

          <div className="theme-inverted grid-12 p-8 rounded-2xl bg-background text-foreground">
            <div className="col-span-full mb-4">
              <h3 className="text-h4 font-sans font-medium">Inverted Theme</h3>
            </div>
            <ColorSwatch name="Background" variable="var(--background)" hex={tokens.colors.dark.background} />
            <ColorSwatch name="Card" variable="var(--card)" hex="#3F352E" />
            <ColorSwatch name="Foreground" variable="var(--foreground)" hex={tokens.colors.dark.foreground} />
            <ColorSwatch name="Primary (Rose)" variable="var(--accent)" hex={tokens.colors.dark.accent} />
            <ColorSwatch name="Secondary (Blush)" variable="var(--accent-secondary)" hex={tokens.colors.dark.accentSecondary} />
            <ColorSwatch name="Tertiary (Green)" variable="var(--accent-tertiary)" hex={tokens.colors.dark.accentTertiary} />
            <ColorSwatch name="Muted" variable="var(--muted)" hex={tokens.colors.dark.muted} />
            <ColorSwatch name="Border" variable="var(--border)" hex={tokens.colors.dark.border} />
          </div>
        </section>

        {/* Typography */}
        <section className="mb-section-md">
          <h2 className="text-h2 mb-8 border-b border-border pb-4">Typography</h2>
          
          <div className="grid-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-6 flex flex-col gap-8">
              <div>
                <span className="text-caption font-mono text-muted block mb-2">Heading 1 / Syne / Fluid</span>
                <h1 className="text-h1 leading-tight">The quick brown fox.</h1>
              </div>
              <div>
                <span className="text-caption font-mono text-muted block mb-2">Heading 2 / Syne / Fluid</span>
                <h2 className="text-h2 leading-tight">The quick brown fox jumps.</h2>
              </div>
              <div>
                <span className="text-caption font-mono text-muted block mb-2">Heading 3 / Syne / Fluid</span>
                <h3 className="text-h3 leading-tight">The quick brown fox jumps over.</h3>
              </div>
              <div>
                <span className="text-caption font-mono text-muted block mb-2">Heading 4 / Syne / Fluid</span>
                <h4 className="text-h4 leading-tight">The quick brown fox jumps over the lazy dog.</h4>
              </div>
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-6 flex flex-col gap-8">
              <div>
                <span className="text-caption font-mono text-muted block mb-2">Body Large / Plus Jakarta Sans</span>
                <p className="text-bodyLg">The quick brown fox jumps over the lazy dog. A wonderful serenity has taken possession of my entire soul.</p>
              </div>
              <div>
                <span className="text-caption font-mono text-muted block mb-2">Body Base / Plus Jakarta Sans</span>
                <p className="text-bodyBase">The quick brown fox jumps over the lazy dog. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.</p>
              </div>
              <div>
                <span className="text-caption font-mono text-muted block mb-2">Body Small / Plus Jakarta Sans</span>
                <p className="text-bodySm text-muted">The quick brown fox jumps over the lazy dog. A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
              </div>
              <div>
                <span className="text-caption font-mono text-muted block mb-2">Monospace / Geist Mono</span>
                <p className="font-mono text-bodySm uppercase tracking-wider text-accent">SYSTEM_READY [200 OK]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-h2 mb-8 border-b border-border pb-4">Spacing Scale (Vertical Rhythm)</h2>
          
          <div className="flex flex-col gap-4 border-l border-border pl-4">
            <div className="flex items-center gap-8">
              <div className="w-16 text-caption font-mono">sm</div>
              <div className="h-8 bg-accent/20" style={{ width: tokens.spacing.section.sm }}></div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-16 text-caption font-mono">md</div>
              <div className="h-8 bg-accent/20" style={{ width: tokens.spacing.section.md }}></div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-16 text-caption font-mono">lg</div>
              <div className="h-8 bg-accent/20" style={{ width: tokens.spacing.section.lg }}></div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-16 text-caption font-mono">xl</div>
              <div className="h-8 bg-accent/20" style={{ width: tokens.spacing.section.xl }}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ColorSwatch({ name, variable, hex }: { name: string, variable: string, hex: string }) {
  return (
    <div className="col-span-2 md:col-span-2 flex flex-col gap-2">
      <div 
        className="w-full aspect-square rounded-xl border border-border/50 shadow-sm" 
        style={{ backgroundColor: variable }}
      />
      <div>
        <div className="text-bodySm font-medium">{name}</div>
        <div className="text-caption font-mono text-muted">{hex}</div>
      </div>
    </div>
  );
}
