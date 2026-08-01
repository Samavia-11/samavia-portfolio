"use client";

import { useEffect, useRef, useState } from "react";
import { achievements } from "../data/portfolio";

function CountUp({ end, suffix = "", prefix = "", duration = 1400, trigger }: { end: number; suffix?: string; prefix?: string; duration?: number; trigger: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setDisplayValue(0);
      return undefined;
    }

    let frameId = 0;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(Math.round(progress * end));
      if (progress < 1) frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [duration, end, trigger]);

  return <span>{prefix}{displayValue}{suffix}</span>;
}

function MetricCard({ value, label, detail, suffix = "", prefix = "", index }: { value: number | string; label: string; detail: string; suffix?: string; prefix?: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="group rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.98),rgba(13,20,36,0.95))] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40 hover:shadow-[0_18px_45px_rgba(139,92,246,0.18)]">
      <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#22D3EE]">
        <span>Metric {index + 1}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-[#CBD5E1]">Live</span>
      </div>
      <div className="text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
        {typeof value === "number" ? (visible ? <CountUp end={value} suffix={suffix} prefix={prefix} trigger={visible} /> : <span>0</span>) : <span>{visible ? value : "—"}</span>}
      </div>
      <p className="mt-3 text-sm font-semibold text-[#F8FAFC]">{label}</p>
      <p className="mt-2 text-sm leading-7 text-[#94A3B8]">{detail}</p>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-6 sm:px-8 lg:px-10">
      <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.96),rgba(13,20,36,0.92))] p-4 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item, index) => (
          <MetricCard key={item.label} value={item.value} label={item.label} detail={item.detail} suffix={item.suffix ?? ""} index={index} />
        ))}
      </div>
    </section>
  );
}
