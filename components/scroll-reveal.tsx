"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({ children, className, delay = 0, threshold = 0.1 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, prefersReduced]);

  if (prefersReduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const transitionStyle: React.CSSProperties = {
    transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
    transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
    opacity: isVisible ? 1 : 0,
    filter: isVisible ? "blur(0px)" : "blur(4px)",
  };

  return (
    <div ref={ref} className={className} style={transitionStyle}>
      {children}
    </div>
  );
}
