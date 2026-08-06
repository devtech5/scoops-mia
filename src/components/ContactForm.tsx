"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contactPage");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

  return (
    <div className="rounded-[2rem] border border-stone-100 bg-white p-8 shadow-sm sm:p-10">
      <h2 className="font-heading text-2xl font-extrabold text-brand-950">
        {t("formTitle")}
      </h2>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-brand-50 py-14 text-center"
          >
            <CheckCircle2 className="h-12 w-12 text-brand-600" />
            <p className="font-heading font-bold text-brand-900">Merci !</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-stone-500">
                  {t("name")}
                </label>
                <input required className={inputClass} type="text" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-stone-500">
                  {t("email")}
                </label>
                <input required className={inputClass} type="email" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-stone-500">
                  {t("phone")}
                </label>
                <input className={inputClass} type="tel" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-stone-500">
                  {t("subject")}
                </label>
                <input className={inputClass} type="text" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-stone-500">
                {t("message")}
              </label>
              <textarea required rows={5} className={inputClass} />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:-translate-y-0.5"
            >
              {t("send")}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
