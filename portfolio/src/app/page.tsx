import { EDUCATION, EXPERIENCES } from "@/data";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-[13px] font-medium text-[var(--faint)]">{title}</h2>
      {children}
    </section>
  );
}

function Entry({ title, subtitle, period, note }: {
  title: string; subtitle: string; period: string; note?: string;
}) {
  return (
    <li className="py-4 first:pt-0 last:pb-0 flex flex-col gap-0.5">
      <div className="flex justify-between gap-6 items-baseline">
        <span className="text-[15px] font-medium">{title}</span>
        <span className="text-[13px] text-[var(--faint)] tabular-nums shrink-0">{period}</span>
      </div>
      <span className="text-[14px] text-[var(--muted)]">{subtitle}</span>
      {note && <span className="text-[13px] text-[var(--faint)] mt-1.5 leading-relaxed">{note}</span>}
    </li>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 sm:px-10 py-24 sm:py-36">
      <div className="mx-auto max-w-lg flex flex-col gap-16">

        <header className="flex flex-col gap-1">
          <h1 className="text-[22px] font-semibold tracking-tight">Donghao Zeng</h1>
          <p className="text-[14px] text-[var(--muted)]">Computer Science at McGill University</p>
        </header>

        <Section title="Education">
          <ul className="flex flex-col divide-y divide-[var(--line)]">
            {EDUCATION.map((edu) => (
              <Entry key={edu.school} title={edu.school} subtitle={edu.degree} period={edu.period} />
            ))}
          </ul>
        </Section>

        <Section title="Experience">
          <ul className="flex flex-col divide-y divide-[var(--line)]">
            {EXPERIENCES.map((exp) => (
              <Entry key={exp.company} title={exp.company} subtitle={exp.role}
                period={exp.period} note={exp.technologies.join(", ")} />
            ))}
          </ul>
        </Section>

      </div>
    </main>
  );
}
