"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { socialLinks } from "../data/socials";

const experienceData = [
  {
    title: "Software Developer",
    company: "Inotech Solutions",
    period: "October 2024 – Present",
    bullets: [
      "Developed and maintained scalable applications using Next.js, React.js, Node.js and MySQL",
      "Led and trained more than 100 interns",
      "Assigned tasks and monitored progress while supporting project completion",
      "Managed deployment, hosting coordination, DNS records and SSL/HTTPS",
      "Supported SPF, DKIM, DMARC, MX records and email migration workflows",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Inotech Solutions",
    period: "February 2024 – August 2024",
    bullets: [
      "Assisted in frontend and backend development",
      "Supported API integration and database connectivity",
      "Performed debugging and performance improvement",
      "Contributed to responsive web applications and real delivery projects",
    ],
  },
];

const achievements = [
  { value: 2, suffix: "+", label: "Years Professional Experience", detail: "Focused on modern product delivery" },
  { value: 100, suffix: "+", label: "Interns Trained", detail: "Mentorship and team support" },
  { value: 12, suffix: "+", label: "Featured Projects", detail: "Applications and visual design work" },
  { value: "Full Stack", label: "Development Scope", detail: "From interface to infrastructure" },
];

const projects = [
  {
    name: "PAGB",
    title: "Pakistan Army Green Book",
    category: "Academic Journal Management Platform",
    description: "A full-stack academic journal management platform developed with Next.js, Node.js and MySQL.",
    purpose: "To modernize editorial workflows, submissions and reviewer coordination for a high-trust publishing environment.",
    role: "Lead full-stack developer and product engineer",
    features: ["Role-based workflows", "Author submissions", "Editor management", "Reviewer workflows", "Administrative controls", "Editorial user management"],
    technology: ["Next.js", "Node.js", "MySQL"],
    liveUrl: "https://pagb.org.pk",
    image: "/projects/pagb.webp",
    accent: "from-[#8B5CF6]/20 to-[#38BDF8]/10",
  },
  {
    name: "Leo Laptop Application",
    title: "Product Catalogue and Order Request Platform",
    category: "Product Catalogue and Order Request Platform",
    description: "An independently developed product application for showcasing laptop models, specifications, customer inquiries, order requests and support services.",
    purpose: "To make product discovery and request handling faster and more reliable for customers and support teams.",
    role: "Independent developer and product builder",
    features: ["Responsive product catalogue", "Laptop specifications", "Order request workflow", "Customer inquiry forms", "Backend form handling", "Support request management"],
    technology: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "https://leopak.net",
    image: "/projects/leo.webp",
    accent: "from-[#38BDF8]/20 to-[#8B5CF6]/10",
  },
  {
    name: "ASEA",
    title: "Army Special Education System",
    category: "Special Education Management System",
    description: "A web-based special education management platform with learning management features.",
    purpose: "To organize courses, student records and learning activities in a structured, accessible system.",
    role: "Full-stack contributor and implementation support",
    features: ["Course management", "Student records", "Learning activities", "LMS functionality", "Administrative management"],
    technology: ["Next.js", "Node.js"],
    liveUrl: "",
    image: "/projects/asea.webp",
    accent: "from-[#22D3EE]/20 to-[#8B5CF6]/10",
  },
  {
    name: "GEMS",
    title: "Garrison Entry Management System",
    category: "Entry Request and Approval System",
    description: "A web application for managing entry requests, approvals and administrative workflows.",
    purpose: "To simplify request submission and improve visibility for approvals across administrative teams.",
    role: "Frontend and workflow developer",
    features: ["Entry request submission", "Request approval workflow", "Administrative management", "User-friendly request interface"],
    technology: ["React.js", "Node.js"],
    liveUrl: "https://gems.net.pk",
    image: "/projects/gems.webp",
    accent: "from-[#A855F7]/20 to-[#38BDF8]/10",
  },
  {
    name: "Restaurant Management System",
    title: "Restaurant Management System",
    category: "Business Management Application",
    description: "A complete restaurant management system with database connectivity and modules for managing restaurant operations.",
    purpose: "To organize restaurant data and day-to-day management workflows in one system.",
    role: "Full-stack developer",
    features: ["Database connectivity", "Restaurant management modules", "Operational workflows"],
    technology: ["PHP", "CSS", "HTML"],
    liveUrl: "",
    image: "",
    accent: "from-[#F59E0B]/20 to-[#8B5CF6]/10",
  },
  {
    name: "Skin Cancer Detection Application",
    title: "Skin Cancer Detection Application",
    category: "AI Healthcare Application",
    description: "An image-based skin cancer detection application using a CNN model trained to classify seven skin lesion classes from the ISIC dataset.",
    purpose: "To explore machine-learning-assisted classification of skin lesion images.",
    role: "Application and machine learning developer",
    features: ["Image-based detection", "Seven-class classification", "CNN model integration"],
    technology: ["Java", "XML", "Python", "CNN", "ISIC Dataset"],
    liveUrl: "",
    image: "",
    accent: "from-[#EC4899]/20 to-[#38BDF8]/10",
  },
  {
    name: "Tasbih Counter Application",
    title: "Digital Tasbih Counter",
    category: "Mobile Application",
    description: "A mobile application designed for simple and convenient digital Tasbih counting.",
    purpose: "To provide an accessible digital alternative to a physical Tasbih counter.",
    role: "Android application developer",
    features: ["Digital counting", "Mobile-friendly interface", "Simple user experience"],
    technology: ["Java", "XML"],
    liveUrl: "",
    image: "",
    accent: "from-[#10B981]/20 to-[#38BDF8]/10",
  },
  {
    name: "Shikayat Application",
    title: "Complaint Management Application",
    category: "Complaint Management System",
    description: "A complaint management application developed to organize complaint submission and handling workflows.",
    purpose: "To streamline the submission, tracking and management of complaints.",
    role: "Team Leader",
    features: ["Complaint submission", "Complaint management", "Team-led delivery"],
    technology: ["PHP", "CSS", "Bootstrap", "HTML"],
    liveUrl: "",
    image: "",
    accent: "from-[#EF4444]/20 to-[#8B5CF6]/10",
  },
  {
    name: "FC-Balochistan (North)",
    title: "FC-Balochistan (North) Project",
    category: "Enterprise System",
    description: "Frontend and UI/UX development for the FC-Balochistan (North) system using Oracle APEX.",
    purpose: "To deliver a clear and usable interface for the system's operational workflows.",
    role: "Frontend and UI/UX developer",
    features: ["Frontend development", "UI/UX implementation", "Oracle APEX interfaces"],
    technology: ["Oracle APEX"],
    liveUrl: "",
    image: "",
    accent: "from-[#F97316]/20 to-[#38BDF8]/10",
  },
  {
    name: "Zenly Chatbot",
    title: "Zenly Chatbot",
    category: "Conversational Application",
    description: "A chatbot project designed to provide an interactive conversational user experience.",
    purpose: "To support users through a simple conversational interface.",
    role: "Chatbot developer",
    features: ["Conversational interface", "Automated responses", "User assistance"],
    technology: ["Chatbot Development"],
    liveUrl: "",
    image: "",
    accent: "from-[#06B6D4]/20 to-[#8B5CF6]/10",
  },
  {
    name: "IDEAS 2025 Creative Campaign",
    title: "IDEAS 2025 Marketing Designs",
    category: "Graphic and Motion Design",
    description: "Designed promotional brochures, standees and video content for IDEAS 2025, creating a consistent visual presence across print and digital media.",
    purpose: "To communicate the campaign clearly through cohesive and engaging event visuals.",
    role: "Graphic and visual designer",
    features: ["Brochure design", "Standee design", "Promotional video content"],
    technology: ["Brochure Design", "Standee Design", "Video Design"],
    liveUrl: "",
    image: "",
    accent: "from-[#EAB308]/20 to-[#8B5CF6]/10",
  },
  {
    name: "Leo Laptop Brochure",
    title: "Leo Laptop Product Brochure",
    category: "Marketing and Print Design",
    description: "Created a product brochure for Leo Laptop to present products and information through a clear, professional visual layout.",
    purpose: "To support product marketing with an informative and visually consistent brochure.",
    role: "Brochure and visual designer",
    features: ["Product presentation", "Visual layout", "Marketing collateral"],
    technology: ["Brochure Design", "Print Design"],
    liveUrl: "",
    image: "",
    accent: "from-[#3B82F6]/20 to-[#22D3EE]/10",
  },
];

const capabilityCards = [
  {
    title: "Frontend",
    icon: "◧",
    description: "Responsive interfaces, polished interaction patterns and accessible product experiences.",
    items: ["React.js", "Next.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "⬢",
    description: "Reliable APIs, business logic and modern backend services built to scale.",
    items: ["Node.js", "PHP", "RESTful APIs", "API Integration"],
  },
  {
    title: "Database",
    icon: "◫",
    description: "Structured data systems, query logic and stable relational architecture.",
    items: ["MySQL", "Oracle Database"],
  },
  {
    title: "Languages & Tools",
    icon: "⌘",
    description: "Implementation across modern tooling, debugging and development workflows.",
    items: ["JavaScript", "TypeScript", "Java", "Python", "Git", "GitHub", "Postman", "VS Code", "Oracle APEX", "XAMPP"],
  },
  {
    title: "Infrastructure",
    icon: "◎",
    description: "Deployments, DNS, SSL and email systems configured for reliable operations.",
    items: ["DNS", "MX and TXT Records", "SPF", "DKIM", "DMARC", "SSL/HTTPS", "Hosting", "Email Migration"],
  },
  {
    title: "Leadership",
    icon: "✦",
    description: "Mentorship, coordination and delivery leadership for ambitious product teams.",
    items: ["Team Leadership", "Intern Training", "Project Coordination", "Client Communication", "Prompt Engineering", "UI/UX Implementation"],
  },
];

const heroPhrases = ["Full-Stack Applications", "Responsive User Experiences", "Secure Backend Systems", "Production-Ready Deployments"];

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

export default function Home() {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [heroPhraseIndex, setHeroPhraseIndex] = useState(0);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [activeProject] = useState(0);
  const [projectLight, setProjectLight] = useState({ x: 50, y: 50 });
  const [imageFallbacks, setImageFallbacks] = useState<Record<string, boolean>>({});
  const [revealedCapabilities, setRevealedCapabilities] = useState<number[]>([]);
  const [activeExperience, setActiveExperience] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const updateSpotlight = (event: MouseEvent) => {
      setSpotlight({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateSpotlight);

    let timer: number | undefined;
    if (!mediaQuery.matches) {
      timer = window.setTimeout(() => setIsIntroComplete(true), 750);
    } else {
      setIsIntroComplete(true);
    }

    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
      window.removeEventListener("mousemove", updateSpotlight);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroPhraseIndex((index) => (index + 1) % heroPhrases.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

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

  const handleMagneticMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setMagneticOffset({ x: x * 8, y: y * 8 });
  };

  const handleMagneticLeave = () => setMagneticOffset({ x: 0, y: 0 });

  const handleParallaxMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: x * 8, y: y * 8 });
  };

  const activeProjectData = projects[activeProject];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-[#F8FAFC]">
      <div className="pointer-events-none absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.22),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),_transparent_30%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#8B5CF6]/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle 260px at ${spotlight.x}px ${spotlight.y}px, rgba(139,92,246,0.16), transparent 60%)` }} />

      {!isIntroComplete && !prefersReducedMotion ? (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#050816]">
          <div className="flex flex-col items-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-2 rounded-full border border-[#8B5CF6]/40" />
              <span className="text-2xl font-semibold tracking-[0.35em] text-[#F8FAFC]">SR.</span>
            </div>
            <div className="mt-5 h-1 w-24 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#38BDF8] animate-pulse" />
            </div>
          </div>
        </div>
      ) : null}

      <div className={`transition-opacity duration-700 ${isIntroComplete ? "opacity-100" : "opacity-0"}`}>
        <section id="home" className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col justify-start px-6 pb-24 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pt-12">
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
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.label === "Email" ? "/samavia-portfolio/Samavia%20Rasool(Full%20Stack%20Developer).pdf" : link.href} target={link.label === "Email" || link.external ? "_blank" : undefined} rel={link.label === "Email" || link.external ? "noreferrer" : undefined} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#CBD5E1] transition hover:border-[#8B5CF6]/50 hover:text-[#F8FAFC]">
                    {link.label === "Email" ? "Resume" : link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[520px]" onMouseMove={handleParallaxMove} onMouseLeave={() => setParallax({ x: 0, y: 0 })}>
              <div className="hero-orbit absolute inset-[7%] rounded-full border border-white/10" />
              <div className="hero-orbit-reverse absolute inset-[18%] rounded-full border border-dashed border-[#8B5CF6]/30" />
              <div className="absolute inset-[29%] rounded-full bg-[#8B5CF6]/20 blur-3xl" />
              <div className="hero-core absolute left-1/2 top-1/2 flex h-[46%] w-[46%] items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(145deg,rgba(139,92,246,0.45),rgba(13,20,36,0.96)_60%,rgba(56,189,248,0.3))] shadow-[0_30px_100px_rgba(139,92,246,0.28)] backdrop-blur-xl" style={{ transform: `translate(calc(-50% + ${parallax.x}px), calc(-50% + ${parallax.y}px))` }}>
                <div className="hero-core-content text-center"><span className="block text-6xl font-semibold tracking-[-0.08em] text-white sm:text-7xl">SR</span><span className="mt-3 block text-[10px] uppercase tracking-[0.35em] text-[#C4B5FD]">Design · Develop</span></div>
              </div>
              <div className="hero-float absolute left-[3%] top-[18%] rounded-2xl border border-white/10 bg-[#0D1424]/90 px-4 py-3 shadow-xl backdrop-blur"><span className="block text-lg font-semibold text-white">02+</span><span className="text-xs text-[#94A3B8]">Years building</span></div>
              <div className="hero-float-delayed absolute right-0 top-[24%] rounded-2xl border border-[#38BDF8]/20 bg-[#0D1424]/90 px-4 py-3 shadow-xl backdrop-blur"><span className="text-sm font-semibold text-[#7DD3FC]">React · Next.js</span></div>
              <div className="hero-float-delayed absolute bottom-[16%] left-[4%] rounded-2xl border border-[#8B5CF6]/20 bg-[#0D1424]/90 px-4 py-3 shadow-xl backdrop-blur"><span className="text-sm font-semibold text-[#C4B5FD]">Node · MySQL</span></div>
              <div className="hero-float absolute bottom-[8%] right-[7%] rounded-2xl border border-white/10 bg-[#0D1424]/90 px-4 py-3 shadow-xl backdrop-blur"><span className="block text-lg font-semibold text-white">100+</span><span className="text-xs text-[#94A3B8]">People mentored</span></div>
              <span className="hero-node absolute left-[17%] top-[8%] h-3 w-3 rounded-full bg-[#8B5CF6] shadow-[0_0_20px_#8B5CF6]" />
              <span className="hero-node-delayed absolute bottom-[28%] right-[4%] h-2.5 w-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_20px_#38BDF8]" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 py-6 sm:px-8 lg:px-10">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.96),rgba(13,20,36,0.92))] p-4 md:grid-cols-2 xl:grid-cols-4">
            {achievements.map((item, index) => (
              <MetricCard key={item.label} value={item.value} label={item.label} detail={item.detail} suffix={item.suffix ?? ""} index={index} />
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Digital products and visual experiences.</h2>
            <p className="mt-4 text-lg leading-8 text-[#94A3B8]">A selection of full-stack applications, management systems, graphic design and promotional media I have designed and developed.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.name} className="group rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.96),rgba(13,20,36,0.92))] p-6 shadow-[0_16px_55px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/35">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#22D3EE]">Project {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#F8FAFC]">{project.name}</h3>
                  </div>
                  {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F8FAFC] transition group-hover:border-[#38BDF8]/40 group-hover:text-[#38BDF8]">↗</a> : null}
                </div>
                <p className="mt-5 text-sm leading-7 text-[#94A3B8]">{project.description}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4B5FD]">Technical Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technology.map((technology) => <span key={technology} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#CBD5E1]">{technology}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden">
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

        <section id="about" className="mx-auto max-w-[1280px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.96),rgba(13,20,36,0.92))] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.25),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.2),_transparent_45%)]" />
                <div className="relative flex min-h-80 flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#7DD3FC]">Developer + Designer</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#34D399] shadow-[0_0_16px_#34D399]" />
                  </div>
                  <div className="py-8 text-center">
                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(145deg,rgba(139,92,246,0.5),rgba(56,189,248,0.18))] shadow-[0_20px_55px_rgba(139,92,246,0.25)]">
                      <span className="text-5xl font-semibold tracking-[-0.08em] text-white">SR</span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-[#F8FAFC]">Samavia Rasool</h3>
                    <p className="mt-2 text-sm text-[#94A3B8]">Building systems and shaping visual stories.</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Full Stack", "UI/UX", "Graphic Design", "Video"].map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-[#050816]/50 px-3 py-1.5 text-xs text-[#CBD5E1]">{skill}</span>)}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Building reliable software and leading with purpose.</h2>
              <p className="mt-4 text-lg leading-8 text-[#94A3B8]">I build reliable web applications that solve real business problems, support teams effectively and grow through modern engineering practices. My focus spans product delivery, infrastructure and leadership.</p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#070B14]/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">Education</p>
                <div className="mt-4 space-y-4 text-[#F8FAFC]">
                  <div>
                    <p className="font-semibold">MS Software Engineering — NUST</p>
                    <p className="mt-1 text-sm text-[#94A3B8]">2025 – Present</p>
                  </div>
                  <div>
                    <p className="font-semibold">BS Computer Science — APCOMS, affiliated with UET Taxila</p>
                    <p className="mt-1 text-sm text-[#94A3B8]">2020 – 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1280px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(34,211,238,0.1))] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.22)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Let’s build something reliable and ambitious.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-[#94A3B8]">Interested in product engineering, technical leadership or full-stack delivery? I’d love to connect.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:samaviarasool888@gmail.com" className="rounded-full bg-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7C3AED]">samaviarasool888@gmail.com</a>
              <a href="#home" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#22D3EE]/50 hover:text-[#22D3EE]">Back to Top</a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,26,46,0.96),rgba(13,20,36,0.92))] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#22D3EE]">Development Process</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Disciplined execution from idea to launch.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[["Discovery", "Clarify the problem, audience and business context before writing code."], ["Build", "Design scalable interfaces and robust backend systems with clean architecture."], ["Launch", "Deploy securely, configure DNS and SSL and support the rollout with care."]].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-[#050816]/70 p-5">
                  <p className="text-lg font-semibold text-[#F8FAFC]">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-[#94A3B8]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-[#94A3B8]">Designed as a premium one-page developer portfolio.</footer>
      </div>
    </main>
  );
}
