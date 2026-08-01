"use client";

import { useEffect, useState } from "react";
import { socialLinks } from "../data/socials";
import { heroPhrases } from "../data/portfolio";
import { useMousePosition } from "../hooks/useMousePosition";

export function Hero() {
  const [heroPhraseIndex, setHeroPhraseIndex] = useState(0);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const mousePosition = useMousePosition();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroPhraseIndex((index) => (index + 1) % heroPhrases.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  const handleMagneticMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setMagneticOffset({ x: x * 8, y: y * 8 });
  };

  const handleMagneticLeave = () => setMagneticOffset({ x: 0, y: 0 });

  const handleParallaxMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: x * 8, y: y * 8 });
  };

  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center px-6 pb-24 pt-36 sm:px-8 lg:px-10 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle 260px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.16), transparent 60%)` }} />
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-[#7DD3FC]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#38BDF8]" /> Available for Full Stack Development Opportunities
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight opacity-0 animate-[fadeUp_0.7s_ease-out_forwards] sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            Hi, I’m <span className="text-[#8B5CF6]">Samavia Rasool.</span>
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-[#F8FAFC] opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] sm:text-3xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            I build <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#38BDF8] bg-clip-text text-transparent">{heroPhrases[heroPhraseIndex]}</span>.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#94A3B8] opacity-0 animate-[fadeUp_0.9s_ease-out_forwards]">
            Full Stack Software Developer specializing in React.js, Next.js, Node.js and MySQL. I create responsive interfaces, backend systems, database-driven applications and reliable production deployments.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-[fadeUp_1s_ease-out_forwards]">
            <a href="#work" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} style={{ transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)` }} className="rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#38BDF8] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(139,92,246,0.22)] transition duration-200 hover:-translate-y-1">Explore My Work</a>
            <a href="#contact" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} style={{ transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)` }} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] transition duration-200 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:text-[#7DD3FC]">Let’s Talk</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 opacity-0 animate-[fadeUp_1.1s_ease-out_forwards]">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#CBD5E1] transition hover:border-[#8B5CF6]/50 hover:text-[#F8FAFC]">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl" onMouseMove={handleParallaxMove} onMouseLeave={() => setParallax({ x: 0, y: 0 })}>
          <div className="absolute -left-4 top-8 rounded-full border border-[#8B5CF6]/25 bg-[#0D1424]/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C4B5FD] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">React</div>
          <div className="absolute -right-2 top-12 rounded-full border border-[#38BDF8]/25 bg-[#0D1424]/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7DD3FC] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">Node.js</div>
          <div className="absolute bottom-16 left-0 rounded-full border border-white/10 bg-[#0D1424]/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#CBD5E1] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">MySQL</div>
          <div className="absolute bottom-6 right-4 rounded-full border border-[#8B5CF6]/25 bg-[#0D1424]/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C4B5FD] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">Next.js</div>
          <div className="rounded-[2rem] border border-white/10 bg-[#111A2E]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6" style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#F87171]" />
                <span className="h-3 w-3 rounded-full bg-[#FBBF24]" />
                <span className="h-3 w-3 rounded-full bg-[#34D399]" />
              </div>
              <div className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#C4B5FD]">Full Stack</div>
            </div>
            <div className="mb-4 flex items-center gap-2 rounded-2xl border border-[#38BDF8]/20 bg-[#38BDF8]/10 px-3 py-2 text-sm text-[#7DD3FC]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#38BDF8]" /> Deployment status: online • DNS & SSL ready
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-[#050816] p-5 text-sm leading-7 text-[#E2E8F0]">{`const developer = {
  name: "Samavia Rasool",
  role: "Full Stack Developer",
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Node.js", "REST APIs", "PHP"],
  database: ["MySQL", "Oracle"],
  expertise: ["Deployment", "DNS", "SSL", "Leadership"]
};`}</pre>
            <div className="mt-4 flex items-center justify-between text-sm text-[#94A3B8]">
              <span>Live delivery pipeline</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[#CBD5E1]">Available now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
