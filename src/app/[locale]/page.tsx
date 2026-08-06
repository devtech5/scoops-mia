import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ActivitiesGrid } from "@/components/sections/ActivitiesGrid";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { MissionVision } from "@/components/sections/MissionVision";
import { NewsPreview } from "@/components/sections/NewsPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AboutPreview />
      <ActivitiesGrid />
      <ValuesSection />
      <MissionVision />
      <NewsPreview />
      <CtaBanner />
    </>
  );
}
