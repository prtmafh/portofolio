import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="border-t border-[#27272A] bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section Header */}
        <div data-reveal="text" className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            01
          </span>

          <span className="h-px w-10 bg-[#27272A]" />

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717A]">
            About
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Headline */}
          <div data-reveal="text" data-reveal-delay="100">
            <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#FAFAFA] sm:text-5xl lg:text-6xl">
              Turning ideas into{" "}
              <span className="text-[#7C3AED]">digital products.</span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-8">
              <div
                data-reveal
                data-reveal-delay="150"
                className="group relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-[#27272A] bg-[#111113] lg:mx-0"
              >
                <Image
                  src="/assets/img/FotoProfile.png"
                  alt="Afillah Ajie Pratama"
                  fill
                  sizes="(max-width: 1023px) 320px, 25vw"
                  className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/45 via-transparent to-transparent" />
              </div>

              <div>
                <p data-reveal="text" className="text-base leading-8 text-[#A1A1AA] sm:text-lg">
                  I&apos;m Afillah Ajie Pratama, a Full-Stack Developer focused
                  on building web applications and digital systems. I primarily
                  work with Laravel to build reliable backend systems, while
                  also exploring modern JavaScript technologies to create better
                  and more engaging user experiences.
                </p>

                <p data-reveal="text" data-reveal-delay="100" className="mt-6 text-base leading-8 text-[#A1A1AA] sm:text-lg">
                  As a fresh graduate who is also working and taking on
                  freelance projects, I enjoy turning real-world problems into
                  practical digital solutions. I care about clean interfaces,
                  maintainable code, and building products that are not only
                  functional, but genuinely useful.
                </p>
              </div>
            </div>

            {/* Focus */}
            <div
              className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[#27272A] bg-[#27272A] sm:grid-cols-3"
            >
              <div data-reveal="card" data-reveal-delay="100" className="bg-[#111113] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#52525B]">
                  Focus
                </p>

                <p className="mt-3 text-sm font-medium text-[#FAFAFA]">
                  Full-Stack Development
                </p>
              </div>

              <div data-reveal="card" data-reveal-delay="200" className="bg-[#111113] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#52525B]">
                  Core
                </p>

                <p className="mt-3 text-sm font-medium text-[#FAFAFA]">
                  Laravel
                </p>
              </div>

              <div data-reveal="card" data-reveal-delay="300" className="bg-[#111113] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#52525B]">
                  Exploring
                </p>

                <p className="mt-3 text-sm font-medium text-[#FAFAFA]">
                  JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 border-t border-[#27272A] pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p data-reveal="text" className="font-mono text-xs uppercase tracking-[0.15em] text-[#52525B]">
              Based in Indonesia
            </p>

            <p data-reveal="text" data-reveal-delay="100" className="max-w-md text-sm leading-6 text-[#71717A] sm:text-right">
              Always curious, always building, always looking for better ways to
              turn ideas into useful products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
