"use client";

import { useState } from "react";
import { nav, profile } from "@/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.initials}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menu"
          className="grid size-10 place-items-center rounded-lg border border-line md:hidden"
        >
          <span className="font-mono text-sm">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-bg px-4 py-3 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-muted hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
