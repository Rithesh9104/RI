import { useMotion } from '@/lib/motion';

export default function MotionToggle() {
  const { motionEnabled, setMotionEnabled } = useMotion();

  return (
    <button
      onClick={() => setMotionEnabled(!motionEnabled)}
      aria-label={`Motion ${motionEnabled ? 'on' : 'off'}, click to toggle`}
      className="hidden lg:flex fixed bottom-6 left-6 z-40 items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--ivory)]/85 backdrop-blur-md border border-[var(--border)] text-[var(--charcoal)] hover:border-[var(--ink)] transition-colors duration-400"
    >
      <span className={`w-2 h-2 rounded-full transition-colors duration-400 ${motionEnabled ? 'bg-[var(--terracotta)]' : 'bg-[var(--muted)]'}`} />
      <span className="eyebrow text-[var(--charcoal)]">Motion: {motionEnabled ? 'ON' : 'OFF'}</span>
    </button>
  );
}
