"use client";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.96),rgba(13,20,36,0.92))] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.25),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.2),_transparent_45%)]" />
            <div className="relative h-72 w-full min-w-[260px] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(139,92,246,0.18)_0%,transparent_40%,rgba(56,189,248,0.18)_100%)]" />
              <div className="relative flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-[#050816]/70 p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[#94A3B8]">
                  <span>SR</span>
                  <span>Profile</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-[1.4rem] border border-[#8B5CF6]/30 bg-gradient-to-br from-[#8B5CF6]/35 via-[#0F172A] to-[#38BDF8]/20 text-3xl font-semibold tracking-[0.35em] text-[#F8FAFC]">SR</div>
                </div>
                <div className="grid gap-2 text-sm text-[#CBD5E1] sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#22D3EE]">Stack</p>
                    <p className="mt-1">React • Next • Node</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#22D3EE]">Infra</p>
                    <p className="mt-1">DNS • SSL • Hosting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>I build reliable software with purpose.</h2>
          <p className="mt-4 text-lg leading-8 text-[#94A3B8]">I’m a Full Stack Software Developer focused on building scalable, secure and user-friendly web applications. My experience covers frontend development, backend integration, databases, APIs, deployment, hosting, DNS, SSL and email infrastructure. I also have experience leading and training development teams, coordinating tasks and supporting project delivery.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#070B14]/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">Master of Science in Software Engineering</p>
              <p className="mt-3 text-[#F8FAFC]">MCS, NUST</p>
              <p className="mt-1 text-sm text-[#94A3B8]">October 2025 – Present</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#070B14]/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">Bachelor of Science in Computer Science</p>
              <p className="mt-3 text-[#F8FAFC]">APCOMS, affiliated with UET Taxila</p>
              <p className="mt-1 text-sm text-[#94A3B8]">2020 – 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
