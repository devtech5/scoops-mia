import { useTranslations } from "next-intl";
import { ArrowUpRight, Leaf } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBanner() {
  const t = useTranslations("cta");

  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <Reveal className="container-mia">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-900 px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-14 -right-10 h-52 w-52 rounded-full bg-white/10 blur-2xl"
          />
          <Leaf className="mx-auto h-10 w-10 text-brand-200" />
          <h2 className="font-heading mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">{t("subtitle")}</p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-900 transition-all hover:-translate-y-0.5"
          >
            {t("button")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
