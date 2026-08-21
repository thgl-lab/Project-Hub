import { motion, type Target } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function FadeIn({
  children,
  as = 'div',
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const MotionTag = motion.create(as);
  const hidden: Target = { opacity: 0, x, y };
  const shown: Target = { opacity: 1, x: 0, y: 0 };

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
