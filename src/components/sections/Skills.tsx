const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces that feel clean, responsive, and intuitive.",
    skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Reliable applications and systems built around real needs.",
    skills: ["Laravel", "PHP", "Node.js"],
  },
  {
    number: "03",
    title: "Database",
    description: "Structured data and persistence for scalable applications.",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    number: "04",
    title: "Tools",
    description: "Tools that support a practical and efficient workflow.",
    skills: ["Git", "GitHub", "Docker", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[#27272A] bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section Header */}
        <div data-reveal="text" className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            02
          </span>

          <span className="h-px w-10 bg-[#27272A]" />

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717A]">
            Tech Stack
          </span>
        </div>

        {/* Intro */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <h2 data-reveal="text" className="max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#FAFAFA] sm:text-5xl lg:text-6xl">
            Tools I use to <span className="text-[#7C3AED]">build things.</span>
          </h2>

          <p data-reveal="text" data-reveal-delay="100" className="max-w-xl self-end text-base leading-8 text-[#A1A1AA] sm:text-lg">
            My stack is shaped by the kind of problems I need to solve. I
            primarily work with Laravel on the backend and use modern JavaScript
            technologies to build interfaces and complete digital products.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#27272A] bg-[#27272A] md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              data-reveal="card"
              data-reveal-delay={String(((Number(group.number) - 1) % 3 + 1) * 100)}
              className="group bg-[#111113] p-6 transition-colors duration-300 hover:bg-[#151517] sm:p-8 lg:p-10"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.15em] text-[#7C3AED]">
                    {group.number}
                  </p>

                  <h3 className="mt-3 text-xl font-medium tracking-tight text-[#FAFAFA]">
                    {group.title}
                  </h3>
                </div>

                <span className="font-mono text-xs text-[#52525B]">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-sm text-sm leading-6 text-[#71717A]">
                {group.description}
              </p>

              {/* Skills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#27272A] bg-[#09090B] px-3 py-1.5 font-mono text-xs text-[#A1A1AA] transition-colors duration-200 group-hover:border-[#3F3F46]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#27272A] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p data-reveal="text" className="font-mono text-xs uppercase tracking-[0.15em] text-[#52525B]">
            Always learning
          </p>

          <p data-reveal="text" data-reveal-delay="100" className="text-sm text-[#71717A]">
            Technology is a tool. The problem comes first.
          </p>
        </div>
      </div>
    </section>
  );
}
