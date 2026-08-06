"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Award, HeartHandshake, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/Reveal";

const icons = [ShieldCheck, Award, HeartHandshake, Lightbulb];

export function ValuesSection() {
  const t = useTranslations("values");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="relative py-24">
      <div className="container-mia">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            {t("eyebrow")}
          </span>
          <h2 className="font-heading mt-3 text-3xl font-extrabold leading-tight text-brand-950 sm:text-4xl">
            {t("title")}
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-stone-100 bg-white p-7 shadow-sm shadow-stone-200/50 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading mt-5 text-lg font-bold text-brand-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
