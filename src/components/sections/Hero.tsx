"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Leaf, Sprout } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PlaceholderArt } from "@/components/graphics/PlaceholderArt";
import { Counter } from "@/components/motion/Counter";

export function Hero() {
  const t = useTranslations("hero");
  const stats = useTranslations("stats");
  const words = t.raw("words") as string[];
  const statItems = stats.raw("items") as { value: string; label: string }[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section className="relative overflow-hidden pt-14 pb-24 lg:pt-20">
      <div
        aria-hidden
        className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-earth-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-noise opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="container-mia relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm backdrop-blur"
          >
            <Leaf className="h-3.5 w-3.5" />
            {t("eyebrow")}
          </motion.div>

          <h1 className="font-heading mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-950 sm:text-5xl lg:text-6xl">
            <span className="relative inline-flex h-[1.15em] w-full overflow-hidden align-top sm:h-[1.1em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 text-gradient-brand"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block">{t("titleSuffix")}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-600/25 transition-all hover:bg-brand-700 hover:-translate-y-0.5"
            >
              {t("cta1")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-200 bg-white px-6 py-3.5 text-sm font-bold text-brand-800 transition-all hover:border-brand-400 hover:-translate-y-0.5"
            >
              {t("cta2")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-brand-100 pt-8 sm:grid-cols-4"
          >
            {statItems.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-extrabold text-brand-800 sm:text-3xl">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-1 text-xs font-medium leading-snug text-stone-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-900/20">
            <PlaceholderArt icon="tractor" tone="a" className="h-full w-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 pr-6 shadow-xl sm:-left-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <Sprout className="h-6 w-6" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-brand-900">
                {t("badge")}
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-4 hidden h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl sm:flex"
          >
            <Leaf className="h-10 w-10 text-brand-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
