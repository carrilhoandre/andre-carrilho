import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills";
import {
  about, ai, cases, certifications, education, employers, focusAreas, jobs,
  marquee, paymentFlow, profile, stats,
} from "@/content";

function SectionTitle({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-accent">{index}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </div>
  );
}

function PaymentFlow() {
  return (
    <div className="relative min-w-0 rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur sm:p-6">
      <div className="flex items-center justify-between font-mono text-xs text-muted">
        <span>fluxo de pagamento</span>
        <span className="text-accent">● online</span>
      </div>

      <ol className="relative mt-5 space-y-3 pl-8">
        <span aria-hidden className="absolute left-[11px] top-2 bottom-2 w-px bg-line" />
        <span
          aria-hidden
          className="packet absolute left-[7px] size-[9px] rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"
        />
        {paymentFlow.map((step, i) => (
          <li key={step.title} className="relative">
            <span className="absolute -left-8 top-2.5 grid size-[23px] place-items-center rounded-full border border-line bg-bg font-mono text-[10px] text-muted">
              {i + 1}
            </span>
            <div className="flex items-baseline justify-between gap-3 rounded-lg border border-line bg-surface-2 px-3.5 py-2.5">
              <span className="text-sm font-medium">{step.title}</span>
              <span className="truncate font-mono text-[11px] text-muted">{step.detail}</span>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 space-y-1 border-t border-line pt-4 font-mono text-[11px] text-muted">
        <p><span className="text-accent">✓</span> aprovação · maximizada</p>
        <p><span className="text-accent">✓</span> chargeback · prevenido</p>
        <p><span className="text-accent">✓</span> operação · sem parar</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-40" />
      <div aria-hidden className="absolute -top-40 left-1/3 -z-10 size-[520px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="pulse-dot size-2 rounded-full bg-accent" />
            {profile.status}
          </p>

          <p className="mt-6 font-display text-xl font-semibold text-accent sm:text-2xl">{profile.name}</p>

          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.summary}</p>

          <ul className="mt-6 flex max-w-xl flex-wrap gap-2">
            {profile.highlights.map((h) => (
              <li key={h} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-text/80">
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contato" className="rounded-lg bg-accent px-5 py-2.5 font-medium text-bg transition hover:brightness-110">
              Falar comigo
            </a>
            <a href="#cases" className="rounded-lg border border-line px-5 py-2.5 font-medium transition hover:border-muted">
              Ver cases ↓
            </a>
            {profile.cv && (
              <a href={profile.cv} download className="rounded-lg border border-line px-5 py-2.5 font-medium transition hover:border-muted">
                Baixar CV
              </a>
            )}
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Portrait />
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] md:mx-0 md:justify-self-end">
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/15 blur-3xl" />
      <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2rem] border border-line" />
      <div className="group relative aspect-square overflow-hidden rounded-3xl border border-line bg-surface">
        {profile.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            className="size-full object-cover grayscale contrast-110 transition duration-500 group-hover:grayscale-0"
          />
        ) : (
          <span className="grid size-full place-items-center font-display text-7xl font-semibold text-accent">
            {profile.initials}
          </span>
        )}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
        <span className="absolute bottom-3 right-3 rounded-full border border-line bg-bg/70 px-3 py-1 font-mono text-[11px] text-muted backdrop-blur">
          <span className="pulse-dot mr-1.5 inline-block size-1.5 rounded-full bg-accent align-middle" />
          {profile.location.split(",")[1]?.trim() ?? profile.location} · GMT-3
        </span>
      </div>
    </div>
  );
}

function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <section aria-label="Empresas e tecnologias" className="border-y border-line bg-surface/50 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Empresas por onde passei</p>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium text-text/80">
          {employers.map((e) => <li key={e}>{e}</li>)}
        </ul>
      </div>
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee flex w-max gap-3">
          {items.map((t, i) => (
            <li key={i} className="rounded-md border border-line px-3 py-1 font-mono text-xs text-muted">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section id="cases" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionTitle index="01" title="Cases" subtitle="Problemas reais, abordagem e resultado." />
      <div className="grid gap-5 md:grid-cols-2">
        {cases.map((c, i) => (
          <article key={c.title} className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-accent">{String(i + 1).padStart(2, "0")} · {c.tag}</span>
              <span className="text-muted">{c.context}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
            <dl className="mt-5 space-y-4 text-sm leading-relaxed">
              {([["Problema", c.problem], ["Abordagem", c.approach], ["Resultado", c.result]] as const).map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">{k}</dt>
                  <dd className="mt-1 text-text/90">{v}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {c.stack.map((s) => (
                <li key={s} className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionTitle index="02" title="Sobre" />
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-text/90">
            {about.map((p) => <p key={p}>{p}</p>)}
            <ul className="space-y-1 pt-2 font-mono text-sm text-muted">
              <li>◎ {profile.location}</li>
              <li>◎ {profile.languages}</li>
            </ul>
          </div>
          <PaymentFlow />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((f, i) => (
            <div key={f.title} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-xs text-accent">{String(i).padStart(2, "0")}</p>
              <h3 className="mt-1 font-display font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{ai.title}</p>
          <p className="mt-3 font-display text-xl font-semibold sm:text-2xl">{ai.lead}</p>
          <ul className="mt-5 grid gap-3 text-sm text-text/90 sm:grid-cols-3">
            {ai.items.map((it) => (
              <li key={it} className="rounded-lg border border-line bg-bg/60 p-4">{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="trajetoria" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionTitle index="04" title="Trajetória" />
      <ol className="relative space-y-3 border-l border-line pl-6">
        {jobs.map((j, i) => (
          <li key={j.period + j.company} className="relative">
            <span className={`absolute -left-[29px] top-6 size-2.5 rounded-full ${i === 0 ? "bg-accent" : "bg-line"}`} />
            <details open={i === 0} className="group rounded-xl border border-line bg-surface p-5 open:border-accent/40">
              <summary className="flex cursor-pointer flex-wrap items-baseline justify-between gap-2">
                <span>
                  <span className="font-display font-semibold">{j.role}</span>
                  <span className="block text-sm text-muted sm:inline sm:before:content-['_·_']">{j.company}</span>
                </span>
                <span className="flex items-center gap-3 font-mono text-xs text-muted">
                  {j.period}
                  <span className="chev transition-transform">↓</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-text/90">{j.text}</p>
              {j.stack && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {j.stack.map((s) => (
                    <li key={s} className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">{s}</li>
                  ))}
                </ul>
              )}
            </details>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Formação</p>
          <ul className="mt-4 space-y-3 text-sm">
            {education.map((e) => (
              <li key={e.title}>
                <p className="font-medium">{e.title}</p>
                <p className="text-muted">{e.school} · {e.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Certificações</p>
          <ul className="mt-4 space-y-3 text-sm">
            {certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
    profile.linkedin && { label: "LinkedIn", value: `${profile.shortName} ↗`, href: profile.linkedin },
    profile.github && { label: "GitHub", value: profile.github.replace(/^https?:\/\/(www\.)?/, ""), href: profile.github },
  ].filter(Boolean) as { label: string; value: string; href: string }[];

  return (
    <section id="contato" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionTitle index="05" title="Vamos conversar?" subtitle="Aberto a oportunidades de liderança técnica e arquitetura, especialmente em pagamentos, fintech e e-commerce." />
        <ul className="grid gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="block rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{l.label}</p>
                <p className="mt-2 truncate font-medium">{l.value}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Cases />
        <About />
        <section id="habilidades" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionTitle index="03" title="Habilidades" subtitle="Filtre por área." />
          <Skills />
        </section>
        <Experience />
        <Contact />
      </main>
    </>
  );
}
