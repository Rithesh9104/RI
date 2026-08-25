import { ArrowRight, Phone } from 'lucide-react';
import { useImageReveal } from '@/lib/useReveal';

const bgImage =
  'https://images.pexels.com/photos/35058547/pexels-photo-35058547.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function ClosingCTA() {
  const imgRef = useImageReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--warm-black)]">
      <div ref={imgRef} className="reveal-img-wrap absolute inset-0">
        <img
          src={bgImage}
          alt="Luxury residential interior with warm lighting and contemporary furniture"
          loading="lazy"
          decoding="async"
          className="reveal-img opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--warm-black)]/85 via-[var(--warm-black)]/70 to-[var(--warm-black)]/85" />
      </div>

      <div className="relative container-lh py-24 md:py-36 text-center">
        <p className="eyebrow text-[var(--sand)] mb-6">Start a Project</p>
        <h2 className="font-serif text-[var(--ivory)] text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.05] font-medium max-w-4xl mx-auto text-balance">
          Your space deserves a
          <br />
          <span className="italic font-normal">better plan.</span>
        </h2>
        <p className="mt-7 max-w-xl mx-auto text-[var(--ivory)]/80 text-base md:text-lg leading-relaxed font-light">
          Tell us what you&rsquo;re building, renovating or reimagining. We&rsquo;ll help you turn the idea into a practical design.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="btn-primary"
          >
            Get Free Consultation
            <ArrowRight size={16} strokeWidth={1.75} className="btn-arrow" />
          </button>
          <a href="tel:+918925832070" className="btn-outline-light">
            <Phone size={16} strokeWidth={1.75} />
            Call +91 89258 32070
          </a>
        </div>
        <p className="mt-8 eyebrow text-[var(--ivory)]/50">
          Coimbatore &bull; Tamil Nadu
        </p>

        {/* Contact form */}
        <form
          id="contact-form"
          className="mt-16 max-w-2xl mx-auto text-left bg-[var(--ivory)]/5 backdrop-blur-sm border border-[var(--ivory)]/15 rounded-2xl p-6 md:p-8"
          onSubmit={(e) => { e.preventDefault(); }}
        >
          <p className="eyebrow text-[var(--sand)] mb-5">Get Free Consultation</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label htmlFor="cf-name" className="block eyebrow text-[var(--ivory)]/60 mb-2">Name</label>
              <input
                id="cf-name"
                type="text"
                required
                placeholder="Your full name"
                className="w-full bg-transparent border-b border-[var(--ivory)]/25 py-3 text-[var(--ivory)] placeholder:text-[var(--ivory)]/35 focus:outline-none focus:border-[var(--terracotta)] transition-colors"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="cf-phone" className="block eyebrow text-[var(--ivory)]/60 mb-2">Phone</label>
              <input
                id="cf-phone"
                type="tel"
                required
                placeholder="+91"
                className="w-full bg-transparent border-b border-[var(--ivory)]/25 py-3 text-[var(--ivory)] placeholder:text-[var(--ivory)]/35 focus:outline-none focus:border-[var(--terracotta)] transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cf-email" className="block eyebrow text-[var(--ivory)]/60 mb-2">Email</label>
              <input
                id="cf-email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full bg-transparent border-b border-[var(--ivory)]/25 py-3 text-[var(--ivory)] placeholder:text-[var(--ivory)]/35 focus:outline-none focus:border-[var(--terracotta)] transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cf-msg" className="block eyebrow text-[var(--ivory)]/60 mb-2">Project details</label>
              <textarea
                id="cf-msg"
                rows={3}
                placeholder="Tell us about your space and what you have in mind"
                className="w-full bg-transparent border-b border-[var(--ivory)]/25 py-3 text-[var(--ivory)] placeholder:text-[var(--ivory)]/35 focus:outline-none focus:border-[var(--terracotta)] transition-colors resize-none"
              />
            </div>
          </div>
          <button type="submit" className="btn-primary mt-6 w-full sm:w-auto justify-center">
            Send Request
            <ArrowRight size={16} strokeWidth={1.75} className="btn-arrow" />
          </button>
        </form>
      </div>
    </section>
  );
}
