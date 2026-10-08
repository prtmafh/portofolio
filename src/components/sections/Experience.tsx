const journey = [
  {
    number: "01",
    period: "Recent graduate",
    title: "Education & Early Career",
    description:
      "A recent graduate building a career in software development and continuing to grow through hands-on work.",
  },
  {
    number: "02",
    period: "Ongoing",
    title: "Freelance & Project Work",
    description:
      "Working on freelance projects and building practical web applications, with a focus on backend systems using Laravel.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[#27272A] bg-[#09090B]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div data-reveal="text" className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            04
          </span>
          <span className="h-px w-10 bg-[#27272A]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717A]">
            Journey
          </span>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <h2 data-reveal="text" className="max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#FAFAFA] sm:text-5xl lg:text-6xl">
            Learning by{" "}
            <span className="text-[#7C3AED]">building.</span>
          </h2>
          <p data-reveal="text" data-reveal-delay="100" className="max-w-xl self-end text-base leading-8 text-[#A1A1AA] sm:text-lg">
            My journey combines a recent graduation with hands-on freelance
            work, learning through the process of turning real needs into
            useful software.
          </p>
        </div>

        <ol className="border-l border-[#27272A]">
          {journey.map((item) => (
            <li
              key={item.number}
              data-reveal="card"
              data-reveal-delay={item.number === "01" ? "100" : "200"}
              className="relative grid gap-4 pb-12 pl-8 last:pb-0 sm:grid-cols-[0.7fr_1.3fr] sm:gap-8 sm:pl-10"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-[#7C3AED] bg-[#09090B]"
              />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#7C3AED]">
                  {item.period}
                </p>
                <p className="mt-2 font-mono text-xs text-[#52525B]">
                  {item.number}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-[#FAFAFA] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#A1A1AA] sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
