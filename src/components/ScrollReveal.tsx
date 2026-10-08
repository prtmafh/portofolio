"use client";

import { useEffect, type ReactNode } from "react";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (entry.target instanceof HTMLElement) {
              entry.target.dataset.revealed = "true";
            }
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    document.documentElement.dataset.motionReady = "true";
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.motionReady;
    };
  }, []);

  return children;
}
