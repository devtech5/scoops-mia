import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-noise opacity-[0.06]"
      />
      <div
        aria-hidden
        className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl"
      />
      <div className="container-mia relative">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
          {eyebrow}
        </span>
        <h1 className="font-heading mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-white/65 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
