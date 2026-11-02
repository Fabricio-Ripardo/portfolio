"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { site } from "@/data/portfolio";

const SESSION_KEY = "portfolio-loader-seen";

/** Avisa o resto da página que o loader terminou. */
function markLoaderDone() {
  window.__loaderDone = true;
  window.dispatchEvent(new CustomEvent("page-loader-complete"));
}

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const counter = counterRef.current;
    const progress = progressRef.current;
    if (!loader || !counter || !progress) return;

    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* sessionStorage indisponível: mostra o loader normalmente */
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Na mesma sessão (ou com movimento reduzido) o loader não atrasa a navegação.
    if (seen || reducedMotion) {
      setVisible(false);
      markLoaderDone();
      return;
    }

    document.body.classList.add("is-loading");
    const state = { value: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(state, {
        value: 100,
        duration: 1.6,
        ease: "power2.inOut",
        onUpdate: () => {
          const current = Math.round(state.value);
          counter.textContent = String(current);
          progress.style.width = `${current}%`;
        },
      });
      tl.add(markLoaderDone);
      tl.to(loader, { yPercent: -100, duration: 0.9, ease: "power4.inOut" });
      tl.add(() => {
        document.body.classList.remove("is-loading");
        try {
          window.sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* ignore */
        }
        setVisible(false);
      });
    });

    return () => {
      ctx.revert();
      document.body.classList.remove("is-loading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-base-950"
      aria-hidden="true"
    >
      <div className="flex items-start justify-between px-6 py-6 lg:px-12">
        <span className="text-xs tracking-tight text-base-600 dark:text-base-300">{site.logo}</span>
        <span className="text-xs uppercase tracking-tight text-base-600 dark:text-base-300">Carregando</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex items-end gap-1">
          <span
            ref={counterRef}
            className="text-[clamp(4rem,18vw,12rem)] font-semibold leading-none tracking-tighter text-base-900 tabular-nums dark:text-white"
          >
            0
          </span>
          <span className="mb-[0.35em] text-[clamp(1.25rem,4vw,2.5rem)] font-semibold tracking-tighter text-base-400 dark:text-base-500">
            %
          </span>
        </div>
      </div>

      <div className="px-6 pb-8 lg:px-12">
        <div className="h-px w-full overflow-hidden bg-base-200 dark:bg-base-800">
          <div ref={progressRef} className="h-full w-0 bg-base-900 dark:bg-white" />
        </div>
      </div>
    </div>
  );
}
