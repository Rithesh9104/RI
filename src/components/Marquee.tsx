const items = [
  'HOMEOWNERS',
  'ARCHITECTS',
  'INTERIOR DESIGNERS',
  'REAL ESTATE DEVELOPERS',
  'MODERN FAMILIES',
  'BUSINESS OWNERS',
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-[var(--border)] bg-[var(--cream)] py-7 overflow-hidden marquee-paused">
      <div className="container-lh mb-5">
        <p className="eyebrow text-center text-[var(--muted)]">
          Trusted by homeowners, designers &amp; developers
        </p>
      </div>
      <div className="marquee-track gap-12 md:gap-16">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-12 md:gap-16 shrink-0">
            <span className="font-serif text-2xl md:text-3xl text-[var(--charcoal)]/70 italic whitespace-nowrap">
              {item}
            </span>
            <span className="text-[var(--terracotta)] text-xl">&#10022;</span>
          </div>
        ))}
      </div>
    </section>
  );
}
