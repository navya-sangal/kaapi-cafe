"use client";

import { useEffect } from "react";

// Fades elements in as they scroll into view. To animate something, add `data-reveal` to it
// (optionally with style={{ "--reveal-delay": "100ms" }} to stagger a row of items).
//
// Safe by design:
// - The hiding CSS only switches on once this script runs (it adds "reveal-ready" to <html>),
//   so if JavaScript fails, everything is simply visible.
// - The CSS lives inside @media (prefers-reduced-motion: no-preference), so visitors who
//   turned off animations in their phone/computer settings never see any movement.
// - Only put data-reveal on elements that stay on the page (not on things that swap,
//   like menu items when you change tab), or the new ones would stay hidden.
export default function ScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target); // animate once, then stop watching
          }
        }
      },
      // Start when 10% of the element is visible and it's a little way up from the bottom edge.
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, []);

  return null;
}
