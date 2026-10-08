import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[#27272A] bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section Header */}
        <div data-reveal="text" className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            03
          </span>

          <span className="h-px w-10 bg-[#27272A]" />

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717A]">
            Selected Work
          </span>
        </div>

        {/* Intro */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <h2 data-reveal="text" className="max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#FAFAFA] sm:text-5xl lg:text-6xl">
            Things I&apos;ve <span className="text-[#7C3AED]">built.</span>
          </h2>

          <p data-reveal="text" data-reveal-delay="100" className="max-w-xl self-end text-base leading-8 text-[#A1A1AA] sm:text-lg">
            A selection of web applications and digital systems I&apos;ve built
            while working with real-world problems, business processes, and
            different development needs.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              data-reveal="card"
              data-reveal-delay={String(((index % 3) + 1) * 100)}
              className="group overflow-hidden rounded-2xl border border-[#27272A] bg-[#111113] transition-all duration-300 hover:border-[#3F3F46]"
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                {/* Visual */}
                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-b border-[#27272A] bg-[#0D0D0F] lg:min-h-[420px] lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                  </div>

                  <div className="relative w-[78%] overflow-hidden rounded-xl border border-[#27272A] bg-[#111113] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Browser Header */}
                    <div className="flex items-center gap-1.5 border-b border-[#27272A] px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27272A]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27272A]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27272A]" />

                      <div className="ml-3 h-5 flex-1 rounded bg-[#09090B]" />
                    </div>

                    {/* Fake Dashboard */}
                    <div className="space-y-4 p-5">
                      <div className="h-3 w-24 rounded bg-[#27272A]" />

                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-14 rounded border border-[#27272A] bg-[#09090B]" />
                        <div className="h-14 rounded border border-[#27272A] bg-[#09090B]" />
                        <div className="h-14 rounded border border-[#27272A] bg-[#09090B]" />
                      </div>

                      <div className="h-24 rounded border border-[#27272A] bg-[#09090B]" />

                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-8 rounded bg-[#27272A]/70" />
                        <div className="h-8 rounded bg-[#27272A]/70" />
                      </div>
                    </div>
                  </div>

                  <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#52525B]">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#7C3AED]">
                          {project.category}
                        </p>

                        <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#FAFAFA] sm:text-4xl">
                          {project.title}
                        </h3>
                      </div>

                      <span className="hidden font-mono text-xs text-[#52525B] sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-[#A1A1AA] sm:text-base">
                      {project.description}
                    </p>

                    {/* Stack */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-[#27272A] bg-[#09090B] px-3 py-1.5 font-mono text-xs text-[#A1A1AA]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-10 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#FAFAFA] px-5 py-2.5 text-sm font-medium !text-[#09090B] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      View Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#27272A] px-5 py-2.5 text-sm font-medium text-[#FAFAFA] transition-colors duration-200 hover:border-[#7C3AED]/60 hover:bg-[#7C3AED]/10"
                    >
                      <GitBranch className="h-4 w-4" />
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[#27272A] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p data-reveal="text" className="font-mono text-xs uppercase tracking-[0.15em] text-[#52525B]">
            More projects coming
          </p>

          <p data-reveal="text" data-reveal-delay="100" className="text-sm text-[#71717A]">
            Building is a continuous process.
          </p>
        </div>
      </div>
    </section>
  );
}
