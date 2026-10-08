import Link from "next/link";
import { GitBranch } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            data-reveal="text"
            href="/"
            aria-label="Afillah Ajie Pratama, home"
            className="w-fit font-mono text-lg font-semibold tracking-tight text-[#FAFAFA]"
          >
            AJP<span className="text-[#7C3AED]">.</span>
          </Link>

          <nav data-reveal="text" data-reveal-delay="100" aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/prtmafh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]"
            >
              <GitBranch aria-hidden="true" className="h-4 w-4" />
              GitHub
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#27272A] pt-6 text-xs text-[#71717A] sm:flex-row sm:items-center sm:justify-between">
          <p data-reveal="text">&copy; {new Date().getFullYear()} Afillah Ajie Pratama.</p>
          <p data-reveal="text" data-reveal-delay="100">Designed &amp; built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
