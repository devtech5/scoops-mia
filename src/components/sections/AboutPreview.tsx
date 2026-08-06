import { useTranslations } from "next-intl";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PlaceholderArt } from "@/components/graphics/PlaceholderArt";
import { Reveal } from "@/components/motion/Reveal";

export function AboutPreview() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section className="relative py-24">
      <div className="container-mia grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="relative grid grid-cols-5 grid-rows-5 gap-4">
            <div className="col-span-3 row-span-4 overflow-hidden rounded-[2rem] shadow-xl">
              <PlaceholderArt icon="sprout" tone="a" className="h-full w-full min-h-[280px]" />
            </div>
            <div className="col-span-2 row-span-3 col-start-4 overflow-hidden rounded-[2rem] shadow-xl">
              <PlaceholderArt icon="team" tone="c" className="h-full w-full min-h-[180px]" />
            </div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-4 overflow-hidden rounded-[2rem] shadow-xl">
              <PlaceholderArt icon="tree" tone="b" className="h-full w-full min-h-[120px]" />
            </div>
            <div className="col-span-3 row-span-1 col-start-1 row-start-5 flex items-center rounded-2xl bg-brand-900 px-5 text-white">
              <p className="font-heading text-sm font-bold">{t("experienceBadge")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            {t("eyebrow")}
          </span>
          <h2 className="font-heading mt-3 text-3xl font-extrabold leading-tight text-brand-950 sm:text-4xl">
            {t("title")}
          </h2>
          <div className="mt-5 space-y-4 text-stone-600 leading-relaxed">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <p className="font-heading font-bold text-brand-900">
                  {t("highlightTitle")}
                </p>
                <p className="mt-1 text-sm text-stone-600">{t("highlightText")}</p>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-brand-800 hover:-translate-y-0.5"
          >
            {t("cta")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
