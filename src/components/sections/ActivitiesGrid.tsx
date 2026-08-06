"use client";

import { useTranslations } from "next-intl";
import {
  Sprout,
  Handshake,
  GraduationCap,
  TreeDeciduous,
  Ship,
  HandHeart,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/Reveal";
import { motion } from "framer-motion";

const icons = [Sprout, Handshake, GraduationCap, TreeDeciduous, Ship, HandHeart];

export function ActivitiesGrid() {
  const t = useTranslations("activities");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="relative bg-brand-950 py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-noise opacity-[0.06]"
      />
      <div className="container-mia relative">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
            {t("eyebrow")}
          </span>
          <h2 className="font-heading mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">{t("subtitle")}</p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerGroup>

        <Reveal className="mt-12 text-center">
          <Link
            href="/activities"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-900 transition-all hover:-translate-y-0.5"
          >
            {t("eyebrow")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
