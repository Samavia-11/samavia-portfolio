"use client";

import { useEffect, useState } from "react";
import { experienceData } from "../data/portfolio";

export function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0);

  useEffect(() => {
    const section = document.getElementById("experience");
    if (!section) return undefined;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const visible = Math.min(rect.height, Math.max(0, window.innerHeight - rect.top));
      const nextProgress = Math.min(100, Math.max(0, (visible / rect.height) * 100));
      setTimelineProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const experienceNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-experience-card]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveExperience(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    experienceNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Building products and leading teams.</h2>
      </div>

      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[#8B5CF6]/40 via-[#38BDF8]/30 to-transparent" style={{ height: `${timelineProgress}%` }} />
        <div className="absolute left-[0.65rem] top-0 h-full w-px bg-white/10" />
        <div className="space-y-6">
          {experienceData.map((item, index) => {
            const isActive = activeExperience === index;
            const isExpanded = expandedExperience === index;
            return (
              <div key={item.title} data-experience-card data-index={index} className={`relative pl-10 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-16 lg:pr-0"}`}>
                <span className={`absolute left-0 top-6 h-4 w-4 rounded-full border-4 border-[#050816] transition-all duration-300 ${isActive ? "scale-125 bg-[#38BDF8] shadow-[0_0_0_8px_rgba(56,189,248,0.18)]" : "bg-[#8B5CF6]"}`} />
                <div className={`rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.98),rgba(13,20,36,0.95))] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-500 ${isActive ? "border-[#8B5CF6]/40 shadow-[0_16px_60px_rgba(139,92,246,0.18)]" : ""}`}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#8B5CF6]">{item.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-[#F8FAFC]">{item.title}</h3>
                      <p className="mt-1 text-[#22D3EE]">{item.company}</p>
                    </div>
                    <button type="button" onClick={() => setExpandedExperience(isExpanded ? null : index)} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#CBD5E1] sm:hidden">{isExpanded ? "Hide details" : "Show details"}</button>
                  </div>
                  <ul className={`mt-5 space-y-2 text-sm leading-7 text-[#94A3B8] ${isExpanded ? "block" : "hidden sm:block"}`}>
                    {item.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" /><span>{bullet}</span></li>)}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
