import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const remove = () => setHidden(true);
    const t = setTimeout(remove, 2200);
    const onReady = () => {
      clearTimeout(t);
      setTimeout(remove, 300);
    };
    if (document.readyState === 'complete') onReady();
    else window.addEventListener('load', onReady, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('load', onReady);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--ivory)] loader-fade"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-serif text-3xl md:text-4xl tracking-[0.2em] text-[var(--ink)] font-medium">
          L-HOME
        </h1>
        <p className="eyebrow text-[var(--muted)]">Loading Experience...</p>
        <div className="h-px w-40 overflow-hidden bg-[var(--border)]">
          <div className="loader-line h-full bg-[var(--terracotta)]" />
        </div>
      </div>
    </div>
  );
}
