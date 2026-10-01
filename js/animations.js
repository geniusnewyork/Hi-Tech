/**
 * HI-TECH Mobile Hub — Scroll Animations & Micro-Interactions
 * 
 * Uses native IntersectionObserver for smooth reveal animations.
 * Strictly respects user accessibility setting prefers-reduced-motion.
 */

const AnimationsController = (function() {
  function init() {
    // Check if user requested reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Reveal all animated elements immediately
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach(el => {
        el.classList.add("is-visible");
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      // Fallback for older browsers
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach(el => el.classList.add("is-visible"));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const targetElements = document.querySelectorAll(".animate-on-scroll");
    targetElements.forEach(el => {
      observer.observe(el);
    });
  }

  return {
    init
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = AnimationsController;
}
