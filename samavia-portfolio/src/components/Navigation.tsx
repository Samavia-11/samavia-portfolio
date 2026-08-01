"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems } from "../data/portfolio";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 24);
      const sectionIds = ["home", "about", "experience", "work", "skills", "process", "contact"];
      const offset = window.scrollY + 180;
      let current = "home";

      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const sectionId = sectionIds[index];
        const section = document.getElementById(sectionId);
        if (section && offset >= section.offsetTop) {
          current = sectionId;
          break;
        }
      }

      setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.remove("no-scroll");
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.classList.add("no-scroll");
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed left-1/2 top-4 z-40 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-[#050816]/70 px-3 py-3 shadow-[0_16px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-all duration-300 sm:px-4 ${isScrolled ? "top-2 scale-[0.98]" : "top-4 scale-100"}`}>
      <nav className="flex items-center justify-between gap-3">
        <Link href="#home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#F8FAFC]">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#8B5CF6]/35 bg-[#0D1424] text-lg text-[#8B5CF6] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">SR.</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-[#94A3B8] lg:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link key={item.label} href={item.href} className={`transition ${isActive ? "text-[#F8FAFC]" : "hover:text-[#F8FAFC]"}`}>
                <span className={`relative ${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                  {isActive ? <span className="absolute -bottom-2 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8]" /> : null}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a href="/Samavia-Rasool-CV.pdf" className="hidden rounded-full border border-[#8B5CF6]/35 bg-[#0D1424] px-4 py-2 text-sm font-medium text-[#F8FAFC] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:border-[#38BDF8]/60 hover:text-[#38BDF8] sm:inline-flex">Resume</a>
          <button type="button" aria-label="Toggle navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F8FAFC] lg:hidden">
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-30 bg-[#050816]/90 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex h-full max-w-sm flex-col justify-center px-6">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.98),rgba(13,20,36,0.95))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Navigate</span>
                <button type="button" onClick={() => setIsMenuOpen(false)} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#F8FAFC]">Close</button>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                {navigationItems.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${activeSection === item.href.replace("#", "") ? "border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#F8FAFC]" : "border-white/10 bg-white/5 text-[#CBD5E1] hover:text-[#F8FAFC]"}`}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <a href="/Samavia-Rasool-CV.pdf" onClick={() => setIsMenuOpen(false)} className="mt-6 inline-flex rounded-full border border-[#8B5CF6]/35 bg-[#0D1424] px-4 py-3 text-sm font-medium text-[#F8FAFC]">Open Resume</a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
