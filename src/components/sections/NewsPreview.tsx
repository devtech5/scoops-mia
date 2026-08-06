import { useTranslations } from "next-intl";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderArt } from "@/components/graphics/PlaceholderArt";

const tones = ["a", "c", "d"] as const;
const icons = ["sprout", "heart", "ship"] as const;

export function NewsPreview() {
  const t = useTranslations("news");
  const items = t.raw("items") as {
    category: string;
    date: string;
    title: string;
    excerpt: string;
  }[];

  return (
    <section className="py-24">
      <div className="container-mia">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              {t("eyebrow")}
            </span>
            <h2 className="font-heading mt-3 text-3xl font-extrabold leading-tight text-brand-950 sm:text-4xl">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/news"
            className="group hidden items-center gap-2 rounded-full border-2 border-brand-200 px-5 py-3 text-sm font-bold text-brand-800 transition-colors hover:border-brand-400 sm:inline-flex"
          >
            {t("cta")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="group h-full overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm shadow-stone-200/50 transition-shadow hover:shadow-lg">
                <div className="aspect-[16/10] overflow-hidden">
                  <PlaceholderArt
                    icon={icons[i % icons.length]}
                    tone={tones[i % tones.length]}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold text-brand-600">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-stone-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-heading mt-4 text-lg font-bold leading-snug text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                    {t("readMore")}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
