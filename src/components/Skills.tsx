"use client";

import { useState } from "react";
import { skillGroups } from "@/content";

const ALL = "Todas";

export function Skills() {
  const [active, setActive] = useState(ALL);
  const groups = active === ALL ? skillGroups : skillGroups.filter((g) => g.name === active);
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);
  const shown = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {[ALL, ...skillGroups.map((g) => g.name)].map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setActive(name)}
            aria-pressed={active === name}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              active === name
                ? "border-accent bg-accent text-bg"
                : "border-line text-muted hover:border-muted hover:text-text"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.name} className="rounded-2xl border border-line bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">{g.name}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-muted">
        {shown} / {total}
      </p>
    </div>
  );
}
