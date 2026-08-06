import { getTranslations, setRequestLocale } from "next-intl/server";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PlaceholderArt } from "@/components/graphics/PlaceholderArt";
import { Reveal } from "@/components/motion/Reveal";
import { MissionVision } from "@/components/sections/MissionVision";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "aboutPage" });
  const engagementItems = t.raw("engagementItems") as {
    title: string;
    description: string;
  }[];

  return (
    <>
      <PageHero eyebrow="SCOOPS MIA" title={t("hero")} subtitle={t("heroSubtitle")} />

      <section className="py-24">
        <div className="container-mia grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="overflow-hidden rounded-[2.5rem] shadow-xl">
            <PlaceholderArt icon="tree" tone="a" className="aspect-[4/3] w-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl font-extrabold text-brand-950">
              {t("historyTitle")}
            </h2>
            <p className="mt-5 text-stone-600 leading-relaxed">{t("historyText")}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-50 py-24">
        <div className="container-mia grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <Quote className="h-10 w-10 text-brand-300" />
            <h2 className="font-heading mt-4 text-2xl font-extrabold text-brand-950">
              {t("gerantTitle")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              &ldquo;{t("gerantText")}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-heading font-bold text-brand-900">{t("gerantName")}</p>
              <p className="text-sm text-stone-500">{t("gerantRole")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 overflow-hidden rounded-[2.5rem] shadow-xl lg:order-2">
            <PlaceholderArt icon="team" tone="c" className="aspect-[4/3] w-full" />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-mia">
          <Reveal className="max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold text-brand-950">
              {t("engagementTitle")}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {engagementItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-3xl border border-stone-100 bg-white p-7 shadow-sm">
                  <span className="font-heading text-3xl font-extrabold text-brand-200">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading mt-3 text-lg font-bold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MissionVision />
      <ValuesSection />
      <CtaBanner />
    </>
  );
}
