"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useRef, useState, useEffect, useCallback } from "react";
import { EXPERIENCES, PROJECTS, SKILLS } from "@/data";

// ── helpers ────────────────────────────────────────────────────────────────────

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const wordItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as const } },
};

function AnimatedWords({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span variants={wordContainer} initial="hidden" animate="show" className={className}>
      {text.split(" ").map((w, i) => (
        <motion.span key={i} variants={wordItem} className="inline-block mr-[0.28em]">{w}</motion.span>
      ))}
    </motion.span>
  );
}

function Reveal({ children, delay = 0, className, from = "bottom" }: {
  children: React.ReactNode; delay?: number; className?: string;
  from?: "bottom" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const init = from === "left" ? { x: -40, y: 0 } : from === "right" ? { x: 40, y: 0 } : { x: 0, y: 30 };
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, ...init }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function Marquee({ items, reverse = false, speed = 30 }: {
  items: string[]; reverse?: boolean; speed?: number;
}) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden select-none">
      <motion.div className="flex whitespace-nowrap w-max"
        animate={{ x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}>
        {tripled.map((item, i) => (
          <span key={i} className="text-[11px] font-mono text-white/50 tracking-widest uppercase">
            {item}<span className="mx-4 text-white/10">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    setRot({ x: (py - 0.5) * -12, y: (px - 0.5) * 12 });
    setGlare({ x: px * 100, y: py * 100 });
  }, []);
  return (
    <motion.div ref={ref} className={`relative group ${className}`} style={{ perspective: 900 }}
      animate={{ rotateX: rot.x, rotateY: rot.y }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      onMouseMove={onMove}
      onMouseLeave={() => { setRot({ x: 0, y: 0 }); setGlare({ x: 50, y: 50 }); }}>
      {children}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)` }} />
    </motion.div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

const EXP_COLORS = [
  { tag: "text-violet-300 bg-violet-500/10 border-violet-500/20", dot: "bg-violet-400" },
  { tag: "text-amber-300 bg-amber-500/10 border-amber-500/20",   dot: "bg-amber-400"  },
  { tag: "text-sky-300 bg-sky-500/10 border-sky-500/20",         dot: "bg-sky-400"    },
];

const NAV_SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects"   },
  { id: "skills",     label: "Skills"     },
];

export default function Home() {
  const [active, setActive] = useState("");
  const expRef  = useRef<HTMLElement>(null);
  const projRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLElement>(null);
  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    experience: expRef, projects: projRef, skills: skillRef,
  };

  // active section via IntersectionObserver
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0, rootMargin: "-30% 0px -60% 0px" }
    );
    Object.values(sectionRefs).forEach(r => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // parallax blobs
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 1500], [0, -350]);
  const blob2Y = useTransform(scrollY, [0, 1500], [0, -180]);

  return (
    <div className="flex bg-[#07070B] text-white min-h-screen overflow-x-hidden">

      {/* ── grain ── */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />

      {/* ── ambient blobs ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div style={{ y: blob1Y, background: "radial-gradient(circle, #6D28D9 0%, transparent 70%)" }}
          className="absolute w-[800px] h-[800px] rounded-full -top-60 -left-60 opacity-[0.22]"
          animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div style={{ y: blob2Y, background: "radial-gradient(circle, #0E7490 0%, transparent 70%)" }}
          className="absolute w-[600px] h-[600px] rounded-full bottom-0 -right-40 opacity-[0.18]"
          animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }} />
      </div>

      {/* ════════════════════════════════════════ SIDEBAR */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 flex-col justify-between py-14 px-10 border-r border-white/[0.06] z-20">

        <div className="flex flex-col gap-1.5">
          <motion.span className="font-bold text-sm text-white"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Donghao Zeng
          </motion.span>
          <motion.span className="text-[11px] text-white/55 leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            AI Research Intern @ Mila<br />McGill CS · Class of 2027
          </motion.span>
        </div>

        {/* nav */}
        <motion.nav className="flex flex-col gap-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {NAV_SECTIONS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button key={id} onClick={() => scrollTo(id)}
                className="relative flex items-center gap-3 py-2 text-left group">
                <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full bg-violet-400"
                  animate={{ height: isActive ? 20 : 6, opacity: isActive ? 1 : 0.2 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} />
                <span className={`pl-4 text-xs font-mono tracking-widest uppercase transition-colors duration-200 ${isActive ? "text-white" : "text-white/50 group-hover:text-white/75"}`}>
                  {label}
                </span>
              </button>
            );
          })}
        </motion.nav>

        {/* links */}
        <motion.div className="flex flex-col gap-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          {[
            { href: "https://github.com/saintsauceee", Icon: FaGithub, label: "saintsauceee" },
            { href: "https://www.linkedin.com/in/donghao-zeng/", Icon: FaLinkedin, label: "Donghao Zeng" },
            { href: "mailto:donghao.zeng@mail.mcgill.ca", Icon: MdEmail, label: "donghao.zeng@mail.mcgill.ca" },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[11px] text-white/55 hover:text-white/80 transition-colors duration-200">
              <Icon className="h-3 w-3 shrink-0" />{label}
            </a>
          ))}
        </motion.div>
      </aside>

      {/* ════════════════════════════════════════ MAIN */}
      <main className="flex-1 min-w-0 lg:pl-64">

        {/* ── HERO ── */}
        <section className="min-h-screen flex flex-col justify-center px-10 md:px-16 py-24 max-w-3xl relative">

          {/* hero-specific glow spots */}
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-violet-600/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-40 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />

          {/* animated top rule */}
          <motion.div className="w-10 h-0.5 bg-violet-400 mb-8 rounded-full"
            initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} />

          {/* heading */}
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-5">
            <AnimatedWords text="Hi, I'm Donghao" />
            {" "}
            <motion.span className="inline-block" style={{ transformOrigin: "70% 70%" }}
              animate={{ rotate: [0, 14, -6, 14, -4, 10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3, times: [0, 0.2, 0.4, 0.55, 0.7, 0.85, 1] }}>
              👋
            </motion.span>
          </h1>

          {/* metadata pills */}
          <motion.div className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}>
            {[
              { label: "McGill CS · Class of 2027" },
              { label: "AI Research @ Mila" },
              { label: "Montreal, CA" },
            ].map(({ label }, i) => (
              <motion.span key={label}
                className="px-3 py-1 rounded-full text-[11px] font-mono text-white/60 bg-white/[0.06] border border-white/[0.12] hover:border-violet-400/40 hover:text-white/80 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}>
                {label}
              </motion.span>
            ))}
          </motion.div>

          {/* mobile links */}
          <motion.div className="flex lg:hidden flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            {[
              { href: "https://github.com/saintsauceee", Icon: FaGithub, label: "saintsauceee" },
              { href: "https://www.linkedin.com/in/donghao-zeng/", Icon: FaLinkedin, label: "Donghao Zeng" },
              { href: "mailto:donghao.zeng@mail.mcgill.ca", Icon: MdEmail, label: "donghao.zeng@mail.mcgill.ca" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                <Icon className="h-4 w-4" />{label}
              </a>
            ))}
          </motion.div>

          <motion.div className="flex flex-col gap-6 text-sm text-white/80 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}>
            <p>
              I&apos;m currently a 3rd year Computer Science undergrad at{" "}
              <span className="text-white">McGill University</span> with experience in
              fullstack development and AI systems. I&apos;m also a research intern at{" "}
              <a href="https://mila.quebec/en" target="_blank" rel="noopener noreferrer"
                className="text-white underline underline-offset-3 decoration-white/25 hover:text-white/70 transition-colors">
                Mila
              </a>, working on interpretability for unified vision-language models.
            </p>
            <p>
              Previously built end-to-end software at{" "}
              <span className="text-white">Digitech Payments</span> and{" "}
              <span className="text-white">Group Imi</span>, from a hybrid RAG system
              for customer support to an AI-powered video production platform.
            </p>

            {/* interests */}
            <div className="flex flex-col gap-3 pl-1 border-l-2 border-violet-500/30">
              <span className="pl-4 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Interests</span>
              {[
                "Building fast, user-centric tools that make everyday tasks easier",
                "Mechanistic interpretability and representation engineering in large models",
                "Reinforcement learning for post-training and reasoning",
                "Always learning and experimenting with new technologies!",
              ].map((interest, i) => (
                <motion.div key={interest}
                  className="flex items-start gap-3 pl-4"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}>
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                  <span className="text-sm text-white/75 leading-relaxed">{interest}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-white/75">
              Outside of programming: cooking for my girlfriend, editing video for
              non-profits, and eating every yummy food in the world 🍜
            </p>
          </motion.div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" ref={expRef} className="px-10 md:px-16 py-20">
          <Reveal from="left">
            <div className="flex items-center gap-5 mb-16">
              <span className="text-[10px] font-mono text-white/45 tracking-[0.3em] uppercase">01 / Experience</span>
              <div className="flex-1 h-px bg-white/[0.08]" />
            </div>
          </Reveal>

          <div className="flex flex-col">
            {EXPERIENCES.map((exp, i) => {
              const c = EXP_COLORS[i % EXP_COLORS.length];
              return (
              <div key={i}>
                <motion.div className="h-px bg-white/[0.08]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} />

                <Reveal delay={i * 0.08} className="py-10">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-8 flex-wrap">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08 + 0.1, ease: [0.22, 1, 0.36, 1] }}>
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                          <div className="text-2xl font-bold text-white tracking-tight leading-snug">
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-sm text-white/60 italic mt-0.5 pl-4">{exp.role}</div>
                      </motion.div>
                      <span className="text-xs font-mono text-white/55 shrink-0 pt-1">{exp.period}</span>
                    </div>

                    <ul className="flex flex-col gap-2.5 max-w-2xl">
                      {exp.bullets.map((b, j) => (
                        <motion.li key={j} className="flex gap-3 text-sm text-white/80 leading-relaxed"
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.06 + j * 0.08 + 0.2 }}>
                          <span className="text-white/40 shrink-0 mt-0.5 select-none">—</span>{b}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t, j) => (
                        <motion.span key={t}
                          className={`px-2.5 py-0.5 rounded text-[11px] border ${c.tag}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 + j * 0.04 + 0.35 }}>
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
              );
            })}
            <div className="h-px bg-white/[0.08]" />
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" ref={projRef} className="px-10 md:px-16 py-20">
          <Reveal from="left">
            <div className="flex items-center gap-5 mb-16">
              <span className="text-[10px] font-mono text-white/45 tracking-[0.3em] uppercase">02 / Projects</span>
              <div className="flex-1 h-px bg-white/[0.08]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {PROJECTS.map((proj, i) => (
              <Reveal key={i} delay={i * 0.12} from={i % 2 === 0 ? "left" : "right"}>
                <TiltCard className="h-full">
                  <div className="h-full flex flex-col gap-4 p-7 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/30 hover:bg-white/[0.065] transition-all duration-300">
                    <div className="flex items-start justify-between gap-3">
                      <div className="font-bold text-base text-white leading-snug">{proj.title}</div>
                      <span className="text-4xl font-black text-cyan-400/10 leading-none shrink-0 select-none -mt-1">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="text-[11px] text-white/50 font-mono">{proj.tech}</div>
                    <ul className="flex flex-col gap-2 flex-1">
                      {proj.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-white/75 leading-relaxed">
                          <span className="text-white/40 shrink-0 mt-0.5 select-none">—</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" ref={skillRef} className="px-10 md:px-16 py-20">
          <Reveal from="left">
            <div className="flex items-center gap-5 mb-16">
              <span className="text-[10px] font-mono text-white/45 tracking-[0.3em] uppercase">03 / Skills</span>
              <div className="flex-1 h-px bg-white/[0.08]" />
            </div>
          </Reveal>

          <div className="flex flex-col">
            {SKILLS.map((skill, i) => (
              <div key={i}>
                <div className="h-px bg-white/[0.08]" />
                <Reveal delay={i * 0.06} className="py-5">
                  <div className="flex gap-8 items-start">
                    <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.2em] shrink-0 pt-1 w-28">
                      {skill.name}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {skill.elements.map((el) => (
                        <span key={el}
                          className="px-2.5 py-0.5 rounded text-[11px] text-white/70 bg-white/[0.06] border border-white/[0.1] hover:text-white hover:bg-white/[0.1] transition-colors duration-150">
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
            <div className="h-px bg-white/[0.08]" />
          </div>
        </section>

        <footer className="px-10 md:px-16 py-10 flex items-center justify-between text-[10px] font-mono text-white/40 border-t border-white/[0.06]">
          <span>Donghao Zeng © 2026</span>
          <span>Montreal</span>
        </footer>

      </main>
    </div>
  );
}
