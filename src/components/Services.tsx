import { ArrowRight } from 'lucide-react';
import { useReveal, useImageReveal } from '@/lib/useReveal';

type Service = {
  num: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    num: '01',
    title: 'Complete Home Interiors',
    desc: 'A cohesive design and execution system for your entire home.',
    image: 'https://images.pexels.com/photos/39134573/pexels-photo-39134573.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Stylish modern living room with beige sofa and rich wood furniture',
  },
  {
    num: '02',
    title: 'Modular Kitchens',
    desc: 'Functional kitchens planned around storage, workflow and everyday living.',
    image: 'https://images.pexels.com/photos/7031211/pexels-photo-7031211.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Contemporary kitchen with gray marble island countertop and hanging lamps',
  },
  {
    num: '03',
    title: 'Living &amp; Bedroom Interiors',
    desc: 'Comfortable, personalized spaces with carefully considered materials and lighting.',
    image: 'https://images.pexels.com/photos/27164976/pexels-photo-27164976.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Modern minimalist bedroom with plush bed and elegant pendant lighting',
  },
  {
    num: '04',
    title: 'Office Interiors',
    desc: 'Professional workspaces designed for productivity, identity and everyday comfort.',
    image: 'https://images.pexels.com/photos/7511754/pexels-photo-7511754.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Light conference room with armchairs, plants and shelves',
  },
  {
    num: '05',
    title: 'Smart Home Solutions',
    desc: 'Connected home technology integrated into the design from the beginning.',
    image: 'https://images.pexels.com/photos/13872664/pexels-photo-13872664.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Modern living room with natural wood decor and floor-to-ceiling windows',
  },
  {
    num: '06',
    title: 'Renovation &amp; Makeovers',
    desc: 'Transform existing spaces with focused upgrades, better planning and refined finishes.',
    image: 'https://images.pexels.com/photos/30211378/pexels-photo-30211378.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Spacious modern living room with minimalist decor and elegant furnishings',
  },
];

export default function Services() {
  const headRef = useReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section id="services" className="py-20 md:py-32 bg-[var(--ivory)]">
      <div className="container-lh">
        <div ref={headRef} className="max-w-2xl mb-16 md:mb-24">
          <p className="eyebrow text-[var(--terracotta)] mb-5" data-reveal-child>Services</p>
          <h2 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl text-[var(--ink)] leading-[1.05] text-balance" data-reveal-child>
            Everything your space needs.
          </h2>
          <p className="mt-6 text-[var(--charcoal)]/75 text-base md:text-lg leading-relaxed font-light max-w-lg" data-reveal-child>
            From one room to a complete property, L-Home brings design, products and execution together.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {services.map((s, i) => (
            <ServiceRow key={s.num} service={s} index={i} dominant={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index, dominant }: { service: Service; index: number; dominant: boolean }) {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.15 });
  const imgRef = useImageReveal<HTMLDivElement>();
  const imageLeft = index % 2 === 0;

  return (
    <article
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        dominant ? 'lg:gap-16' : ''
      }`}
    >
      <div
        ref={imgRef}
        className={`reveal-img-wrap ${dominant ? 'lg:col-span-7 aspect-[16/10]' : 'lg:col-span-6 aspect-[16/11]'} bg-[var(--sand)] ${
          imageLeft ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          decoding="async"
          className="reveal-img"
        />
      </div>

      <div
        className={`${dominant ? 'lg:col-span-5' : 'lg:col-span-6'} ${
          imageLeft ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'
        }`}
      >
        <span className="eyebrow text-[var(--taupe)] mb-4 block" data-reveal-child>{service.num}</span>
        <h3
          className={`font-serif text-[var(--ink)] leading-[1.05] mb-4 text-balance ${
            dominant ? 'text-[2rem] sm:text-5xl md:text-6xl' : 'text-[1.75rem] sm:text-4xl md:text-5xl'
          }`}
          data-reveal-child
          dangerouslySetInnerHTML={{ __html: service.title }}
        />
        <p className="text-[var(--charcoal)]/75 text-base md:text-lg leading-relaxed font-light max-w-md" data-reveal-child>
          {service.desc}
        </p>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-7 inline-flex items-center gap-2 text-[var(--ink)] font-semibold text-sm tracking-wide link-underline"
          data-reveal-child
          aria-label={`Enquire about ${service.title.replace(/&amp;/g, '&')}`}
        >
          Enquire <ArrowRight size={16} strokeWidth={1.75} className="btn-arrow" />
        </button>
      </div>
    </article>
  );
}
