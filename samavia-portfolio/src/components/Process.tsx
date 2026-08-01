"use client";

import { useState } from "react";
import { processSteps } from "../data/portfolio";

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Process</p>
        <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>How I turn ideas into products.</h2>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.96),rgba(13,20,36,0.92))] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] sm:p-8">
        <div className="absolute left-8 top-10 hidden h-[2px] w-[calc(100%-4rem)] bg-gradient-to-r from-[#8B5CF6]/30 via-[#38BDF8]/40 to-transparent md:block" />
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <button key={step.number} type="button" onMouseEnter={() => setActiveStep(index)} onFocus={() => setActiveStep(index)} className={`group rounded-[1.6rem] border p-5 text-left transition-all duration-300 ${isActive ? "border-[#8B5CF6]/50 bg-[#8B5CF6]/10 shadow-[0_16px_50px_rgba(139,92,246,0.16)]" : "border-white/10 bg-white/5 hover:border-[#38BDF8]/30"}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#22D3EE]">{step.number}</span>
                  <span className={`h-2.5 w-2.5 rounded-full transition-all ${isActive ? "bg-[#38BDF8]" : "bg-white/20"}`} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#F8FAFC]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#94A3B8]">{step.description}</p>
                <div className={`mt-4 text-sm leading-7 text-[#CBD5E1] transition-all duration-300 ${isActive ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
                  {step.supportingText}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
