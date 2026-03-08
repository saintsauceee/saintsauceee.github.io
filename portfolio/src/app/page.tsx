"use client";

import { motion } from "framer-motion";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdOutlineMemory, MdCode, MdLayers, MdOutlineCloud, MdOutlineBuild } from "react-icons/md";

import { useRef, useState, useEffect } from "react";
import { EXPERIENCES, PROJECTS, SKILLS } from "@/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
});

const inView = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45 },
};

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
        {label}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function Tag({ text, color }: { text: string; color?: string }) {
  return (
    <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${color ?? "bg-gray-100 text-gray-500"}`}>
      {text}
    </span>
  );
}

const EXP_COLORS = [
  { dot: "bg-violet-400", tag: "bg-violet-50 text-violet-500" },
  { dot: "bg-amber-400", tag: "bg-amber-50 text-amber-600" },
  { dot: "bg-sky-400", tag: "bg-sky-50 text-sky-500" },
];

const SKILL_META = [
  { icon: MdOutlineMemory, color: "text-purple-500", bg: "bg-purple-50" },
  { icon: MdCode,          color: "text-rose-400",   bg: "bg-rose-50" },
  { icon: MdLayers,        color: "text-emerald-500",bg: "bg-emerald-50" },
  { icon: MdOutlineCloud,  color: "text-blue-400",   bg: "bg-blue-50" },
  { icon: MdOutlineBuild,  color: "text-amber-500",  bg: "bg-amber-50" },
];

function smoothScrollTo(target: number, duration = 900) {
  const start = window.scrollY;
  const distance = target - start;
  let startTime: number | null = null;

  const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function Home() {
  const experienceRef = useRef<HTMLElement>(null);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleArrowClick = () => {
    if (scrolledPast) {
      smoothScrollTo(0, 1000);
    } else if (experienceRef.current) {
      const top = experienceRef.current.getBoundingClientRect().top + window.scrollY - 64;
      smoothScrollTo(top, 1000);
    }
  };

  return (
    <div className="flex flex-col w-screen min-h-screen items-center bg-[#F9FAFB] relative">
      <div className="flex flex-col lg:w-[45%] md:w-[70%] w-[88%] pb-32">

        {/* ── Introduction ── */}
        <div className="flex flex-col gap-6 min-h-screen justify-center pt-16">
          <motion.div {...fadeUp(0)} className="text-5xl font-bold mb-4">
            Hi, I&apos;m Donghao{" "}
            <motion.span
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
              animate={{ rotate: [0, 14, -6, 14, -4, 10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3, times: [0, 0.2, 0.4, 0.55, 0.7, 0.85, 1], ease: "easeInOut" }}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="flex flex-row flex-wrap text-sm gap-4">
            <a
              href="https://github.com/saintsauceee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2 hover:text-gray-500 transition-colors"
            >
              <FaGithub className="h-5 w-5" aria-hidden />
              saintsauceee
            </a>
            <a
              href="https://www.linkedin.com/in/donghao-zeng/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2 hover:text-gray-500 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" aria-hidden />
              Donghao Zeng
            </a>
            <a
              href="mailto:donghao.zeng@mail.mcgill.ca"
              className="flex flex-row gap-2 hover:text-gray-500 transition-colors"
            >
              <MdEmail className="h-5 w-5" aria-hidden />
              donghao.zeng@mail.mcgill.ca
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="text-sm leading-relaxed text-gray-700">
            I&apos;m currently a 3rd year Computer Science undergrad at{" "}
            <span className="italic">McGill University</span> with experience in fullstack development and AI systems.
            I&apos;m also a research intern at{" "}
            <a
              href="https://mila.quebec/en"
              target="_blank"
              rel="noopener noreferrer"
              className="italic underline decoration-dotted underline-offset-2 hover:text-gray-500 transition-colors"
            >
              Mila
            </a>
            , working on interpretability for unified vision-language models.
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="text-sm leading-relaxed text-gray-700">
            Previously, I have built end-to-end software at{" "}
            <span className="italic">Digitech Payments</span> and{" "}
            <span className="italic">Group Imi</span>, from a hybrid RAG system for customer
            support teams to an AI-powered video production tool for content creators, focusing
            on performance, clean code, and seamless UX.
          </motion.div>

          <motion.div {...fadeUp(0.35)} className="flex flex-col gap-3 text-sm text-gray-700">
            <span>Some of my interests:</span>
            <ul className="list-disc list-outside pl-4 space-y-1.5 text-gray-600">
              <li>Mechanistic interpretability and representation engineering in large models</li>
              <li>Reinforcement learning for post-training and reasoning</li>
              <li>Building fast, user-centric tools that make everyday tasks easier</li>
              <li>Always learning and experimenting with new technologies!</li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.45)} className="text-sm text-gray-700 leading-relaxed">
            Outside of programming, I love to cook delicious meals for my girlfriend and edit extremely long hours of video footage for non-profit organizations. And of course, I'm absolutely obsessed with eating ALL the yummy food in the world!
          </motion.div>

          <div className="mt-12 pb-10" />
        </div>

        {/* ── Experience ── */}
        <motion.section ref={experienceRef} {...inView} className="mt-8">
          <SectionHeader label="Experience" />
          <div className="flex flex-col gap-4">
            {EXPERIENCES.map((exp, i) => {
              const c = EXP_COLORS[i % EXP_COLORS.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                        <div className="font-semibold text-sm text-gray-900">{exp.company}</div>
                      </div>
                      <div className="text-xs text-gray-500 italic mt-0.5">{exp.role}</div>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0 pt-0.5">{exp.period}</span>
                  </div>

                  <ul className="mt-3 space-y-2 text-sm text-gray-600 leading-loose list-disc list-outside pl-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.technologies.map((t) => (
                      <Tag key={t} text={t} color={c.tag} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Projects ── */}
        <motion.section {...inView} className="mt-12">
          <SectionHeader label="Projects" />
          <div className="flex flex-col gap-4">
            {PROJECTS.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5"
              >
                <div className="font-semibold text-sm text-gray-900">{proj.title}</div>
                <div className="text-xs text-gray-400 mt-0.5 mb-3">{proj.tech}</div>
                <ul className="space-y-2 text-sm text-gray-600 leading-loose list-disc list-outside pl-4">
                  {proj.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Skills ── */}
        <motion.section {...inView} className="mt-12">
          <SectionHeader label="Skills" />
          <div className="flex flex-col gap-3">
            {SKILLS.map((skill, i) => {
              const { icon: Icon, color, bg } = SKILL_META[i % SKILL_META.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`p-1 rounded-md ${bg}`}>
                      <Icon className={`h-3.5 w-3.5 ${color}`} />
                    </span>
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{skill.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.elements.map((el) => (
                      <Tag key={el} text={el} color="bg-gray-50 text-gray-700 border border-gray-200" />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

      </div>

      {/* ── Floating scroll arrow ── */}
      <motion.button
        onClick={handleArrowClick}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      >
        <motion.svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className="text-gray-400"
          animate={{ rotate: scrolledPast ? 180 : 0, y: scrolledPast ? 0 : [0, 2, 0] }}
          transition={{ rotate: { duration: 0.45, ease: "easeInOut" }, y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </motion.button>
    </div>
  );
}
