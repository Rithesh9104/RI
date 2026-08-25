import { useState } from 'react';
import { useReveal } from '@/lib/useReveal';

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: 'What types of interiors do you design?',
    a: 'L-Home Interiors works across residential and commercial spaces, including complete homes, modular kitchens, living spaces, bedrooms and offices.',
  },
  {
    q: 'How long does a typical interior project take?',
    a: 'L-Home positions its interior solutions around an efficient 45-day delivery model. Actual timelines depend on project scope, approvals, materials and site conditions.',
  },
  {
    q: 'Can I visit your studio?',
    a: 'Yes. L-Home Interiors has a 6000 sq ft studio in Coimbatore where customers can explore materials, finishes and interior possibilities.',
  },
  {
    q: 'Do you provide complete end-to-end execution?',
    a: 'Yes. The team can coordinate design, planning, execution and final handover as one integrated experience.',
  },
  {
    q: 'Do you work within different budgets?',
    a: 'Yes. Recommendations should be tailored around the client\u2019s priorities, space, materials and budget.',
  },
  {
    q: 'Where does L-Home Interiors operate?',
    a: 'L-Home is based in Coimbatore and serves customers across Tamil Nadu.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const ref = useReveal<HTMLDivElement>({ stagger: 0.06 });

  return (
    <section id="faq" className="py-20 md:py-32 bg-[var(--cream)]">
      <div className="container-lh grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div ref={ref} className="lg:col-span-4">
          <p className="eyebrow text-[var(--terracotta)] mb-5" data-reveal-child>FAQ</p>
          <h2 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl text-[var(--ink)] leading-[1.05] text-balance" data-reveal-child>
            Questions, answered.
          </h2>
          <p className="mt-6 text-[var(--charcoal)]/70 text-base font-light max-w-sm" data-reveal-child>
            Everything you might want to know before starting a project with us.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-[var(--border)]">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-[var(--border)]">
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                    >
                      <span className="font-serif text-lg md:text-xl text-[var(--ink)] group-hover:text-[var(--terracotta)] transition-colors">
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--charcoal)] transition-transform duration-500 ${
                          isOpen ? 'rotate-45 bg-[var(--ink)] text-[var(--ivory)] border-[var(--ink)]' : ''
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="pb-6 pr-12 text-[var(--charcoal)]/75 text-base leading-relaxed font-light">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
