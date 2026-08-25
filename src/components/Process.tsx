import { useReveal } from '@/lib/useReveal';

type Stage = {
  num: string;
  title: string;
  desc: string;
};

const stages: Stage[] = [
  { num: '01', title: 'Planning', desc: 'Understand your requirements, lifestyle, space and budget.' },
  { num: '02', title: 'Design', desc: 'Develop layouts, concepts, materials and visual direction.' },
  { num: '03', title: 'Engineering', desc: 'Translate the design into detailed, executable specifications.' },
  { num: '04', title: 'Construction', desc: 'Coordinate production, installation and on-site execution.' },
  { num: '05', title: 'Inspection', desc: 'Review finishes, functionality and quality before completion.' },
  { num: '06', title: 'Handover', desc: 'Walk through the finished space and complete the final handover.' },
];

export default function Process() {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.12 });

  return (
    <section id="process" className="py-20 md:py-32 bg-[var(--ivory)]">
      <div className="container-lh">
        <div ref={ref} className="max-w-2xl mb-16 md:mb-24">
          <p className="eyebrow text-[var(--terracotta)] mb-5" data-reveal-child>Process</p>
          <h2 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl text-[var(--ink)] leading-[1.05] text-balance" data-reveal-child>
            From first sketch to final handover.
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[68px] left-0 right-0 h-px bg-[var(--border)]" />
          <div className="grid grid-cols-6 gap-6">
            {stages.map((s) => (
              <div key={s.num} className="relative flex flex-col items-start" data-reveal-child>
                <span className="font-serif text-[3.5rem] text-[var(--sand)] leading-none mb-2">{s.num}</span>
                <div className="relative w-full">
                  <span className="absolute -top-[44px] left-0 w-2 h-2 rounded-full bg-[var(--terracotta)] ring-4 ring-[var(--ivory)]" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-2 mt-3">{s.title}</h3>
                <p className="text-[var(--charcoal)]/70 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--border)]" />
          <div className="flex flex-col gap-10">
            {stages.map((s) => (
              <div key={s.num} className="relative" data-reveal-child>
                <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-[var(--terracotta)] ring-4 ring-[var(--ivory)]" />
                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="font-serif text-2xl text-[var(--taupe)]">{s.num}</span>
                  <h3 className="font-serif text-xl text-[var(--ink)]">{s.title}</h3>
                </div>
                <p className="text-[var(--charcoal)]/70 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
