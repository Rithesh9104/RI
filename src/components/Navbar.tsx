import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useMotion } from '@/lib/motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { motionEnabled, setMotionEnabled } = useMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--ivory)]/85 backdrop-blur-md border-b border-[var(--border)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-lh flex items-center justify-between h-[72px] md:h-[84px]" aria-label="Primary">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className={`font-serif text-xl md:text-2xl tracking-[0.18em] font-semibold transition-colors duration-500 ${
              scrolled ? 'text-[var(--ink)]' : 'text-[var(--ivory)]'
            }`}
          >
            L-HOME
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`link-underline text-[0.8125rem] font-medium tracking-wide transition-colors duration-500 ${
                    scrolled ? 'text-[var(--charcoal)]' : 'text-[var(--ivory)]/90'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+918925832070"
              className={`flex items-center gap-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-500 ${
                scrolled ? 'text-[var(--charcoal)]' : 'text-[var(--ivory)]/90'
              }`}
            >
              <Phone size={14} strokeWidth={1.5} />
              +91 89258 32070
            </a>
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary"
            >
              Start a Project
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMotionEnabled(!motionEnabled)}
              aria-label={`Motion ${motionEnabled ? 'on' : 'off'}`}
              className={`flex items-center gap-1.5 text-[0.6875rem] font-semibold tracking-[0.15em] uppercase px-3 py-2 rounded-full border transition-colors duration-500 ${
                scrolled ? 'text-[var(--charcoal)] border-[var(--border)]' : 'text-[var(--ivory)] border-[var(--ivory)]/30'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${motionEnabled ? 'bg-[var(--terracotta)]' : 'bg-[var(--muted)]'}`} />
              {motionEnabled ? 'ON' : 'OFF'}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={`p-2 transition-colors duration-500 ${scrolled ? 'text-[var(--ink)]' : 'text-[var(--ivory)]'}`}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[110] lg:hidden transition-all duration-500 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[var(--warm-black)]" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-[var(--ivory)] flex flex-col transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-[var(--border)]">
            <span className="font-serif text-xl tracking-[0.18em] font-semibold text-[var(--ink)]">L-HOME</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 text-[var(--ink)]">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <ul className="flex flex-col px-6 py-6 gap-1 flex-1 overflow-y-auto">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="flex items-baseline gap-4 py-3.5 border-b border-[var(--border)] group"
                >
                  <span className="eyebrow text-[var(--taupe)]">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-2xl text-[var(--ink)] group-hover:text-[var(--terracotta)] transition-colors">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 py-6 border-t border-[var(--border)] flex flex-col gap-4">
            <a href="tel:+918925832070" className="flex items-center gap-2 text-[var(--charcoal)] font-medium">
              <Phone size={16} strokeWidth={1.5} />
              +91 89258 32070
            </a>
            <button onClick={() => handleNav('#contact')} className="btn-primary justify-center">
              Start a Project <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </button>
            <a
              href="https://www.instagram.com/lhome.interiors"
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-[var(--muted)] link-underline"
            >
              Instagram &mdash; @lhome.interiors
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
