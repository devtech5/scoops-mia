import { getTranslations, setRequestLocale } from "next-intl/server";
import { Bean, Nut, Droplet, TreeDeciduous, Coffee, Wheat, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PlaceholderArt } from "@/components/graphics/PlaceholderArt";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/i18n/navigation";

const icons = [Bean, Nut, Droplet, TreeDeciduous, Coffee, Wheat];
const artIcons = ["sprout", "tree", "warehouse", "tractor", "heart", "ship"] as const;
const tones = ["a", "c", "b", "d", "a", "c"] as const;

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "productsPage" });
  const items = t.raw("items") as {
    name: string;
    category: string;
    description: string;
  }[];

  return (
    <>
      <PageHero eyebrow="SCOOPS MIA" title={t("hero")} subtitle={t("heroSubtitle")} />

      <section className="py-24">
        <div className="container-mia">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-3xl border border-brand-100 bg-brand-50/60 p-6 text-center">
            <ShieldCheck className="h-8 w-8 text-brand-600" />
            <h2 className="font-heading text-lg font-bold text-brand-950">
              {t("qualityTitle")}
            </h2>
            <p className="text-sm leading-relaxed text-stone-600">{t("qualityText")}</p>
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={item.name} delay={(i % 3) * 0.1}>
                  <article className="group h-full overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm shadow-stone-200/50 transition-shadow hover:shadow-lg">
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <PlaceholderArt
                        icon={artIcons[i % artIcons.length]}
                        tone={tones[i % tones.length]}
                        className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-brand-700 shadow-sm backdrop-blur">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                        {item.category}
                      </span>
                      <h3 className="font-heading mt-4 text-lg font-bold text-brand-950">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-500">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <Reveal className="container-mia">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-900 px-8 py-14 text-center sm:px-16">
            <div
              aria-hidden
              className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-14 -right-10 h-52 w-52 rounded-full bg-white/10 blur-2xl"
            />
            <h2 className="font-heading mx-auto max-w-xl text-2xl font-extrabold text-white sm:text-3xl">
              {t("orderTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/70">{t("orderText")}</p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-900 transition-all hover:-translate-y-0.5"
            >
              {t("orderCta")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
