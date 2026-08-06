import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Sprout,
  Handshake,
  GraduationCap,
  TreeDeciduous,
  Ship,
  HandHeart,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PlaceholderArt } from "@/components/graphics/PlaceholderArt";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";

const icons = [Sprout, Handshake, GraduationCap, TreeDeciduous, Ship, HandHeart];
const artIcons = ["sprout", "heart", "tractor", "tree", "ship", "warehouse"] as const;
const tones = ["a", "b", "c", "d", "a", "b"] as const;

export default async function ActivitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "activities" });
  const pageT = await getTranslations({ locale, namespace: "activitiesPage" });
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={pageT("hero")}
        subtitle={pageT("heroSubtitle")}
      />

      <section className="py-24">
        <div className="container-mia space-y-14">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="overflow-hidden rounded-[2rem] shadow-lg">
                  <PlaceholderArt
                    icon={artIcons[i % artIcons.length]}
                    tone={tones[i % tones.length]}
                    className="aspect-[16/10] w-full"
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="font-heading mt-5 text-2xl font-extrabold text-brand-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-md leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-50 py-20">
        <Reveal className="container-mia max-w-2xl">
          <h2 className="font-heading text-2xl font-extrabold text-brand-950 sm:text-3xl">
            {pageT("closingTitle")}
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">{pageT("closingText")}</p>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
