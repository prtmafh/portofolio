import DeveloperTerminal from "@/components/sections/DeveloperTerminal";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="hero-intro">
          <p className="hero-text-reveal mb-6 font-mono text-sm tracking-wide text-[#A1A1AA]">
            AJP. / SOFTWARE DEVELOPER
          </p>

          <h1 className="hero-text-reveal max-w-4xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="hero-title-line">
              <span className="hero-title-float">Building digital experiences</span>
            </span>
            {" "}
            <span className="hero-title-line">
              <span className="hero-title-float hero-title-float-delayed">
                with <span className="hero-title-accent">code</span> &amp; creativity.
              </span>
            </span>
          </h1>

          <p className="hero-text-reveal mt-8 max-w-2xl text-base leading-7 text-[#A1A1AA] sm:text-lg">
            I design and build modern digital products with a focus on clean
            interfaces, reliable systems, and meaningful user experiences.
          </p>

          <div className="hero-text-reveal mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-[#FAFAFA] px-6 py-3 text-sm font-medium !text-[#09090B] transition-transform duration-200 hover:-translate-y-0.5"
            >
              View My Work
              <span className="ml-2">↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-[#27272A] px-6 py-3 text-sm font-medium text-[#FAFAFA] transition-colors duration-200 hover:border-[#7C3AED]"
            >
              Let&apos;s Talk
            </a>
          </div>

          <div className="hero-text-reveal mt-12 flex items-center gap-3 text-sm text-[#A1A1AA]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for opportunities
          </div>
        </div>

        <div data-reveal data-reveal-delay="200">
        {/* <div data-reveal data-reveal-delay="200" className="hidden lg:block"> */}
          <div className="overflow-hidden rounded-2xl border border-[#27272A] bg-[#111113] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-[#27272A] px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-[#27272A]" />
              <span className="h-3 w-3 rounded-full bg-[#27272A]" />
              <span className="h-3 w-3 rounded-full bg-[#27272A]" />

              <span className="ml-auto font-mono text-xs text-[#52525B]">
                terminal
              </span>
            </div>

            <DeveloperTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
