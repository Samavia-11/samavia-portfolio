"use client";

import { useState } from "react";
import { contactDetails } from "../data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(34,211,238,0.1))] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.22)] sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.16),_transparent_40%)]" />
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Let’s build something reliable and ambitious.</h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#94A3B8]">I’m open to full-stack development opportunities, collaborative projects and meaningful software products.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${contactDetails.email}`} className="rounded-full bg-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7C3AED]">Send Email</a>
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#22D3EE]/50 hover:text-[#22D3EE]">Connect on LinkedIn</a>
            <button type="button" onClick={copyEmail} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]">{copied ? "Email Copied" : "Copy Email Address"}</button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#CBD5E1]">
            <span className="rounded-full border border-white/10 bg-[#050816]/70 px-4 py-2">{contactDetails.email}</span>
            <span className="rounded-full border border-white/10 bg-[#050816]/70 px-4 py-2">{contactDetails.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
