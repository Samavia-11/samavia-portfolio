"use client";

import { useEffect, useState } from "react";
import { projects } from "../data/portfolio";

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [projectLight, setProjectLight] = useState({ x: 50, y: 50 });
  const [imageFallbacks, setImageFallbacks] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const section = document.getElementById("work");
    if (!section) return undefined;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const position = Math.min(1, Math.max(0, (window.scrollY + window.innerHeight * 0.2 - sectionTop) / (sectionHeight - window.innerHeight * 0.6)));
      const nextProject = Math.min(projects.length - 1, Math.max(0, Math.floor(position * projects.length)));
      setActiveProject(nextProject);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeProjectData = projects[activeProject];

  return (
    <section id="work" className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Selected Work</p>
        <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Digital products built for real users.</h2>
        <p className="mt-4 text-lg leading-8 text-[#94A3B8]">A selection of full-stack platforms, management systems and production applications I have helped design and develop.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.96),rgba(13,20,36,0.92))] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] lg:sticky lg:top-28">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Active Project</p>
              <p className="mt-2 text-lg font-semibold text-[#F8FAFC]">{activeProjectData.name}</p>
            </div>
            <div className="rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 px-3 py-1 text-sm font-medium text-[#C4B5FD]">{String(activeProject + 1).padStart(2, "0")}/04</div>
          </div>

          <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-[#050816]/70 p-5 transition-all duration-500">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8B5CF6]">{activeProjectData.category}</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#F8FAFC]">{activeProjectData.title}</h3>
            <p className="mt-4 text-sm leading-8 text-[#94A3B8]">{activeProjectData.description}</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">Purpose</p>
              <p className="mt-2 text-sm leading-7 text-[#CBD5E1]">{activeProjectData.purpose}</p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">My role</p>
                <p className="mt-2 text-sm leading-7 text-[#CBD5E1]">{activeProjectData.role}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">Core features</p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-[#CBD5E1]">
                  {activeProjectData.features.slice(0, 3).map((feature) => <li key={feature} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" /><span>{feature}</span></li>)}
                </ul>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {activeProjectData.technology.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[#CBD5E1]">{item}</span>)}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {activeProjectData.liveUrl ? <a href={activeProjectData.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#38BDF8] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-1">Visit Live</a> : <a href="#contact" className="rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#38BDF8] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-1">View Details</a>}
              <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#22D3EE]/50 hover:text-[#22D3EE]">Request Case Study</a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.96),rgba(13,20,36,0.92))] p-4 shadow-[0_18px_70px_rgba(0,0,0,0.22)] sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#F87171]" />
              <span className="h-3 w-3 rounded-full bg-[#FBBF24]" />
              <span className="h-3 w-3 rounded-full bg-[#34D399]" />
            </div>
            <div className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#C4B5FD]">Preview</div>
          </div>
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#050816]/80 p-3 sm:p-4" onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            setProjectLight({ x, y });
          }} onMouseLeave={() => setProjectLight({ x: 50, y: 50 })}>
            <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] border border-transparent bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.16),_transparent_55%)] transition-all duration-500" style={{ backgroundPosition: `${projectLight.x}% ${projectLight.y}%` }} />
            <div className="relative rounded-[1.3rem] border border-white/10 bg-[#050816]/80 p-3 transition-all duration-500 hover:scale-[1.02]">
              <div className={`rounded-[1.1rem] border border-white/10 bg-gradient-to-br ${activeProjectData.accent} p-3`}>
                {imageFallbacks[activeProjectData.name] ? (
                  <div className="flex h-72 items-center justify-center rounded-[0.9rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.28),_transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                    <div className="w-full max-w-sm rounded-[1.2rem] border border-white/10 bg-[#050816]/80 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
                      </div>
                      <div className="mt-5 rounded-[1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(34,211,238,0.1))] p-4">
                        <p className="text-sm font-semibold text-[#F8FAFC]">{activeProjectData.title}</p>
                        <p className="mt-2 text-sm leading-7 text-[#94A3B8]">{activeProjectData.category}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img src={activeProjectData.image} alt={activeProjectData.title} className="h-72 w-full rounded-[0.9rem] object-cover transition duration-500 hover:scale-105" onError={() => setImageFallbacks((current) => ({ ...current, [activeProjectData.name]: true }))} />
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProjectData.technology.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[#CBD5E1]">{item}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
