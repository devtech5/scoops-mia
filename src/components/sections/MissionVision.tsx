import { useTranslations } from "next-intl";
import { Compass, Target } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderArt } from "@/components/graphics/PlaceholderArt";

export function MissionVision() {
  const t = useTranslations("mission");

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-mia grid gap-6 lg:grid-cols-2">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-12">
          <PlaceholderArt icon="ship" tone="b" className="absolute inset-0" />
          <div className="absolute inset-0 bg-brand-950/40" />
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="font-heading mt-6 text-2xl font-extrabold text-white">
              {t("visionTitle")}
            </h3>
            <p className="mt-3 max-w-md text-white/80 leading-relaxed">
              {t("visionText")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative overflow-hidden rounded-[2.5rem] bg-brand-50 p-10 sm:p-12">
          <div
            aria-hidden
            className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand-200/60 blur-2xl"
          />
          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              {t("eyebrow")}
            </span>
            <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-heading mt-6 text-2xl font-extrabold text-brand-950">
              {t("missionTitle")}
            </h3>
            <p className="mt-3 max-w-md text-stone-600 leading-relaxed">
              {t("missionText")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
