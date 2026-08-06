import { getTranslations, setRequestLocale } from "next-intl/server";
import { Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PlaceholderArt } from "@/components/graphics/PlaceholderArt";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";

const tones = ["a", "c", "d"] as const;
const icons = ["sprout", "heart", "ship"] as const;

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "news" });
  const pageT = await getTranslations({ locale, namespace: "newsPage" });
  const items = t.raw("items") as {
    category: string;
    date: string;
    title: string;
    excerpt: string;
  }[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={pageT("hero")} subtitle={pageT("heroSubtitle")} />

      <section className="py-24">
        <div className="container-mia grid gap-8 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.1}>
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
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
