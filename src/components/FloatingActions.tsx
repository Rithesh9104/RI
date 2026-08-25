import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop: bottom-right floating */}
      <div
        className={`hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href="https://wa.me/918925832070"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2.5 bg-[var(--ink)] text-[var(--ivory)] pl-3 pr-4 py-3 rounded-full border border-[var(--border)] shadow-lg hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-400"
        >
          <MessageCircle size={18} strokeWidth={1.5} />
          <span className="text-xs font-semibold tracking-wide whitespace-nowrap">WhatsApp</span>
        </a>
        <a
          href="tel:+918925832070"
          aria-label="Call L-Home Interiors"
          className="group flex items-center gap-2.5 bg-[var(--ivory)] text-[var(--ink)] pl-3 pr-4 py-3 rounded-full border border-[var(--border)] shadow-lg hover:bg-[var(--terracotta)] hover:text-[var(--ivory)] hover:border-[var(--terracotta)] transition-all duration-400"
        >
          <Phone size={18} strokeWidth={1.5} />
          <span className="text-xs font-semibold tracking-wide whitespace-nowrap">Call Us</span>
        </a>
      </div>

      {/* Mobile: bottom fixed action bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 transition-transform duration-500 ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <a
          href="tel:+918925832070"
          className="flex items-center justify-center gap-2 bg-[var(--ink)] text-[var(--ivory)] py-3.5 text-xs font-semibold tracking-wide"
        >
          <Phone size={16} strokeWidth={1.75} /> Call
        </a>
        <a
          href="https://wa.me/918925832070"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 text-xs font-semibold tracking-wide"
        >
          <MessageCircle size={16} strokeWidth={1.75} /> WhatsApp
        </a>
      </div>
    </>
  );
}
