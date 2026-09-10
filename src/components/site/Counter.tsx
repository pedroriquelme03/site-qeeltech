"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({
  target,
  suffix = "+",
  className,
}: {
  target: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          if (reduced) {
            setVal(target);
            return;
          }
          const dur = 1400;
          let t0: number | null = null;
          const step = (ts: number) => {
            if (t0 === null) t0 = ts;
            const p = Math.min((ts - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <b ref={ref} className={className}>
      {val}
      {suffix}
    </b>
  );
}
