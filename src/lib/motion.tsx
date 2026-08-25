import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from 'react';

type MotionContextValue = {
  motionEnabled: boolean;
  setMotionEnabled: (v: boolean) => void;
  reducedMotion: boolean;
  lenisRef: React.MutableRefObject<unknown>;
};

const MotionContext = createContext<MotionContextValue | null>(null);

export function useMotion() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotion must be used within MotionProvider');
  return ctx;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [motionEnabled, setMotionEnabledState] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const lenisRef = useRef<unknown>(null);
  const gsapRef = useRef<unknown>(null);
  const initialized = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('lh-motion');
    if (stored !== null) {
      setMotionEnabledState(stored === 'on');
    }
  }, []);

  const setMotionEnabled = (v: boolean) => {
    setMotionEnabledState(v);
    localStorage.setItem('lh-motion', v ? 'on' : 'off');
  };

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let cancelled = false;
    let lenis: { destroy: () => void; raf: (t: number) => void; start: () => void; stop: () => void } | null = null;
    let rafId: number | null = null;

    const shouldUseMotion = motionEnabled && !reducedMotion;

    const initLenis = async () => {
      if (!shouldUseMotion) return;
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.15,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        lenisRef.current = lenis;
        rafId = requestAnimationFrame(function raf(time: number) {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        });
      } catch {
        // Lenis unavailable — fall back to native scroll
      }
    };

    const initGsap = async () => {
      if (!shouldUseMotion) return;
      try {
        const gsap = (await import('gsap')).gsap;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        gsapRef.current = { gsap, ScrollTrigger };
        // Expose for components
        (window as unknown as { __lhGsap?: unknown }).__lhGsap = gsap;
        (window as unknown as { __lhScrollTrigger?: unknown }).__lhScrollTrigger = ScrollTrigger;
      } catch {
        // GSAP unavailable — fall back to CSS/IntersectionObserver
      }
    };

    initLenis();
    initGsap();

    return () => {
      if (cancelled) return;
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenisRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Toggle Lenis on/off when motion setting changes
  useEffect(() => {
    const lenis = lenisRef.current as { destroy?: () => void; stop?: () => void; start?: () => void } | null;
    if (!lenis) return;
    if (motionEnabled && !reducedMotion) {
      lenis.start?.();
    } else {
      lenis.stop?.();
    }
  }, [motionEnabled, reducedMotion]);

  return (
    <MotionContext.Provider value={{ motionEnabled, setMotionEnabled, reducedMotion, lenisRef }}>
      {children}
    </MotionContext.Provider>
  );
}

export function getGsap() {
  return (window as unknown as { __lhGsap?: unknown }).__lhGsap;
}

export function getScrollTrigger() {
  return (window as unknown as { __lhScrollTrigger?: unknown }).__lhScrollTrigger;
}
