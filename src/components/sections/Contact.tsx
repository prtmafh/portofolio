import { ArrowUpRight } from "lucide-react";
import { siGithub, siInstagram, siWhatsapp } from "simple-icons";

export default function Contact() {
  const socialLinks = [
    {
      label: "WhatsApp",
      value: "0853 2984 3959",
      href: "https://wa.me/6285329843959",
      iconPath: siWhatsapp.path,
    },
    {
      label: "Instagram",
      value: "@prtmafh",
      href: "https://www.instagram.com/prtmafh",
      iconPath: siInstagram.path,
    },
    {
      label: "LinkedIn",
      value: "Afillah Ajie Pratama",
      href: "https://www.linkedin.com/in/afillah-ajie-pratama-03b3b5220?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      iconPath: null,
    },
    {
      label: "GitHub",
      value: "github.com/prtmafh",
      href: "https://github.com/prtmafh",
      iconPath: siGithub.path,
    },
  ];

  return (
    <section id="contact" className="border-t border-[#27272A] bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div data-reveal="text" className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
            05
          </span>
          <span className="h-px w-10 bg-[#27272A]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717A]">
            Contact
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24">
          <div>
            <h2 data-reveal="text" className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#FAFAFA] sm:text-5xl lg:text-7xl">
              Have an idea?{" "}
              <span className="text-[#7C3AED]">Let&apos;s build it.</span>
            </h2>
            <p data-reveal="text" data-reveal-delay="100" className="mt-6 max-w-xl text-base leading-8 text-[#A1A1AA] sm:text-lg">
              Interested in working together or have a project in mind? Send me
              a message on WhatsApp or connect with me on social media.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:items-start">
            <ul className="grid w-full gap-3 sm:grid-cols-2">
              {socialLinks.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    data-reveal="card"
                    data-reveal-delay={String(((index % 3) + 1) * 100)}
                    className="group flex h-full min-w-0 flex-col rounded-xl border border-[#27272A] bg-[#111113] p-5 transition-colors hover:border-[#7C3AED]/60"
                  >
                    <span className="mb-5 flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#27272A] bg-[#09090B] text-[#FAFAFA]">
                        {link.iconPath ? (
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d={link.iconPath} />
                          </svg>
                        ) : (
                          <span
                            aria-hidden="true"
                            className="font-sans text-lg font-bold tracking-tight"
                          >
                            in
                          </span>
                        )}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 text-[#71717A] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7C3AED]"
                      />
                    </span>
                    <span className="text-xs text-[#71717A]">{link.label}</span>
                    <span className="mt-1 truncate text-sm text-[#FAFAFA]">
                      {link.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              data-reveal="text"
              data-reveal-delay="200"
              href="#projects"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#27272A] px-6 py-3 text-sm font-medium text-[#FAFAFA] transition-colors duration-200 hover:border-[#7C3AED]/60 hover:bg-[#7C3AED]/10"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
