import { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useReveal, useImageReveal } from '@/lib/useReveal';
import { projects, projectCategories, type Project } from '@/data/projects';

export default function Projects() {
  const [active, setActive] = useState<string>('All');
  const headRef = useReveal<HTMLDivElement>({ stagger: 0.1 });

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="py-20 md:py-32 bg-[var(--cream)]">
      <div className="container-lh">
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-[var(--terracotta)] mb-5" data-reveal-child>Projects</p>
            <h2 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl text-[var(--ink)] leading-[1.05] text-balance" data-reveal-child>
              Spaces we&rsquo;ve shaped.
            </h2>
            <p className="mt-5 text-[var(--charcoal)]/75 text-base md:text-lg font-light" data-reveal-child>
              A glimpse into the possibilities.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" data-reveal-child>
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-[0.75rem] font-semibold tracking-wide uppercase transition-all duration-300 border ${
                  active === cat
                    ? 'bg-[var(--ink)] text-[var(--ivory)] border-[var(--ink)]'
                    : 'bg-transparent text-[var(--charcoal)] border-[var(--border)] hover:border-[var(--ink)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-[var(--ink)] font-semibold text-sm tracking-wide link-underline"
          >
            View All Projects <ArrowRight size={16} strokeWidth={1.75} className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const imgRef = useImageReveal<HTMLDivElement>();
  const spanClass =
    project.span === 'tall'
      ? 'row-span-2'
      : project.span === 'wide'
      ? 'col-span-2'
      : '';

  return (
    <article
      ref={imgRef}
      className={`reveal-img-wrap group relative bg-[var(--sand)] ${spanClass} ${
        index === 0 ? 'col-span-2 row-span-2' : ''
      }`}
    >
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        className="reveal-img"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--warm-black)]/80 via-transparent to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <span className="eyebrow text-[var(--ivory)]/70 block mb-1.5">{project.category}</span>
        <h3 className="font-serif text-[var(--ivory)] text-xl md:text-2xl leading-tight">{project.title}</h3>
        <p className="text-[var(--ivory)]/60 text-xs mt-1 uppercase tracking-[0.15em]">{project.location}</p>
      </div>
    </article>
  );
}
