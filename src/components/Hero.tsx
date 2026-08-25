import { ArrowRight, Phone } from 'lucide-react';
import { useMotion } from '@/lib/motion';

const heroImage =
  'https://images.pexels.com/photos/28254549/pexels-photo-28254549.jpeg?auto=compress&cs=tinysrgb&w=1920';

const meta = [
  { label: '6000 SQ FT STUDIO' },
  { label: '45-DAY DELIVERY' },
  { label: 'COIMBATORE' },
];

export default function Hero() {
  const { motionEnabled, reducedMotion } = useMotion();
  const useKenBurns = motionEnabled && !reducedMotion;

  const scrollToNext = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--warm-black)]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern residential interior with warm architectural lighting, natural wood and contemporary furniture"
          className={`h-full w-full object-cover object-center ${useKenBurns ? 'animate-kenburns' : ''}`}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--warm-black)]/70 via-[var(--warm-black)]/35 to-[var(--warm-black)]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--warm-black)]/55 via-transparent to-transparent" />
      </div>

      <div className="relative h-full container-lh flex flex-col justify-end pb-20 md:pb-24">
        <div className="max-w-4xl">
          <p className="eyebrow text-[var(--ivory)]/80 mb-6" data-reveal-child>
            INTERIORS &bull; DESIGN &bull; EXECUTION
          </p>
          <h1 className="font-serif text-[var(--ivory)] text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.02] font-medium tracking-[-0.015em] text-balance">
            Spaces designed to feel
            <br />
            <span className="italic font-normal">uniquely yours.</span>
          </h1>
          <p className="mt-7 max-w-xl text-[var(--ivory)]/85 text-base md:text-lg leading-relaxed font-light text-pretty">
            Thoughtful interiors, modular kitchens and complete home solutions &mdash; designed and delivered by L-Home Interiors, Coimbatore.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              Start a Project
              <ArrowRight size={16} strokeWidth={1.75} className="btn-arrow" />
            </button>
            <a href="tel:+918925832070" className="btn-outline-light">
              <Phone size={16} strokeWidth={1.75} />
              Call Us Directly
            </a>
          </div>
        </div>

        <div className="mt-14 md:mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:gap-x-12">
            {meta.map((m) => (
              <span key={m.label} className="eyebrow text-[var(--ivory)]/70">
                {m.label}
              </span>
            ))}
          </div>
          <button
            onClick={scrollToNext}
            className="group flex items-center gap-2 text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors"
            aria-label="Scroll to explore"
          >
            <span className="eyebrow">Scroll to explore</span>
            <span className="inline-block transition-transform duration-500 group-hover:translate-y-1">&darr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
