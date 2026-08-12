import { getTranslations, setRequestLocale } from "next-intl/server";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderArt } from "@/components/graphics/PlaceholderArt";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "contactPage" });

  const infoItems = [
    { icon: Phone, label: t("phoneLabel"), value: "+225 0700387372" },
    { icon: Mail, label: t("emailLabel"), value: "info@scoops-mia.com" },
    { icon: MapPin, label: t("addressLabel"), value: t("addressValue") },
    { icon: Clock, label: t("hoursLabel"), value: t("hoursValue") },
  ];

  return (
    <>
      <PageHero eyebrow="SCOOPS MIA" title={t("hero")} subtitle={t("heroSubtitle")} />

      <section className="py-24">
        <div className="container-mia grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] shadow-lg">
              <PlaceholderArt icon="warehouse" tone="d" className="aspect-[4/3] w-full" />
            </div>
            <div className="rounded-[2rem] border border-stone-100 bg-white p-7 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-950">
                {t("infoTitle")}
              </h3>
              <ul className="mt-5 space-y-4">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold text-stone-400">
                        {item.label}
                      </span>
                      <span className="block text-sm font-medium text-stone-700">
                        {item.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
