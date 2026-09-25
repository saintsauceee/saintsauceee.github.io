import { EDUCATION, EXPERIENCES } from "@/data";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-[family-name:var(--font-serif)] italic text-[22px] text-[var(--faint)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Entry({ title, subtitle, period, note }: {
  title: string; subtitle: string; period: string; note?: string;
}) {
  return (
    <li className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-8 py-5 first:pt-0 last:pb-0">
      <span className="text-[13px] text-[var(--faint)] tabular-nums pt-[3px]">{period}</span>
      <div className="flex flex-col gap-1">
        <span className="text-[16px] text-[var(--fg)]">{title}</span>
        <span className="text-[15px] text-[var(--muted)]">{subtitle}</span>
        {note && <span className="text-[13px] text-[var(--faint)] mt-1 leading-relaxed">{note}</span>}
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 sm:px-10 py-28 sm:py-40">
      <div className="mx-auto max-w-xl flex flex-col gap-20">

        <header className="flex flex-col gap-2">
          <h1 className="font-[family-name:var(--font-serif)] text-[44px] leading-none tracking-[-0.01em]">
            Donghao Zeng
          </h1>
          <p className="text-[15px] text-[var(--muted)]">Computer Science at McGill University, Montreal</p>
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
