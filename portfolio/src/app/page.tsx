"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EDUCATION, EXPERIENCES } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;
const fade = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

function Clock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Montreal", hour: "numeric", minute: "2-digit", hour12: true,
      }).format(new Date()));
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time ?? " "}</span>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section variants={fade} className="flex flex-col gap-3">
      <h2 className="text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--faint)] px-3">{title}</h2>
      {children}
    </motion.section>
  );
}

function Entry({ title, subtitle, period, current }: {
  title: string; subtitle: string; period: string; current?: boolean;
}) {
  return (
    <motion.li variants={fade}
      className="group rounded-lg px-3 py-3 -mx-0 transition-colors duration-200 hover:bg-[var(--hover)]">
      <div className="flex justify-between gap-6 items-baseline">
        <span className="text-[15px] font-medium flex items-center gap-2">
          {title}
          {current && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse absolute inline-flex h-full w-full rounded-full bg-[var(--fg)] opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />
            </span>
          )}
        </span>
        <span className="text-[13px] text-[var(--faint)] tabular-nums shrink-0 group-hover:text-[var(--muted)] transition-colors duration-200">
          {period}
        </span>
      </div>
      <span className="text-[14px] text-[var(--muted)]">{subtitle}</span>
    </motion.li>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 sm:px-10 py-24 sm:py-36">
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="mx-auto max-w-lg flex flex-col gap-14">

        <motion.header variants={fade} className="flex flex-col gap-1 px-3">
          <h1 className="text-[22px] font-semibold tracking-tight">Donghao Zeng</h1>
          <p className="text-[14px] text-[var(--muted)]">Computer Science at McGill University</p>
        </motion.header>

        <Section title="Experience">
          <motion.ul variants={stagger} className="flex flex-col">
            {EXPERIENCES.map((exp) => (
              <Entry key={exp.company} title={exp.company} subtitle={exp.role}
                period={exp.period} current={exp.period.endsWith("Present")} />
            ))}
          </motion.ul>
        </Section>

        <Section title="Education">
          <motion.ul variants={stagger} className="flex flex-col">
            {EDUCATION.map((edu) => (
              <Entry key={edu.school} title={edu.school} subtitle={edu.degree} period={edu.period} />
            ))}
          </motion.ul>
        </Section>

        <motion.footer variants={fade}
          className="flex justify-between px-3 pt-6 border-t border-[var(--line)] text-[12px] text-[var(--faint)]">
          <span>Montreal, Canada</span>
          <Clock />
        </motion.footer>

      </motion.div>
    </main>
  );
}
