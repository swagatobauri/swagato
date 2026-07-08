import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Calendar, Mail } from 'lucide-react';
import { HIRE_ROLES } from '@/lib/roles-data';
import { Accordion } from '@/components/ui/Accordion';

export function generateStaticParams() {
  return HIRE_ROLES.map((role) => ({
    role: role.slug,
  }));
}

export default function RoleDetailPage({ params }: { params: { role: string } }) {
  const roleData = HIRE_ROLES.find((r) => r.slug === params.role);

  if (!roleData) {
    notFound();
  }

  return (
    <main className="flex flex-col w-full bg-background min-h-[calc(100vh-4rem)] pt-12 md:pt-16 pb-32 px-gutter">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-12">
        
        {/* Top Navigation */}
        <div>
          <Link 
            href="/hire-me"
            className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Roles
          </Link>
        </div>

        {/* Large Visual Header Card */}
        <div className="w-full h-48 md:h-64 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/20 border border-border flex items-center justify-center overflow-hidden relative">
          {/* Abstract geometric BG elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-background/40 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 blur-3xl rounded-full" />
          
          <h1 className="relative z-10 font-heading text-h2 md:text-[4rem] font-black text-foreground tracking-tight text-center px-4">
            {roleData.name}
          </h1>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-4">
          
          {/* Left Column: Details & FAQs */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-16">
            
            {/* Tagline & Description */}
            <section className="flex flex-col gap-6">
              <h2 className="font-heading text-h3 md:text-h2 font-bold text-foreground leading-tight">
                {roleData.tagline}
              </h2>
              <p className="text-bodyLg text-foreground/80 leading-relaxed max-w-3xl">
                {roleData.description}
              </p>
            </section>

            {/* What's Included Checklist */}
            <section className="flex flex-col gap-8">
              <h3 className="font-heading text-h4 font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  ✨
                </span>
                What&apos;s Included
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roleData.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-bodySm font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            {roleData.faqs.length > 0 && (
              <section className="flex flex-col gap-8">
                <h3 className="font-heading text-h4 font-bold text-foreground">
                  Frequently Asked Questions
                </h3>
                <div className="flex flex-col border-t border-border">
                  {roleData.faqs.map((faq, idx) => (
                    <Accordion 
                      key={idx}
                      question={faq.q}
                      answer={faq.a}
                      defaultOpen={idx === 0}
                    />
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column: Sticky Sidebar Contact Box */}
          <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-32">
            <div className="flex flex-col p-8 bg-card border border-border rounded-2xl shadow-sm gap-8">
              
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  Availability & Pricing
                </span>
                <p className="font-heading text-h4 font-bold text-foreground">
                  {roleData.pricing}
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-6 border-t border-border">
                <a 
                  href="mailto:hello@example.com?subject=Inquiry: {roleData.name}"
                  className="w-full py-4 bg-foreground text-background font-bold text-bodySm rounded-sm flex items-center justify-center gap-2 hover:bg-accent hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Start a Conversation
                </a>
                <p className="text-caption text-muted-foreground text-center">
                  Typically replies within 24 hours.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
