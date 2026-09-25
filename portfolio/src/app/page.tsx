"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { EDUCATION, EXPERIENCES } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;
const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };

const LINKS = [
  { href: "https://github.com/saintsauceee", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/donghao-zeng/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:donghao.zeng@mail.mcgill.ca", Icon: MdEmail, label: "Email" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section variants={fade}
      className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8">
      <h2 className="text-[19px] font-medium tracking-tight sm:pt-3">{title}</h2>
      <div>{children}</div>
    </motion.section>
  );
}

function Entry({ title, subtitle, period, current }: {
  title: string; subtitle: string; period: string; current?: boolean;
}) {
  return (
    <motion.li variants={fade}
      className="group -mx-3 rounded-md px-3 py-3 transition-colors duration-200 hover:bg-[var(--hover)]">
      <div className="flex justify-between gap-6 items-baseline">
        <span className="text-[17px] flex items-center gap-2.5">
          {title}
          {current && (
            <span className="relative flex h-[7px] w-[7px]">
              <span className="pulse absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[var(--accent)]" />
            </span>
          )}
        </span>
        <span className="text-[14px] text-[var(--faint)] tabular-nums shrink-0 group-hover:text-[var(--muted)] transition-colors">
          {period}
        </span>
      </div>
      <span className="text-[15px] text-[var(--muted)]">{subtitle}</span>
    </motion.li>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 sm:px-10 py-20 sm:py-28">
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="mx-auto max-w-[680px] flex flex-col gap-16">

        <motion.header variants={fade} className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-[40px] font-medium tracking-tight leading-none">Donghao Zeng</h1>
          <div className="flex items-center gap-5">
            {LINKS.map(({ href, Icon, label }) => (
              <a key={label} href={href} aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-200">
                <Icon className="h-[22px] w-[22px]" />
              </a>
            ))}
          </div>
        </motion.header>

        <motion.div variants={fade} className="flex flex-col gap-4 text-[17px] leading-[1.65]">
          <p>Hi, I&apos;m Donghao. I&apos;m a computer science student at{" "}
            <a className="u" href="https://www.mcgill.ca" target="_blank" rel="noopener noreferrer">McGill University</a>,
            currently working as an applied AI engineer intern at{" "}
            <a className="u" href="https://www.roche.com" target="_blank" rel="noopener noreferrer">Roche</a>.
          </p>
          <p>Before that I did LLM research at{" "}
            <a className="u" href="https://mila.quebec/en" target="_blank" rel="noopener noreferrer">Mila</a>{" "}
            and built software at a couple of startups.
          </p>
        </motion.div>

        <div className="h-px bg-[var(--line)]" />

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

      </motion.div>
    </main>
  );
}
