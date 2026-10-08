"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const activationLine = window.scrollY + window.innerHeight * 0.35;
      const currentSection = navItems
        .map((item) => ({
          href: item.href,
          section: document.getElementById(item.href.slice(1)),
        }))
        .filter(
          (item): item is { href: string; section: HTMLElement } =>
            item.section instanceof HTMLElement,
        )
        .filter((item) => item.section.offsetTop <= activationLine)
        .at(-1);

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActiveHref(navItems.at(-1)?.href ?? null);
      } else {
        setActiveHref(currentSection?.href ?? null);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigateTo = (href: string) => {
    setActiveHref(href);
    closeMenu();
  };

  const desktopLinkClass = (href: string) =>
    `relative py-2 text-sm transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-[#7C3AED] after:transition-transform ${
      activeHref === href
        ? "text-[#FAFAFA] after:scale-x-100"
        : "text-[#A1A1AA] after:scale-x-0 hover:text-[#FAFAFA] hover:after:scale-x-100"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#27272A]/80 bg-[#09090B]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-2"
          aria-label="Afillah Ajie Pratama - Home"
        >
          <span className="font-mono text-lg font-semibold tracking-tight text-[#FAFAFA]">
            AJP
            <span className="text-[#7C3AED]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => navigateTo(item.href)}
              aria-current={activeHref === item.href ? "location" : undefined}
              className={desktopLinkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden rounded-full border border-[#27272A] bg-[#111113] px-5 py-2.5 text-sm font-medium text-[#FAFAFA] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 md:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#27272A] bg-[#111113] text-[#FAFAFA] transition-colors hover:border-[#7C3AED]/50 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#27272A]/80 bg-[#09090B]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => navigateTo(item.href)}
              aria-current={activeHref === item.href ? "location" : undefined}
              className={`border-b border-[#27272A]/60 py-4 text-sm transition-colors ${
                activeHref === item.href
                  ? "text-[#C4B5FD]"
                  : "text-[#A1A1AA] hover:text-[#FAFAFA]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={closeMenu}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[#FAFAFA] px-5 py-3 text-sm font-medium !text-[#09090B] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
