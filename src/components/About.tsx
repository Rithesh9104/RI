import { ArrowRight } from 'lucide-react';
import { useReveal, useImageReveal } from '@/lib/useReveal';

const portraitImage =
  'https://images.pexels.com/photos/8134754/pexels-photo-8134754.jpeg?auto=compress&cs=tinysrgb&w=900';

export default function About() {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.12 });
  const imgRef = useImageReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 md:py-32 bg-[var(--ivory)]">
      <div className="container-lh grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div ref={imgRef} className="reveal-img-wrap aspect-[4/5] bg-[var(--sand)]">
            <img
              src={portraitImage}
              alt="Interior space representing the people and design ethos behind L-Home Interiors"
              loading="lazy"
              decoding="async"
              className="reveal-img"
            />
          </div>
          <span className="absolute -left-2 top-6 hidden md:block eyebrow text-[var(--taupe)] [writing-mode:vertical-rl] rotate-180 tracking-[0.3em]">
            THE PEOPLE BEHIND L-HOME
          </span>
        </div>

        <div ref={ref} className="lg:col-span-7 lg:pl-8">
          <p className="eyebrow text-[var(--terracotta)] mb-5" data-reveal-child>About L-Home</p>
          <h2 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl text-[var(--ink)] leading-[1.05] text-balance" data-reveal-child>
            Designing better
            <br />
            <span className="italic font-normal">ways to live.</span>
          </h2>
          <div className="mt-8 space-y-5 max-w-xl text-[var(--charcoal)]/85 text-base md:text-lg leading-relaxed font-light">
            <p data-reveal-child>
              L-Home Interiors brings design, planning and execution together under one roof. From the first conversation to final handover, every detail is considered around the way people actually live and work.
            </p>
            <p data-reveal-child>
              Our approach combines practical space planning with contemporary design, carefully selected materials and disciplined execution. The goal is simple: create interiors that look refined, work beautifully and remain comfortable long after handover.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-9 inline-flex items-center gap-2 text-[var(--ink)] font-semibold text-sm tracking-wide link-underline"
            data-reveal-child
          >
            Meet Our Team <ArrowRight size={16} strokeWidth={1.75} className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
