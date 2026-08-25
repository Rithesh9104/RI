import { useState } from 'react';
import { Phone, Instagram, MapPin } from 'lucide-react';

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Home Interiors', href: '#services' },
  { label: 'Modular Kitchens', href: '#services' },
  { label: 'Office Interiors', href: '#services' },
  { label: 'Smart Home', href: '#services' },
  { label: 'Renovation', href: '#services' },
];

const exploreLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/lhome.interiors', external: true },
  { label: 'Visit Studio', href: '#contact' },
  { label: 'Get Consultation', href: '#contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--warm-black)] text-[var(--ivory)] pt-20 md:pt-24 pb-8">
      <div className="container-lh">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16 border-b border-[var(--ivory)]/12">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-serif text-2xl tracking-[0.18em] font-semibold block mb-4">L-HOME</span>
            <p className="text-[var(--ivory)]/65 text-sm leading-relaxed font-light max-w-xs">
              Thoughtful interiors. Practical design. Better living.
            </p>
            <div className="mt-6 space-y-2 text-[var(--ivory)]/60 text-sm font-light">
              <p className="flex items-start gap-2">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[var(--sand)]" />
                <span>
                  675/5, B1, Avinashi Rd, G K R Nagar, Civil Aerodrome Post, Chinniyampalayam, Coimbatore, Tamil Nadu 641062
                </span>
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-1.5">
              <a href="tel:+918925832070" className="flex items-center gap-2 text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors text-sm">
                <Phone size={14} strokeWidth={1.5} /> +91 89258 32070
              </a>
              <a href="tel:+918925832072" className="flex items-center gap-2 text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors text-sm">
                <Phone size={14} strokeWidth={1.5} /> +91 89258 32072
              </a>
              <a href="tel:+918925832075" className="flex items-center gap-2 text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors text-sm">
                <Phone size={14} strokeWidth={1.5} /> +91 89258 32075
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-2">
            <h4 className="eyebrow text-[var(--sand)] mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={handleNav(l.href)} className="text-[var(--ivory)]/65 hover:text-[var(--ivory)] text-sm font-light link-underline transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="eyebrow text-[var(--sand)] mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={handleNav(l.href)} className="text-[var(--ivory)]/65 hover:text-[var(--ivory)] text-sm font-light link-underline transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="eyebrow text-[var(--sand)] mb-5">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={l.external ? undefined : handleNav(l.href)}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="text-[var(--ivory)]/65 hover:text-[var(--ivory)] text-sm font-light link-underline transition-colors flex items-center gap-1.5"
                  >
                    {l.label}
                    {l.external && <Instagram size={13} strokeWidth={1.5} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-12 border-b border-[var(--ivory)]/12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="font-serif text-2xl md:text-3xl text-[var(--ivory)] mb-1">Design inspiration, occasionally.</h4>
            <p className="text-[var(--ivory)]/55 text-sm font-light">No spam, just considered ideas.</p>
          </div>
          <form
            className="flex gap-3 w-full max-w-md md:ml-auto"
            onSubmit={(e) => { e.preventDefault(); if (email) { setSent(true); setEmail(''); } }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setSent(false); }}
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-transparent border-b border-[var(--ivory)]/25 py-3 text-[var(--ivory)] placeholder:text-[var(--ivory)]/35 focus:outline-none focus:border-[var(--terracotta)] transition-colors text-sm"
            />
            <button type="submit" className="btn-light shrink-0">
              {sent ? 'Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--ivory)]/45 text-xs tracking-wide">
            &copy; 2026 L-Home Interiors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--ivory)]/45 hover:text-[var(--ivory)] text-xs tracking-wide link-underline transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--ivory)]/45 hover:text-[var(--ivory)] text-xs tracking-wide link-underline transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
