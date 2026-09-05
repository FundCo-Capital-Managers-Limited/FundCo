"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Animates a numeric value counting up when it scrolls into view.
 * Accepts strings like "21,000+", "$2.12B", "5,000+", "10,000+" and
 * preserves any non-numeric prefix/suffix while tweening the number.
 */
export default function AnimatedCounter({
  value,
  duration = 1.8,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const hasDecimal = numStr.includes(".");
    const formatted = () =>
      hasDecimal
        ? obj.val.toFixed(numStr.split(".")[1]?.length ?? 1)
        : Math.round(obj.val).toLocaleString("en-US");

    const obj = { val: 0 };
    let triggered = false;
    let tween: gsap.core.Tween | null = null;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      el.textContent = value;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            tween = gsap.to(obj, {
              val: target,
              duration,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${prefix}${formatted()}${suffix}`;
              },
            });
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      tween?.kill();
    };
  }, [value, duration]);

  return <span ref={ref}>0</span>;
}
