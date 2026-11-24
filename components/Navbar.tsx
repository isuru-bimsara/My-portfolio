
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#242529]/95 backdrop-blur-lg">
      <nav className="flex w-full items-center justify-between gap-8 px-6 py-5 lg:px-12 xl:px-16">

        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="shrink-0 text-3xl font-black tracking-tight transition hover:opacity-80"
        >
          ISURU <span className="text-[#ff6748]">B.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold tracking-wide text-gray-300 transition duration-300 hover:text-[#ff6748] xl:text-base"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 border border-[#ff6748] px-6 py-3.5 text-sm font-bold tracking-widest transition duration-300 hover:bg-[#ff6748] lg:flex"
        >
          CONTACT ME
          <ArrowUpRight size={17} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="text-white transition hover:text-[#ff6748] lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/10 bg-[#242529] px-6 py-7 lg:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-fit text-lg font-semibold tracking-wide text-gray-300 transition hover:text-[#ff6748]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex w-fit items-center gap-2 border border-[#ff6748] px-6 py-3 text-sm font-bold tracking-widest text-white transition hover:bg-[#ff6748]"
            >
              CONTACT ME
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
