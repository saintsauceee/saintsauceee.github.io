import { EDUCATION, EXPERIENCES } from "@/data";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-10">
      <h2 className="text-[13px] font-medium text-[var(--faint)] tracking-wide pt-0.5">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 sm:px-10 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl flex flex-col gap-20">

        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Donghao Zeng</h1>
          <p className="text-[15px] text-[var(--muted)]">Computer Science, McGill University</p>
        </header>

        <Section title="Education">
          <ul className="flex flex-col divide-y divide-[var(--line)]">
            {EDUCATION.map((edu) => (
              <li key={edu.school} className="py-4 first:pt-0 last:pb-0 flex flex-col gap-0.5">
                <div className="flex justify-between gap-6 flex-wrap items-baseline">
                  <span className="text-[15px] font-medium">{edu.school}</span>
                  <span className="text-[13px] text-[var(--faint)] tabular-nums">{edu.period}</span>
                </div>
                <span className="text-[14px] text-[var(--muted)]">{edu.degree}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Experience">
          <ul className="flex flex-col divide-y divide-[var(--line)]">
            {EXPERIENCES.map((exp) => (
              <li key={exp.company} className="py-5 first:pt-0 last:pb-0 flex flex-col gap-1">
                <div className="flex justify-between gap-6 flex-wrap items-baseline">
                  <span className="text-[15px] font-medium">{exp.company}</span>
                  <span className="text-[13px] text-[var(--faint)] tabular-nums">{exp.period}</span>
                </div>
                <span className="text-[14px] text-[var(--muted)]">{exp.role}</span>
                <p className="text-[13px] text-[var(--faint)] mt-1.5">
                  {exp.technologies.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </Section>

      </div>
    </main>
  );
}
