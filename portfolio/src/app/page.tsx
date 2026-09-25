import { EDUCATION, EXPERIENCES, SKILLS } from "@/data";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-white/50">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070B] text-white px-6 sm:px-10 py-20">
      <div className="mx-auto max-w-2xl flex flex-col gap-16">

        <h1 className="text-3xl font-bold tracking-tight">Donghao Zeng</h1>

        <Section title="Education">
          <ul className="flex flex-col gap-4">
            {EDUCATION.map((edu) => (
              <li key={edu.school} className="flex flex-col gap-0.5">
                <div className="flex justify-between gap-6 flex-wrap">
                  <span className="font-medium">{edu.school}</span>
                  <span className="text-sm font-mono text-white/55">{edu.period}</span>
                </div>
                <span className="text-sm text-white/65">{edu.degree}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Experience">
          <ul className="flex flex-col gap-8">
            {EXPERIENCES.map((exp) => (
              <li key={exp.company} className="flex flex-col gap-2">
                <div className="flex justify-between gap-6 flex-wrap">
                  <span className="font-medium">{exp.company}</span>
                  <span className="text-sm font-mono text-white/55">{exp.period}</span>
                </div>
                <span className="text-sm text-white/65">{exp.role}</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {exp.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] text-white/70 bg-white/[0.06] border border-white/[0.1]">
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skills">
          <ul className="flex flex-col gap-4">
            {SKILLS.map((skill) => (
              <li key={skill.name} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                <span className="text-sm text-white/65 sm:w-44 shrink-0">{skill.name}</span>
                <div className="flex flex-wrap gap-1.5">
                  {skill.elements.map((el) => (
                    <span key={el} className="px-2 py-0.5 rounded text-[11px] text-white/70 bg-white/[0.06] border border-white/[0.1]">
                      {el}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Section>

      </div>
    </main>
  );
}
