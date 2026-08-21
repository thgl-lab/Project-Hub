import { useEffect, useRef, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export default function Magnet({
  children,
  className,
  padding = 100,
  strength = 4,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const active = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const withinX = Math.abs(dx) < rect.width / 2 + padding;
      const withinY = Math.abs(dy) < rect.height / 2 + padding;

      if (withinX && withinY) {
        if (!active.current) {
          active.current = true;
          el.style.transition = activeTransition;
        }
        el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
      } else if (active.current) {
        active.current = false;
        el.style.transition = inactiveTransition;
        el.style.transform = 'translate3d(0px, 0px, 0)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div ref={wrapperRef} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
