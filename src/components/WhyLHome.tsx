import { useReveal } from '@/lib/useReveal';

type Feature = {
  num: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
};

const features: Feature[] = [
  {
    num: '01',
    title: 'Space-Saving Design',
    desc: 'Smart planning that makes every square foot work harder.',
    image: 'https://images.pexels.com/photos/9467701/pexels-photo-9467701.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Wooden laminate samples showcasing material textures',
  },
  {
    num: '02',
    title: '45-Day Delivery',
    desc: 'A focused execution model designed around efficient project timelines.',
    image: 'https://images.pexels.com/photos/7690941/pexels-photo-7690941.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Marble wall corner meeting wood textured flooring',
  },
  {
    num: '03',
    title: '6000 Sq Ft Studio',
    desc: 'Experience materials, finishes, furniture and design possibilities in one place.',
    image: 'https://images.pexels.com/photos/39023635/pexels-photo-39023635.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Diagonal wooden planks creating a textured pattern',
  },
  {
    num: '04',
    title: 'End-to-End Execution',
    desc: 'Design, coordination, execution and handover managed through one team.',
    image: 'https://images.pexels.com/photos/17343570/pexels-photo-17343570.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Rustic stone wall with wooden chairs',
  },
  {
    num: '05',
    title: 'Smart Home Solutions',
    desc: 'Technology integrated into your home without compromising its design.',
    image: 'https://images.pexels.com/photos/39039663/pexels-photo-39039663.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Rustic interior with wooden walls and stone foundation',
  },
  {
    num: '06',
    title: 'Flexible Budgets',
    desc: 'Thoughtful recommendations that balance aesthetics, durability and budget.',
    image: 'https://images.pexels.com/photos/5824609/pexels-photo-5824609.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Textured material samples on a wooden surface',
  },
  {
    num: '07',
    title: 'Built Around You',
    desc: 'Personalized interiors shaped around your lifestyle, routines and priorities.',
    image: 'https://images.pexels.com/photos/16202240/pexels-photo-16202240.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Assorted wooden tiles showing texture and grain',
  },
];

export default function WhyLHome() {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <section className="py-20 md:py-32 bg-[var(--cream)]">
      <div className="container-lh">
        <div ref={ref} className="max-w-2xl mb-14 md:mb-20">
          <p className="eyebrow text-[var(--terracotta)] mb-5" data-reveal-child>Why L-Home</p>
          <h2 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl text-[var(--ink)] leading-[1.05] text-balance" data-reveal-child>
            A better interior experience starts with a better process.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
          {features.map((f) => (
            <article
              key={f.num}
              className="group relative bg-[var(--ivory)] p-7 md:p-8 flex flex-col min-h-[320px] card-hover overflow-hidden"
            >
              <div className="reveal-img-wrap mb-6 aspect-[16/10] bg-[var(--sand)]">
                <img
                  src={f.image}
                  alt={f.alt}
                  loading="lazy"
                  decoding="async"
                  className="reveal-img"
                />
              </div>
              <span className="eyebrow text-[var(--taupe)] mb-3">{f.num}</span>
              <h3 className="font-serif text-2xl md:text-[1.625rem] text-[var(--ink)] mb-3 leading-tight">
                {f.title}
              </h3>
              <p className="text-[var(--charcoal)]/75 text-sm leading-relaxed font-light">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
