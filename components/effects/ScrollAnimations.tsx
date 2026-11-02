"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Anima:
 *  - [data-animate-words="heading"|"body"]  → palavras surgindo conforme o scroll
 *  - [data-reveal]                           → blocos/imagens subindo com fade
 * Reinicia a cada troca de rota.
 */
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: gsap.Context | null = null;

    const setup = () => {
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-animate-words]").forEach((element) => {
          const words = element.querySelectorAll<HTMLElement>(".word");
          if (!words.length) return;

          const isHeading = element.dataset.animateWords === "heading";
          const isHero = element.tagName === "H1";
          const trigger = element.closest("article") ?? element.closest("section") ?? element;

          gsap.fromTo(
            words,
            {
              yPercent: isHeading ? 115 : 0,
              y: isHeading ? 0 : 28,
              opacity: 0,
              filter: isHeading ? "blur(0px)" : "blur(10px)",
            },
            {
              yPercent: 0,
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              ease: "none",
              stagger: isHeading ? 0.06 : 0.04,
              scrollTrigger: {
                trigger,
                start: "top bottom",
                end: isHero ? "top 62%" : isHeading ? "top 58%" : "top 55%",
                scrub: 0.9,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 80, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              ease: "none",
              scrollTrigger: { trigger: element, start: "top bottom", end: "top 55%", scrub: 0.8 },
            },
          );
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    if (window.__loaderDone) {
      setup();
    } else {
      window.addEventListener("page-loader-complete", setup, { once: true });
    }

    // Fontes e imagens mudam a altura da página: recalcula posições depois do load.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("page-loader-complete", setup);
      window.removeEventListener("load", onLoad);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
