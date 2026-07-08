import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SERVICES, getServiceById } from '@/lib/services-data';
import { Accordion } from '@/components/ui/Accordion';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { service: string } }) {
  const service = getServiceById(params.service);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col w-full bg-background min-h-[calc(100vh-4rem)] pt-12 md:pt-16 pb-32 px-gutter">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-12">
        
        {/* Top Navigation */}
        <div>
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-widest text-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-4">
          
          {/* Left Column: Details & FAQs */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-16">
            
            {/* Visual Header Card */}
            <div className="w-full h-48 md:h-64 rounded-2xl bg-gradient-to-br from-accent-secondary/10 to-accent-secondary/30 flex items-center justify-center overflow-hidden relative">
              <h1 className="relative z-10 font-heading text-h3 md:text-h2 font-black text-foreground tracking-tight text-center px-4 max-w-2xl">
                {service.title}
              </h1>
            </div>
            
            {/* Detailed Description */}
            <section className="flex flex-col gap-6">
              <p className="font-mono text-caption text-muted uppercase tracking-widest border-b border-border pb-4 mb-2">
                {service.subtitle}
              </p>
              {service.detailedDescription.map((paragraph, idx) => (
                <p key={idx} className="text-bodyLg text-foreground/80 leading-relaxed max-w-3xl">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <section className="flex flex-col gap-8">
                <h3 className="font-heading text-h3 font-bold text-foreground">
                  Frequently Asked Questions
                </h3>
                <div className="flex flex-col border-t border-border">
                  {service.faqs.map((faq, idx) => (
                    <Accordion 
                      key={idx}
                      question={faq.question}
                      answer={faq.answer}
                      defaultOpen={idx === 0}
                    />
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column: Sticky Sidebar Contact Box & Benefits */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-32">
            
            {/* Pricing Card */}
            <div className="flex flex-col p-8 bg-card border border-border rounded-2xl shadow-sm gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Pricing
                </span>
                <p className="font-heading text-h2 font-bold text-foreground">
                  {service.price}
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href={service.bookLink}
                  className="w-full py-4 bg-foreground text-background font-bold text-bodySm rounded-sm flex items-center justify-center gap-2 hover:bg-accent hover:text-foreground transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Key Benefits Checklist */}
            <div className="flex flex-col gap-6 pt-4">
              <h3 className="font-heading text-h4 font-bold text-foreground">
                Key Benefits
              </h3>
              <ul className="flex flex-col gap-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-bodySm font-medium text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
