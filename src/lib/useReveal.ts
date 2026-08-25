import { useEffect, useRef, type RefObject } from 'react';
import { useMotion } from './motion';

type RevealOptions = {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  once?: boolean;
  clip?: boolean;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>(options: RevealOptions = {}): RefObject<T> {
  const ref = useRef<T>(null);
  const { motionEnabled, reducedMotion } = useMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const shouldAnimate = motionEnabled && !reducedMotion;

    if (!shouldAnimate) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.querySelectorAll<HTMLElement>('[data-reveal-child]').forEach((c) => {
        c.style.opacity = '1';
        c.style.transform = 'none';
      });
      return;
    }

    const gsap = (window as unknown as { __lhGsap?: { fromTo: (t: unknown, o: unknown) => unknown } }).__lhGsap;
    const ScrollTrigger = (window as unknown as { __lhScrollTrigger?: unknown }).__lhScrollTrigger;

    if (gsap && ScrollTrigger) {
      const children = el.querySelectorAll<HTMLElement>('[data-reveal-child]');
      const targets = children.length ? children : el;
      try {
        (gsap as { fromTo: (t: unknown, o: unknown) => unknown }).fromTo(
          targets,
          { opacity: options.opacity ?? 0, y: options.y ?? 40 },
          {
            opacity: 1,
            y: 0,
            duration: options.duration ?? 1,
            delay: options.delay ?? 0,
            stagger: options.stagger ?? 0,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: options.once ?? true },
          }
        );
      } catch {
        el.style.opacity = '1';
      }
    } else {
      // IntersectionObserver fallback
      const targets = el.querySelectorAll<HTMLElement>('[data-reveal-child]');
      const items = targets.length ? Array.from(targets) : [el];
      items.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = `translateY(${options.y ?? 40}px)`;
        item.style.transition = `opacity ${options.duration ?? 1}s cubic-bezier(0.22,1,0.36,1), transform ${options.duration ?? 1}s cubic-bezier(0.22,1,0.36,1)`;
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              const item = entry.target as HTMLElement;
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'none';
              }, i * (options.stagger ?? 0) * 1000);
              io.unobserve(item);
            }
          });
        },
        { threshold: 0.15 }
      );
      items.forEach((item) => io.observe(item));
      return () => io.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [motionEnabled, reducedMotion]);

  return ref;
}

export function useImageReveal<T extends HTMLElement = HTMLDivElement>(): RefObject<T> {
  const ref = useRef<T>(null);
  const { motionEnabled, reducedMotion } = useMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const shouldAnimate = motionEnabled && !reducedMotion;

    if (!shouldAnimate) {
      el.style.clipPath = 'none';
      return;
    }

    const gsap = (window as unknown as { __lhGsap?: { fromTo: (t: unknown, o: unknown) => unknown } }).__lhGsap;
    const ScrollTrigger = (window as unknown as { __lhScrollTrigger?: unknown }).__lhScrollTrigger;

    if (gsap && ScrollTrigger) {
      try {
        (gsap as { fromTo: (t: unknown, o: unknown) => unknown }).fromTo(
          el,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.3,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      } catch {
        el.style.clipPath = 'none';
      }
    } else {
      el.style.clipPath = 'inset(100% 0% 0% 0%)';
      el.style.transition = 'clip-path 1.3s cubic-bezier(0.22,1,0.36,1)';
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.style.clipPath = 'inset(0% 0% 0% 0%)';
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      io.observe(el);
      return () => io.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [motionEnabled, reducedMotion]);

  return ref;
}
