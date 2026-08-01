"use client";

import { useEffect, useState } from "react";
import { capabilityCards } from "../data/portfolio";

export function Capabilities() {
  const [revealedCapabilities, setRevealedCapabilities] = useState<number[]>([]);

  useEffect(() => {
    const capabilityNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-capability-card]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setRevealedCapabilities((current) => (current.includes(index) ? current : [...current, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    capabilityNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Capabilities</p>
        <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>From interface to infrastructure.</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {capabilityCards.map((card, index) => {
          const isVisible = revealedCapabilities.includes(index);
          return (
            <div key={card.title} data-capability-card data-index={index} className={`rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.98),rgba(13,20,36,0.95))] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`} style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-xl text-[#C4B5FD] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">{card.icon}</div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#94A3B8]">Core</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#F8FAFC]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#94A3B8]">{card.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {card.items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#CBD5E1]">{item}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
