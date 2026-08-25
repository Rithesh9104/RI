import { useState } from 'react';
import { useReveal } from '@/lib/useReveal';

type Testimonial = {
  quote: string;
  name: string;
  context?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Their process is both comfortable and easy. We love your choice of laminate and finishing for our home and appreciate how you were able to figure out how to effectively display all of our pictures and other accessories.',
    name: 'Dhandayuthapani Ramachandran',
  },
  {
    quote:
      'They made wonderful work for my flat. They are good in quality and the team is very friendly in giving suggestions.',
    name: 'Karthik',
    context: 'Their ideas were extraordinary and reachable anytime for clarifications.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useReveal<HTMLDivElement>({ stagger: 0.1 });

  const t = testimonials[active];

  return (
    <section className="py-20 md:py-32 bg-[var(--warm-black)] text-[var(--ivory)]">
      <div ref={ref} className="container-lh max-w-5xl text-center">
        <p className="eyebrow text-[var(--sand)] mb-10" data-reveal-child>Testimonials</p>
        <span className="block font-serif text-[5rem] md:text-[8rem] leading-[0.6] text-[var(--terracotta)]/60 mb-4" data-reveal-child>
          &ldquo;
        </span>
        <blockquote
          key={active}
          className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] leading-[1.25] text-[var(--ivory)] italic font-normal max-w-4xl mx-auto text-balance"
        >
          {t.quote}
        </blockquote>
        {t.context && (
          <p className="mt-6 text-[var(--ivory)]/55 text-sm md:text-base font-light italic max-w-2xl mx-auto">
            {t.context}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center gap-4" data-reveal-child>
          <div className="w-12 h-12 rounded-full bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/40 flex items-center justify-center font-serif text-lg text-[var(--ivory)]">
            {t.name.charAt(0)}
          </div>
          <p className="font-semibold text-sm tracking-wide text-[var(--ivory)]">{t.name}</p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6" data-reveal-child>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={active === i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === i ? 'w-10 bg-[var(--terracotta)]' : 'w-4 bg-[var(--ivory)]/25'
                }`}
              />
            ))}
          </div>
          <span className="eyebrow text-[var(--ivory)]/50">
            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}
