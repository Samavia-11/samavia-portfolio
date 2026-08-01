"use client";

import { contactDetails } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-[#94A3B8]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-[#050816]/70 px-4 py-5 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#8B5CF6]/35 bg-[#0D1424] text-sm font-semibold text-[#8B5CF6]">SR</div>
          <p>Designed and developed by Samavia Rasool.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="Visit Samavia on LinkedIn" className="rounded-full border border-white/10 bg-white/5 p-2 text-[#F8FAFC] transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]">in</a>
          <a href={`mailto:${contactDetails.email}`} aria-label="Send an email to Samavia" className="rounded-full border border-white/10 bg-white/5 p-2 text-[#F8FAFC] transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]">✉</a>
          <a href="#home" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-[#F8FAFC] transition hover:border-[#8B5CF6]/40 hover:text-[#8B5CF6]">Back to top</a>
        </div>
      </div>
      <p className="mt-4">© {year} Samavia Rasool</p>
    </footer>
  );
}
